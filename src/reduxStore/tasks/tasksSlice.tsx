import { createAsyncThunk, createEntityAdapter, createSelector, createSlice, PayloadAction, Update } from "@reduxjs/toolkit"
import { RootState } from "../store";
import { addTask, deleteTasksFromListCL, getList, getTask, removeMultipleUsersFromTask, updateMutliTasksCL, updateTaskCL } from "../../customLogic/CustomLogic";
import { list, selectListById } from "../lists/listsSlice";
import { workspace } from "../workspace/workspaceSlice";
import { getUserTasks } from "../users/userSlice";

export type task = {
    t_id:string,
    l_id:string,
    admin_id:string,
    order:number,
    name:string,
    description:string,
    priority:string[],
    comments:string[],
    isActive:boolean,
    assignees:string[],
    story:number,
    createdAt:string,
    updatedAt:string,
}

type initialStateType = {
    ids: string[],
    entities: Record<string,task>,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null | string ,
    filters: Record<string,boolean>
}

const taskAdapter = createEntityAdapter({
    selectId: (task:task)=> task.t_id,
    sortComparer:(a,b) => a.t_id.localeCompare(b.t_id)
})

const initialState:initialStateType = taskAdapter.getInitialState({
    status:'idle',
    error:null,
    filters: {
        low:false,
        medium:false,
        urgent:false
    }
})  

export const initiateTask = createAsyncThunk('task/getTask', async(_,{rejectWithValue})=> {
    try{
        const data:task[] | null = getTask();
        if(!data) throw new Error("Ran into issue!");
        return data;
    }catch(e:any) {
        console.log('Ran into issue getting all task data!');
        return rejectWithValue(e);
    }
})

export const createTask = createAsyncThunk('tasks/createTask',async(
    {
        listData,
        adminId,
        taskName
    } : {
       listData:list,
       adminId:string,
       taskName:string
    },{rejectWithValue,requestId,getState})=>{
    try{

        const state = getState() as RootState;

        const newDate = new Date();

        const newTask:task = {
            t_id: `task_${requestId}`,
            l_id: listData.l_id,
            admin_id: adminId,
            order: listData.tasks.length,
            name: taskName,
            description: "No description.",
            priority: [],
            comments: [],
            isActive: false,
            assignees: [],
            story: 0,
            createdAt: newDate.valueOf().toString(),
            updatedAt: newDate.valueOf().toString()
        }

        return {newTask:newTask,list:listData, prevState:selectAllTasks(state)}
    } catch (e:any){
        console.log("Ran into issue creating new task", e);
        return rejectWithValue(e);
    }
})

export const deleteTasksFromListDelete = createAsyncThunk('task/deleteTasksFromListDelete', async(
    tasksToDelete:string[], {rejectWithValue,getState}
) => {
    try {
        const state = getState() as RootState;

        let commentsToDelete:string[] = [];
        
        tasksToDelete.forEach((taskId:string) => {
            const task = selectTaskById(state,taskId);
            commentsToDelete = [...commentsToDelete,...task.comments]
            removeMultipleUsersFromTask(task.assignees,task.t_id)
        });

        return {tasksToDelete:tasksToDelete,prevState:selectAllTasks(state), commentsToDelete:commentsToDelete}
    } catch(e:any) {
        return rejectWithValue(e);
    }
})

export const deleteTasksFromMulitpleBoards = createAsyncThunk('tasks/deleteTasksFromultipleBoards', async(
    {
        workspace
    } : {
        workspace:workspace
    } , {rejectWithValue,getState}
) => {
    try {

        const state = getState() as RootState;

        const boardsToSearch = workspace.boards;

        let tasks:string[] = []
        let commentsToDelete:string[] = [];

        for(const board of boardsToSearch){
            const lists = getList(board) || null;
            if(!lists) throw new Error("Null returned from get list");
            for(const list of lists){
                tasks = [...tasks,...list.tasks];
            }
        }

        tasks.forEach((taskId:string)=> {
            const task = selectTaskById(state,taskId);
            commentsToDelete=[...commentsToDelete, ...task.comments];
            removeMultipleUsersFromTask(task.assignees,task.t_id)
        })


        return {tasksToDelete:tasks,prevState:selectAllTasks(state),commentsToDelete:commentsToDelete}
    } catch (e:any) {
        return rejectWithValue(e);
    }
})

export const deleteMulitpleTasksFromBoardDeletion = createAsyncThunk('tasks/deleteMultipleTasksFromBoardDeletion', async(
    listOfTasksToDeleteFromLists:string[], {rejectWithValue,getState}
)=> {
    try{
        const state = getState() as RootState;

        let tasksToDelete:string[] = [];
        let commentsToDelete:string[] = [];

        for(const listId of listOfTasksToDeleteFromLists) {
            const list = selectListById(state,listId);
            tasksToDelete = [...tasksToDelete,...list.tasks];
        }

        tasksToDelete.forEach((taskId:string) => {
            const task = selectTaskById(state,taskId);
            commentsToDelete=[...commentsToDelete, ...task.comments];
            removeMultipleUsersFromTask(task.assignees,task.t_id)
        });

        return {tasksToDelete:tasksToDelete,prevState:selectAllTasks(state),commentsToDelete:commentsToDelete};

    } catch(e:any) {
        return rejectWithValue(e);
    }
})

export const updateTask = createAsyncThunk('task/updateTask', async({
    taskId,
    update
}:{
    taskId:string,
    update:Record<string,any>
},{
    rejectWithValue,getState
}) =>{
    try{
        const state = getState() as RootState;

        const task = selectTaskById(state,taskId)

        const updateTask = {
            ...task,
            ...update
        }

        return{updateTask:updateTask,prevTasks:selectAllTasks(state)}
    } catch(e:any) {
        return rejectWithValue(e);
    }
})

export const removeUserFromTask = createAsyncThunk('task/removeUserFromTask',async(
    {
        taskToAddToo,
        userIdToAdd
    } : {
        taskToAddToo:string,
        userIdToAdd:string
    }, {rejectWithValue,getState}
)=>{
try{
    const state = getState() as RootState;

    const task = selectTaskById(state,taskToAddToo);

    const updateTask = {
        ...task,
        assignees:task.assignees.filter((x)=>x!== userIdToAdd)
    }
    return {updateTask:updateTask,prevTasks:selectAllTasks(state)}
    
}catch(e:any) {
    return rejectWithValue(e);
}
})

export const updateMultipleTasks = createAsyncThunk('task/updateMultipleTasks',async(
    {
        tasks,
        removeUser
    } : {
        tasks:string[]
        removeUser:string
    }, {getState,rejectWithValue}
)=>{
    try{
        const state = getState() as RootState;

        const tasksToUpdate:Update<task,string>[] = [];

        for(const taskId of tasks) {
            const prevTask = selectTaskById(state,taskId);
            const updatedTasks = {
                ...prevTask,
                assignees: prevTask.assignees.filter((id)=> id !==removeUser)
            }
            tasksToUpdate.push({id:updatedTasks.t_id,changes:updatedTasks})
        }

        return {tasksToUpdate:tasksToUpdate,userId:removeUser, prevState:selectAllTasks(state)}
    } catch (e:any){
        return rejectWithValue(e);
    }
})

export const addUserToTask = createAsyncThunk('task/addUserToTask',async(
    {
        taskToAddToo,
        userIdToAdd
    } : {
        taskToAddToo:string,
        userIdToAdd:string
    }
    , {rejectWithValue, getState}
)=>{
    try{
        const state = getState() as RootState;

        const task = selectTaskById(state,taskToAddToo);

        const updateTask = {
            ...task,
            assignees:[...task.assignees,userIdToAdd]
        }
        return {updateTask:updateTask,prevTasks:selectAllTasks(state)}
    }catch(e:any) {
        return rejectWithValue(e);
    }
})

export const addCommentToTask = createAsyncThunk('task/addCommentToTask',async(
    {
        taskId,
        commentId
    } : {
        taskId:string,
        commentId:string
    }, {rejectWithValue,getState}
)=>{
    try{
        const state = getState() as RootState;

        const task = selectTaskById(state,taskId);

        const updateTask = {
            ...task,
            comments:[...task.comments,commentId],
            updatedAt:(new Date).toLocaleString()
        }

        return {updateTask:updateTask,prevTask:selectAllTasks(state)}

    } catch(e:any) {
        return rejectWithValue(e);
    }
})
 
export const removeCommentFromTask = createAsyncThunk('task/removeCommentFromTask',(
    {
        taskId,
        commentId
    } : {
        taskId:string,
        commentId:string
    }, {rejectWithValue,getState}
)=>{
    try{
        const state = getState() as RootState;

        const task = selectTaskById(state,taskId);

        const updateTask = {
            ...task,
            comments: task.comments.filter(x=>x !== commentId)
        }

        return {updateTask:updateTask,prevTasks:selectAllTasks(state)}
    } catch(e:any) {
        return rejectWithValue(e);
    }
})


const taskSlice = createSlice ({
    name:'tasks',
    initialState,
    reducers: {
        changeFilter(state,action:PayloadAction<{
            low?:boolean,
            medium?:boolean,
            urgent?:boolean
        }>) {
            state.filters = {...state.filters, ...action.payload};
        }
    },
    extraReducers(builder){
        builder.addCase(initiateTask.pending, (state,_)=> {
            state.status = 'loading';
        })
        .addCase(initiateTask.rejected, (state,_)=> {
            state.status = 'failed';
        })
        .addCase(initiateTask.fulfilled, (state,action:PayloadAction<task[]>)=> {
            state.status = 'succeeded';
            taskAdapter.upsertMany(state,action.payload);
        })
        .addCase(createTask.fulfilled, (state,action:PayloadAction<{newTask:task,list:list, prevState:task[]}>) => {
            state.status = 'succeeded';
            addTask(action.payload.newTask);
            taskAdapter.addOne(state,action.payload.newTask);
        })
        .addCase(deleteTasksFromListDelete.fulfilled,(state,action:PayloadAction<{tasksToDelete:string[],prevState:task[], commentsToDelete:string[]}>) => {
            deleteTasksFromListCL(action.payload.tasksToDelete);
            taskAdapter.removeMany(state,action.payload.tasksToDelete);
        })
        .addCase(deleteMulitpleTasksFromBoardDeletion.fulfilled,(state,action)=> {
            deleteTasksFromListCL(action.payload.tasksToDelete);
            taskAdapter.removeMany(state,action.payload.tasksToDelete);
        })  
        .addCase(deleteTasksFromMulitpleBoards.fulfilled,(state,action:PayloadAction<{tasksToDelete:string[],prevState:task[],commentsToDelete:string[]}>) =>{
            deleteTasksFromListCL(action.payload.tasksToDelete);
            taskAdapter.removeMany(state,action.payload.tasksToDelete)
        })
        .addCase(updateTask.fulfilled,(state,action:PayloadAction<{updateTask:task,prevTasks:task[]}>)=>{
            updateTaskCL(action.payload.updateTask);
            taskAdapter.updateOne(state,{id:action.payload.updateTask.t_id,changes:action.payload.updateTask});
        })
        .addCase(addUserToTask.fulfilled,(state,action:PayloadAction<{updateTask:task,prevTasks:task[]}>)=>{
            updateTaskCL(action.payload.updateTask);
            taskAdapter.updateOne(state,{id:action.payload.updateTask.t_id,changes:action.payload.updateTask});
        })
        .addCase(removeUserFromTask.fulfilled,(state,action:PayloadAction<{updateTask:task,prevTasks:task[]}>)=>{
            updateTaskCL(action.payload.updateTask);
            taskAdapter.updateOne(state,{id:action.payload.updateTask.t_id,changes:action.payload.updateTask});
        })
        .addCase(updateMultipleTasks.fulfilled,(state,action:PayloadAction<{tasksToUpdate:Update<task,string>[] ,userId:string, prevState:task[]}>)=>{
            taskAdapter.updateMany(state,action.payload.tasksToUpdate);
            updateMutliTasksCL(Object.values(state.entities));
        })
        .addCase(addCommentToTask.fulfilled,(state,action:PayloadAction<{updateTask:task,prevTask:task[]}>)=>{
            updateTaskCL(action.payload.updateTask);
            taskAdapter.updateOne(state,{id:action.payload.updateTask.t_id,changes:action.payload.updateTask})
        })
        .addCase(removeCommentFromTask.fulfilled, (state,action:PayloadAction<{updateTask:task,prevTasks:task[]}>) => {
            updateTaskCL(action.payload.updateTask);
            taskAdapter.updateOne(state,{id:action.payload.updateTask.t_id,changes:action.payload.updateTask});
        })
    }
})

export const {
    selectAll:selectAllTasks,
    selectById:selectTaskById,
} = taskAdapter.getSelectors((state:RootState)=>state.tasks);


export const getAndFilterUserTasks = createSelector(
    [selectAllTasks,getUserTasks],
    (tasks,usersTasks)=>{
        const taskFilter = tasks.filter(x=>usersTasks?.includes(x.t_id) || false)

        const sortTasks = taskFilter.sort((a,b)=>{
            const date1 = new Date(a.createdAt);
            const date2 = new Date(b.createdAt);
            return date1.valueOf() - date2.valueOf();
        })

        return sortTasks;
    }
)

export const getFilters = (state:RootState) => state.tasks.filters;

export const {changeFilter} = taskSlice.actions;

export default taskSlice.reducer;
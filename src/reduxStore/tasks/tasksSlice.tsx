import { createAsyncThunk, createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";
import { addTask, deleteTasksFromListCL, getList, getTask } from "../../customLogic/CustomLogic";
import { list, selectListById } from "../lists/listsSlice";
import { workspace } from "../workspace/workspaceSlice";

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
            description: "",
            priority: [],
            comments: [],
            isActive: false,
            assignees: [],
            story: 0,
            createdAt: newDate.toLocaleString(),
            updatedAt: newDate.toLocaleString()
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
        
        return {tasksToDelete:tasksToDelete,prevState:selectAllTasks(state)}
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

        for(const board of boardsToSearch){
            const lists = getList(board) || null;
            if(!lists) throw new Error("Null returned from get list");
            for(const list of lists){
                tasks = [...tasks,...list.tasks];
            }
        }

        return {tasksToDelete:tasks,prevState:selectAllTasks(state)}
    } catch (e:any) {
        return rejectWithValue(e);
    }
})

export const deleteMulitpleTasksFromBoardDeletion = createAsyncThunk('tasks/deleteMultipleTasksFromBoardDeletion', async(
    listOfTasksToDeleteFromLists:string[], {rejectWithValue,getState}
)=> {
    try{
        const state = getState() as RootState;

        let tasksToDelete:string[] = []

        for(const listId of listOfTasksToDeleteFromLists) {
            const list = selectListById(state,listId);
            tasksToDelete = [...tasksToDelete,...list.tasks];
        }

        return {tasksToDelete:tasksToDelete,prevState:selectAllTasks(state)};

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
        .addCase(deleteTasksFromListDelete.fulfilled,(state,action:PayloadAction<{tasksToDelete:string[],prevState:task[]}>) => {
            deleteTasksFromListCL(action.payload.tasksToDelete);
            taskAdapter.removeMany(state,action.payload.tasksToDelete);
        })
        .addCase(deleteMulitpleTasksFromBoardDeletion.fulfilled,(state,action)=> {
            deleteTasksFromListCL(action.payload.tasksToDelete);
            taskAdapter.removeMany(state,action.payload.tasksToDelete);
        })  
        .addCase(deleteTasksFromMulitpleBoards.fulfilled,(state,action:PayloadAction<{tasksToDelete:string[],prevState:task[]}>) =>{
            deleteTasksFromListCL(action.payload.tasksToDelete);
            taskAdapter.removeMany(state,action.payload.tasksToDelete)
        })
      
    }
})

export const {
    selectAll:selectAllTasks,
    selectById:selectTaskById,
} = taskAdapter.getSelectors((state:RootState)=>state.tasks);

export const getFilters = (state:RootState) => state.tasks.filters;

export const {changeFilter} = taskSlice.actions;

export default taskSlice.reducer;
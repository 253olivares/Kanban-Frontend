import { PayloadAction, Update, createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { addListCL, deleteBoardListCL, getList, updateListCL, updateListDeleteCL } from "../../customLogic/CustomLogic"
import { RootState } from "../store"
import { task } from "../tasks/tasksSlice"

export type list = {
    l_id:string,
    b_id:string,
    name:string,
    order:number, 
    description:string,
    tasks:string[]
}

type initialStateType = {
    ids: string[],
    entities: Record<string,list>,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null | string,
    selectedlist:list | null,
    addTask:boolean,
    listSetting:boolean
}

const listAdapter = createEntityAdapter({
    selectId:(list:list) => list.l_id,
    sortComparer:(a,b) => a.order - b.order
})

const initialState:initialStateType = listAdapter.getInitialState({
    status:'idle',
    error:null,
    selectedlist:null,
    addTask:false,
    listSetting:false
})

export const initiateList = createAsyncThunk('list/getList', async(boardId:string,{rejectWithValue})=> {
    try{

        const data:list[] | null = getList(boardId);

        if(!data) throw new Error("Ran into issues!");
        
        return data;
    }catch(e:any) {
        console.log('Ran into issue gathering the list data!');
        return rejectWithValue(e);
    }
})

export const createListState = createAsyncThunk('list/createList', async(
    {listName,boardId,boardNumber}:
    // @ts-ignore
    {listName:string,boardId:string,boardNumber:number},{requestId,getState,rejectWithValue}) => {
    try{
        const newList:list = {
            l_id: `list_${requestId}`,
            b_id: boardId,
            name: listName,
            order: boardNumber,
            description: "",
            tasks:[]
        }
        return{newList:newList}
    } catch(e:any) {
        return rejectWithValue(e);
    }
})

export const deleteList = createAsyncThunk('list/deleteList',async(listData:list,{getState,rejectWithValue})=>{
    try {
        const state = getState() as RootState;

        const listsIds = selectListIds(state);

        const listsPositionsToUpdate = listsIds.slice(listData.order+1);

        const updateLists:Update<list,string>[] = listsPositionsToUpdate.map((id)=>{
            const list = selectListById(state,id);
            const updateList = {
                ...list,
                order: list.order -1
            }
            return{id:list.l_id,changes:updateList};
        })  


        return {listToDelete:listData,listsToUpdate:updateLists}
    } catch (e:any){
        return rejectWithValue(e);
    }
})

export const updateListTasks = createAsyncThunk("list/updateTasks", async (
    {
        list,
        newTask
    } : {
        list:list,
        newTask:task
    }, {rejectWithValue})=>{
        try  {
            const updateList:list = {
                ...list,
                tasks: [...list.tasks,newTask.t_id]
            }

            return updateList;
        } catch(e:any) {
            console.log(e);
            return rejectWithValue(e);
        }
})

export const deleteListStateBoardDelete = createAsyncThunk('list/deleteListState', async(
    {boardId} : {boardId:string},
    {rejectWithValue }
)=> {
    try {
        return {boardId:boardId}
    } catch (e:any) {
        return rejectWithValue(e);
    }
})

export const deleteTaskFromList = createAsyncThunk('list/deleteTaskFromList',async({
    listId,
    deleteTask
} : {
    listId:string,
    deleteTask:string
},{rejectWithValue,getState})=>{
    try{
        const state = getState() as RootState;

        const currentList = selectListById(state,listId);

        const updateList:list={
            ...currentList,
            tasks:currentList.tasks.filter(x=>x!==deleteTask)
        }
        return{updateList:updateList}
    }catch(e:any){
        return rejectWithValue(e);
    }
})

const listSlice = createSlice({
    name:'list',
    initialState,
    reducers:{
        changeAddTask (state,action:PayloadAction<{addTaskBool:boolean,listData:list | null}>) {
            state.addTask = action.payload.addTaskBool;
            state.selectedlist = action.payload.listData;
        },
        changeSettings (state,action:PayloadAction<{listSettingsBool:boolean,listData:list | null}>) {
            console.log("test");
            state.listSetting = action.payload.listSettingsBool;
            state.selectedlist = action.payload.listData;
        },
        deleteListState (state) {
            listAdapter.removeAll(state);
        }
    },
    extraReducers(builder){
        builder.addCase(initiateList.pending,(state,_)=> {
            state.status = 'loading';
        })
        .addCase(initiateList.rejected,(state,_)=> {
            state.status = 'failed';
        })
        .addCase(initiateList.fulfilled, (state,action:PayloadAction<list[]>)=> {
            state.status = 'succeeded';
            listAdapter.upsertMany(state,action.payload);
        })
        .addCase(createListState.fulfilled, (state,action:PayloadAction<{newList:list}>) => {
            addListCL(action.payload.newList);
            listAdapter.addOne(state,action.payload.newList);
        })
        .addCase(deleteList.fulfilled,(state,action:PayloadAction<{listToDelete:list,listsToUpdate:Update<list,string>[]}>)=>{
            listAdapter.removeOne(state,action.payload.listToDelete.l_id);
            listAdapter.updateMany(state,action.payload.listsToUpdate);
            updateListDeleteCL(action.payload.listToDelete,state.entities);
        })
        .addCase(updateListTasks.fulfilled, (state,action:PayloadAction<list>) => {
            updateListCL(action.payload);
            listAdapter.updateOne(state,{id:action.payload.l_id,changes:action.payload})
        })
        .addCase(deleteListStateBoardDelete.fulfilled, (state,action:PayloadAction<{boardId:string}>) => {
            deleteBoardListCL(action.payload.boardId);
            listAdapter.removeAll(state);
        })
        .addCase(deleteTaskFromList.fulfilled,(state,action:PayloadAction<{updateList:list}>)=>{
            updateListCL(action.payload.updateList)
            listAdapter.updateOne(state,{id:action.payload.updateList.l_id,changes:action.payload.updateList})
        })
    }
})

export const {
    selectAll:selectAllLists,
    selectEntities:selectAllListEntities,
    selectIds:selectListIds,
    selectById:selectListById
} = listAdapter.getSelectors((state:RootState)=>state.list);

export const getAddTaskModal = (state:RootState) => state.list.addTask;
export const getListSettings = (state:RootState) => state.list.listSetting;
export const getSelectedList = (state:RootState) => state.list.selectedlist;

export const {
    changeAddTask,
    changeSettings,
    deleteListState
} = listSlice.actions;


export default listSlice.reducer;

import { PayloadAction, Update, createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { addListCL, getList, updateListDeleteCL } from "../../customLogic/CustomLogic"
import { RootState } from "../store"

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

        console.log("All lists to update:",listsPositionsToUpdate);
        console.log("lists:",listsIds);
        console.log(`List to delete:`,listData.l_id);

        return {listToDelete:listData,listsToUpdate:updateLists}
    } catch (e:any){
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
        changeSettings (state,action:PayloadAction<{listSettingsBool:boolean,listData:list}>) {
            console.log("test");
            state.listSetting = action.payload.listSettingsBool;
            state.selectedlist = action.payload.listData;
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
    changeSettings
} = listSlice.actions;


export default listSlice.reducer;

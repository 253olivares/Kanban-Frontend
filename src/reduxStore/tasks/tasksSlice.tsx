import { createAsyncThunk, createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";
import { getTask } from "../../customLogic/CustomLogic";

export type task = {
    t_id:string,
    l_id:string,
    u_id:string,
    order:number,
    name:string[],
    description:string,
    priority:number,
    isActive:boolean,
    assignees:string[],
    story:number,
    createdAt:Date,
    updatedAt:Date,
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
    }
})

export const {
    selectAll:selectAllTasks
} = taskAdapter.getSelectors((state:RootState)=>state.tasks);

export const getFilters = (state:RootState) => state.tasks.filters;

export const {changeFilter} = taskSlice.actions;

export default taskSlice.reducer;
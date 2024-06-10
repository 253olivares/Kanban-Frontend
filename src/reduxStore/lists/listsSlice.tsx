import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { getList } from "../../customLogic"

export type list = {
    l_id:string,
    b_id:string,
    name:string,
    order:string, 
    description:string
}

type initialStateType = {
    ids: string[],
    entities: Record<string,list>,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null | string ,
}

const listAdapter = createEntityAdapter({
    selectId:(list:list) => list.l_id,
    sortComparer:(a,b) => a.l_id.localeCompare(b.l_id)
})

const initialState:initialStateType = listAdapter.getInitialState({
    status:'idle',
    error:null
})

export const initiateList = createAsyncThunk('list/getList', async(_,{rejectWithValue})=> {
    try{
        const data:list[] | null = getList();
        if(!data) throw new Error("Ran into issues!");
        return data;
    }catch(e:any) {
        console.log('Ran into issue gathering the list data!');
        rejectWithValue(e);
    }
})

const listSlice = createSlice({
    name:'list',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder.addCase(initiateList.pending,(state,_)=> {
            state.status = 'loading';
        })
        .addCase(initiateList.rejected,(state,_)=> {
            state.status = 'failed';
        })
        .addCase(initiateList.fulfilled, (state,action)=> {
            state.status = 'succeeded';
            listAdapter.upsertMany(state,action.payload as list[]);
        })
    }
})

export const {} = listSlice.actions;

export default listSlice.reducer;

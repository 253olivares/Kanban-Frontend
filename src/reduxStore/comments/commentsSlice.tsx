import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getComments } from "../../customLogic";

export type comments = {
    c_id:string,
    u_id:string,
    t_id:string,
    message:string,
    createdAt:Date,
    updatedAt:Date
    reactions: {
        thumbUp:number,
        party: number,
        smile: number,
    }
    userReactions: {
        thumbUp:string[],
        party:string[],
        smile:string[]
    }
}

type initialStateType = {
    ids: string[],
    entities: Record<string,comments>,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null | string ,
}

const commentAdapter = createEntityAdapter({
    selectId: (comment:comments) => comment.c_id,
    sortComparer:(a,b) => a.c_id.localeCompare(b.c_id),
})

const initialState:initialStateType = commentAdapter.getInitialState({
    status:'idle',
    error:null
})

export const initialComments = createAsyncThunk('comments/getComments',async(_,{rejectWithValue})=> {
    try{
        const data:comments[] | null = getComments();
        if(!data) throw new Error("Ran into issues!");
        return data;
    }catch(e:any) {
        console.log('Ran into issues getting comments!');
        rejectWithValue(e);
    }
})

const commentSlice = createSlice({
    name:'comments',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder
        .addCase(initialComments.pending, (state,_)=>{
            state.status = 'loading';
        })
        .addCase(initialComments.rejected, (state,_)=>{
            state.status = 'failed';
        })
        .addCase(initialComments.fulfilled, (state,action)=> {
            state.status = 'succeeded';
            commentAdapter.upsertMany(state,action.payload as comments[]);
        })
    }
})
 
export const {} = commentSlice.actions;

export default commentSlice.reducer;
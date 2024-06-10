import { createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit"
import { getBoards } from "../../customLogic"

export type board = {
    b_id:string,
    u_id:string,
    w_id:string,
    name:string,
    lists:string[],
    label:string[],
    background:number
}

type initialStateType = {
    ids:string[],
    entities: Record<string,board>,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null | string ,
    addBoardModal:boolean,
    newBoardName:string
}

const boardsAdapter = createEntityAdapter({
    selectId: (boards:board) => boards.b_id,
    sortComparer: (a,b) => a.b_id.localeCompare(b.b_id)
});

export const initializeBoards = createAsyncThunk('boards/initialize', async(_,{rejectWithValue})=>{
    try{
        const data: board[] | null = getBoards();
        if(!data) throw new Error("Ran into issues!");
        return data;
        
    }catch(e:any){
        console.log("Ran into issue getting all the workspace data!");
        rejectWithValue(e);
    }
})



const initialState:initialStateType = boardsAdapter.getInitialState({
    status: 'idle',
    error: null,
    addBoardModal:false,
    newBoardName:''
})

const boardSlice = createSlice({
    name:'boards',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(initializeBoards.pending,(state,_)=> {
            state.status = 'loading';
        })
        .addCase(initializeBoards.rejected,(state,_)=> {
            state.status = 'failed';
        })
        .addCase(initializeBoards.fulfilled,(state,action)=> {
            state.status = 'succeeded';
            boardsAdapter.upsertMany(state,action.payload as board[])
        })
    }
})

export const {
    selectAll
} = boardsAdapter.getSelectors((state:{boards:initialStateType})=> state.boards);

export const {} = boardSlice.actions;

export default boardSlice.reducer;
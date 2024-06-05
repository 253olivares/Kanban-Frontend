import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"

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
    status: 'idle' | 'loading' | ' succeeded' | 'failed',
    error: null | string ,
    addBoardModal:boolean,
    newBoardName:string
}

const boardsAdapter = createEntityAdapter({
    selectId: (boards:board) => boards.b_id,
    sortComparer: (a,b) => a.b_id.localeCompare(b.b_id)
});



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
    
    extraReducers (_builder){
    }
})

export const {
    selectAll
} = boardsAdapter.getSelectors((state:{boards:initialStateType})=> state.boards);

export const {} = boardSlice.actions;

export default boardSlice.reducer;
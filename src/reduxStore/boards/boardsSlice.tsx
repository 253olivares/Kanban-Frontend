import { createAsyncThunk, createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit"
import { addBoard, getBoards, removeBoardsFromWorkspaceLS, updateBoardNameFromWorkspaceLS } from "../../customLogic"
import { RootState } from "../store"
import { workspace } from "../workspace/workspaceSlice"
export type board = {
    b_id:string,
    u_id:string,
    w_id:string,
    name:string,
    members:string[][],
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
        return rejectWithValue(e);
    }
})

export const addBoards = createAsyncThunk('boards/addBoard', async({
    boardName,
    workspaceId
}:{
    boardName:string,
    workspaceId:string
},{requestId,getState,rejectWithValue})=> {
    try{
        const state = getState() as RootState;

        if(!state.user.user) throw new Error('No user is logged in!')

        const newBoard:board = {
            b_id: `board_${requestId}`,
            u_id: state.user.user.u_id,
            w_id: workspaceId,
            name: boardName,
            members: [[state.user.user.u_id,'admin']],
            lists: [],
            label: [],
            background: 0
        }

        return {newBoard:newBoard, prevStates:selectAllBoards(state)}
    } catch(e:any) {
        console.log(e);
        return rejectWithValue(e);
    }
})

export const updateBoardNameFromWorkspace = createAsyncThunk('boards/updateBoardName',async({boardName,boardId}: {boardName:string, boardId:string}, 
    {rejectWithValue, getState}) => {
        try {
            const state = getState() as RootState;

           console.log("From slice:", boardName);

            return{boardName:boardName, boardId:boardId, prevStates:selectAllBoards(state)}

        } catch (e:any){
            console.log(e);
            return rejectWithValue(e);
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
    reducers:{
        changeBoardModal(state,action:PayloadAction<boolean>){
            state.addBoardModal = action.payload;
        },
        newBoardNameUpdate(state,action:PayloadAction<string>){
            state.newBoardName = action.payload;
        },
        removeBoardsFromWorkspace(state,action:PayloadAction<workspace>){
            removeBoardsFromWorkspaceLS(action.payload.boards);
            boardsAdapter.removeMany(state,action.payload.boards);
        }
        // updateBoardNameFromWorkspace(state,action:PayloadAction<{boardName:string,boardId:string}>){
        //     const {boardId,boardName} = action.payload;

        //     boardsAdapter.updateOne(state,{id:boardId,changes:{...state.entities[boardId],name:boardName }})
        // }
    },
    extraReducers:(builder) => {
        builder.addCase(initializeBoards.pending,(state,_)=> {
            state.status = 'loading';
        })
        .addCase(initializeBoards.rejected,(state,_)=> {
            state.status = 'failed';
        })
        .addCase(initializeBoards.fulfilled,(state,action: PayloadAction<board[]>)=> {
            state.status = 'succeeded';
            boardsAdapter.upsertMany(state,action.payload);
        })
        .addCase(addBoards.fulfilled,(state,action: PayloadAction<{newBoard:board,prevStates:board[]}>)=> {
            
            state.status = 'succeeded';
            addBoard(action.payload.newBoard,action.payload.prevStates);
            boardsAdapter.addOne(state,action.payload.newBoard);
        })
        .addCase(addBoards.pending,(state,_)=> {
            state.status = 'loading';
        })
        .addCase(addBoards.rejected,(state,_)=> {
            state.status = 'failed';
        })
        .addCase(updateBoardNameFromWorkspace.fulfilled,(state,action:PayloadAction<{boardName:string,boardId:string,prevStates:board[]}>)=> {
            const {boardId,boardName,prevStates} = action.payload;
            console.log("From toolkit listener:",boardName)
            updateBoardNameFromWorkspaceLS(boardId,boardName,prevStates);
            boardsAdapter.updateOne(state,{id:boardId,changes:{...state.entities[boardId],name:boardName}});
        })
    }
})

export const {
    selectAll:selectAllBoards,
    selectById:selectBoardById
} = boardsAdapter.getSelectors((state:RootState)=> state.boards);

export const getBoardName = (state:RootState) => state.boards.newBoardName;

export const getBoardModal = (state:RootState) => state.boards.addBoardModal;

export const {  
    changeBoardModal,
    newBoardNameUpdate,
    removeBoardsFromWorkspace
    // updateBoardNameFromWorkspace
} = boardSlice.actions;

export default boardSlice.reducer;
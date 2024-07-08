import { createAsyncThunk, createEntityAdapter, createSlice, PayloadAction, Update} from "@reduxjs/toolkit"
import { addBoard, getBoards, removeBoardsFromWorkspaceLS, updateBoardLS, userLeaveUpdateBoard } from "../../customLogic/CustomLogic"
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

// function to run when users want to delete boards from board page
export const deleteBoard = createAsyncThunk('boards/deleteBoard',async(boardId:string,{getState,rejectWithValue})=> {
    try{
        if(boardId.trim() === "") throw new Error;
        const state = getState() as RootState;
        return {board:state.boards.entities[boardId],prevState:selectAllBoards(state)}
    }catch(e:any) {
        console.log("Ran into issue");
        return rejectWithValue(e);
    }
})

// Get our boards
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

// Adding a new board a user adds a new board from the account page when a workspace is selected
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
            members: [[state.user.user.u_id,'Admin']],
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

// Update board name when we are in the board page that runs whenever the board name is change
// additionally when the new name is submitted from mobile
export const updateBoardNameFromWorkspace = createAsyncThunk('boards/updateBoardName',async(
    {boardName,boardId}: 
    {boardName:string, boardId:string}, 
    {rejectWithValue, getState}) => {
        try {
            const state = getState() as RootState;

            const board = selectBoardById(state,boardId);

            const newBoard = {
                ...board,
               name:boardName
            }

            return{updateBoard:newBoard, prevStates:selectAllBoards(state)}

        } catch (e:any){
            console.log(e);
            return rejectWithValue(e);
        }
})

export const addUserToBoard = createAsyncThunk('boards/addUserToBoard',async(
    {boardId,u_id,role}:
    {boardId:string,u_id:string,role:string},{rejectWithValue,getState})=>{
    try{

        const state = getState() as RootState;

        const board = selectBoardById(state,boardId);
        
        const newBoard = {
            ...board,
            members:[...board.members,[u_id,role]]
        }

        return{updatedBoard:newBoard,prevState:selectAllBoards(state)}
    } catch(e:any){
        console.log(e);
        return rejectWithValue(e);
    }
})

export const removeUserFromMulitpleBoards = createAsyncThunk('boards/removeUsersFromBoards',async(
    {boards,u_id}:{
        boards:string[],
        u_id:string
    },
    {getState,rejectWithValue}
)=> {
    try{

        console.log("test2123")
        const state = getState() as RootState;

        const statesToUpdate:Update<board, string>[] = [];

        for(const board of boards){
            const prevBoard = selectBoardById(state,board)
            const updatedBoard = {
                ...prevBoard,
                members: prevBoard.members.filter((x:string[])=> x[0] !== u_id)
            }
            statesToUpdate.push({id:updatedBoard.b_id,changes:updatedBoard})
        }

        console.log("States To Update",statesToUpdate)
        return {updateState:statesToUpdate};
    }catch(e:any){
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
        .addCase(updateBoardNameFromWorkspace.fulfilled,(state,action:PayloadAction<{updateBoard:board,prevStates:board[]}>)=> {
            const {updateBoard,prevStates} = action.payload;
            
            updateBoardLS(updateBoard,prevStates);
            boardsAdapter.updateOne(state,{id:updateBoard.b_id,changes:updateBoard});
        })
        .addCase(deleteBoard.fulfilled,(state,action:PayloadAction<{board:board,prevState:board[]}>)=> {
            
            removeBoardsFromWorkspaceLS([action.payload.board.b_id])
            boardsAdapter.removeOne(state,action.payload.board.b_id);
        })
        .addCase(addUserToBoard.fulfilled,(state,action:PayloadAction<{updatedBoard:board,prevState:board[]}>)=>{

            updateBoardLS(action.payload.updatedBoard,action.payload.prevState);
            boardsAdapter.updateOne(state,{id:action.payload.updatedBoard.b_id,changes:action.payload.updatedBoard})
        })
        .addCase(removeUserFromMulitpleBoards.fulfilled,(state,action:PayloadAction<{updateState:Update<board, string>[]}>) => {
            boardsAdapter.updateMany(state,action.payload.updateState);
            userLeaveUpdateBoard(Object.values(state.entities))
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
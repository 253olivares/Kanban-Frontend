
import { createAsyncThunk, createEntityAdapter,createSlice,PayloadAction  } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { addWorkspace, getWorkspaces, removeWorkspace, updateWorkspaceBoardLS} from "../../customLogic";
import { board } from "../boards/boardsSlice";

export type workspace = {
    w_id:string,
    u_id:string,
    name:string,
    boards:string[],
    members:string[]
}

type initialStateType = {
    ids: string[],
    entities: Record<string,workspace>,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null | string ,
    addWorkspaceModal: boolean,
    newWorkspaceName: string,
    selectWorkspace: string
}

const workspaceAdapter = createEntityAdapter({
    selectId: (workspace:workspace) => workspace.w_id,
    sortComparer:(a,b) => a.w_id.localeCompare(b.w_id)
})  

const initialState:initialStateType = workspaceAdapter.getInitialState({
    status:'idle',
    error:null,
    addWorkspaceModal:false,
    newWorkspaceName:'',
    selectWorkspace:''
})

export const initiateWorkspace = createAsyncThunk('workspace/getWorkspaces', async(_,{rejectWithValue})=>{
    try{
        const data:workspace[] | null = getWorkspaces();
        if(!data) throw new Error("Ran into issue");
        return data;
    }catch(e:any){
        console.log("ran into issue getting all workspace data!");
        return rejectWithValue(e);
    }
})
 
export const removeExistingWorkspace = createAsyncThunk('workspace/removeWorkspaces', async(workspaceId:string,{getState,rejectWithValue})=> {
    try{

        const state = getState() as RootState;

        return{plannedRemove:workspaceId,workspaceState:selectAllWorkspaces(state)};
    }catch(e:any){
        console.log("Ran into issue removing the workspace!")
        return rejectWithValue(e);
    }
})

export const addNewWorkspace = createAsyncThunk('workspace/addWorkspaces', async(workspaceName:string,{requestId,getState,rejectWithValue})=>{
    try{

        // take in our new workspace name and get our state.
        // doing this allows us to access our user state which should have our user id
        const state = getState() as RootState;

        // if no new user is found then throw an error
        if(!state.user.user) throw new Error('No user is logged in!');

        // create a new object of the workspace
        const newWorkspace:workspace = {
            w_id:`workspace_${requestId}`,
            u_id:state.user.user!.u_id,
            name:workspaceName,
            boards:[],
            members:[state.user.user.u_id]
        }

    return {newWorkspace:newWorkspace,prevStates:selectAllWorkspaces(state)};

    } catch(e:any){
        console.log("Ran into issue adding new workspace!")
        return rejectWithValue(e);
    }
})

export const updateWorkspaceBoard = createAsyncThunk('workspace/updateWorkspace', async(newBoard:board, {getState,rejectWithValue})=> {
    try{
        const state = getState() as RootState
        const selectWorkspace = selectWorkspaceById(state,newBoard.w_id);
        const updatedWorkspace = {
            ...selectWorkspace,
            boards: [...selectWorkspace.boards,newBoard.b_id]
        }
        return {newBoard:newBoard, updatedWorkspace:updatedWorkspace, prevState:selectAllWorkspaces(state)}
    } catch(e:any){
        console.log('ran into error adding board to workspace')
        return rejectWithValue(e);
    }
})

const workspaceSlice = createSlice({
    name:'workspace',
    initialState,
    reducers:{
        changeModal(state,action: PayloadAction<boolean>){
            state.addWorkspaceModal = action.payload;
        },
        setNewWorkspaceName(state,action: PayloadAction<string>){
            state.newWorkspaceName = action.payload;
        },
        setNewSelect(state,action:PayloadAction<string>){
            state.selectWorkspace = action.payload;
        }
    },
    extraReducers:(builder)=> {
        builder
            .addCase(initiateWorkspace.pending,(state,_)=>{
                state.status = 'loading';
            })
            .addCase(initiateWorkspace.rejected,(state,_)=>{
                state.status = 'failed';
            })
            .addCase(initiateWorkspace.fulfilled,(state,action:PayloadAction<workspace[]>)=>{
                state.status = 'succeeded';
                workspaceAdapter.upsertMany(state,action.payload);
            })
            // take in our previous state and action payload and pass it to our function with custome code
            // this code is in charge of communicating with our local storage
            .addCase(addNewWorkspace.fulfilled,(state,action:PayloadAction<{newWorkspace:workspace,prevStates:workspace[]}>)=> {
                state.status = 'succeeded';
                // updateUser(action.payload!.newUserInfo);
                addWorkspace(action.payload.newWorkspace,action.payload.prevStates);
                workspaceAdapter.addOne(state,action.payload.newWorkspace);
            })  
            .addCase(addNewWorkspace.pending,(state,_)=> {
                state.status = 'loading';
            })
            .addCase(addNewWorkspace.rejected,(state,_)=>{
                state.status = 'failed';
            })
            .addCase(removeExistingWorkspace.rejected,(state,_)=>{
                state.status = 'failed';
            })
            .addCase(removeExistingWorkspace.pending,(state,_)=>{
                state.status = 'loading';
            })
            .addCase(removeExistingWorkspace.fulfilled,(state,action:PayloadAction<{plannedRemove:string,workspaceState:workspace[]}>)=> {
                state.status = 'succeeded';
                state.selectWorkspace = '';
                removeWorkspace(action.payload.plannedRemove,action.payload.workspaceState);
                workspaceAdapter.removeOne(state,action.payload!.plannedRemove);
            })
            .addCase(updateWorkspaceBoard.fulfilled, (state,action:PayloadAction<{newBoard:board,updatedWorkspace:workspace, prevState:workspace[]}>)=> {
                console.log(action.payload);
                updateWorkspaceBoardLS(action.payload.updatedWorkspace,action.payload.prevState);
                workspaceAdapter.updateOne(state,{id:action.payload.updatedWorkspace.w_id,changes:action.payload.updatedWorkspace});
            })
    }
})

export const {
    selectAll:selectAllWorkspaces,
    selectById:selectWorkspaceById
} = workspaceAdapter.getSelectors((state:{workspace:initialStateType})=>state.workspace);

export const {
    changeModal,
    setNewWorkspaceName,
    setNewSelect
} = workspaceSlice.actions;

export const getWorkSpaceModal = (state:RootState) => state.workspace.addWorkspaceModal;
export const getWorkspaceSelect = (state:RootState) => state.workspace.selectWorkspace;

export default workspaceSlice.reducer;

import { createAsyncThunk, createEntityAdapter,createSlice,PayloadAction  } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { addWorkspace, getWorkspaces, removeWorkspace} from "../../customLogic";

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
        rejectWithValue(e);
    }
})
 
export const removeExistingWorkspace = createAsyncThunk('workspace/removeWorkspaces', async(workspaceId:string,{getState,rejectWithValue})=> {
    try{

        const state = getState() as RootState;

        return{plannedRemove:workspaceId,workspaceState:selectAll(state)};
    }catch(e:any){
        console.log("Ran into issue removing the workspace!")
        rejectWithValue(e);
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

        // const newUserInfo = {
        //     ...state.user.user,
        //     workspaces:[...state.user.user.workspaces,newWorkspace.w_id]
        // }

        // return the workspace, and a array of all our previous workspace
    return {newWorkspace:newWorkspace,prevStates:selectAll(state)};

    } catch(e:any){
        console.log("Ran into issue adding new workspace!")
        rejectWithValue(e);
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
            .addCase(initiateWorkspace.fulfilled,(state,action)=>{
                state.status = 'succeeded';
                workspaceAdapter.upsertMany(state,action.payload as workspace[]);
            })
            // take in our previous state and action payload and pass it to our function with custome code
            // this code is in charge of communicating with our local storage
            .addCase(addNewWorkspace.fulfilled,(state,action)=> {
                state.status = 'succeeded';
                // updateUser(action.payload!.newUserInfo);
                addWorkspace(action.payload!.newWorkspace,action.payload!.prevStates);
                workspaceAdapter.addOne(state,action.payload!.newWorkspace as workspace);
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
            .addCase(removeExistingWorkspace.fulfilled,(state,action)=> {
                state.status = 'succeeded';
                removeWorkspace(action.payload!.plannedRemove,action.payload!.workspaceState as workspace[]);
                workspaceAdapter.removeOne(state,action.payload!.plannedRemove as string);
            })
    }
})

export const {
    selectAll,
    selectById
} = workspaceAdapter.getSelectors((state:{workspace:initialStateType})=>state.workspace);

export const {
    changeModal,
    setNewWorkspaceName,
    setNewSelect
} = workspaceSlice.actions;

export const getWorkSpaceModal = (state:RootState) => state.workspace.addWorkspaceModal;
export const getWorkspaceSelect = (state:RootState) => state.workspace.selectWorkspace;

export default workspaceSlice.reducer;
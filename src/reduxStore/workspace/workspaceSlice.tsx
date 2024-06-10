
import { createAsyncThunk, createEntityAdapter,createSlice,PayloadAction  } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { getWorkspaces } from "../../customLogic";

export type workspace = {
    w_id:string,
    u_id:string,
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
    selectWorkspace: null | string
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

export const addNewWorkspace = createAsyncThunk('workspace/addWorkspaces', async(workspaceName:string,{rejectWithValue,requestId})=>{
    console.log(requestId);
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
    }
})

export const {
    selectAll
} = workspaceAdapter.getSelectors((state:{workspace:initialStateType})=>state.workspace);

export const {
    changeModal,
    setNewWorkspaceName,
    setNewSelect
} = workspaceSlice.actions;

export const getWorkSpaceModal = (state:RootState) => state.workspace.addWorkspaceModal;
export const getWorkspaceSelect = (state:RootState) => state.workspace.selectWorkspace;

export default workspaceSlice.reducer;
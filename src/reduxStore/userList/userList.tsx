import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { user } from "../users/userSlice"
import { RootState } from "../store";

type initialStateType = {
    ids: string[],
    entities:Record<string,user>,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null | string,
};

const userListAdapter = createEntityAdapter({
    selectId: (user:user) => user.u_id,
    sortComparer: (a,b) => a.u_id.localeCompare(b.u_id)
});

const initialState:initialStateType = userListAdapter.getInitialState({
    status: 'idle',
    error:null
});

export const initiateUserList = createAsyncThunk('userList/getUsers', async(_,{rejectWithValue})=> {
    try{

    }catch(e:any){
        return rejectWithValue(e);
    }
});

const userListSlice = createSlice({
    name:'userList',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
            .addCase(initiateUserList.fulfilled, (_,action)=> {
                console.log(action);
            })
    }
});

export const {
    selectAll:selectAllUserLists
} = userListAdapter.getSelectors((state:RootState)=>state.userList);

export const  {} = userListSlice.actions;

export default userListSlice.reducer;
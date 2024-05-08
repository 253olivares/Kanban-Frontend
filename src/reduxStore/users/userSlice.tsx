import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{CancelTokenSource} from "axios";

type initialStateType = {
    user:userInformation | null,
    status:'idle' | 'fulfilled' | 'failed' | 'pending',
    error: string | null
}

type userInformation = {
    first_name:string,
    last_name:string,
    username:string,
    email:string,
    password:string,
    pfp:string,
    createdAt:string,
    workspaces:string[],
    boards:string[],
    lists:string[],
    tasks:string[],
}

const initialState:initialStateType = {
    user:null,
    status:'idle',
    error:null
}

export const checkLogin = createAsyncThunk('user/checkLogin', async(_,{rejectWithValue, signal})=> {
    try{
        const source:CancelTokenSource = axios.CancelToken.source();
        signal.addEventListener('abort',()=> {
            source.cancel();
        })
    }catch(error:unknown){
        console.log(`checkLogin:${error}`);
        return rejectWithValue(error);
    }
});

export const createAccount = createAsyncThunk('user/createAccount',async(_,{rejectWithValue,signal})=>{
    try{
        const source:CancelTokenSource = axios.CancelToken.source();
        signal.addEventListener('abort',()=> {
            source.cancel();
        })
    }catch(error:unknown){
        console.log(`createLogin:${error}`);
        return rejectWithValue(error);
    }
});


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers: ()=> {
        
    }
})

export default userSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {user,rememberUser} from '../users/userSlice';


export const storageKey = 'KanBanServerInstance';

type workspace = {
    w_id:string,
    u_id:string,
    boards:string[],
    members:string[]
}

type board = {
    b_id:string,
    u_id:string,
    w_id:string,
    name:string,
    lists:string[],
    label:string[]
}

type list = {
    l_id:string,
    b_id:string,
    name:string,
    order:string, 
    description:string
}

type task = {
    t_id:string,
    l_id:string,
    u_id:string,
    order:number,
    name:string[],
    description:string,
    priority:number,
    isActive:boolean,
    assignees:string[],
    story:number,
    createdAt:Date,
    updatedAt:Date,
}

type comments = {
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


type KanBanStorage = {
        RememberUser: rememberUser | null,
        userList:{
            [key:string] : user
        },
        taskList:task[],
        listList:list[],
        boardList:board[],
        workspaceList:workspace[],
        commentList:comments[]
}

type initalStateType = {
    applicationStorage:boolean
}

const initialState:initalStateType = {
    applicationStorage:false
}

const appSetUp:KanBanStorage = {
        RememberUser:null,
        userList:{},
        taskList:[],
        listList:[],
        boardList:[],
        workspaceList:[],
        commentList:[]
}

const setStorage = async () => {
    const status = localStorage.setItem(storageKey,JSON.stringify(appSetUp));
    console.log(status);
}

const getStorage = async () => {
    const checkExistance = localStorage.getItem(storageKey);
    if(checkExistance) return true;
    return false;
}

export const checkStorage = createAsyncThunk('user/checkStorage',async(_,{rejectWithValue})=> {
    try {
    const checkExistance = await getStorage();

        if(!checkExistance) {
            console.log('Application storage is not set up. Setting it up right now.');
            await setStorage();
        } else {
            console.log('Application storage is set up.');
        }

    }catch(error:unknown){
        console.log(`checkingStorage:${error}`);
        return rejectWithValue(error);
    }
})

const storageSlice = createSlice({
    name:'storage',
    initialState,
    reducers:{},
    extraReducers: (builder)=> {
        builder
            .addCase(checkStorage.fulfilled,(state,_)=>{
                state.applicationStorage = true;
                console.log(`fulfilledCase`);
            })
            .addCase(checkStorage.rejected,(state,_)=> {
                state.applicationStorage = false;
                console.log('checkStorageFailed: Error')
            })
    }
})

export default storageSlice.reducer;
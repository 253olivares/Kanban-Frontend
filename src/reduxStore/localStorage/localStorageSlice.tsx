import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkStorages } from "../../customLogic/CustomLogic";

export const storageKey = 'KanBanServerInstance';


// type KanBanStorage = {
//         RememberUser: rememberUser | null,
//         userList:{
//             [key:string] : user
//         },
//         taskList:task[],
//         listList:list[],
//         boardList:board[],
//         workspaceList:workspace[],
//         commentList:comments[]
// }

type initalStateType = {
    applicationStorage:boolean
}

const initialState:initalStateType = {
    applicationStorage:false
}

// const appSetUp:KanBanStorage = {
//         RememberUser:null,
//         userList:{},
//         taskList:{},
//         listList:{},
//         boardList:{},
//         workspaceList:{},
//         commentList:{}
// }


export const checkStorage = createAsyncThunk('user/checkStorage',async(_,{rejectWithValue})=> {
    try {
        await checkStorages();
    }catch(error:unknown){
        alert("Ran into issues setting up localStorage!");
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
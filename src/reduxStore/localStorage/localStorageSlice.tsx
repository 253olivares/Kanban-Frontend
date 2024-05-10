import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios,{CancelTokenSource} from "axios"


type initalStateType= {
    applicationStorage:boolean
}


const initialState:initalStateType = {
    applicationStorage:false
}

export const checkStorage = createAsyncThunk('user/checkStorage',async(_,{rejectWithValue,signal})=> {
    try {
        const source:CancelTokenSource = axios.CancelToken.source();
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
            })
            .addCase(checkStorage.rejected,(state,_)=>{
                state.applicationStorage = false;
            })


    }
})

export default storageSlice.reducer;
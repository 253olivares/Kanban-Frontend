import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user:null,
    status:'idle',
    error:null
}



const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers: ()=> {
        
    }
})

export default userSlice.reducer;
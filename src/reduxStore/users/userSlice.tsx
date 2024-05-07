import { createSlice } from "@reduxjs/toolkit"

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



const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers: ()=> {
        
    }
})

export default userSlice.reducer;
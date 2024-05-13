import { createDefaultBaseImage, passwordEncrption, checkPasswordMatch, addUser, searchUser, resetRemember, getRemember, setRemember, getUserFromList } from "../../customLogic";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type initialStateType = {
    user:user | null,
    status:'idle' | 'fulfilled' | 'failed' | 'pending',
    error: string | null
}

// this is to create a list of users that we can invite to workspaces
// without getting sensitive userData;

export type rememberUser = {
    rememberDate:Date,
    userId:string,
    email:string,
    password:string
}

export type user = {
    u_id:string,
    first_name:string,
    last_name:string,
    username:string,
    email:string,       
    password:string,
    pfp:string,
    createdAt:string,
    workspaces: string[]
    boards: string[],
    lists: string[],
}

const initialState:initialStateType = {
    user:null,
    status:'idle',
    error:null
}
// function that will check to see if a users login information is cached 
// to be used on auto login next time the user access the page
export const checkRemembered = createAsyncThunk('user/checkRemember', async (_,{rejectWithValue}) => {
    try{
   
        const rem:rememberUser = await getRemember();
     
        if(!rem){

            throw new Error('No user found - Failed at checking rem');

        } else {
         
            const formatedDate = new Date(rem.rememberDate);

            const timestampDay = formatedDate.getDate();
            const timestampYear = formatedDate.getFullYear();
            const timestampMonth = formatedDate.getMonth() + 1;

            const currentDate = new Date;
            const currentDay = currentDate.getDate();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1;
            
            if(currentYear - timestampYear >=1 || currentMonth - timestampMonth >= 1 || currentDay - timestampDay >= 2 ) {
                alert('Authentication is expired! Please log in again');
                resetRemember();
                throw new Error('Authentication is out of date!')
            } else {
                const user = getUserFromList(rem.userId);
                console.log('check rememer after get user',user);
                if(user){
                    return user;
                } else {
                    throw new Error('Authentication credentials invalid');
                }
            }
        }
    } catch (error:unknown) {
        console.log('No user found');
        console.log(error);
        return rejectWithValue(null);
    }
})

// login type for when a user logs in
type loginType = {
    email:string,
    password:string,
    remember:boolean
}

// Our function to log in the user when they fill in the login modal information
export const checkLogin = createAsyncThunk('user/checkLogin', async({email,password,remember}:loginType,{rejectWithValue})=> {
    try{
        const user:user|null = searchUser(email,password);
        console.log('user',user);
        if(!user) {
            alert('No credentials found please check ur username and password again!')
            throw new Error('No user was found')
        } else {
           if(remember){
                console.log('add this user to remember so that they are automatically logged in next time!');
                setRemember(user);
           }
           return user;
        }
    }catch(error:unknown){
        console.log(`checkLogin:${error}`);
        return rejectWithValue(null);
    }
});

// defining our payload for when a user creates an account 
type createPayload = {
    firstname:string,
    lastname:string,
    username:string,
    email:string,
    password:string
}

// function that runs when the user fills out the create modal
export const createAccount = createAsyncThunk('user/createAccount',async({firstname,lastname,username,email,password}:createPayload,{rejectWithValue,requestId})=>{
    try{

        console.log(requestId);

        const id = `user_${requestId}`;

        const accountCreation = new Date; 

        const hashedPassword = passwordEncrption(password); 
        const checkIfMatch = checkPasswordMatch (password,hashedPassword);

        const imageTest = createDefaultBaseImage(firstname[0].toUpperCase(),lastname[0].toUpperCase());

        const newUser:user = {
            u_id:id,
            first_name:firstname,
            last_name:lastname,
            username:username,
            email:email,    
            password:hashedPassword,
            pfp: imageTest? imageTest : 'null',
            createdAt:accountCreation.toLocaleString(),
            workspaces: [],
            boards: [],
            lists: [],
        }

        if(checkIfMatch) {
            addUser(newUser);
            return newUser;
        } else {
            throw new Error('Ran into an issues within the API.');
        }

    }catch(error:unknown){
        console.log(`createLogin:${error}`);
        return rejectWithValue(error);
    }
});


// Our user slice that handles all the use logins
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logOut (state) {
            resetRemember();
            state.user = null;
        }
    },
    extraReducers: (builder)=> {
       builder
            .addCase(createAccount.fulfilled,(state,action:PayloadAction<user>)=> {
                state.user= action.payload;
            })
            .addCase(checkLogin.fulfilled,(state,action:PayloadAction<user>)=> {
                console.log(action.payload)
                state.user= action.payload;
            })
            .addCase(checkRemembered.fulfilled, (state,action:PayloadAction<user>)=> {
                state.user = action.payload;
            })
    }
})

export const getUser = (state:RootState) => state.user.user;

export const {logOut} =userSlice.actions;

export default userSlice.reducer;
import { PayloadAction, createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { addCommentCL, getComments, removeCommentCl, updateCommentCL } from "../../customLogic/CustomLogic";
import { RootState } from "../store";

export type comments = {
    c_id:string,
    u_id:string,
    t_id:string,
    message:string,
    createdAt:string,
    createTime:string,
    updatedAt:string,
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

type initialStateType = {
    ids: string[],
    entities: Record<string,comments>,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null | string ,
}

const commentAdapter = createEntityAdapter({
    selectId: (comment:comments) => comment.c_id,
    sortComparer:(a,b) => a.c_id.localeCompare(b.c_id),
})

const initialState:initialStateType = commentAdapter.getInitialState({
    status:'idle',
    error:null
})

export const initialComments = createAsyncThunk('comments/getComments',async(_,{rejectWithValue})=> {
    try{
        const data:comments[] | null = getComments();
        if(!data) throw new Error("Ran into issues!");
        return data;
    }catch(e:any) {
        console.log('Ran into issues getting comments!');
        return rejectWithValue(e);
    }
})

export const removeComments = createAsyncThunk('comments/removeComments',async(
    {
        commentId
    } : {
        commentId:string
    }, {rejectWithValue, getState}
) => {
    try {
        const state = getState() as RootState;
        return {commentId:commentId,prevState:selectAllComments(state)}
    } catch(e:any) {
        return rejectWithValue(e)
    }
})

export const updateComment = createAsyncThunk('comments/updateComment', async(
    {
        commentChange,
        commentId
    } : {
        commentChange:string,
        commentId:string
    }, {rejectWithValue,getState}
)=> {
    try{
        const state = getState() as RootState;

        const comment = selectCommentById(state,commentId);

        const updateComment = {
            ...comment,
            message:commentChange
        }

        return{commentChange:updateComment,prevComments:selectAllComments(state)}

    } catch(e:any) {
        return rejectWithValue(e);
    }
})

export const updateCommentsReaction = createAsyncThunk('comments/updateCommentsReaction',async(
    {
        commentId,
        updateList,
        updateCount
    } : {
        commentId:string,
        updateList:Record<string,string[]>
        updateCount:Record<string,number>
    }, {rejectWithValue, getState}
)=>{
    try{
        const state = getState() as RootState;

        const prevComment = selectCommentById(state,commentId);

        console.log(updateList);
        console.log(updateCount);

        const updateCommentInfo = {
            ...prevComment,
            reactions:{
                ...prevComment.reactions,
                ...updateCount
            },
            userReactions: {
                ...prevComment.userReactions,
                ...updateList
            }
            
        }

        return {updateComment:updateCommentInfo, prevComments:selectAllComments(state)}

    } catch(e:any) {
        return rejectWithValue(e);
    }
})

export const createNewComments = createAsyncThunk('comments/createNewComments',async(
    {
        taskId,
        userId,
        comments
    } : {
        taskId:string,
        userId:string,
        comments:string
    },{rejectWithValue,getState,requestId}
)=>{
    try{
        const state = getState() as RootState;

        const currentDate = new Date();

        const newComment:comments = {
            c_id: `comments_${requestId}`,
            u_id: userId,
            t_id: taskId,
            message: comments,
            createdAt: currentDate.toLocaleString(),
            createTime: `${currentDate.getHours()>12 ?currentDate.getHours() - 12 : currentDate.getHours() }:${(currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes()} ${currentDate.getHours() >= 12 ? 'pm' : 'am'}`,
            updatedAt: currentDate.toLocaleString(),
            reactions: {
                thumbUp: 0,
                party: 0,
                smile: 0
            },
            userReactions: {
                thumbUp: [],
                party: [],
                smile: []
            }
        }

        return {newComment:newComment,prevComments:selectAllComments(state)}
    }catch (e:any) {
        return rejectWithValue(e);
    }
})

const commentSlice = createSlice({
    name:'comments',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder
        .addCase(initialComments.pending, (state,_)=>{
            state.status = 'loading';
        })
        .addCase(initialComments.rejected, (state,_)=>{
            state.status = 'failed';
        })
        .addCase(initialComments.fulfilled, (state,action:PayloadAction<comments[]>)=> {
            state.status = 'succeeded';
            commentAdapter.upsertMany(state,action.payload);
        })
        .addCase(createNewComments.fulfilled, (state,action:PayloadAction<{newComment:comments,prevComments:comments[]}>)=> {
            addCommentCL(action.payload.newComment,action.payload.prevComments);
            commentAdapter.addOne(state,action.payload.newComment);
        })
        .addCase(removeComments.fulfilled,(state,action:PayloadAction<{commentId:string,prevState:comments[]}>)=>{
            removeCommentCl(action.payload.commentId,action.payload.prevState);
            commentAdapter.removeOne(state,action.payload.commentId);
        })
        .addCase(updateComment.fulfilled,(state,action:PayloadAction<{commentChange:comments,prevComments:comments[]}>)=> {
            updateCommentCL(action.payload.commentChange,action.payload.prevComments);
            commentAdapter.updateOne(state,{id:action.payload.commentChange.c_id,changes:action.payload.commentChange});
        })
        .addCase(updateCommentsReaction.fulfilled, (state,action:PayloadAction<{updateComment:comments, prevComments:comments[]}>)=>{
            updateCommentCL(action.payload.updateComment,action.payload.prevComments);
            commentAdapter.updateOne(state,{id:action.payload.updateComment.c_id,changes:action.payload.updateComment})
        })
    }
})

export const {
    selectAll:selectAllComments,
    selectById:selectCommentById
} = commentAdapter.getSelectors((state:RootState)=> state.comments);
 
export const {} = commentSlice.actions;

export const getCommenets = (state:RootState) => state.comments;

export default commentSlice.reducer;
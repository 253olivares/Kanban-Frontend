import { memo } from "react"
import UserIconNameRole from "./UserIconNameRole"
import Comment from './Comment';
import CommentsAdminControl from "./CommentsAdminControl";
import Reactions from "./Reactions";
import { user } from "../../../../../reduxStore/users/userSlice";
import { useAppDispatch, useAppSelector } from "../../../../../reduxStore/hook";
import { comments, removeComments, selectCommentById } from "../../../../../reduxStore/comments/commentsSlice";
import { removeCommentFromTask } from "../../../../../reduxStore/tasks/tasksSlice";


const TaskComment = memo(({
    boardId,
    taskId,
    assignees,
    userInfo,
    adminCred,
    comment,
    openCommentEdit,
    setCommentFn
} : {
    boardId:string,
    taskId:string,
    assignees:string[]
    userInfo:user,
    adminCred:boolean,
    comment:string,
    openCommentEdit:()=>void,
    setCommentFn:(comment:comments)=>void
}) => {
  
  const dispatch = useAppDispatch();

  const commentData = useAppSelector(state => selectCommentById(state,comment))

  const deleteComment = () => {
    dispatch(removeCommentFromTask({taskId:commentData.t_id,commentId:commentData.c_id})).unwrap().then(()=>{
      dispatch(removeComments({commentId:commentData.c_id}))
    })
  }

  return (
    <div className="
    w-full

    bg-SpaceBlue
    
    flex
    flex-col

    px-[0.527rem]
    mobile:px-[0.703rem]
    sMobile:px-[1.125rem]
    mMobile:px-[1.35rem]
    sLaptop:px-[0.582rem]
    mLaptop:px-[0.728rem]
    desktop:px-[0.875rem]
    largeDesktop:px-[1.093rem]

    py-[0.527rem]
    mobile:py-[0.703rem]
    sMobile:py-[1.125rem]
    mMobile:py-[1.35rem]
    sLaptop:py-[0.582rem]
    mLaptop:py-[0.728rem]
    desktop:py-[0.875rem]
    largeDesktop:py-[1.093rem]

    gap-[0.585rem]
    mobile:gap-[0.781rem]
    sMobile:gap-[1.25rem]
    mMobile:gap-[1.5rem]
    sLaptop:gap-[0.499rem]
    mLaptop:gap-[0.624rem]
    desktop:gap-[0.75rem]
    largeDesktop:gap-[0.937rem]

    rounded-[0.140rem]
    mobile:rounded-[0.187rem]
    sMobile:rounded-[.3rem]
    mMobile:rounded-[0.36rem]
    sLaptop:rounded-[0.315rem]
    mLaptop:rounded-[0.394rem]
    desktop:rounded-[0.473rem]
    largeDesktop:rounded-[0.591rem]

    flex-shrink-0
    ">
        <CommentHead boardId={boardId} commentid={commentData.u_id} taskId={taskId} assignees={assignees} commentUser={commentData.u_id} postDate ={ new Date(commentData.createdAt)} createTime={commentData.createTime}/>
        <Comment comment={commentData.message}/>
        <EditDeleteReactions hide={assignees.includes(commentData.u_id) || commentData.u_id===taskId} commentId={commentData} setCommentFn={setCommentFn} openCommentEdit={openCommentEdit} deleteComment={deleteComment} assignees={assignees} commentUser={commentData.u_id} userInfo={userInfo} adminCred={adminCred} commentsReactions={commentData.reactions} usersReacted={commentData.userReactions} />
    </div>
  )
})

const   EditDeleteReactions = memo(({
  assignees,
  commentUser,
  userInfo,
  adminCred,
  commentsReactions,
  usersReacted,
  deleteComment,
  openCommentEdit,
  setCommentFn,
  commentId,
  hide
} : {
  assignees:string[],
  commentUser:string,
  userInfo:user,
  adminCred:boolean,
  commentsReactions:Record<string,number>,
  usersReacted:Record<string,string[]>,
  deleteComment:()=>void,
  openCommentEdit:()=>void,
  setCommentFn:(comment:comments)=>void,
  commentId:comments,
  hide:boolean
}) => {
  return <div className="
  w-full

  flex
  flex-row

  items-center

  justify-between
  ">
    {
      hide ?
      <Reactions commentID={commentId.c_id} adminCred={adminCred} assignees={assignees} userInfo={userInfo} commentsReactions={commentsReactions} usersReacted={usersReacted} /> : <div/>
    }
    <CommentsAdminControl commentId={commentId} setCommentFn={setCommentFn} openCommentEdit={openCommentEdit} deleteComment = {deleteComment} commentUser={commentUser} userInfo={userInfo} adminCred={adminCred} />
  </div>
})

const CommentHead = memo(({
  boardId,
  commentid,
  taskId,
  assignees,
  commentUser,
  postDate,
  createTime
} : {
  boardId:string,
  commentid:string,
  taskId:string,
  assignees: string[],
  commentUser:string,
  postDate:Date,
  createTime:string,
})=>{
  return <div className="
  
  flex
  flex-row

  justify-between
  ">
    <UserIconNameRole boardId={boardId} adminCred={commentid === taskId} assignees={assignees} userId={commentUser} /> 
    <PostDate postDate={postDate} createTime={createTime} /> 
  </div>
})


const PostDate = memo(({
  postDate,
  createTime
} : {
  postDate:Date,
  createTime:string
})=>{

  const weekdayString = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const weekDay = postDate.getDay();

  const date = postDate.getDate();

  const nthNumber = (number:number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  return <h1 className="

  text-[0.502rem]
  mobile:text-[0.67rem]
  sMobile:text-[1.072rem]
  mMobile:text-[1.286rem]
  sLaptop:text-[0.625rem]
  mLaptop:text-[0.781rem]
  desktop:text-[0.938rem]
  largeDesktop:text-[1.172rem]

  text-PrimaryWhite

  font-medium

  opacity-75
  ">
    {weekdayString[weekDay]+ " " + date+nthNumber(date)+" at "+ createTime}
  </h1>
})

export default TaskComment
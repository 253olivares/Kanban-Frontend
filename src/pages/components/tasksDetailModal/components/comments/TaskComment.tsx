import { memo } from "react"
import UserIconNameRole from "./UserIconNameRole"
import Comment from './Comment';
import CommentsAdminControl from "./CommentsAdminControl";
import Reactions from "./Reactions";
import { commentTest } from "./CommentsHolder";
import { user } from "../../../../../reduxStore/users/userSlice";


const TaskComment = memo(({
    assignees,
    userInfo,
    adminCred,
    comment
} : {
    assignees:string[]
    userInfo:user,
    adminCred:boolean,
    comment:commentTest
}) => {
  console.log(comment)
  return (
    <div className="
    w-full

    bg-SpaceBlue

    flex
    flex-col

    sLaptop:px-[0.582rem]
    mLaptop:px-[0.728rem]
    desktop:px-[0.875rem]
    largeDesktop:px-[1.093rem]

    sLaptop:py-[0.582rem]
    mLaptop:py-[0.728rem]
    desktop:py-[0.875rem]
    largeDesktop:py-[1.093rem]

    sLaptop:gap-[0.499rem]
    mLaptop:gap-[0.624rem]
    desktop:gap-[0.75rem]
    largeDesktop:gap-[0.937rem]

    sLaptop:rounded-[0.315rem]
    mLaptop:rounded-[0.394rem]
    desktop:rounded-[0.473rem]
    largeDesktop:rounded-[0.591rem]
    ">
        <CommentHead commentUser={comment.u_id} postDate ={comment.date}/>
        <Comment comment={comment.message}/>
        <EditDeleteReactions assignees={assignees} commentUser={comment.u_id} userInfo={userInfo} adminCred={adminCred} commentsReactions={comment.reactions} usersReacted={comment.userReactions} />
    </div>
  )
})

const EditDeleteReactions = memo(({
  assignees,
  commentUser,
  userInfo,
  adminCred,
  commentsReactions,
  usersReacted
} : {
  assignees:string[],
  commentUser:string,
  userInfo:user,
  adminCred:boolean,
  commentsReactions:Record<string,number>,
  usersReacted:Record<string,string[]>
}) => {
  return <div className="
  w-full

  flex
  flex-row

  items-center

  justify-between
  ">
    <Reactions assignees={assignees} userInfo={userInfo} commentsReactions={commentsReactions} usersReacted={usersReacted} />
    <CommentsAdminControl commentUser={commentUser} userInfo={userInfo} adminCred={adminCred} />
  </div>
})

const CommentHead = memo(({
  commentUser,
  postDate
} : {
  commentUser:string,
  postDate:Date
})=>{
  return <div className="
  flex
  flex-row

  justify-between
  ">
    <UserIconNameRole userId={commentUser} /> 
    <PostDate postDate={postDate} /> 
  </div>
})


const PostDate = memo(({
  postDate
} : {
  postDate:Date
})=>{

  const weekdayString = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const weekDay = postDate.getDay();

  const date = postDate.getDate();

  const hours = postDate.getHours();

  const minutes = postDate.getMinutes();

  const ampm = hours >= 12 ? 'pm' : 'am';

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

  sLaptop:text-[0.625rem]
  mLaptop:text-[0.781rem]
  desktop:text-[0.938rem]
  largeDesktop:text-[1.172rem]

  text-PrimaryWhite

  font-medium

  opacity-75
  ">
    {weekdayString[weekDay]+ " " + date+nthNumber(date)+" at "+ hours+":"+minutes+ " " +ampm}
  </h1>
})

export default TaskComment
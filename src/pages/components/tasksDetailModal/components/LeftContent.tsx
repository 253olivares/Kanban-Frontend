import { memo } from "react"
import { task } from "../../../../reduxStore/tasks/tasksSlice"
import TaskDescription from "./description/TaskDescription"
import TaskComments from "./comments/TaskComments"
import { user } from "../../../../reduxStore/users/userSlice"
import { comments } from "../../../../reduxStore/comments/commentsSlice"
import TaskUsers from "./users/TaskUsers"
import { miniTaskTypes } from "../TaskDetailModal"
import TaskFilterSection from "./filters/TaskFilter"


const LeftContent = memo(({
  boardId,
  taskId,
  taskDescription,
  setTaskDescription,
  comments,
  setComment,
  userInfo,
  adminCred,
  task,
  addNewComment,
  openCommentEdit,
  setCommentFn,
  setOpenTaskMiniModal
} : {
  boardId:string
  taskId:string,
  taskDescription:string,
  setTaskDescription:React.Dispatch<React.SetStateAction<string>>,
  comments:string,
  setComment:React.Dispatch<React.SetStateAction<string>>,
  userInfo:user,
  adminCred:boolean,
  task:task,
  addNewComment:()=>void,
  openCommentEdit:()=>void,
  setCommentFn:(comment:comments)=>void,
  setOpenTaskMiniModal:React.Dispatch<React.SetStateAction<miniTaskTypes>>,

}) => {
  return (
    <div className="
     
     w-full
     sLaptop:w-[calc(100%-32.5%)]
     
     flex
     flex-col

     flex-grow-0
    ">
      <TaskDescription taskId={task.t_id} taskDescription={taskDescription} setTaskDescription={setTaskDescription} adminCred={adminCred} description={task.description} />
      <div className="
      sLaptop:hidden

      w-full

      flex
      flex-col

      gap-[0.732rem]
      mobile:gap-[0.976rem]
      sMobile:gap-[1.563rem]
      mMobile:gap-[1.875rem]
      
      ">
        <TaskUsers boardId={boardId} setOpenTaskMiniModal={setOpenTaskMiniModal} adminCred={adminCred} usersAdded ={task.assignees} admin = {task.admin_id} />
        <TaskFilterSection adminCred={adminCred} taskId={task.t_id} taskPrio={task.priority} />
      </div>
      <TaskComments boardId={boardId} taskId={taskId} setCommentFn={setCommentFn} openCommentEdit={openCommentEdit} addNewComment={addNewComment} comments={comments} setComment={setComment} userInfo={userInfo}  adminCred={adminCred} taskComments={task.comments} assignees={task.assignees}/>
    </div>
  )
})

export default LeftContent
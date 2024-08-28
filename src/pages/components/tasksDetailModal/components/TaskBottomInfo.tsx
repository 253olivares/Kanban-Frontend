import { memo } from "react"
import { task } from "../../../../reduxStore/tasks/tasksSlice"
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"
import { user } from "../../../../reduxStore/users/userSlice"
import { miniTaskTypes } from "../TaskDetailModal"
import { comments } from "../../../../reduxStore/comments/commentsSlice"


const TaskBottomInfo = memo(({
    boardId,
    setOpenTaskMiniModal,
    taskDescription,
    setTaskDescription,
    comments,
    setComment,
    userInfo,
    adminCred,
    task,
    addNewComment,
    openCommentEdit,
    setCommentFn
} : {
    boardId:string,
    setOpenTaskMiniModal:React.Dispatch<React.SetStateAction<miniTaskTypes>>,
    taskDescription:string,
    setTaskDescription:React.Dispatch<React.SetStateAction<string>>,
    comments:string,
    setComment:React.Dispatch<React.SetStateAction<string>>,
    userInfo:user,
    adminCred:boolean,
    task:task,
    addNewComment:()=>void,
    openCommentEdit:()=>void,
    setCommentFn:(comment:comments) => void
}) => {
  return (
    <div className="
    flex
    flex-row
    sLaptop:py-[1.022rem]
    mLaptop:py-[1.278rem]
    desktop:py-[1.533rem]
    largeDesktop:py-[1.917rem]
    ">
        <LeftContent boardId={boardId} taskId={task.admin_id} setCommentFn={setCommentFn} openCommentEdit={openCommentEdit} addNewComment={addNewComment} taskDescription={taskDescription} setTaskDescription={setTaskDescription} comments={comments} setComment={setComment} userInfo={userInfo} adminCred={adminCred} task ={task}/>
        <RightContent setOpenTaskMiniModal={setOpenTaskMiniModal} adminCred={adminCred} task = {task}/>
    </div>
  )
})

export default TaskBottomInfo
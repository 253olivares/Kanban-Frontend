import { memo } from "react"
import { task } from "../../../../reduxStore/tasks/tasksSlice"
import TaskDescription from "./description/TaskDescription"
import TaskComments from "./comments/TaskComments"
import { user } from "../../../../reduxStore/users/userSlice"


const LeftContent = memo(({
  taskDescription,
  setTaskDescription,
  comments,
  setComment,
  userInfo,
  adminCred,
  task,
  addNewComment
} : {
  taskDescription:string,
  setTaskDescription:React.Dispatch<React.SetStateAction<string>>,
  comments:string,
  setComment:React.Dispatch<React.SetStateAction<string>>,
  userInfo:user,
  adminCred:boolean,
  task:task,
  addNewComment:()=>void
}) => {
  return (
    <div className="

     flex
     flex-col

     w-[calc(100%-32.5%)]

     flex-grow-0

    ">
      <TaskDescription taskId={task.t_id}  taskDescription={taskDescription} setTaskDescription={setTaskDescription} adminCred={adminCred} description={task.description} />
      <TaskComments addNewComment={addNewComment} comments={comments} setComment={setComment} userInfo={userInfo}  adminCred={adminCred} taskComments={task.comments} assignees={task.assignees}/>
    </div>
  )
})

export default LeftContent
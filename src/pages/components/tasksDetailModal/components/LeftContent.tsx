import { memo } from "react"
import { task } from "../../../../reduxStore/tasks/tasksSlice"
import TaskDescription from "./description/TaskDescription"
import TaskComments from "./comments/TaskComments"
import { user } from "../../../../reduxStore/users/userSlice"


const LeftContent = memo(({
  userInfo,
  adminCred,
  task
} : {
  userInfo:user,
  adminCred:boolean,
  task:task
}) => {
  return (
    <div className="

     flex
     flex-col

     w-[calc(100%-32.5%)]

     flex-grow-0

    ">
      <TaskDescription adminCred={adminCred} description={task.description} />
      <TaskComments userInfo={userInfo}  adminCred={adminCred} taskComments={task.comments} assignees={task.assignees}/>
    </div>
  )
})

export default LeftContent
import { memo } from "react"
import { task } from "../../../../reduxStore/tasks/tasksSlice"
import TaskFilterSection from "./filters/TaskFilter"
import TaskUsers from "./users/TaskUsers"
import { miniTaskTypes } from "../TaskDetailModal"



const RightContent = memo(({
    setOpenTaskMiniModal,
    adminCred,
    task
}:{
    setOpenTaskMiniModal:React.Dispatch<React.SetStateAction<miniTaskTypes>>,
    adminCred:boolean,
    task:task
}) => {
  return (
    <div className="
    hidden
    sLaptop:flex
    flex-col

    w-[32.5%]

    sLaptop:gap-[0.8rem]
    mLaptop:gap-[1rem]
    desktop:gap-[1.2rem]
    largeDesktop:gap-[1.5rem]

    flex-shrink-0
    
    ">
        <TaskUsers setOpenTaskMiniModal={setOpenTaskMiniModal} adminCred={adminCred} usersAdded ={task.assignees} admin = {task.admin_id} />
        <TaskFilterSection adminCred={adminCred} taskId={task.t_id} taskPrio={task.priority} />
    </div>
  )
})

export default RightContent
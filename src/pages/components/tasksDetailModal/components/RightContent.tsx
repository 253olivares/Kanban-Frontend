import { task } from "../../../../reduxStore/tasks/tasksSlice"
import TaskFilterSection from "./TaskFilter"
import TaskUsers from "./TaskUsers"



const RightContent = ({
    task
}:{
    task:task
}) => {
  return (
    <div className="
    flex
    flex-col

    w-[32.5%]

    sLaptop:gap-[1.458rem]
    mLaptop:gap-[1.823rem]
    desktop:gap-[2.188rem]
    largeDesktop:gap-[2.735rem]

    ">
        <TaskUsers usersAdded ={task.assignees} admin = {task.admin_id} />
        <TaskFilterSection taskId={task.t_id} taskPrio={task.priority} />
    </div>
  )
}

export default RightContent
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

    sLaptop:gap-[0.8rem]
    mLaptop:gap-[1rem]
    desktop:gap-[1.2rem]
    largeDesktop:gap-[1.5rem]

    ">
        <TaskUsers usersAdded ={task.assignees} admin = {task.admin_id} />
        <TaskFilterSection taskId={task.t_id} taskPrio={task.priority} />
    </div>
  )
}

export default RightContent
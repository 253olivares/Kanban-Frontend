import { memo } from "react"
import { task } from "../../../../reduxStore/tasks/tasksSlice"
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"


const TaskBottomInfo = memo(({
    task
} : {
    task:task
}) => {
  return (
    <div className="
    flex
    flex-row
    ">
        <LeftContent/>
        <RightContent task = {task}/>
    </div>
  )
})

export default TaskBottomInfo
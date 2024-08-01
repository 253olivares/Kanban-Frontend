import { memo } from "react"
import { task } from "../../../../reduxStore/tasks/tasksSlice"
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"
import { user } from "../../../../reduxStore/users/userSlice"


const TaskBottomInfo = memo(({
    taskDescription,
    setTaskDescription,
    comments,
    setComment,
    userInfo,
    adminCred,
    task
} : {
    taskDescription:string,
    setTaskDescription:React.Dispatch<React.SetStateAction<string>>,
    comments:string,
    setComment:React.Dispatch<React.SetStateAction<string>>,
    userInfo:user,
    adminCred:boolean,
    task:task
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
        <LeftContent taskDescription={taskDescription} setTaskDescription={setTaskDescription} comments={comments} setComment={setComment} userInfo={userInfo} adminCred={adminCred} task ={task}/>
        <RightContent adminCred={adminCred} task = {task}/>
    </div>
  )
})

export default TaskBottomInfo
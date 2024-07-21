import { useAppSelector } from "../../../../../../reduxStore/hook"
import { selectTaskById } from "../../../../../../reduxStore/tasks/tasksSlice"

const Tasks = ({
    taskId
} : {
    taskId:string
}) => {

  // @ts-ignore
  const task = useAppSelector(state => selectTaskById(state,taskId));

  return (
    <div className={`
    w-full

    sLaptop:min-h-[4.266rem]
    mLaptop:min-h-[5.333rem]
    desktop:min-h-[6.4rem]
    largeDesktop:min-h-[8rem]
 
    bg-SpaceBlueSelected

    `}>
       
    </div>
  )
}

export default Tasks
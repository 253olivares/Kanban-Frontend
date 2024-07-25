import { useAppSelector } from "../../../../../../reduxStore/hook"
import { selectTaskById } from "../../../../../../reduxStore/tasks/tasksSlice"
import StoryPoint from "./taskComponents/StoryPoint";
import TaskInfo from "./taskComponents/TaskInfo";
import TaskName from "./taskComponents/TaskName";
import TasksFilterHead from "./taskComponents/TasksFilterHead";

const Tasks = ({
    taskId
} : {
    taskId:string
}) => {

  // @ts-ignore
  const task = useAppSelector(state => selectTaskById(state,taskId));

  // 
//   min-h-[4.687rem]
//   mobile:min-h-[6.25rem]
//   sMobile:min-h-[10rem]
//   mMobile:min-h-[12rem]

//   sLaptop:min-h-[4.266rem]
//   mLaptop:min-h-[5.333rem]
//   desktop:min-h-[6.4rem]
//   largeDesktop:min-h-[8rem]
// // // 
//   
  return (
    <div className={`
    w-full

    rounded-[.234rem]
    mobile:rounded-[.312rem]
    sMobile:rounded-[.5rem]
    mMobile:rounded-[.6rem]

    sLaptop:rounded-[0.333rem]
    mLaptop:rounded-[0.416rem]
    desktop:rounded-[0.5rem]
    largeDesktop:rounded-[0.625rem]
 
    bg-SpaceBlueSelected

    cursor-pointer
  
    flex 
    flex-col

    sLaptop:py-[0.426rem]
    mLaptop:py-[0.533rem]
    desktop:py-[0.64rem]
    largeDesktop:py-[.8rem]

    group

    px-[5%]

    `}>
      <TasksFilterHead/>
      <div className="
       flex
       flex-row 
      "> 
        <div className="
        flex
        flex-col

        flex-grow
        ">
            <TaskName />
            <TaskInfo />
        </div>
        <StoryPoint />
      </div>      
    </div>
  )
}

export default Tasks
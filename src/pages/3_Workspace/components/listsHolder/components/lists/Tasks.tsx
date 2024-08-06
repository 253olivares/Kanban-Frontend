import { useAppDispatch, useAppSelector } from "../../../../../../reduxStore/hook"
import { changeTaskModal, setSelectTask } from "../../../../../../reduxStore/modal/modalSlice";
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

  const dispatch = useAppDispatch();

  // @ts-ignore
  const task = useAppSelector(state => selectTaskById(state,taskId));
  
  return (
    <div 
    onClick={
      ()=>{
        dispatch(changeTaskModal(true));
        dispatch(setSelectTask(taskId));
      }
    }
    className={`
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

    py-[0.488rem]
    mobile:py-[0.651rem]
    sMobile:py-[1.041rem]
    mMobile:py-[1.25rem]

    sLaptop:py-[0.426rem]
    mLaptop:py-[0.533rem]
    desktop:py-[0.64rem]
    largeDesktop:py-[.8rem]

    group/task

    px-[5%]

    shrink-0

    `}>
      <TasksFilterHead filter = {task.priority} />
      <div className="
       flex
       flex-row 

       shrink-0
      "> 
        <div className="
        flex
        flex-col

        shrink-0

        flex-grow
        ">
            <TaskName taskName={task.name} />
            <TaskInfo members={task.assignees.length +1} comments={task.comments.length} />
        </div>
        <StoryPoint points={task.story} />
      </div>      
    </div>
  )
}

export default Tasks
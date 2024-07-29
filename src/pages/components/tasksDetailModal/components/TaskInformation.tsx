import { memo } from "react"
import { task } from "../../../../reduxStore/tasks/tasksSlice"
import TaskName from './TaskName';
import Filters from "./Filters";
import TaskInfoExtra from "./TaskInfo";

const TaskInformation = memo((
  {
    task
  } : {
    task:task
  }
) => {
  return (
    <div className="
    w-full
    
    flex
    flex-row

    flex-grow
    px-[2.5%]

    bg-SpaceBlueSelected

    z-[1]
    ">
      <div className="
      w-full

      flex
      flex-row

      flex-grow

      overflow-visible
      ">
        <TaskInfo task={task} />
        <StoryPoints/>
      </div>
    </div>
  )
})

const TaskInfo = memo(({
  task
} : {
  task:task
}) => {

  return <div className="
  flex-grow

  flex
  flex-col

  sLaptop:my-[0.5rem]
  mLaptop:my-[0.625rem]
  desktop:my-[0.75rem]
  largeDesktop:my-[0.937rem]

  sLaptop:gap-[0.5rem]
  mLaptop:gap-[0.625rem]
  desktop:gap-[.75rem]
  largeDesktop:gap-[0.937rem]
  ">
    <TaskName taskName={task.name} />
    <Filters filter={task.priority} />
    <TaskInfoExtra members={task.assignees.length+1} comments={task.comments.length}/>
  </div>
})

const StoryPoints = memo(() => {
  return <div className="
    rounded-full

    bg-SpaceBlue

    sLaptop:h-[4.048rem]
    mLaptop:h-[5.060rem]
    desktop:h-[6.073rem]
    largeDesktop:h-[7.591rem]

    sLaptop:w-[4.048rem]
    mLaptop:w-[5.060rem]
    desktop:w-[6.073rem]
    largeDesktop:w-[7.591rem]

    sLaptop:mt-[calc(-4.048rem/3)]
    mLaptop:mt-[calc(-5.060rem/3)]
    desktop:mt-[calc(-6.073rem/3)]
    largeDesktop:mt-[calc(-7.591rem/3)]

    flex
    justify-center
    items-center

    sLaptop:text-[1.718rem]
    mLaptop:text-[2.148rem]
    desktop:text-[2.578rem]
    largeDesktop:text-[3.222rem]
    text-PrimaryWhite

    font-bold

    relative
  ">
    0
    <h1 className="

      sLaptop:text-[0.833rem]
      mLaptop:text-[1.041rem]
      desktop:text-[1.25rem]
      largeDesktop:text-[1.562rem]
      text-PrimaryWhite
  
      font-medium

      absolute

      bottom-[5%]
      left-[-25%]
    
      leading-tight
    ">
      Story <br />
      Point
    </h1>
  </div>
})

export default TaskInformation;
import { memo, useEffect, useRef, useState } from "react"
import { updateTask } from "../../../../reduxStore/tasks/tasksSlice"
import TaskName from './TaskName';
import Filters from "./Filters";
import TaskInfoExtra from "./TaskInfo";
import EditButton from "./taskOptions/EditButton";
import Delete from "./taskOptions/Delete";
import checkMark from '/assets/Check_MarkIcon.svg';
import cancelButton from '/assets/x_Icon.png';
import { Mark } from "./description/TaskDescription";
import { useAppDispatch } from "../../../../reduxStore/hook";

const TaskInformation = memo((
  {
    setOpenTaskMiniModal,
    taskId,
    taskName,
    filter,
    members,
    comments,
    story,
    adminCred
  } : {
    setOpenTaskMiniModal:React.Dispatch<React.SetStateAction<boolean>> ,
    taskId:string,
    taskName:string,
    filter:string[],
    members:string[],
    comments:string[],
    story:number,
    adminCred:boolean
  }
) => {

  const [editTaskName,setEditTaskName] = useState<string>(taskName);
  const [storyScore,setStoryScore] = useState<number>(story);
  const [taskDetail,setTaskDetail] = useState<boolean>(false);

  const dispatch = useAppDispatch();

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

      flex-grow-0

      overflow-visible
      ">
        <TaskInfo editTaskName={editTaskName} setEditTaskName={setEditTaskName} taskDetail={taskDetail} setTaskDetail={setTaskDetail} taskname={taskName} filter={filter} members={members.length+1} comments={comments.length} />
        <StoryPointAndOptions 
        cancelChanges={()=>{
          setEditTaskName(taskName);
          setStoryScore(story);
          setTaskDetail(false)
        }} acceptChanges={()=>{
          dispatch(updateTask({taskId:taskId,update:{name:editTaskName,story:storyScore}}))
          setTaskDetail(false)
        }} 
        storyScore={storyScore}
        setStoryScore={setStoryScore} 
        taskDetail={taskDetail}
        setTaskDetail={setTaskDetail} 
        storyPoint={story} 
        setModal={setOpenTaskMiniModal}
        adminCred={adminCred}/>
      </div>
    </div>
  )
})

const TaskInfo = memo(({
  editTaskName,
  setEditTaskName,
  taskDetail,
  taskname,
  filter,
  members,
  comments
} : {
  editTaskName:string,
  setEditTaskName:React.Dispatch<React.SetStateAction<string>>,
  taskDetail:boolean,
  setTaskDetail:React.Dispatch<React.SetStateAction<boolean>>,
  taskname:string,
  filter:string[],
  members:number,
  comments:number,
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
    <TaskName editTaskName={editTaskName} setEditTaskName={setEditTaskName} taskDetail={taskDetail} taskName={taskname} />
    <Filters filter={filter} />
    <TaskInfoExtra members={members} comments={comments}/>
  </div>
})

const StoryPointAndOptions = memo(({
  cancelChanges,
  acceptChanges,
  storyScore,
  setStoryScore,
  taskDetail,
  setTaskDetail,
  storyPoint,
  adminCred,
  setModal
} : {
  cancelChanges:()=>void,
  acceptChanges:()=>void,
  storyScore:number,
  setStoryScore:React.Dispatch<React.SetStateAction<number>>,
  taskDetail:boolean,
  setTaskDetail:React.Dispatch<React.SetStateAction<boolean>>,
  storyPoint:number,
  adminCred:boolean,
  setModal:React.Dispatch<React.SetStateAction<boolean>>
})=>{

  return <div className="
  flex
  flex-col

  justify-between
  ">
    <StoryPoints taskDetail={taskDetail} storyScore={storyScore} setStoryScore={setStoryScore} storyPoint={storyPoint} />
    {
      adminCred && <TaskAdminOptions setModal={setModal} cancelChanges={cancelChanges} acceptChanges={acceptChanges} taskDetail={taskDetail} setTaskDetail={setTaskDetail}  />
    }
    
  </div>
})

const TaskAdminOptions = memo(({
  cancelChanges,
  acceptChanges,
  taskDetail,
  setTaskDetail,
  setModal
} : {
  cancelChanges:()=>void,
  acceptChanges:()=>void,
  taskDetail:boolean,
  setTaskDetail:React.Dispatch<React.SetStateAction<boolean>>,
  setModal:React.Dispatch<React.SetStateAction<boolean>>
})=>{

  return <div className="
  flex
  flex-row

  justify-end

  sLaptop:mb-[0.5rem]
  mLaptop:mb-[0.625rem]
  desktop:mb-[0.75rem]
  largeDesktop:mb-[0.937rem]

  sLaptop:gap-[.533rem]
  mLaptop:gap-[.666rem]
  desktop:gap-[.8rem]
  largeDesktop:gap-[1rem]
  ">
    {
      taskDetail ? 
      <AcceptAndCancelChanges cancelChanges={cancelChanges} acceptChanges={acceptChanges}/>
      : 
      <EditButton setTaskDetail={setTaskDetail} />
    }
    <Delete setModal={setModal}/>
  </div>
})

const AcceptAndCancelChanges = ({
  cancelChanges,
  acceptChanges
} : {
  cancelChanges:()=>void,
  acceptChanges:()=>void
}) => {
  return <div className="
  flex
  flex-row
  items-center

  sLaptop:gap-[.333rem]
  mLaptop:gap-[0.416rem]
  desktop:gap-[.5rem]
  largeDesktop:gap-[0.625rem]
  ">
    <Mark onclick={cancelChanges} imgSrc={cancelButton} />
    <Mark onclick={acceptChanges} imgSrc={checkMark} />
  </div>
}

const StoryPoints = memo(({
  taskDetail,
  storyScore,
  setStoryScore,
  storyPoint
} : {
  taskDetail:boolean,
  storyScore:number,
  setStoryScore:React.Dispatch<React.SetStateAction<number>>,
  storyPoint:number
}) => {

  const [width,setWidth] = useState<number>(0);
  const span = useRef<HTMLSpanElement>(null);

  useEffect(()=>{
    span.current && setWidth(span.current.offsetWidth);
  },[storyScore])

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

    sLaptop:mt-[calc(-4.048rem/6)]
    mLaptop:mt-[calc(-5.060rem/6)]
    desktop:mt-[calc(-6.073rem/6)]
    largeDesktop:mt-[calc(-7.591rem/6)]

    flex
    justify-center
    items-center

    sLaptop:text-[1.493rem]
    mLaptop:text-[1.866rem]
    desktop:text-[2.24rem]
    largeDesktop:text-[2.8rem]
    text-PrimaryWhite

    font-bold

    relative
  ">
    <span className="
      absolute
      opacity-0
      z-[-1]
      whitespace-pre  
      
      sLaptop:text-[1.066rem]
      mLaptop:text-[1.866rem]
      desktop:text-[1.6rem]
      largeDesktop:text-[1.75rem]
      font-bold

      text-PrimaryWhite

      sLaptop:rounded-[0.186rem]
      mLaptop:rounded-[0.233rem]
      desktop:rounded-[0.35rem]
      largeDesktop:rounded-[0.35rem]

      box-content
      sLaptop:px-[0.4rem]
      mLaptop:px-[0.5rem]
      desktop:px-[0.6rem]
      largeDesktop:px-[.75rem]

       ring-gray-600 
      focus:ring-SelectorBlue
      sLaptop:ring-[1.999px]
      mLaptop:ring-[2.499px]
      desktop:ring-[3px]
      largeDesktop:ring-[3.75px]

      
    " ref={span}>{storyScore}</span>
    {
      taskDetail ?
      <input className="
        glass-gradient
        bg-transparent
  
        focus:outline-none
        focus:opacity-100

        sLaptop:text-[1.066rem]
        mLaptop:text-[1.866rem]
        desktop:text-[1.6rem]
        largeDesktop:text-[1.75rem]
        font-bold

        text-PrimaryWhite
        text-center

        sLaptop:rounded-[0.186rem]
        mLaptop:rounded-[0.233rem]
        desktop:rounded-[0.35rem]
        largeDesktop:rounded-[0.35rem]
      
      ring-gray-600 
        focus:ring-SelectorBlue
        sLaptop:ring-[1.999px]
        mLaptop:ring-[2.499px]
        desktop:ring-[3px]
        largeDesktop:ring-[3.75px]
      " 
      type="text"
      pattern="[0-9]"
      value={storyScore}
      style={{width}}
      onChange={(e)=>{
        if(
          !e.target.value[e.target.value.length-1] 
          || 
          !Number(e.target.value[e.target.value.length-1])
          && 
          e.target.value[e.target.value.length-1] !== "0"
        ) return;
        setStoryScore(e.target.value[e.target.value.length-1] === "0"? 0 : Number(e.target.value));
      }}
      maxLength={2}
      />
      :
      storyPoint
    }
    <StoryPoint />
  </div>
})

const StoryPoint = memo(()=>{
  return <h1 className="

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
})

export default TaskInformation;
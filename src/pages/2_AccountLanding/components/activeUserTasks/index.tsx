import { memo } from "react";
import { task } from "../../../../reduxStore/tasks/tasksSlice"
import Tasks from "./tasks/Tasks";
import scrollbarImage from '/assets/scrollBarTrack.png';

const index = memo((
  {
    getUserTasks
  } : {
    getUserTasks:task[]
  }
) => {
  return (
    <div
    style={{
      // @ts-ignore
        "--img": `url(${scrollbarImage})`
    }} 
    className="
    
      boardsScroll

     sLaptop:w-[33.333rem]
     mLaptop:w-[41.666rem]
     desktop:w-[50rem]
     largeDesktop:w-[62.5rem]

      grid
      grid-cols-1
      auto-rows-auto

      sLaptop:gap-y-[1.042rem]
      mLaptop:gap-y-[1.302rem]
      desktop:gap-y-[1.563rem]
      largeDesktop:gap-y-[1.953rem]

      pr-[1.5%]
     
    ">
      {
        getUserTasks.map((task)=> {
          return  <Tasks key={task.t_id} task={task} /> 
        })
      }
    </div>
  )
})

export default index
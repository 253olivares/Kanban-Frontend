import { memo } from 'react';
import scrollbarImage from '/assets/scrollBarTrack.png';
import Tasks from './Tasks';


const TaskHolders = memo(({
    taskLists
}: {
    taskLists:string[]
}) => {

  return (
    <div 
    style={{
        // @ts-ignore
        "--img": `url(${scrollbarImage})`
    }}
    className="

    boardsScroll

    w-full

    grid
    grid-cols-1
    auto-rows-auto

    max-h-[14.062rem]
    mobile:max-h-[18.75rem]
    sMobile:max-h-[30em]
    mMobile:max-h-[36rem]

    sLaptop:max-h-none

    gap-y-[0.703rem]
    mobile:gap-y-[.937rem]
    sMobile:gap-y-[1.5rem]
    mMobile:gap-y-[1.8rem]

    sLaptop:gap-y-[.433rem]
    mLaptop:gap-y-[.541rem]
    desktop:gap-y-[.65rem]   
    largeDesktop:gap-y-[.812rem]

    justify-items-center
    items-center

    ">
        {
            taskLists.map((taskId) =>
                <Tasks taskId = {taskId} key={taskId} />
            )
        }
    </div>
  )
})

export default TaskHolders
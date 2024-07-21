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

    sLaptop:gap-y-[1.066rem]
    mLaptop:gap-y-[1.333rem]
    desktop:gap-y-[1.6rem]
    largeDesktop:gap-y-[2rem]

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
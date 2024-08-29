import { memo } from "react"
import TaskInfo from "../taskInfo/TaskInfo"

const TaskNameFilter = (
    {
        members,
        comments,
        taskName,
        filter
    } : {
        members:number,
        comments:number,
        taskName:string
        filter:string[]
    }
) => {
  return (
    <div className='
    flex
    flex-col

    flex-grow

    sLaptop:my-[0.5rem]
    mLaptop:my-[0.625rem]
    desktop:my-[0.75rem]
    largeDesktop:my-[0.937rem]

    sLaptop:gap-[0.5rem]
    mLaptop:gap-[0.625rem]
    desktop:gap-[.75rem]
    largeDesktop:gap-[0.937rem]
    '>
        <TaskName taskName={taskName}  />
        <TaskFilter filter={filter} />
        <TaskInfo
          members={members}
          comments={comments}
        />
    </div>
  )
}

const TaskName = (
    {
        taskName
    } : {
        taskName:string
    }
) => {
    return <div className='
    w-[90%]
    flex-grow-0
    '>
        <h1 className='
        w-full

        text-nowrap
        text-ellipsis
        overflow-hidden

        sLaptop:text-[1.238rem]
        mLaptop:text-[1.541rem]
        desktop:text-[1.85rem] 
        largeDesktop:text-[2.312rem]

        font-bold

        leading-none

        text-PrimaryWhite
        '>
            {taskName}
        </h1>
    </div>
}

const TaskFilter = (
    {
        filter
    } : {
        filter:string[]
    }
) => {
    const filters:Record<string,string> = {
        'low' : "bg-[#57DF35]",
        'medium' : "bg-[#F4A154]",
        'urgent' : "bg-[#F44730]"
      }
    return <div className='
    w-full

    flex
    flex-row
    items-center

     gap-[2.5%]

    sLaptop:h-[0.955rem]
    mLaptop:h-[1.194rem]
    desktop:h-[1.433rem]
    largeDesktop:h-[1.791rem]
    '>
        {
              Object.entries(filters).map(([k,v])=>
                filter.includes(k) && 
                <FilterLabel key={`TaskFilter_${k}`} color={v} />
            )
        }
    </div>
}

const FilterLabel = memo(({
    color
} : {
    color:string
}) => {
    return <div className={`
        block

        w-[20%]

        ${color}

        h-full

        sLaptop:rounded-[0.066rem]
        mLaptop:rounded-[0.083rem]
        desktop:rounded-[0.1rem]
        largeDesktop:rounded-[0.125rem]
    `}>

    </div>
})
export default TaskNameFilter
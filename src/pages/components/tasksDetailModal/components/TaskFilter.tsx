import  { memo } from 'react'
import { useAppDispatch } from '../../../../reduxStore/hook'
import { updateTask } from '../../../../reduxStore/tasks/tasksSlice'

const TaskFilterSection = memo(({
    taskId,
    taskPrio
} : {
    taskId:string,
    taskPrio:string[]
}) => {
  return (
    <div className='
    flex
    flex-col

    px-[7.5%]

    sLaptop:gap-[0.533rem]
    mLaptop:gap-[0.666rem]
    desktop:gap-[0.8rem]
    largeDesktop:gap-[1rem]

    sLaptop:pb-[1.022rem]
    mLaptop:pb-[1.278rem]
    desktop:pb-[1.533rem]
    largeDesktop:pb-[1.917rem]

    '>
        <TaskHeader />
        <TaskBody taskId={taskId} taskPrio={taskPrio}/>
    </div>
  )
})

const TaskBody = memo((
    {
        taskId,
        taskPrio
    } : {
        taskId:string,
        taskPrio:string[]
    }
)=>{

    const filters:Record<string,string> = {
        'urgent' : "bg-[#F44730]",
        'medium' : "bg-[#F4A154]",
        'low' : "bg-[#57DF35]"
      }

    return <div className='
    flex
    flex-col

    sLaptop:gap-[0.453rem]
    mLaptop:gap-[0.566rem]
    desktop:gap-[0.68rem]
    largeDesktop:gap-[.85rem]

    '>
        {
            Object.entries(filters).map(([key,value],_)=>{
                return <Filter key={`TaskDetails_${key}`} filter={key} taskId={taskId} select={taskPrio.includes(key)} color={value} />
            })
        }
    </div>
})

const Filter = memo((
    {
        filter,
        taskId,
        select,
        color
    } : {
        filter:string,
        taskId:string,
        select:boolean,
        color:string
    }
)=>{
    const dispatch = useAppDispatch();
    return <div 
    onClick={()=>{
        if(select) {
            dispatch(updateTask({taskId:taskId,update:{priority:[``]}}))
        } else {
            dispatch(updateTask({taskId:taskId,update:{priority:[`${filter}`]}}))
        }
    }}
    className={`
    w-full
    ${color}

    ${
        select ?
        `opacity-100` : `opacity-50 hover:opacity-75`
    }

    cursor-pointer

    sLaptop:text-[0.764rem]
    mLaptop:text-[0.955rem]
    desktop:text-[1.146rem]
    largeDesktop:text-[1.432rem]
    font-medium

    leading-none

    text-PrimaryWhite

    px-[5.6%]

    sLaptop:py-[0.416rem]
    mLaptop:py-[0.520rem]
    desktop:py-[0.625rem]
    largeDesktop:py-[0.781rem]

    sLaptop:rounded-[0.317rem]
    mLaptop:rounded-[0.476rem]
    desktop:rounded-[0.458rem]
    largeDesktop:rounded-[0.572rem]

    capitalize
    
    `}>
        {filter} Priority
    </div>
})

const TaskHeader = memo(() =>{
    return <div className='
    w-full

    flex
    flex-row

    justify-between

    sLaptop:text-[1rem]
    mLaptop:text-[1.25rem]
    desktop:text-[1.5rem]
    largeDesktop:text-[1.875rem]
    font-medium

    text-PrimaryWhite

   leading-none

    '>
        Labels
    </div>
})

export default TaskFilterSection
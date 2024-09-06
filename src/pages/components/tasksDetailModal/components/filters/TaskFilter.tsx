import  { memo } from 'react'
import { useAppDispatch } from '../../../../../reduxStore/hook'
import { updateTask } from '../../../../../reduxStore/tasks/tasksSlice'

const TaskFilterSection = memo(({
    adminCred,
    taskId,
    taskPrio
} : {
    adminCred:boolean,
    taskId:string,
    taskPrio:string[]
}) => {
  return (
    <div className='
    flex
    flex-col

    px-[5%]
    sLaptop:px-[7.5%]

    gap-[0.468rem]
    mobile:gap-[0.625rem]
    sMobile:gap-[1rem]
    mMobile:gap-[1.2rem]
    sLaptop:gap-[0.533rem]
    mLaptop:gap-[0.666rem]
    desktop:gap-[0.8rem]
    largeDesktop:gap-[1rem]

    '>
        <TaskHeader />
        <TaskBody adminCred={adminCred} taskId={taskId} taskPrio={taskPrio}/>
    </div>
  )
})

const TaskBody = memo((
    {
        adminCred,
        taskId,
        taskPrio
    } : {
        adminCred:boolean,
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
    flex-row
    sLaptop:flex-col
    
    justify-around

    sLaptop:gap-[0.453rem]
    mLaptop:gap-[0.566rem]
    desktop:gap-[0.68rem]
    largeDesktop:gap-[.85rem]

    '>
        {
            Object.entries(filters).map(([key,value],_)=>{
                return <Filter adminCred={adminCred} key={`TaskDetails_${key}`} filter={key} taskId={taskId} select={taskPrio.includes(key)} color={value} />
            })
        }
    </div>
})

const Filter = memo((
    {
        adminCred,
        filter,
        taskId,
        select,
        color
    } : {
        adminCred:boolean,
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
        adminCred&& dispatch(updateTask({taskId:taskId,update:{priority:[``]}}))
        } else {
        adminCred&& dispatch(updateTask({taskId:taskId,update:{priority:[`${filter}`]}}))
        }
    }}
    className={`
    w-[28.5%]
    sLaptop:w-full
    sLaptop:flex
    sLaptop:justify-center
    ${color}

    ${
        select ?
        `opacity-100` 
        : 
        `opacity-50 
        ${adminCred && 'hover:opacity-75'}`
    }

    ${
        adminCred && 'cursor-pointer'
    }

    text-[0.769rem]
    mobile:text-[1.025rem]
    sMobile:text-[1.641rem]
    mMobile:text-[1.969rem]
    sLaptop:text-[0.764rem]
    mLaptop:text-[0.955rem]
    desktop:text-[1.146rem]
    largeDesktop:text-[1.432rem]
    font-medium

    text-center

    leading-none

    text-PrimaryWhite

    px-[5.6%]

    py-[0.304rem]
    mobile:py-[0.406rem]
    sMobile:py-[.65rem]
    mMobile:py-[0.78rem]
    sLaptop:py-[0.416rem]
    mLaptop:py-[0.520rem]
    desktop:py-[0.625rem]
    largeDesktop:py-[0.781rem]

    rounded-[0.093rem]
    mobile:rounded-[0.125rem]
    sMobile:rounded-[.2rem]
    mMobile:rounded-[0.24rem]
    sLaptop:rounded-[0.317rem]
    mLaptop:rounded-[0.476rem]
    desktop:rounded-[0.458rem]
    largeDesktop:rounded-[0.572rem]

    capitalize
    
    `}>
        {filter} <span className='hidden sLaptop:block'>&nbsp;Priority</span>
    </div>
})

const TaskHeader = memo(() =>{
    return <div className='
    w-full

    flex
    flex-row

    justify-between

    text-[0.937rem]
    mobile:text-[1.249rem]
    sMobile:text-[1.999rem]
    mMobile:text-[2.398rem]
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
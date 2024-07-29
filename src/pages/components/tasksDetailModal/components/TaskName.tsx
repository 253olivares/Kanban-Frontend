

const TaskName = (
    {taskName} : {taskName:string}
) => {
  return (
    <h1 className="
    
    w-[95%]

    text-nowrap
    text-ellipsis
    overflow-hidden
    
    sLaptop:text-[1.333rem]
    mLaptop:text-[1.666rem]
    desktop:text-[2rem]
    largeDesktop:text-[2.5rem]
    
    font-bold
  
    leading-none

    text-PrimaryWhite

    ">{taskName}</h1>
  )
}

export default TaskName
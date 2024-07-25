

const TaskName = (
  {
    taskName
  } : {
    taskName:string
  }
) => {
  return (
    <div
    className="
   
    flex-grow

    flex
    items-start

    text-PrimaryWhite

    pt-[0.375rem]
    mobile:pt-[0.5rem]
    sMobile:pt-[.8rem]
    mMobile:pt-[0.96rem]

    sLaptop:pt-[0.079rem]
    mLaptop:pt-[0.099]
    desktop:pt-[0.12rem]
    largeDesktop:pt-[.15rem]

    text-[0.781rem]
    mobile:text-[1.041rem]
    sMobile:text-[1.666rem]
    mMobile:text-[2rem]

    sLaptop:text-[0.799rem]
    mLaptop:text-[0.999rem]
    desktop:text-[1.2rem]
    largeDesktop:text-[1.5rem]

    font-medium
    text-wrap
    
    leading-snug
    "
    >
      {taskName}
    </div>
  )
}

export default TaskName
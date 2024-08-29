const TaskHead = (
    {
      head,
      workspaceName,
      boardName,
      listName
    } : {
      head:string,
      workspaceName:string,
      boardName:string,
      listName:string
    }
  ) => {
    return <div className='
    w-full
  
    h-auto
    relative
    '>
        <div className='
        top-0
        left-0
  
        absolute
        z-[2]
  
        w-full
        h-full
  
        flex
        items-center
  
        px-[2.5%]
      '>
        <p className='

        sLaptop:text-[0.764rem]
        mLaptop:text-[0.955rem]
        desktop:text-[1.146rem]
        largeDesktop:text-[1.432rem]

        text-PrimaryWhite
  
        font-medium
        leading-none
  
        text-nowrap
        overflow-hidden
        text-ellipsis
        '>
           {workspaceName} / {boardName} / {listName}
        </p>
      </div>
      <img className="
      relative
        z-[0]

      sLaptop:h-[1.916rem]
      mLaptop:h-[2.395rem]
      desktop:h-[2.875rem]
      largeDesktop:h-[3.593rem]

      w-full
      " src={head} alt="Header" />
    </div>
  }

export default TaskHead
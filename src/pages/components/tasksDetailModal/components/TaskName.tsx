import { useEffect, useRef, useState } from "react"


const TaskName = (
    {
      editTaskName,
      setEditTaskName,
      taskDetail,
      taskName
    } : {
      editTaskName:string,
    setEditTaskName:React.Dispatch<React.SetStateAction<string>>,
      taskDetail:boolean,
      taskName:string
    }
) => {


  const [width, setWidth] = useState<number>(0);
  const span = useRef<HTMLSpanElement>(null);

  useEffect(()=>{
    span.current && setWidth(span.current.offsetWidth)
  },[editTaskName])

  return(
    <div className="
     w-[95%]
     flex-grow-0
    ">
      <span id="hide" className="
      absolute
      opacity-0
      z-[-1]
      whitespace-pre  

      sLaptop:h-[1.333rem]
      mLaptop:h-[1.666rem]
      desktop:h-[2rem]
      largeDesktop:h-[2.5rem]

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

      " ref={span}>{editTaskName}</span>
      {
        taskDetail
        ?
        <input 
        className="
        glass-gradient
        bg-transparent
  
        focus:outline-none
        focus:opacity-100

        sLaptop:h-[1.333rem]
        mLaptop:h-[1.666rem]
        desktop:h-[2rem]
        largeDesktop:h-[2.5rem]

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
        value={editTaskName}  
        style={{width}} 
        onChange={(e)=>{
          if(e.target.value.trim().length<=20 && e.target.value.length < 30)
          setEditTaskName(e.target.value)
        }} />
        :
        <h1 className="
      
        w-full

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
      }
    </div>
  )
}

export default TaskName
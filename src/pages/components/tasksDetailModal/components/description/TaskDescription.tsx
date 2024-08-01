import { memo } from 'react'
import scrollbarImage from '/assets/scrollBarTrack.png';
import editIcon from '/assets/Edit_Icon.png'

const TaskDescription = memo(({
  taskDescription,
  // @ts-ignores
  setTaskDescription,
  adminCred,
  description
} : {
  taskDescription:string,
  setTaskDescription:React.Dispatch<React.SetStateAction<string>>,
  adminCred:boolean,
  description:string
}) => {
  console.log(description);
  return (
    <div className='
    flex-grow

    flex
    flex-col
  
    w-full

    sLaptop:gap-[0.4rem]
    mLaptop:gap-[0.5rem]
    desktop:gap-[0.6rem]
    largeDesktop:gap-[0.75rem]

    '>
      <DescriptionHead adminCred={adminCred} />
      <DescriptionBox taskDescription= {taskDescription}/>
    </div>
  )
})

const DescriptionHead = memo((
  {
    adminCred
  } : {
    adminCred:boolean
  }
) => {
  return <div className='
  w-full

  flex
  flex-row

  justify-between

  px-[3.5%]
  '>
    <h1 className='

    sLaptop:text-[1rem]
    mLaptop:text-[1.25rem]
    desktop:text-[1.5rem]
    largeDesktop:text-[1.875rem]

    font-medium

    text-PrimaryWhite

    leading-none
    

    '>Description</h1>
    {
      adminCred && <img className='
      sLaptop:h-[0.733rem]
      mLaptop:h-[0.916rem]
      desktop:h-[1.1rem]
      largeDesktop:h-[1.375rem]

      opacity-50

      hover:opacity-100

      cursor-pointer
    ' src={editIcon} alt="Edit Icon" />
    }
  </div>
})

const DescriptionBox = memo(({
  taskDescription
} : {
  taskDescription:string
}) =>{
  return <div className='
  flex-grow

  w-full
  '>
    <div 
    style={{
      // @ts-ignore
      "--img": `url(${scrollbarImage})`
    }}
    className='
    w-full

    pl-[3.5%]

    sLaptop:pr-[calc(3.5%-5.333px)]
    mLaptop:pr-[calc(3.5%-6.666px)]
    desktop:pr-[calc(3.5%-8px)]
    largeDesktop:pr-[calc(3.5%-10px)]

    sLaptop:h-[5.696rem]
    mLaptop:h-[7.12rem]
    desktop:h-[8.544rem]
    largeDesktop:h-[10.68rem]

    sLaptop:text-[0.6rem]
    mLaptop:text-[0.75rem]
    desktop:text-[0.9rem]
    largeDesktop:text-[1.125rem]

    whitespace-pre-line

    leading-tight

    font-medium

    text-PrimaryWhite

    opacity-75

    boardsScroll
    scrollGutter
    '>
      {`${taskDescription}`}
    </div>
  </div>
})

export default TaskDescription
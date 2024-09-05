import { memo, useState } from 'react'
import scrollbarImage from '/assets/scrollBarTrack.png';
import editIcon from '/assets/Edit_Icon.png';
import checkMark from '/assets/Check_MarkIcon.svg';
import cancelButton from '/assets/x_Icon.png';
import { useAppDispatch } from '../../../../../reduxStore/hook';
import { updateTask } from '../../../../../reduxStore/tasks/tasksSlice';

const TaskDescription = memo(({
  taskDescription,
  setTaskDescription,
  adminCred,
  description,
  taskId
} : {
  taskDescription:string,
  setTaskDescription:React.Dispatch<React.SetStateAction<string>>,
  adminCred:boolean,
  description:string,
  taskId:string
}) => {

  const [openDescriptionEdit, setOpenDescriptionEdit] = useState<boolean>(false);
  return (
    <div className='
    flex-grow

    flex
    flex-col
  
    w-full

    my-[0.732rem]
    mobile:my-[0.976rem]
    sMobile:my-[1.563rem]
    mMobile:my-[1.875rem]
    sLaptop:my-0

    gap-[0.468rem]
    mobile:gap-[0.625rem]
    sMobile:gap-[1rem]
    mMobile:gap-[1.2rem]
    sLaptop:gap-[0.4rem]
    mLaptop:gap-[0.5rem]
    desktop:gap-[0.6rem]
    largeDesktop:gap-[0.75rem]

    '>
      <DescriptionHead taskId={taskId} description={description} openDescriptionEdit={openDescriptionEdit} setOpenDescriptionEdit={setOpenDescriptionEdit} taskDescription= {taskDescription}  adminCred={adminCred} setTaskDescription={ setTaskDescription} />
      <DescriptionBox description={description} openDescriptionEdit={openDescriptionEdit} taskDescription= {taskDescription}  setTaskDescription={ setTaskDescription}/>
    </div>
  )
})

const DescriptionHead = memo((
  {
    taskId,
    description,
    taskDescription,
    setTaskDescription,
    openDescriptionEdit,
    setOpenDescriptionEdit,
    adminCred
  } : {
    taskId:string,
    description:string,
    taskDescription:string,
    setTaskDescription:React.Dispatch<React.SetStateAction<string>>,
    openDescriptionEdit:boolean,
    setOpenDescriptionEdit:React.Dispatch<React.SetStateAction<boolean>>,
    adminCred:boolean
  }
) => {
  return <div className='
  w-full

  flex
  flex-row

  justify-between

  px-[2.5%]
  sLaptop:px-[3.5%]
  '>
    <h1 className='

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
    

    '>Description</h1>
    {
      openDescriptionEdit ? adminCred &&  <CancelOrSaveChanges taskId={taskId} taskDescription={taskDescription} description={description} setTaskDescription={setTaskDescription} setOpenDescriptionEdit={()=>{setOpenDescriptionEdit(!openDescriptionEdit)}} /> : adminCred &&  <EditIcon setOpenDescriptionEdit={ ()=>setOpenDescriptionEdit(!openDescriptionEdit)} />
    }
  </div>
})

export const CancelOrSaveChanges = memo(({
  taskId,
  description,
  taskDescription,
  setTaskDescription,
  setOpenDescriptionEdit
} : {
  taskId:string,
  description:string,
  taskDescription:string,
  setTaskDescription:React.Dispatch<React.SetStateAction<string>>,
  setOpenDescriptionEdit: ()=>void
}) => {
  const dispatch = useAppDispatch();
  return <div className='
  flex
  flex-row
  items-center

  gap-[0.468rem]
  mobile:gap-[0.625rem]
  sMobile:gap-[1rem]
  mMobile:gap-[1.2rem]
  sLaptop:gap-[.333rem]
  mLaptop:gap-[0.416rem]
  desktop:gap-[.5rem]
  largeDesktop:gap-[0.625rem]
  '>
    <Mark onclick={()=>{
      setTaskDescription(description);
      setOpenDescriptionEdit()
      }} imgSrc={cancelButton} />
    <Mark onclick={()=>{
      if(taskDescription.trim() === "") {
        alert("Please enter a description!");
        return;
      }
      dispatch(updateTask({taskId:taskId,update:{description:taskDescription.trim()}}))
      setOpenDescriptionEdit()
    }} imgSrc={checkMark} />
  </div>
})

export const Mark = memo(({
  onclick,
  imgSrc
} : {
  onclick:()=>void
  imgSrc:string
}) =>{
  return <img className='

    h-[0.878rem]
    mobile:h-[1.171rem]
    sMobile:h-[1.875rem]
    mMobile:h-[2.25rem]
    sLaptop:h-[0.733rem]
    mLaptop:h-[0.916rem]
    desktop:h-[1.1rem]
    largeDesktop:h-[1.375rem]

    opacity-50

    hover:opacity-100

    cursor-pointer
  ' onClick={onclick} src={imgSrc} alt="OPtions" />
})

const EditIcon = ({
  setOpenDescriptionEdit
} : {
  setOpenDescriptionEdit:()=>void
}) => {
  return <img 

  onClick={setOpenDescriptionEdit}
  className='

  h-[0.878rem]
  mobile:h-[1.171rem]
  sMobile:h-[1.875rem]
  mMobile:h-[2.25rem]
  sLaptop:h-[0.733rem]
  mLaptop:h-[0.916rem]
  desktop:h-[1.1rem]
  largeDesktop:h-[1.375rem]

  opacity-50

  hover:opacity-100

  cursor-pointer
' src={editIcon} alt="Edit Icon" />
}

const DescriptionBox = memo(({
  openDescriptionEdit,
  taskDescription,
  setTaskDescription,
  description
} : {
  openDescriptionEdit:boolean,
  taskDescription:string,
  setTaskDescription:React.Dispatch<React.SetStateAction<string>>,
  description:string
}) =>{
  return <div className='
  flex-grow

  px-[2.5%]
  sLaptop:px-0

  w-full
  '>

    {
      openDescriptionEdit ? 
      <EditDescription taskDescription={taskDescription} setTaskDescription={setTaskDescription} />
      :
      < Description taskDescription={description} />
    }

    
  </div>
})

const EditDescription = memo(({
  taskDescription,
  setTaskDescription
} : {
  taskDescription:string,
  setTaskDescription:React.Dispatch<React.SetStateAction<string>>
}) => {

  return <div className='
  w-full

  sLaptop:pl-[3.5%]
  sLaptop:pr-[calc(3.5%-5.333px)]
  mLaptop:pr-[calc(3.5%-6.666px)]
  desktop:pr-[calc(3.5%-8px)]
  largeDesktop:pr-[calc(3.5%-10px)]

  boardsScroll
  sLaptop:scrollGutter
  '>
    <textarea 
    style={{
        // @ts-ignore
        "--img": `url(${scrollbarImage})`
      }}
    className='

    w-full

    boardsScroll
    scrollGutter

    focus:outline-none
    focus:opacity-100

    h-[5.859rem]
    mobile:h-[7.812rem]
    sMobile:h-[12.5rem]
    mMobile:h-[15rem]
    sLaptop:h-[5.696rem]
    mLaptop:h-[7.12rem]
    desktop:h-[8.544rem]
    largeDesktop:h-[10.68rem]

    text-[0.644rem]
    mobile:text-[0.859rem]
    sMobile:text-[1.375rem]
    mMobile:text-[1.65rem]
    sLaptop:text-[0.6rem]
    mLaptop:text-[0.75rem]
    desktop:text-[0.9rem]
    largeDesktop:text-[1.125rem]

    rounded-[0.093rem]
    mobile:rounded-[0.125rem]
    sMobile:rounded-[.2rem]
    mMobile:rounded-[0.24rem]
    
    sLaptop:rounded-[0.186rem]
    mLaptop:rounded-[0.233rem]
    desktop:rounded-[0.35rem]
    largeDesktop:rounded-[0.35rem]

    text-PrimaryWhite

    p-[1.5%]

    glass-gradient2
    bg-transparent
    '
    onChange={(e)=>setTaskDescription(e.target.value)}
    value={taskDescription}
    name="Task description" id="description" />
  </div>
})

const Description = memo(({
  taskDescription
} : {
  taskDescription:string
}) => {

  return <div 
  style={{
    // @ts-ignore
    "--img": `url(${scrollbarImage})`
  }}
  className='
  w-full
  
  sLaptop:pr-[calc(3.5%-5.333px)]
  mLaptop:pr-[calc(3.5%-6.666px)]
  desktop:pr-[calc(3.5%-8px)]
  largeDesktop:pr-[calc(3.5%-10px)]

  h-[5.859rem]
  mobile:h-[7.812rem]
  sMobile:h-[12.5rem]
  mMobile:h-[15rem]
  sLaptop:h-[5.696rem]
  mLaptop:h-[7.12rem]
  desktop:h-[8.544rem]
  largeDesktop:h-[10.68rem]

  text-[0.644rem]
  mobile:text-[0.859rem]
  sMobile:text-[1.375rem]
  mMobile:text-[1.65rem]
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
  sLaptop:scrollGutter
  '>
    {`${taskDescription}`}
  </div>
})

export default TaskDescription
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
      adminCred && 
      openDescriptionEdit ? <CancelOrSaveChanges taskId={taskId} taskDescription={taskDescription} description={description} setTaskDescription={setTaskDescription} setOpenDescriptionEdit={()=>{setOpenDescriptionEdit(!openDescriptionEdit)}} /> : <EditIcon setOpenDescriptionEdit={ ()=>setOpenDescriptionEdit(!openDescriptionEdit)} />
    }
  </div>
})

const CancelOrSaveChanges = memo(({
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

const Mark = memo(({
  onclick,
  imgSrc
} : {
  onclick:()=>void
  imgSrc:string
}) =>{
  return <img className='
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

  pl-[3.5%]

  sLaptop:pr-[calc(3.5%-5.333px)]
  mLaptop:pr-[calc(3.5%-6.666px)]
  desktop:pr-[calc(3.5%-8px)]
  largeDesktop:pr-[calc(3.5%-10px)]

  boardsScroll
  scrollGutter
  '>
    <textarea 
    style={{
        // @ts-ignore
        "--img": `url(${scrollbarImage})`
      }}
    className='

    w-full

    sLaptop:h-[5.696rem]
    mLaptop:h-[7.12rem]
    desktop:h-[8.544rem]
    largeDesktop:h-[10.68rem]

    sLaptop:text-[0.6rem]
    mLaptop:text-[0.75rem]
    desktop:text-[0.9rem]
    largeDesktop:text-[1.125rem]

    text-black

    p-[1.5%]

    boardsScroll
    scrollGutter

    focus:outline-none
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
})

export default TaskDescription
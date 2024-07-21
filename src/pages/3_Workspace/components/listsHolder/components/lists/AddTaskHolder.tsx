import { AnimatePresence } from "framer-motion"
import React, { memo } from "react"
import AddTaskDefault from "./AddTaskDefault";
import InputTaskName from "./InputTaskName";
import AddList from '/assets/addBoard.png'
import { list } from "../../../../../../reduxStore/lists/listsSlice";
import { user } from "../../../../../../reduxStore/users/userSlice";


const AddTaskHolder = memo((
  {
    user,
    listData,
    openTaskName, 
    setOpenTaskName
  }
  :
  {
    user:user,
    listData:list,
    openTaskName:boolean,
    setOpenTaskName:React.Dispatch<React.SetStateAction<boolean>>
  }) => {

  return (
    <div 
    className={`w-full

    flex
    flex-row
    items-center

    sLaptop:rounded-[0.333rem]
    mLaptop:rounded-[0.416rem]
    desktop:rounded-[0.5rem]
    largeDesktop:rounded-[0.625rem]

    sLaptop:min-h-[2.266rem]
    mLaptop:min-h-[2.833rem]
    desktop:min-h-[3.4rem]
    largeDesktop:min-h-[4.25rem]

    bg-SpaceBlueSelected
    `}>

        <InputTaskMobile openTaskName={openTaskName} setOpenTaskName={setOpenTaskName} />

        <AnimatePresence>
            {
              openTaskName ?
              <InputTaskName user={user} listData={listData} setOpenTaskName={setOpenTaskName}/>
              :
              <AddTaskDefault openTaskName={openTaskName} setOpenTaskName={setOpenTaskName} />
            }
        </AnimatePresence>
    </div>
  )
})

export const InputTaskMobile = ({openTaskName,setOpenTaskName}:{openTaskName:boolean,setOpenTaskName:React.Dispatch<React.SetStateAction<boolean>>}) => {
  return <div 
  onClick={()=> setOpenTaskName(!openTaskName)}
  className="
  w-full
  h-full

  flex
  flex-row
  items-center
  justify-between

  sLaptop:hidden

  cursor-pointer

  px-[4%]

  ">
    <h1 className="
    text-PrimaryWhite

    text-[0.915rem]
    mobile:text-[1.220rem]
    sMobile:text-[1.953rem]
    mMobile:text-[2.344rem]

    font-medium

    leading-none
    ">Add Task</h1>
    <img className="
    h-[1.025rem]
    mobile:h-[1.367rem]
    sMobile:h-[2.188rem]
    mMobile:h-[2.625rem]
    " src={AddList} alt="Add List Button" />
  </div>
}

export default AddTaskHolder
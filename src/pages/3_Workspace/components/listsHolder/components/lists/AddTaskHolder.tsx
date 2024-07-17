import { AnimatePresence } from "framer-motion"
import React, { memo } from "react"
import AddTaskDefault from "./AddTaskDefault";
import InputTaskName from "./InputTaskName";
import AddList from '/assets/addBoard.png'
import { list } from "../../../../../../reduxStore/lists/listsSlice";


const AddTaskHolder = memo((
  {
    // @ts-ignore
    listData,
    openTaskName, 
    setOpenTaskName
  }
  :
  {
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

    sLaptop:min-h-[1.874rem]
    mLaptop:min-h-[2.343rem]
    desktop:min-h-[2.812rem]
    largeDesktop:min-h-[3.515rem]

    sLaptop:hover:bg-SpaceBlueSelected
    ${
      openTaskName ?
      "sLaptop:bg-SpaceBlueSelected" : ""
    }
    `}>

        <InputTaskMobile openTaskName={openTaskName} setOpenTaskName={setOpenTaskName} />

        <AnimatePresence>
            {
              openTaskName ?
              <InputTaskName  openTaskName={openTaskName} setOpenTaskName={setOpenTaskName}/>
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
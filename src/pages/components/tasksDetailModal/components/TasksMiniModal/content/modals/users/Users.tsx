import { memo } from "react"
import UserEntity from "./UserEntity"
import scrollbarImage from '/assets/scrollBarTrack.png'
import { getUserHistory } from "../../../../../../../../customLogic/CustomLogic"
import x_icon from '/assets/addBoard.png';
import { miniTaskTypes } from "../../../../../TaskDetailModal";

const Users = memo((
  {
  setOpenTaskMiniModal,
  boardId,
  taskUsers,
  taskId,
  admin
  }:{
  setOpenTaskMiniModal:React.Dispatch<React.SetStateAction<miniTaskTypes>>,
  boardId:string,
  taskUsers:string[],
  taskId:string,
  admin:string
  }
) => {
  return (
    <div className="
      flex
      flex-col

      gap-[0.585rem]
      mobile:gap-[0.781rem]
      sMobile:gap-[1.25rem]
      mMobile:gap-[1.5rem]
      sLaptop:gap-[0.666rem]
      mLaptop:gap-[0.833rem]
      desktop:gap-[1rem]
      largeDesktop:gap-[1.25rem]
    ">
      <Header setOpenTaskMiniModal={setOpenTaskMiniModal} />
      <UsersInBoard boardId={boardId} taskUsers={taskUsers}  taskId={taskId} admin={admin} />
    </div>
  )
})

const Header = ({
  setOpenTaskMiniModal
} : {
  setOpenTaskMiniModal:React.Dispatch<React.SetStateAction<miniTaskTypes>>
}) =>{
  return <div className="
  w-full
  flex
  flex-row
  justify-between
  ">
  <h1 className="
    text-[0.937rem]
    mobile:text-[1.25rem]
    sMobile:text-[2rem]
    mMobile:text-[2.4rem]
    sLaptop:text-[1.2rem]
    mLaptop:text-[1.5rem]
    desktop:text-[1.8rem]
    largeDesktop:text-[2.25rem]

    leading-none

    font-medium

    text-PrimaryWhite
  ">Select Users:</h1>
  <img 
  onClick={
    () => setOpenTaskMiniModal("")
  }
  className="
      cursor-pointer

      w-[1.054rem]
      mobile:w-[1.406rem]
      sMobile:w-[2.25rem]
      mMobile:W-[2.7rem]
      sLaptop:hidden
      rotate-45
  " src={x_icon} alt="" />
  </div>
}

const UsersInBoard = (
  {
  boardId,
  taskUsers,
  taskId,
  admin
  }:{
  boardId:string,
  taskUsers:string[],
  taskId:string,
  admin:string
  }
) =>{

  const userHistory = getUserHistory(boardId);

  if(!userHistory) return
  return <div 
  // @ts-ignore
  style={{"--img":`url(${scrollbarImage})`}}
  className="
    flex
    flex-col

    gap-[0.351rem]
    mobile:gap-[0.468rem]
    sMobile:gap-[.75rem]
    mMobile:gap-[0.9rem]
    sLaptop:gap-[0.233rem]
    mLaptop:gap-[0.291rem]
    desktop:gap-[.35rem]
    largeDesktop:gap-[0.437rem]

    boardsScroll

    max-h-[8.789rem]
    mobile:max-h-[11.718rem]
    sMobile:max-h-[18.75rem]
    mMobile:max-h-[22.5rem]
    sLaptop:max-h-[11.366rem]
    mLaptop:max-h-[14.208rem]
    desktop:max-h-[17.050rem]
    largeDesktop:max-h-[21.313rem]
  ">
    {
      Object.entries(userHistory).map(([email,userInfo])=>
        <UserEntity key={email} email={email} userInfo={userInfo} admin={admin} taskId={taskId} included={taskUsers.includes(userInfo[0])} />
      )
    }
  </div>
}

export default Users
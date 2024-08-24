import { memo } from "react"
import { useAppSelector } from "../../../../../../../../reduxStore/hook"
import { getUserHistoryState } from "../../../../../../../../reduxStore/modal/modalSlice"
import UserEntity from "./UserEntity"
import scrollbarImage from '/assets/scrollBarTrack.png'


const Users = memo((
  {
    taskUsers,
    taskId,
    admin
  }:{
  taskUsers:string[],
  taskId:string,
  admin:string
  }
) => {
  return (
    <div className="
      flex
      flex-col

      sLaptop:gap-[0.666rem]
      mLaptop:gap-[0.833rem]
      desktop:gap-[1rem]
      largeDesktop:gap-[1.25rem]
    ">
      <Header />
      <UsersInBoard taskUsers={taskUsers}  taskId={taskId} admin={admin} />
    </div>
  )
})

const Header = () =>{
  return <h1 className="
    sLaptop:text-[1.2rem]
    mLaptop:text-[1.5rem]
    desktop:text-[1.8rem]
    largeDesktop:text-[2.25rem]

    leading-none

    font-medium

    text-PrimaryWhite
  ">Select Users:</h1>
}

const UsersInBoard = (
  {
  taskUsers,
  taskId,
  admin
  }:{
  taskUsers:string[],
  taskId:string,
  admin:string
  }
) =>{

  const userHistory = useAppSelector(getUserHistoryState);

  return <div 
  // @ts-ignore
  style={{"--img":`url(${scrollbarImage})`}}
  className="
    flex
    flex-col

    sLaptop:gap-[0.233rem]
    mLaptop:gap-[0.291rem]
    desktop:gap-[.35rem]
    largeDesktop:gap-[0.437rem]

    boardsScroll

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
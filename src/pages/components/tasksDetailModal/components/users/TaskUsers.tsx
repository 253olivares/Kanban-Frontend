import { memo } from "react"
import { getUserFromList } from "../../../../../customLogic/CustomLogic"
import { useAppSelector } from "../../../../../reduxStore/hook"
import { getUserHistoryState } from "../../../../../reduxStore/modal/modalSlice"
import scrollbarImage from '/assets/scrollBarTrack.png';
import addWorkspace from '/assets/Add_New_Workspace.svg';
import { miniTaskTypes } from "../../TaskDetailModal";


const TaskUsers = memo(( {
  setOpenTaskMiniModal,
  adminCred,
  usersAdded,
  admin
} : {
  setOpenTaskMiniModal:React.Dispatch<React.SetStateAction<miniTaskTypes>>,
  adminCred:boolean,
  usersAdded:string[],
  admin:string
}) => {
  return (
    <div className="
        flex
        flex-col
        
        px-[7.5%]

        sLaptop:gap-[0.533rem]
        mLaptop:gap-[0.666rem]
        desktop:gap-[0.8rem]
        largeDesktop:gap-[1rem]

    ">
        <TaskHead setOpenTaskMiniModal={setOpenTaskMiniModal}  adminCred={adminCred} />
        <MembersBody users={usersAdded} admin={admin} />
    </div>
  )
})

const TaskHead = memo(({
  setOpenTaskMiniModal,
  adminCred
} : {
  setOpenTaskMiniModal: React.Dispatch<React.SetStateAction<miniTaskTypes>>,
  adminCred:boolean
}) =>{
return<div className="
    w-full

    flex
    flex-row
 
    justify-between

    sLaptop:text-[1rem]
    mLaptop:text-[1.25rem]
    desktop:text-[1.5rem]
    largeDesktop:text-[1.875rem]
    font-medium

    text-PrimaryWhite

    items-center

    leading-none
">
    Members
    {
      adminCred && <div className="
      sLaptop:hover:bg-SpaceBlueSelected
  
      sLaptop:rounded-[0.133rem]
      mLaptop:rounded-[0.166rem]
      desktop:rounded-[0.2rem]
      largeDesktop:rounded-[.25rem]
  
      sLaptop:p-[0.066rem]
      mLaptop:p-[0.083rem]
      desktop:p-[0.1rem]
      largeDesktop:p-[0.125rem]
  
      sLaptop:hover:cursor-pointer
  
      transition-[background-color]
      duration-500
      ">
        <img 
        onClick={()=>setOpenTaskMiniModal("users")}
        className="
        sLaptop:w-[0.866rem]
        mLaptop:w-[1.083rem]
        desktop:w-[1.3rem]
        largeDesktop:w-[1.625rem]
     
        " src={addWorkspace} alt="Add Workspace" />
      </div>
    }
    
</div>
})

const MembersBody = memo(( {
  users,
  admin
} : {
  users:string[],
  admin:string
}) =>{
    return <div 
    style={{
      // @ts-ignore
      "--img": `url(${scrollbarImage})`
    }}
    className="
    w-full
    flex
    flex-col

    sLaptop:h-[9.6rem]
    mLaptop:h-[12rem]
    desktop:h-[14.4rem]
    largeDesktop:h-[18rem]

    sLaptop:gap-[0.453rem]
    mLaptop:gap-[0.566rem]
    desktop:gap-[0.68rem]
    largeDesktop:gap-[.85rem] 

    boardsScroll
    ">
      <Members userId={admin} />
      {
        users.map((userId)=>
          <Members userId={userId} />
        )
      }
    </div>
})

const Members = memo(( {
  userId
} : {
  userId:string
}) => {

  const user = getUserFromList(userId);

  if(!user) return;
  return <div className="
  w-full

  bg-SpaceBlue

  px-[7.5%]

  flex
  flex-row
  items-center

  sLaptop:py-[0.5rem]
  mLaptop:py-[0.625rem]
  desktop:py-[0.75rem]
  largeDesktop:py-[0.937rem]

  sLaptop:gap-[0.572rem]
  mLaptop:gap-[0.715rem]
  desktop:gap-[0.859rem]
  largeDesktop:gap-[1.073rem]

  sLaptop:rounded-[0.190rem]
  mLaptop:rounded-[0.238rem]
  desktop:rounded-[0.286rem]
  largeDesktop:rounded-[0.357rem]

  ">
    <UserIcon userImg={user.pfp} />
    <div className="
    grid
    grid-cols-1

    sLaptop:gap-y-[0.208rem]
    mLaptop:gap-y-[0.260rem]
    desktop:gap-y-[0.313rem]
    largeDesktop:gap-y-[0.391rem]
    ">
      <UserName name={user.first_name+ " " +user.last_name} />
      <UserRole role={user.email} />
    </div>
  </div>
})

const UserIcon = memo((
    {
      userImg
    } : {
      userImg:string
    }
) =>{
  return <img className="
    
    sLaptop:w-[1.528rem]
    sLaptop:h-[1.528rem]
    mLaptop:w-[1.91rem]  
    mLaptop:h-[1.91rem]
    desktop:w-[2.292rem]
    desktop:h-[2.292rem]
    largeDesktop:w-[2.865rem]
    largeDesktop:h-[2.865rem]

    sLaptop:ring-[0.032rem]
    mLaptop:ring-[0.048rem]
    desktop:ring-[0.058rem]
    largeDesktop:ring-[0.072rem]

    ring-PrimaryWhite

    rounded-full
  " src={userImg} alt="UserImage" />
})

const UserName = memo(({
  name
} : {
  name:string
}) =>{
  return <h1 className="

    sLaptop:text-[0.687rem]
    mLaptop:text-[0.859rem]
    desktop:text-[1.031rem]
    largeDesktop:text-[1.288rem]

    font-medium

    text-PrimaryWhite

    leading-none

    w-full

    text-nowrap
    overflow-hidden
    text-ellipsis
    flex-grow
  ">
    {name}
  </h1>
})

const UserRole = memo((
  {
    role
  } : {
    role:string
  }
) =>{

  const userHistory = useAppSelector(getUserHistoryState);

  if(!userHistory[role]) return;
  return <h1 className="
    sLaptop:text-[0.533rem]
    mLaptop:text-[0.666rem]
    desktop:text-[.8rem]
    largeDesktop:text-[1rem]

    font-medium

    text-PrimaryWhite

    opacity-75

  ">
      {userHistory[role][1]}
  </h1>
})

export default TaskUsers
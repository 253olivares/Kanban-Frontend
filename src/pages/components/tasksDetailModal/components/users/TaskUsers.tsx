import { memo } from "react"
import { getUserFromList, getUserHistory } from "../../../../../customLogic/CustomLogic"
import scrollbarImage from '/assets/scrollBarTrack.png';
import scrollbarImageX from '/assets/scrollBarTrackX.png'
import addWorkspace from '/assets/Add_New_Workspace.svg';
import { miniTaskTypes } from "../../TaskDetailModal";


const TaskUsers = memo(( {
  boardId,
  setOpenTaskMiniModal,
  adminCred,
  usersAdded,
  admin
} : {
  boardId:string,
  setOpenTaskMiniModal:React.Dispatch<React.SetStateAction<miniTaskTypes>>,
  adminCred:boolean,
  usersAdded:string[],
  admin:string
}) => {
  return (
    <div className="
        flex
        flex-col
        
        px-[5%]
        sLaptop:px-[7.5%]

        gap-[0.468rem]
        mobile:gap-[0.625rem]
        sMobile:gap-[1rem]
        mMobile:gap-[1.2rem]
        sLaptop:gap-[0.533rem]
        mLaptop:gap-[0.666rem]
        desktop:gap-[0.8rem]
        largeDesktop:gap-[1rem]
    ">
        <TaskHead setOpenTaskMiniModal={setOpenTaskMiniModal}  adminCred={adminCred} />
        <MembersBody boardId={boardId} users={usersAdded} admin={admin} />
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

        
        w-[0.878rem]
        mobile:w-[1.171rem]
        sMobile:w-[1.875rem]
        mMobile:w-[2.25rem]
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
  boardId,
  users,
  admin
} : {
  boardId:string
  users:string[],
  admin:string
}) =>{
    return <div 
    // @ts-ignore
    style={{"--img": `url(${scrollbarImage})`,
    "--img2": `url(${scrollbarImageX})`}}
    className="
    w-full

    flex
    flex-row
    sLaptop:flex-col

    sLaptop:h-[9.6rem]
    mLaptop:h-[12rem]
    desktop:h-[14.4rem]
    largeDesktop:h-[18rem]

    gap-[0.410rem]
    mobile:gap-[0.546rem]
    sMobile:gap-[0.875rem]
    mMobile:gap-[1.05rem]
    sLaptop:gap-[0.453rem]  
    mLaptop:gap-[0.566rem]
    desktop:gap-[0.68rem]
    largeDesktop:gap-[.85rem] 

     boardsScrollx 
      sLaptop:boardsScroll
    ">
      <Members boardId={boardId} userId={admin} />
      {
        users.map((userId)=>
          <Members boardId={boardId} key={userId} userId={userId} />
        )
      }
    </div>
})

const Members = memo(( {
  boardId,
  userId
} : {
  boardId:string,
  userId:string
}) => {

  const user = getUserFromList(userId);

  if(!user) return;
  return <div className="

  flex-shrink-0
  w-[8.789rem]
  mobile:w-[11.718rem]
  sMobile:w-[18.75rem]
  mMObile:w-[22.5rem]

  sLaptop:w-full

  bg-SpaceBlue

  px-[3.5%]
  sLaptop:px-[7.5%]

  flex
  flex-row
  items-center
  justify-start

  py-[0.439rem]
  mobile:py-[0.586rem]
  sMobile:py-[0.938rem]
  mMobile:py-[1.125rem]
  sLaptop:py-[0.5rem]
  mLaptop:py-[0.625rem]
  desktop:py-[0.75rem]
  largeDesktop:py-[0.937rem]

  gap-[0.439rem]
  mobile:gap-[0.586rem]
  sMobile:gap-[0.938rem]
  mMobile:gap-[1.125rem]
  sLaptop:gap-[0.572rem]
  mLaptop:gap-[0.715rem]
  desktop:gap-[0.859rem]
  largeDesktop:gap-[1.073rem]

  rounded-[0.140rem]
  mobile:rounded-[0.187rem]
  sMobile:rounded-[.3rem]
  mMobile:rounded-[0.36rem]
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
      <UserRole boardId={boardId} role={user.email} />
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
    
    w-[1.757rem]
    h-[1.757rem]
    mobile:w-[2.343rem]
    mobile:h-[2.343rem]
    sMobile:w-[3.75rem]
    sMobile:h-[3.75rem]
    mMobile:w-[4.5rem]
    mMobile:h-[4.5rem]
    sLaptop:w-[1.528rem]
    sLaptop:h-[1.528rem]
    mLaptop:w-[1.91rem]  
    mLaptop:h-[1.91rem]
    desktop:w-[2.292rem]
    desktop:h-[2.292rem]
    largeDesktop:w-[2.865rem]
    largeDesktop:h-[2.865rem]

    ring-[0.070rem]
    mobile:ring-[0.093rem]
    sMobile:ring-[.15rem]
    mMobile:ring-[0.18rem]
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

    text-[0.652rem]
    mobile:text-[0.869rem]
    sMobile:text-[1.391rem]
    mMobile:text-[1.669rem]
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
    boardId,
    role
  } : {
    boardId:string,
    role:string
  }
) =>{

  const userHistory:Record<string,string[]> | null =  getUserHistory(boardId);

  if( !userHistory ) return;
  return <h1 className="
    text-[0.434rem]
    mobile:text-[0.579rem]
    sMobile:text-[0.927rem]
    mMobile:text-[1.112rem]
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
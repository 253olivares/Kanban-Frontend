import { memo } from "react";
import { getUserFromList } from "../../../../../customLogic/CustomLogic";
import { useAppSelector } from "../../../../../reduxStore/hook";
import { getUserHistoryState } from "../../../../../reduxStore/modal/modalSlice";
import defaultImg from "/assets/default.png";

const UserIconNameRole = memo(({
    assignees,
    userId,
    adminCred
  } : {
    assignees:string[],
    userId:string,
    adminCred:boolean
  })=>{
  
    const user = getUserFromList(userId) || null;
  
    const userHistory =  useAppSelector(getUserHistoryState);
  
    if(!user) return
    return <div className="
    flex
    flex-row

    items-center

    sLaptop:gap-[0.64rem]
    mLaptop:gap-[0.8rem]
    desktop:gap-[1rem]
    largeDesktop:gap-[1.2rem]
    ">
        <Icon hidden={assignees.includes(userId) || adminCred} iconImage={user.pfp} />
        <div className="
        flex
        flex-col

        sLaptop:gap-[0.166rem]
        mLaptop:gap-[0.208rem]
        desktop:gap-[.25rem]
        largeDesktop:gap-[0.312rem]
        ">
            <UserName  hidden={assignees.includes(userId) || adminCred} userName={user.first_name + " " + user.last_name} />
            <UserRole  hidden={assignees.includes(userId) || adminCred} role={userHistory[user.email][1]}/>
        </div>
    </div>
  })


  const UserRole = memo((
    {
        hidden,
        role
    }: {
        hidden:boolean,
        role:string
    }
  )=>{
    return <span className="
    
    sLaptop:text-[0.541rem]
    mLaptop:text-[0.677rem]
    desktop:text-[0.813rem]
    largeDesktop:text-[1.016rem]

    leading-none
    text-PrimaryWhite

    font-medium
    opacity-50
    ">
        {hidden ? role : "No Role"}
    </span>
  })

const UserName = memo(({
    hidden,
    userName
} : {
    hidden:boolean,
    userName:string
}) =>{
    return <h1 className="

    sLaptop:text-[0.833rem]
    mLaptop:text-[1.041rem]
    desktop:text-[1.25rem]
    largeDesktop:text-[1.562rem]

    leading-none
    text-PrimaryWhite
    font-medium
    ">{hidden ? userName : "Removed User"}</h1>
})
const Icon = memo(({
    hidden,
    iconImage
} : {
    hidden:boolean,
    iconImage:string
}) => {
    return <img className="
      sLaptop:w-[1.573rem]
      mLaptop:w-[1.967rem]
      desktop:w-[2.361rem]
      largeDesktop:w-[2.951rem]
      sLaptop:h-[1.573rem]
      mLaptop:h-[1.967rem]
      desktop:h-[2.361rem]
      largeDesktop:h-[2.951rem]

      ring-PrimaryWhite
      sLaptop:ring-[0.083rem]
      mLaptop:ring-[0.104rem]
      desktop:ring-[0.125rem]
      largeDesktop:ring-[0.156rem]

      rounded-full
    " src={hidden ? iconImage : defaultImg} alt="Icon Image" />
})
export default UserIconNameRole
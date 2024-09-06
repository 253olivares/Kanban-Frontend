import { memo } from "react";
import { getUserFromList, getUserHistory } from "../../../../../customLogic/CustomLogic";
import defaultImg from "/assets/default.png";

const UserIconNameRole = memo(({
    boardId,
    assignees,
    userId,
    adminCred
  } : {
    boardId:string,
    assignees:string[],
    userId:string,
    adminCred:boolean
  })=>{
  
    const user = getUserFromList(userId) || null;
  
    const userHistory:Record<string,string[]> | null =  getUserHistory(boardId);
  
    if(!user || !userHistory) return
    return <div className="
    flex
    flex-row

    items-center

    gap-[0.585rem]
    mobile:gap-[0.781rem]
    sMobile:gap-[1.25rem]
    mMobile:gap-[1.5rem]
    sLaptop:gap-[0.64rem]
    mLaptop:gap-[0.8rem]
    desktop:gap-[1rem]
    largeDesktop:gap-[1.2rem]
    ">
        <Icon hidden={assignees.includes(userId) || adminCred} iconImage={user.pfp} />
        <div className="
        flex
        flex-col

        gap-[0.175rem]
        mobile:gap-[0.234rem]
        sMobile:gap-[0.375rem]
        mMobile:gap-[0.45rem]
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
    
    text-[0.965rem]
    mobile:text-[0.603rem]
    sMobile:text-[0.965rem]
    mMobile:text-[1.158rem]
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

    text-[0.632rem]
    mobile:text-[0.843rem]
    sMobile:text-[1.35rem]
    mMobile:text-[1.62rem]
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
      w-[1.464rem]
      h-[1.464rem]
      mobile:w-[1.953rem]
      mobile:h-[1.953rem]
      sMobile:w-[3.125rem]
      sMobile:h-[3.125rem]
      mMobile:w-[3.75rem]
      mMobile:h-[3.75rem]

      sLaptop:w-[1.573rem]
      mLaptop:w-[1.967rem]
      desktop:w-[2.361rem]
      largeDesktop:w-[2.951rem]
      sLaptop:h-[1.573rem]
      mLaptop:h-[1.967rem]
      desktop:h-[2.361rem]
      largeDesktop:h-[2.951rem]

      ring-PrimaryWhite

      ring-[0.046rem]
      mobile:ring-[0.062rem]
      sMobile:ring-[.1rem]
      mMobile:ring-[0.12rem]
      sLaptop:ring-[0.083rem]
      mLaptop:ring-[0.104rem]
      desktop:ring-[0.125rem]
      largeDesktop:ring-[0.156rem]

      rounded-full
    " src={hidden ? iconImage : defaultImg} alt="Icon Image" />
})
export default UserIconNameRole
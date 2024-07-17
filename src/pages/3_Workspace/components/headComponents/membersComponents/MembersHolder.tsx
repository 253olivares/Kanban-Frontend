import { memo } from "react";
import { getUserFromList } from "../../../../../customLogic/CustomLogic";
import AdminUserImage from "./AdminUserImage";


const MembersHolder = memo(({member}:{member:string[]}) => {

  const user = getUserFromList(member[0])
  const role = member[1];
  
  if(!user) return;

  return (
    <div className="
    relative
    z-[5]
    w-full
    flex 
    flex-row
    justify-between
    
    gap-[0.937rem]
    mobile:gap-[1.25rem]
    sMobile:gap-[2rem]
    mMobile:gap-[2.4rem]
    sLaptop:gap-[0.426rem]
    mLaptop:gap-[0.533rem]
    desktop:gap-[0.64rem]
    largeDesktop:gap-[.8rem]

    items-center
    ">
        <AdminUserImage image={user.pfp} role={role} />
  
      <div 
      className="
      flex
      flex-col
      flex-grow

      "
      >
        <h1 className="
         text-PrimaryWhite
         font-bold


         text-ellipsis
         overflow-hidden

         sLaptop:text-[rgb(109,109,109)]

         text-[0.843rem]
         mobile:text-[1.125rem]
         sMobile:text-[1.8rem]
         mMobile:text-[1.2rem]
         sLaptop:text-[0.613rem]
         mLaptop:text-[0.766rem]
         desktop:text-[0.92rem]
         largeDesktop:text-[1.15rem]

         leading-snug
        ">{user.first_name + " " + user.last_name}</h1>
        <p className="
        font-medium

        text-PrimaryWhite
        opacity-75
        sLaptop:text-[rgba(109,109,109,.85)]
        text-[0.703rem]
        mobile:text-[0.937rem]
        sMobile:text-[1.5rem]
        mMobile:text-[1.8rem]
        sLaptop:text-[.533rem]
        mLaptop:text-[.666rem]
        desktop:text-[.8rem]
        largeDesktop:text-[1rem]

        leading-snug

        ">{role}</p>
      </div>
    </div>
  )
})

export default MembersHolder
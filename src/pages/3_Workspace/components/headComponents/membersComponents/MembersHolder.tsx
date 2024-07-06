import { memo } from "react";
import { getUserFromList } from "../../../../../customLogic/CustomeLogic";
import UserImage from "./UserImage";
import AdminUserImage from "./AdminUserImage";


const MembersHolder = memo(({member}:{member:string[]}) => {

  const user = getUserFromList(member[0])
  const role = member[1];

  console.log(user);
  console.log(role);
  
  if(!user) return;

  return (
    <div className="
    relative
    z-[5]
    w-full
    flex 
    flex-row
    justify-between
    
    sLaptop:gap-[0.333rem]
    mLaptop:gap-[0.416rem]
    desktop:gap-[0.5rem]
    largeDesktop:gap-[0.625rem]

    items-center
    ">
      {
        role === "Admin" || role === "admin"?
        <AdminUserImage image={user.pfp} />
        :
        <UserImage image={user.pfp} />
      }

      <div 
      className="
      flex
      flex-col
      flex-grow

      "
      >
        <h1 className="
        text-[rgb(109,109,109)]
         font-bold


         text-ellipsis
         overflow-hidden

         sLaptop:text-[0.613rem]
         mLaptop:text-[0.766rem]
         desktop:text-[0.92rem]
         largeDesktop:text-[1.15rem]

         leading-snug
        ">{user.first_name + " " + user.last_name}</h1>
        <p className="
        font-medium

        text-[rgba(109,109,109,.75)]

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
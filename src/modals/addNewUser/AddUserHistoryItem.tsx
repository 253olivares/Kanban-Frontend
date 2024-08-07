import { motion } from "framer-motion"
import { getUserFromList } from "../../customLogic/CustomLogic";
import { memo } from "react";

const AddUserHistoryItem = ({v}:{v:string[]}) => {

    const role = v[1];
    const boardJoinDate = new Date(v[2]);

    const user = getUserFromList(v[0]);

    if(!user) return
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration:.5
    }}
    className="
    w-full
    flex
    flex-row
    justify-between
    items-center

    px-[2%]

    sLaptop:py-[.333rem]
    mLaptop:py-[.416rem]
    desktop:py-[.5rem]
    largeDesktop:py-[.625rem]

    hover:bg-[rgba(0,0,0,.25)]
   
    transition-[background-color]

    "
    >
        <div className="
        flex
        flex-row

        justify-center
        items-center

        sLaptop:gap-[0.799rem]
        mLaptop:gap-[0.999rem]
        desktop:gap-[1.2rem]
        largeDesktop:gap-[1.5rem]
        ">
            <UserIcon userImage = {user.pfp}/>
            <UserName userName={`${user.first_name} ${user.last_name}`}/>
            <Role userRole={role}/>
        </div>
        <Joined dateJoined={boardJoinDate} />
    </motion.div>
  )
}

export default AddUserHistoryItem

const UserIcon = memo(({userImage}:{userImage:string}) => {
    return <img
    className="

        rounded-full

        sLaptop:w-[1.599rem]
        mLaptop:w-[1.999rem]
        desktop:w-[2.4rem]
        largeDesktop:w-[3rem]
    " src={userImage} alt="userImage" />    
})

const UserName = memo(({userName}:{userName:string})=> {
    return <h1 className="
        font-medium

        sLaptop:text-[0.879rem]
        mLaptop:text-[1.098rem]
        desktop:text-[1.32rem]
        largeDesktop:text-[1.65rem]

        sLaptop:w-[8.333rem]
        mLaptop:w-[10.416rem]
        desktop:w-[12.5rem]
        largeDesktop:w-[15.625rem]

        overflow-hidden
        text-ellipsis
    ">
        {userName}
    </h1>
})

const Role = memo(({userRole}:{userRole:string})=> {
    return <span className="
        sLaptop:text-[.666rem]    
        mLaptop:text-[.832rem]    
        desktop:text-[1rem]
        largeDesktop:text-[1.25rem]
    ">
        Role: <span className="opacity-50 font-medium">{userRole}</span>
    </span>
})

const Joined = memo(({dateJoined}:{dateJoined:Date})=> {
    return <span className="
        sLaptop:text-[.666rem]    
        mLaptop:text-[.832rem]    
        desktop:text-[1rem]
        largeDesktop:text-[1.25rem]
    ">
        User Joined: { 
        dateJoined.toLocaleDateString('en-US',{weekday:'short'})
         + " "+ 
        dateJoined.toLocaleDateString()}
    </span>
})
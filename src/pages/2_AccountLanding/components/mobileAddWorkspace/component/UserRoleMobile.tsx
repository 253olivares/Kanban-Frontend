import { motion } from "framer-motion"
import RoleInput from "../../../../../modals/addNewUser/RoleInput";
import { useContext } from "react";
import { AppContext } from "../../../../appRefContext/appRefContext";


const UserRoleMobile = ({
    emailInput,
    addusertohistory
} : {
    emailInput:string,
    addusertohistory:(user: Record<string,string[]>) => void
}) => {

    const appContext = useContext(AppContext);
    const {addRoleRef} = appContext!;

  return (
    <motion.div
    ref={addRoleRef}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
        duration:.3 
    }}
    className="
    absolute
    top-0
    left-0
    w-full
    h-full
    flex
    justify-center
    items-center
    z-[5]
    sLaptop:hidden
    "
    >
    
        <RoleInput emailInput={emailInput} addusertohistory ={addusertohistory} />
        <div 
        className="
        absolute
        block
        w-full
        h-full
        bg-[rgba(0,0,0,0.75)]
        sLaptop:hidden
        "
        />
    </motion.div>
  )
}

export default UserRoleMobile
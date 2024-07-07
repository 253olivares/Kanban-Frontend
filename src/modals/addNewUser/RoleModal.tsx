import { useAppDispatch } from "../../reduxStore/hook"
import { changeUserRoleNameState } from "../../reduxStore/modal/modalSlice";
import { motion } from "framer-motion";
import RoleInput from "./RoleInput";

const RoleModal = (
    {
        emailInput,
        addusertohistory
    }:{
        emailInput:string,
        addusertohistory:(user: Record<string, string[]>)=>void
    }) => {
 
    const dispatch = useAppDispatch();

  return <motion.div 
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
    ">
        <RoleInput emailInput={emailInput} addusertohistory={addusertohistory} />
        <div 
        className="
        absolute
        block
        w-full
        h-full
        sLaptop:bg-[rgba(0,0,0,0.75)]
        "
        onClick={()=> dispatch(changeUserRoleNameState(false))}
        />
    </motion.div>
  
}

export default RoleModal
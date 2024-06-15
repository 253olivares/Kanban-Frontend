import { motion } from "framer-motion"
import { useAppDispatch, useAppSelector } from "../../reduxStore/hook"
import { getWorkspaceSelect, removeExistingWorkspace, selectById } from "../../reduxStore/workspace/workspaceSlice"
import { closeModal } from "../../reduxStore/modal/modalSlice";
import { removeUserWorkspace } from "../../reduxStore/users/userSlice";

const index = () => {
  const dispatch = useAppDispatch();

  const workspaceId = useAppSelector(getWorkspaceSelect);

  const workspace = useAppSelector(state => selectById(state,workspaceId));

  if(!workspace)return;

  return (
    <motion.div
    initial={{
        y:25
    }}
    animate={{
        y:0
    }}
    exit={{
        y:25
    }}
    transition={{
        duration:.3
      }}
      className="
      relative

      bg-SpaceBlue
    
      hidden

      sLaptop:flex
      flex-col

      justify-center

      sLaptop:w-[23.999rem] 
      mLaptop:w-[29.999rem]  
      desktop:w-[36rem] 
      largeDesktop:w-[45rem]

      sLaptop:rounded-[0.471rem] 
      mLaptop:rounded-[0.588rem]
      desktop:rounded-[0.706rem]
      largeDesktop:rounded-[0.883rem]

      px-[7.5%]

      text-white
      "
    >
      <h1 className="
      sLaptop:text-[1.066rem]
      mLaptop:text-[1.333rem]
      desktop:text-[1.6rem]
      largeDesktop:text-[2rem]

      leading-tight
      font-medium

      sLaptop:py-[1.066rem]
      mLaptop:py-[1.333rem]
      desktop:py-[1.6rem]
      largeDesktop:py-[2rem]

      ">Are you sure you want to delete your workspace. This action can not be undone!</h1>
      <div className="
      flex 
      flex-col
      
      sLaptop:pb-[1.066rem]
      mLaptop:pb-[1.333rem]
      desktop:pb-[1.6rem]
      largeDesktop:pb-[2rem]

      sLaptop:gap-[0.266rem]
      mLaptop:gap-[0.333rem]
      desktop:gap-[0.4rem]
      largeDesktop:gap-[0.5rem]

      ">
        <span className="
        sLaptop:text-[0.933rem]
        mLaptop:text-[1.166rem]
        desktop:text-[1.4rem]
        largeDesktop:text-[1.75rem]
        ">Yes delete "<span className="opacity-50">{workspace.name}</span>"</span>
        <button 
        
        onClick={()=>{
          dispatch(removeExistingWorkspace(workspaceId)).unwrap().then(()=>{
            dispatch(removeUserWorkspace(workspaceId));
            dispatch(closeModal());
          }).catch(()=>alert("Issue encountered trying to delete"+workspace.name));
        }}
        className="
        opacity-50
        hover:opacity-100

        sLaptop:text-[0.986rem]
        mLaptop:text-[1.233rem]
        desktop:text-[1.48rem]
        largeDesktop:text-[1.85rem]

        sLaptop:py-[0.266rem]
        mLaptop:py-[0.333rem]
        desktop:py-[0.4rem]
        largeDesktop:py-[.5rem]

        font-bold
        
        sLaptop:rounded-[0.266rem]
        mLaptop:rounded-[0.333rem]
        desktop:rounded-[.4rem]
        largeDesktop:rounded-[.5rem]

        bg-[#F9453E]
        ">Delete work space</button>
      </div>
    </motion.div>
  )   
}

export default index
import { motion } from "framer-motion"
import { useAppDispatch, useAppSelector } from "../../../../../reduxStore/hook"
import { getWorkspaceSelect, removeExistingWorkspace, selectWorkspaceById } from "../../../../../reduxStore/workspace/workspaceSlice"
import { closeModal} from "../../../../../reduxStore/modal/modalSlice"
import { removeUserBoards, removeUserWorkspace } from "../../../../../reduxStore/users/userSlice"
import { removeBoardsFromWorkspace } from "../../../../../reduxStore/boards/boardsSlice"

const confirmDelete = () => {
    const dispatch = useAppDispatch();

    const workspaceId = useAppSelector(getWorkspaceSelect);

    const workspace = useAppSelector(state => selectWorkspaceById(state,workspaceId));

    if(!workspace) return;
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
      bg-SpaceBlue
      flex 
      flex-col
      sLaptop:hidden

      w-[16.699rem]
      mobile:w-[22.265rem]
      sMobile:w-[35.625rem]
      mMobile:w-[42.75rem]
      
      px-[0.854rem]
      mobile:px-[1.139rem]
      sMobile:px-[1.823rem]
      mMobile:px-[2.188rem]
  
      rounded-[0.390rem]
      mobile:rounded-[0.520rem]
      sMobile:rounded-[0.833rem]
      mMobile:rounded-[0.999rem]
      "
    >
        <h1 
        className="

        text-[0.854rem]
        mobile:text-[1.139rem]
        sMobile:text-[1.823rem]
        mMobile:text-[2.187rem]

        text-white
        leading-tight
        font-medium

        py-[0.732rem]
        mobile:py-[0.976rem]
        sMobile:py-[1.563rem]
        mMobile:py-[1.875rem]
        "
        >
        Are you sure you want to delete your workspace. This action can not be undone!
        </h1>
        <div className="
        flex
        flex-col

        text-PrimaryWhite

        pb-[0.732rem]
        mobile:pb-[0.976rem]
        sMobile:pb-[1.563rem]
        mMobile:pb-[1.875rem]

        gap-[0.532rem]
        mobile:gap-[0.666rem]
        sMobile:gap-[0.8rem]
        mMobile:gap-[1rem]
        ">
            <span className="
            text-[0.747rem]
            mobile:text-[0.995rem]
            sMobile:text-[1.593rem]
            mMobile:text-[1.912rem]
            ">
            Yes delete "<span className="opacity-50">{workspace.name}</span>"
            </span>
            <div className="
            w-full

            flex
            flex-row
            justify-between
            ">
                <button 

                onClick={()=> dispatch(closeModal())}

                className="
                font-bold
                bg-PrimaryWhite
    
                text-[0.703rem]
                mobile:text-[0.937rem]
                sMobile:text-[1.5rem]
                mMobile:text-[1.8rem]
    
                px-[1.142rem]
                mobile:px-[1.523rem]
                sMobile:px-[2.438rem]
                mMobile:px-[2.925rem]
    
                py-[0.292rem]
                mobile:py-[0.390rem]
                sMobile:py-[0.625rem]
                mMobile:py-[0.75rem]
    
                rounded-[0.175rem]
                mobile:rounded-[0.233rem]
                sMobile:rounded-[0.374rem]
                mMobile:rounded-[0.448rem]
    
                opacity-75
            
                text-Slate-gray
                hover:cursor-pointer

                ">
                    Cancel
                </button>

                <button
                 onClick={()=>{
                    dispatch(removeExistingWorkspace(workspaceId))
                    .unwrap()
                    .then((x)=>{
                        dispatch(removeUserWorkspace(x.workspaceInfo.w_id));
                        dispatch(removeBoardsFromWorkspace(x.workspaceInfo));
                        dispatch(removeUserBoards(x.workspaceInfo));
                        dispatch(closeModal());
                    }).catch(()=>alert("Issue encountered trying to delete"+workspace.name))
                 }}
                 className="
                 font-bold

                 text-[0.703rem]
                 mobile:text-[0.937rem]
                 sMobile:text-[1.5rem]
                 mMobile:text-[1.8rem]

                 px-[1.142rem]
                 mobile:px-[1.523rem]
                 sMobile:px-[2.438rem]
                 mMobile:px-[2.925rem]

                 py-[0.292rem]
                 mobile:py-[0.390rem]
                 sMobile:py-[0.625rem]
                 mMobile:py-[0.75rem]

                 rounded-[0.175rem]
                 mobile:rounded-[0.233rem]
                 sMobile:rounded-[0.374rem]
                 mMobile:rounded-[0.448rem]

                 disabled:opacity-25
                 disabled:bg-PrimaryWhite
                 enabled:text-PrimaryWhite
            
                 bg-[#F9453E]
                 "
                >
                    Delete
                </button>

            </div>
        </div>
    </motion.div>
  )
}

export default confirmDelete
import { motion } from "framer-motion"
import { useAppDispatch, useAppSelector } from "../../reduxStore/hook"
import { getWorkspaceSelect, removeExistingWorkspace, selectWorkspaceById, workspace } from "../../reduxStore/workspace/workspaceSlice"
import { closeModal } from "../../reduxStore/modal/modalSlice";
import { removeUserBoards, removeUserWorkspace } from "../../reduxStore/users/userSlice";
import { removeBoardsFromWorkspace } from "../../reduxStore/boards/boardsSlice";

const index = () => {

  const workspaceId = useAppSelector(getWorkspaceSelect);

  const workspace = useAppSelector(state => selectWorkspaceById(state,workspaceId));

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

      sLaptop:max-w-[23.999rem] 
      mLaptop:max-w-[29.999rem]  
      desktop:max-w-[36rem] 
      largeDesktop:max-w-[45rem]

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
        <WorkspaceDeleteButton workspace={workspace} />
      </div>
    </motion.div>
  )   
}

const WorkspaceDeleteButton = ({workspace}:{workspace:workspace}) => {

  const dispatch = useAppDispatch();


  if(!workspace)return;

  return <button 
  onClick={()=>{
    dispatch(removeExistingWorkspace(workspace.w_id))
    .unwrap()
    .then((x)=>{
      dispatch(removeUserWorkspace(x.workspaceInfo.w_id));
      dispatch(removeBoardsFromWorkspace(x.workspaceInfo));
      dispatch(removeUserBoards({removeBoard:x.workspaceInfo.boards,members:null}));
      dispatch(closeModal());
    })
    .catch(()=>alert("Issue encountered trying to delete"+workspace.name));
  }}
  className="
  workspaceDeleteButtonModal
  ">Delete Workspace</button>
}

export default index
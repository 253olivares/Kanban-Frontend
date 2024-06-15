import { AnimatePresence, motion } from "framer-motion"
import { useContext } from "react"
import { AppContext } from "../../../appRefContext";
import { useState } from "react";

import AddModal from './component/workspaceModal';
import ConfirmDelete from './component/confirmDelete';
import { useAppDispatch } from "../../../../reduxStore/hook";
import { addNewWorkspace, changeModal } from "../../../../reduxStore/workspace/workspaceSlice";
import { sanitize } from "../../../../customLogic";
import { updateUserWorkspaces } from "../../../../reduxStore/users/userSlice";
import { changeBoardModal } from "../../../../reduxStore/boards/boardsSlice";

const index = ({boardsModal,mobileWorkspace,modaal}:{boardsModal:boolean,mobileWorkspace:boolean,modaal:string}) => {

    const appContext= useContext(AppContext);
    const {mobileAddNewWorkspace} = appContext!;

    const dispatch = useAppDispatch();

    const [newWorkspaceName,setNewWorkspaceName] = useState<string>("");
    const [newBoardName, setNewBoardName] = useState<string>("");

    const checkInputNewworkspace = ():void => {
      dispatch(addNewWorkspace(sanitize(newWorkspaceName)))
          .unwrap()
          .then((x)=>{
              alert('New workspace successfully added!');
              if(x?.newWorkspace) dispatch(updateUserWorkspaces(x.newWorkspace));
              dispatch(changeModal(false));
              setNewWorkspaceName('')
          })
    };

    const checkInputNewBoard = ():void => {
      alert("Adding feature!")
    } 

  return (
    <motion.div 

    ref={mobileAddNewWorkspace}

    initial={{ 
        opacity: 0 
      }}
      animate={{ 
        opacity: 1 
      }}
      exit={{ 
        opacity: 0 
      }}
    className="
    absolute
    z-[20]
    top-0
    left-0
    w-dvw
    h-dvh
    
    overflow-x-hidden
    overflow-y-auto
    no-scrollbar
    bg-[rgba(0,0,0,0.75)]

    flex
    justify-center
    items-center

    sLaptop:hidden
    ">
      {
        mobileWorkspace ? 
        <AnimatePresence>
            <AddModal 
            label="Add New Workspace:"
            placeholder="New Workspace..."
            valueHolder = {newWorkspaceName}
            setHolder = {(e:React.ChangeEvent<HTMLInputElement>)=> setNewWorkspaceName(e.target.value)}
            checkInputHolder = {checkInputNewworkspace}
            closeModal = {()=>dispatch(changeModal(false))}
            />
        </AnimatePresence> : ''
      }
      {
        boardsModal ? 
        <AnimatePresence>
            <AddModal 
            label="Add New Board:"
            placeholder="New Board..."
            valueHolder={newBoardName}
            setHolder = {(e:React.ChangeEvent<HTMLInputElement>)=> setNewBoardName(e.target.value)}
            checkInputHolder = {checkInputNewBoard}
            closeModal={()=> dispatch(changeBoardModal(false))}
            />
        </AnimatePresence> : ''
      }
      {
        modaal === 'deleteConfirm' ? 
        <AnimatePresence>
            <ConfirmDelete />
        </AnimatePresence> : ''
      }
    </motion.div>
  )
}

export default index
import { AnimatePresence, motion } from "framer-motion"
import { memo, useContext, useEffect, useRef } from "react"
import { AppContext } from "../../../appRefContext";
import { useState } from "react";

import AddModal from './component/workspaceModal';
import ConfirmDelete from './component/confirmDelete';
import { useAppDispatch, useAppSelector } from "../../../../reduxStore/hook";
import { addNewWorkspace, changeModal, getWorkspaceSelect, updateWorkspaceBoard } from "../../../../reduxStore/workspace/workspaceSlice";
import { sanitize } from "../../../../customLogic";
import { updateUserBoards, updateUserWorkspaces } from "../../../../reduxStore/users/userSlice";
import { addBoards, changeBoardModal } from "../../../../reduxStore/boards/boardsSlice";
import { changeListModalState, changeMobileBoardNameState } from "../../../../reduxStore/modal/modalSlice";

const index = memo(({boardsModal,mobileWorkspace,modal,listModal,mobileBoardNameModal}:{boardsModal:boolean,mobileWorkspace:boolean,modal:string,listModal:boolean,mobileBoardNameModal:boolean}) => {

    const dispatch = useAppDispatch();

    const appContext= useContext(AppContext);
    const {mobileAddNewWorkspace} = appContext!;

    const selectWorkspace = useAppSelector(getWorkspaceSelect);

    const workspaceRef = useRef<HTMLInputElement>(null);
    const boardRef = useRef<HTMLInputElement>(null);
    // @ts-ignore
    const listRef = useRef<HTMLInputElement>(null);
    // @ts-ignore
    const newBoardNameRef = useRef<HTMLInputElement>(null);

    const [newWorkspaceName,setNewWorkspaceName] = useState<string>("");
    const [newBoardName, setNewBoardName] = useState<string>("");
    const [newList, setNewList] = useState<string>("");
    const [updatedBoardName, setUpdatedBoardName] = useState<string>("");

    const checkInputNewworkspace = ():void => {
      if(newWorkspaceName.trim().length > 15){
        alert('Please make sure your workspace name is less than 15 characters. (Including spaces)');
        return;
      }
      dispatch(addNewWorkspace(sanitize(newWorkspaceName.trim())))
          .unwrap()
          .then((x:any)=>{
              alert('New workspace successfully added!');
              if(x?.newWorkspace) dispatch(updateUserWorkspaces(x.newWorkspace));
              dispatch(changeModal(false));
              setNewWorkspaceName('')
          })
    };

    const checkInputNewBoard = ():void => {
      if(newBoardName.trim().length > 16) {
        alert('Please make sure the board name is less than 16 characters. (Including spaces)')
        return;
      }
      dispatch(addBoards({boardName:newBoardName.trim(),workspaceId:selectWorkspace}))
      .unwrap()
      .then((x) => {
        alert('New board successfully added!');
        if(x) {
          dispatch(updateUserBoards(x.newBoard));
          dispatch(updateWorkspaceBoard(x.newBoard))
        } 
        dispatch(changeBoardModal(false));
        setNewBoardName('');
      })
    } 

    const checkListName =():void => {
      alert("Working on this feature!");
    }

    const checkNewBoardName = ():void => {

    }

    useEffect(()=> {

      if(workspaceRef.current && newWorkspaceName.trim().length >15){
        workspaceRef.current.style.color = 'red';
      } else if (boardRef.current && newBoardName.trim().length >16){
        boardRef.current.style.color = 'red';
      } else if (workspaceRef.current && newWorkspaceName.trim().length <= 15){
        workspaceRef.current.style.color = 'black';
      } else if (boardRef.current && newBoardName.trim().length <= 16){
        boardRef.current.style.color = 'black';
      }

    },[])

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
        modal === 'deleteConfirm' ? 
        <AnimatePresence>
            <ConfirmDelete />
        </AnimatePresence> : ''
      }
      {
        listModal ?
        <AnimatePresence>
          <AddModal 
            label="Add New List:"
            placeholder="New List..."
            valueHolder={newList}
            setHolder = {(e:React.ChangeEvent<HTMLInputElement>)=> setNewList(e.target.value)}
            checkInputHolder = {checkListName}
            closeModal={()=> dispatch(changeListModalState(false))}
            />
        </AnimatePresence> : ''
      }
      {
        mobileBoardNameModal ?
        <AnimatePresence>
          <AddModal 
            label="Update Board Name:"
            placeholder="New Board Name..."
            valueHolder={updatedBoardName}
            setHolder={(e:React.ChangeEvent<HTMLInputElement>)=> setUpdatedBoardName(e.target.value)}
            checkInputHolder={checkNewBoardName}
            closeModal={()=>dispatch(changeMobileBoardNameState(false))}
          />
        </AnimatePresence> : ''
      }
    </motion.div>
  )
})

export default index
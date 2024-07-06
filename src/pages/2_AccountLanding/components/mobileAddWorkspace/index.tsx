import { AnimatePresence, motion } from "framer-motion"
import { memo, useContext } from "react"
import { AppContext } from "../../../appRefContext/appRefContext";
import { useState } from "react";

import AddModal from './component/workspaceModal';
import ConfirmDelete from './component/confirmDelete';
import { useAppDispatch, useAppSelector } from "../../../../reduxStore/hook";
import { addNewWorkspace, changeModal, getWorkspaceSelect, updateWorkspaceBoard } from "../../../../reduxStore/workspace/workspaceSlice";
import { sanitize } from "../../../../customLogic/CustomeLogic";
import { updateUserBoards, updateUserWorkspaces } from "../../../../reduxStore/users/userSlice";
import { addBoards, changeBoardModal, updateBoardNameFromWorkspace } from "../../../../reduxStore/boards/boardsSlice";
import { changeListModalState, changeMobileBoardNameState } from "../../../../reduxStore/modal/modalSlice";
import { Params } from "react-router-dom";

const index = memo(({params, boardsModal,mobileWorkspace,modal,listModal,mobileBoardNameModal}:{params:Readonly<Params<string>>,boardsModal:boolean,mobileWorkspace:boolean,modal:string,listModal:boolean,mobileBoardNameModal:boolean}) => {

    const dispatch = useAppDispatch();

    const appContext= useContext(AppContext);
    const {mobileAddNewWorkspace} = appContext!;

    const selectWorkspace = useAppSelector(getWorkspaceSelect);

    const [newWorkspaceName,setNewWorkspaceName] = useState<string>("");
    const [newBoardName, setNewBoardName] = useState<string>("");
    const [newList, setNewList] = useState<string>("");
    const [updatedBoardName, setUpdatedBoardName] = useState<string>("");

    const checkInputNewworkspace = ():void => {
      if(newWorkspaceName.trim().length > 15){
        alert('Please make sure your workspace name is less than 15 characters. (Including spaces)');
        return;
      }
      if(newWorkspaceName.trim()===''){
        alert("Please enter a workspace name!");
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
      if(newBoardName.trim()===''){
        alert("Please enter a board Name!");
        return
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
      if(newList.trim() === "") {
        alert("Please enter a list Name!");
        return;
      }
      alert("Working on this feature!");
    }

    const checkNewBoardName = ():void => {
      if(updatedBoardName.trim().length !> 18) {
        alert("Please make sure your workspace name is less then 16 letters or until letters are no longer red!");
        return;
      }
      if(updatedBoardName.trim() === "" ){
        alert("Please enter a new board name!");
      }

      dispatch(updateBoardNameFromWorkspace({boardName:updatedBoardName.trim(),boardId: params?.workspaceId || ""}))
      .unwrap().then(()=> {
        dispatch(changeMobileBoardNameState(false))
      }).catch(()=>{
        alert("Ran into problem updating board name!")
      })

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
            limit={15}
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
            limit={16} 
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
            limit={16}
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
            limit={16}
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
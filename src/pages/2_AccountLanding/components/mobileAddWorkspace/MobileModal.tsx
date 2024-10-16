import { AnimatePresence, motion } from "framer-motion"
import { memo, useContext } from "react"
import { AppContext } from "../../../appRefContext/appRefContext";
import { useState } from "react";

import AddModal from './component/workspaceModal';
import ConfirmDelete from './component/confirmDelete';
import { useAppDispatch, useAppSelector } from "../../../../reduxStore/hook";
import { addNewWorkspace, changeModal, getWorkspaceSelect, removeExistingWorkspace, removeUserFromWorkspace, selectWorkspaceById, setNewSelect, updateWorkspacBoardRemove, updateWorkspaceBoard } from "../../../../reduxStore/workspace/workspaceSlice";
import { createBoardListCL, createUserHistory, deleteBoardListMultipleCL, deleteBoardsUserHistory, deleteUserFromHistory, removeAdditionalUsersWorkspaceAndBoards, sanitize } from "../../../../customLogic/CustomLogic";
import { addTaskToUser, deleteTaskFromUsers, getUser, leaveWorkspaceUser, removeUserBoards, removeUserWorkspace, updateUserBoards, updateUserWorkspaces } from "../../../../reduxStore/users/userSlice";
import { addBoards, addListToBoard, changeBoardModal, deleteBoard, removeBoardsFromWorkspace, removeUserFromMulitpleBoards, selectBoardById, updateBoardNameFromWorkspace, updateBoardNameStart } from "../../../../reduxStore/boards/boardsSlice";
import { changeListModalState, changeMobileBoardNameState, closeModal, deleteUserHistory, getAddTaskInput, setAddTaskInput, setSettingModal } from "../../../../reduxStore/modal/modalSlice";
import { Params, useNavigate } from "react-router-dom";
import AddNewUser from "./component/AddNewUser";
import { createListState, deleteListStateBoardDelete, getSelectedList, list, selectAllLists, updateListTasks } from "../../../../reduxStore/lists/listsSlice";
import CheckBackground from "./component/CheckBackground";
import { createTask, deleteTasksFromMulitpleBoards, updateMultipleTasks } from "../../../../reduxStore/tasks/tasksSlice";
import { removeMulitpleComments } from "../../../../reduxStore/comments/commentsSlice";
import { deleteMulitpleTasksFromBoardDeletion } from "../../../../reduxStore/tasks/tasksSlice";

const MobileModal = memo((
  {
    params, 
    boardsModal,
    mobileWorkspace,
    modal,
    listModal,
    mobileBoardNameModal,
    addTaskModal
  }:{
    params:Readonly<Params<string>>,
    boardsModal:boolean,
    mobileWorkspace:boolean,
    modal:string,
    listModal:boolean,
    mobileBoardNameModal:boolean,
    addTaskModal:boolean
  }) => {

    const dispatch = useAppDispatch();

    const appContext= useContext(AppContext);
    const {mobileAddNewWorkspace} = appContext!;
    const {workspaceId} = params;
    const navigate = useNavigate();

    const selectWorkspace = useAppSelector(getWorkspaceSelect);

    const [newWorkspaceName,setNewWorkspaceName] = useState<string>("");
    const [newBoardName, setNewBoardName] = useState<string>("");
    const [newList, setNewList] = useState<string>("");
    const [updatedBoardName, setUpdatedBoardName] = useState<string>("");
    const newTaskList = useAppSelector(getAddTaskInput);

    const workspace = useAppSelector(state => selectWorkspaceById(state,selectWorkspace))
    const user = useAppSelector(getUser);
    const board = useAppSelector(state => selectBoardById(state,workspaceId||"")) || null;
    const lists = useAppSelector(selectAllLists).length;

    // @ts-ignore
    const selectList:list = useAppSelector(getSelectedList);

    const submitTaskName = () => {
      if(newTaskList.trim()==="") {
        alert("Please make sure to enter a name!")
        return;
      }
      if(newTaskList.trim().length>=20) {
        alert("please enter a short name!");
        return;
      }

      if(user?.u_id && selectList) dispatch(createTask({listData:selectList,adminId:user.u_id,taskName:newTaskList}))
        .unwrap()
        .then(x=>{
          dispatch(updateListTasks({list:x.list,newTask:x.newTask}));
          dispatch(addTaskToUser(x.newTask))
        }).catch((e)=>{
          console.log(e);
        })
    }

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
        if(x){
          dispatch(updateUserBoards(x.newBoard));
          dispatch(updateWorkspaceBoard(x.newBoard));
        }
        createUserHistory(x.newBoard);
        createBoardListCL(x.newBoard.b_id);
        dispatch(changeBoardModal(false));
        setNewBoardName('');
      })
    } 

    const checkListName =():void => {
      if(newList.trim().length === 0) {
        alert("Please make sure create a name for the list.");
        return;
      }
      if(newList.trim().length >= 18) {
        alert("Please make sure your list name is less than 18 letters.");
        return
      }

      dispatch(createListState({listName:newList, boardId:workspaceId || "", boardNumber:lists}))
      .unwrap()
      .then((x)=>{
        dispatch(addListToBoard({boardId:x.newList.b_id,list:x.newList}));
      }).catch((e)=>{
        console.log(e);
      });
  
      dispatch(changeListModalState(false))
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
        dispatch(changeMobileBoardNameState(false));
        dispatch(updateBoardNameStart(updatedBoardName.trim()));
      }).catch(()=>{
        alert("Ran into problem updating board name!")
      })

    }

    const deleteWorkspaceFn = ():void => {
    dispatch(removeExistingWorkspace(workspace.w_id))
    .unwrap()
    .then((x)=> {
      dispatch(deleteTasksFromMulitpleBoards({workspace:x.workspaceInfo}))
      .unwrap()
      .then(y=> {
        dispatch(removeMulitpleComments({commentsToDelete:y.commentsToDelete}))
        dispatch(deleteTaskFromUsers(y.tasksToDelete));
      });

      dispatch(removeBoardsFromWorkspace(x.workspaceInfo));

      dispatch(removeUserBoards({removeBoard:x.workspaceInfo.boards,members:null}))

      dispatch(removeUserWorkspace(x.workspaceInfo.w_id));

      deleteBoardsUserHistory(x.workspaceInfo.boards);

      removeAdditionalUsersWorkspaceAndBoards(x.workspaceInfo);

      deleteBoardListMultipleCL(x.workspaceInfo.boards);

      dispatch(closeModal());
    }).catch(()=> alert("Issue encountered trying to delete"+workspace.name))
    }

    const leaveWorkspaceFn = ():void => {
      dispatch(leaveWorkspaceUser(workspace.w_id))
      .unwrap().then(()=> {
  
        if(user) dispatch(removeUserFromMulitpleBoards({boards:workspace.boards,u_id:user.u_id})).unwrap().then((x)=>{
  
          dispatch(deleteTaskFromUsers(x.tasksToRemoveFrom))
          dispatch(updateMultipleTasks({tasks:x.tasksToRemoveFrom,removeUser:user.u_id}));
        });
        if(user) dispatch(removeUserFromWorkspace({workspace:workspace,u_id:user.u_id}));
  
        if(user) deleteUserFromHistory(workspace.boards,user.email);
  
        dispatch(setNewSelect(""));
        dispatch(closeModal());
      }).catch((e:any)=>{
        alert(e);
      })
    }

    const deleteBoardFn = () => {
      dispatch(deleteBoard(board.b_id))
        .unwrap()
        .then(x=> {
          // In here we are going to remove the board from other parts of the project
          // remove board from user information
          dispatch(removeUserBoards({removeBoard:[x.board.b_id],members:x.board.members}))
    
          // remove board from workspace where its from
          dispatch(updateWorkspacBoardRemove(x.board))
    
          dispatch(deleteUserHistory(x.board.b_id))
    
          dispatch(deleteListStateBoardDelete({boardId:x.board.b_id}))
    
          console.log("TESTSETSETSES", x)

          dispatch(deleteMulitpleTasksFromBoardDeletion(x.board.lists))
          .unwrap()
          .then(y=>{

            console.log("SOMETIHASLODKALSF", y)
            dispatch(removeMulitpleComments({commentsToDelete:y.commentsToDelete}));
            dispatch(deleteTaskFromUsers(y.tasksToDelete))
          })
          alert("Board successfully removed!");
    
          dispatch(closeModal());
          // close settings modal
          dispatch(setSettingModal(false));
          navigate(`/u/${params.userId}`);
    
        }).catch(()=> alert(`Deleting ${board.name} unsuccessful!`))
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
            <ConfirmDelete
            warning="Are you sure you want to delete your workspace. 
            This action can not be undone!"
            deleteName = {workspace?.name||""}
            deleteFn = {deleteWorkspaceFn}
            action={"Delete"}
            action2={"delete"}
            />
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
      {
        modal === 'leaveWorkspace' ?
        <AnimatePresence>
          <ConfirmDelete 
          warning="Are you sure you want to leave the workspace. 
          Team leaders will have to add you again!"
          deleteName = {workspace?.name||""}
          deleteFn = {leaveWorkspaceFn}
          action={"Leave"}
          action2={"leave"}
          />
        </AnimatePresence> : ''
      }
      {
        modal === 'deleteConfirmBoard' ?
        <AnimatePresence>
          <ConfirmDelete 
          warning="Are you sure you want to delete this board. 
          Users involved will be removed and any lists and tasks 
          created within this board will be deleted! This cannot be reversed!"
          deleteName={board?.name || ""}
          deleteFn={deleteBoardFn}
          action="Delete"
          action2="delete"
          />
        </AnimatePresence> : ''
      }
      {
        modal === 'addNewUser' ? <AddNewUser /> : ''
      }
      {
        modal === 'changeBackground' ? <CheckBackground boardData ={board} /> : ''
      }
      {
        addTaskModal ? <AnimatePresence>
          <AddModal 
          limit={18} 
          label={"New Task:"} 
          placeholder={"Enter Task Name..."} 
          valueHolder={newTaskList} 
          setHolder={(e:React.ChangeEvent<HTMLInputElement>)=> dispatch(setAddTaskInput(e.target.value))} 
          checkInputHolder={()=>{
            submitTaskName();
          }} 
          closeModal={()=>{}}           
          />
        </AnimatePresence> : ""
      }
    </motion.div>
  )
})

export default MobileModal;
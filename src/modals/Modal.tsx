import { changeUserRoleNameState, deleteUserHistory, getCroppingTool, getModalType, getRolState, setSettingModal } from "../reduxStore/modal/modalSlice";
import { useAppDispatch,useAppSelector  } from "../reduxStore/hook";
import { closeModal } from "../reduxStore/modal/modalSlice";

import {motion,AnimatePresence} from 'framer-motion';
import { AppContext } from "../pages/appRefContext/appRefContext";
import { memo, useContext} from "react";

import CreateProfileModal from './createProfileModal';
import ProfileModal from './profileModal';
import LoginModal from './loginModal';
import Delete from "./delete/Delete";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBoard, removeBoardsFromWorkspace, removeUserFromMulitpleBoards, selectBoardById } from "../reduxStore/boards/boardsSlice";
import { getWorkspaceSelect, removeExistingWorkspace, removeUserFromWorkspace, selectWorkspaceById, setNewSelect, updateWorkspacBoardRemove } from "../reduxStore/workspace/workspaceSlice";
import { deleteTaskFromUsers, getUser, leaveWorkspaceUser, removeUserBoards, removeUserWorkspace } from "../reduxStore/users/userSlice";
import AddNewUser from "./addNewUser/AddNewUser";
import { deleteBoardListMultipleCL, deleteBoardsUserHistory, deleteUserFromHistory, removeAdditionalUsersWorkspaceAndBoards } from "../customLogic/CustomLogic";
import ChangeBackground from "./changeBackground/ChangeBackground";
import { deleteListStateBoardDelete } from "../reduxStore/lists/listsSlice";
import { deleteMulitpleTasksFromBoardDeletion, deleteTasksFromMulitpleBoards, updateMultipleTasks } from "../reduxStore/tasks/tasksSlice";
import { removeMulitpleComments } from "../reduxStore/comments/commentsSlice";

// this is our modal container that will show and hide modals based on what is suppose to be showing
const Modal = memo(() => {
  
  // create a dispatch function from our redux store to trigger our reducers
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const appContext = useContext(AppContext);
  const {modalRef} = appContext!;

  const params = useParams();

  // get the modal we want to bring up
  const modal = useAppSelector(getModalType);
  const croppingTool = useAppSelector(getCroppingTool);
  const board = useAppSelector(state => selectBoardById(state,params?.workspaceId || "")) || null;
  const selectWorkspace = useAppSelector(getWorkspaceSelect);
  const workspace = useAppSelector (state => selectWorkspaceById(state,selectWorkspace)) || null;
  const rolestate = useAppSelector (getRolState);
  const user = useAppSelector(getUser);

  const deleteWorkspaceFn = () => {
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
  
        dispatch(deleteMulitpleTasksFromBoardDeletion(x.board.lists))
        .unwrap()
        .then(y=>{
          dispatch(removeMulitpleComments({commentsToDelete:y.commentsToDelete}));
          dispatch(deleteTaskFromUsers(y.tasksToDelete));
        }).then(() => {
          alert("Board successfully removed!");

          dispatch(closeModal());
          // close settings modal
          dispatch(setSettingModal(false));
          navigate(`/u/${params.userId}`);
        }).catch(()=>{
          console.log("RAN INTO ERROR!")
        }) 
  
      }).catch(()=> alert(`Deleting ${board.name} unsuccessful!`))
  }

  const leaveWorkspaceFn = () => {

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

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration:.3
    }}
    ref={modalRef}
    className="
    modalCss
    ">
      <div>
      <AnimatePresence>
          {modal == 'createProfile' && <CreateProfileModal />}
          {modal == 'logIn' && <LoginModal />}
          {modal == 'profile' && <ProfileModal />}
          {modal == 'deleteConfirm' && 
          <Delete 
          warning="Are you sure you want to delete your workspace. 
          This action can not be undone!"
          deleteName={workspace?.name || ""}
          deleteFn={deleteWorkspaceFn}
          type={"Workspace"}
          action={"Delete"}
          action2={"delete"}
          />
          }
          {modal == 'deleteConfirmBoard' && 
          <Delete 
          warning="Are you sure you want to delete this board. 
          Users involved will be removed and any lists and tasks 
          created within this board will be deleted! This cannot be reversed!"
          deleteName={board?.name || ""} 
          deleteFn={deleteBoardFn} 
          type={"Board"}
          action={"Delete"}
          action2={"delete"}
          /> }
          {modal === 'addNewUser' && <AddNewUser />}
          {modal === 'leaveWorkspace' && 
          <Delete 
          warning="Are you sure you want to leave the workspace. Team leaders will have to add you again!"
          deleteName={workspace?.name || ""}
          deleteFn = {leaveWorkspaceFn}
          type={"Workspace"}
          action={"Leave"}
          action2 ={"leave"}
          />
          }
          {
            modal === 'changeBackground' &&
            <ChangeBackground board={board} />
          }
        </AnimatePresence>
      </div>

      <div onClick={()=> {
        !croppingTool && !rolestate && dispatch(closeModal());
        rolestate && dispatch(changeUserRoleNameState(false));
      }} 
      className="
      hidden 
      sLaptop:block 
      sLaptop:absolute
      sLaptop:z-[-1]
      sLaptop:w-full 
      sLaptop:h-full
      sLaptop:bg-[rgba(0,0,0,0.75)]" />
    </motion.div>
  )
})

export default Modal;
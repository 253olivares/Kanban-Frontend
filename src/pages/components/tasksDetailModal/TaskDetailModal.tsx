import { ReactNode, memo, useLayoutEffect, useState } from "react";
import {   motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../../reduxStore/hook";
import { changeTaskModal, getSelectTaskId, setSelectTask } from "../../../reduxStore/modal/modalSlice";
import TaskDetail from "./components/TaskDetail";
import { user } from "../../../reduxStore/users/userSlice";
import { board } from "../../../reduxStore/boards/boardsSlice";
import { selectTaskById } from "../../../reduxStore/tasks/tasksSlice";
import { selectWorkspaceById } from "../../../reduxStore/workspace/workspaceSlice";
import { comments } from "../../../reduxStore/comments/commentsSlice";


export type miniTaskTypes = "delete" | "users" | "editComment" | "";

const TaskDetailModal= memo((
  {
    userInfo,
    board
  }: {
    userInfo:user | null,
    board:board
  }
):ReactNode => {
  const dispatch = useAppDispatch();

  const taskId = useAppSelector(getSelectTaskId);
  const task = useAppSelector(state => selectTaskById(state,taskId));
  const workspace = useAppSelector(state=>selectWorkspaceById(state,board.w_id))

  const [openTaskMiniModal,setOpenTaskMiniModal] = useState<miniTaskTypes>("");
  const [comment,setComment] = useState<comments | null>(null);

  const setCommentFn = (comment:comments | null) => {
    setComment(comment);
  }

  const openCommentEdit = () => {
    setOpenTaskMiniModal("editComment");
  }

  useLayoutEffect(()=>{
    return () =>{
      dispatch(setSelectTask(""));
      setOpenTaskMiniModal("");
    }
  },[])

  if(!userInfo || !task || !board) return
  
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration:.3
    }}
    className="

        fixed

        z-[15]
        top-0
        left-0

        w-dvw
        h-dvh

        overflow-x-hidden
        overflow-y-hidden

        no-scrollbar
        sLaptop:flex 
        sLaptop:justify-center 
        sLaptop:items-center
    ">
           <TaskDetail comment={comment} setCommentFn={setCommentFn} openCommentEdit={openCommentEdit} openTaskMiniModal={openTaskMiniModal} setOpenTaskMiniModal={setOpenTaskMiniModal} userInfo={userInfo} userId={userInfo.u_id} workspace={workspace} task={task} board={board} />
        <div
        onClick={()=>{
          openTaskMiniModal === "" && dispatch(changeTaskModal(false));
          openTaskMiniModal && setOpenTaskMiniModal("")
        }}
         className="
         hidden
         sLaptop:block
         sLaptop:absolute
         sLaptop:z-[-1]
         sLaptop:w-full
         sLaptop:h-full
         sLaptop:bg-[rgba(0,0,0,0.75)]
         "
         />
    </motion.div>
  )
})

export default TaskDetailModal;
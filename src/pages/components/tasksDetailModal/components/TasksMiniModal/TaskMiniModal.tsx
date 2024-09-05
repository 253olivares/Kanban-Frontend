import { comments } from "../../../../../reduxStore/comments/commentsSlice";
import { task } from "../../../../../reduxStore/tasks/tasksSlice";
import { miniTaskTypes } from "../../TaskDetailModal";
import Content from "./content/Content";
import { motion } from "framer-motion";


const TaskMiniModal = ({
  boardId,
  task,
  openTaskMiniModal,
  setOpenTaskMiniModal,
  comment,
  setCommentFn
} : {
  boardId:string,
  task:task,
  openTaskMiniModal:miniTaskTypes,
  setOpenTaskMiniModal: React.Dispatch<React.SetStateAction<miniTaskTypes>>,
  comment:comments | null,
  setCommentFn: (comment:comments|null)=>void

}) => {

  return (
    <motion.div  
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
        duration:.3 
    }}
    className='
      absolute

      top-0
      left-0
      w-full
      h-full

      hidden
      sLaptop:flex
      justify-center
      items-center
      z-10
    '>
      <Content boardId={boardId} comment={comment} setCommentFn={setCommentFn} task={task} setOpenTaskMiniModal={setOpenTaskMiniModal} openTaskMiniModal={openTaskMiniModal} />
      <div
      className="
      absolute
        block
        w-full
        h-full
        sLaptop:bg-[rgba(0,0,0,0.75)]
      "
      onClick={()=> setOpenTaskMiniModal("")}
      />
    </motion.div>
  )
}

export default TaskMiniModal
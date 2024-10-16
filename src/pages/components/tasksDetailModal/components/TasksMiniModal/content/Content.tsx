import { useContext } from 'react'
import { AppContext } from '../../../../../appRefContext/appRefContext';
import { AnimatePresence } from 'framer-motion';
import { miniTaskTypes } from '../../../TaskDetailModal';
import DeleteModal from './modals/deleteModal/DeleteModal';
import UserModal from './modals/users/Users'
import { task } from '../../../../../../reduxStore/tasks/tasksSlice';
import EditComments from './modals/editComments/EditComments';
import { comments } from '../../../../../../reduxStore/comments/commentsSlice';

const Content = ({
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
  setCommentFn:(comment:comments|null)=>void
}) => {

    const appContext = useContext(AppContext);
    const{taskMiniModal} = appContext!;

  return (
    <div
    ref={taskMiniModal}
    className='
      bg-SpaceBlue

      block
      rounded-[0.234rem]
      mobile:rounded-[0.312rem]
      sMobile:rounded-[.5rem]
      mMobile:rounded-[0.6rem]
      sLaptop:rounded-xl

      relative
      z-[1]

      p-[0.703rem]
      mobile:p-[0.937rem]
      sMobile:p-[1.5rem]
      mMobile:p-[1.8rem]
      sLaptop:p-[0.766rem]
      mLaptop:p-[0.958rem]
      desktop:p-[1.15rem]
      largeDesktop:p-[1.437rem]

      max-w-[82.5%]
      sLaptop:max-w-[75%]
    '
    >
      <AnimatePresence>
        {
          openTaskMiniModal === "delete" && <DeleteModal 
          taskId={task.t_id} 
          listId={task.l_id}
          taskUsers={task.assignees}
          comments={task.comments}
          setOpenTaskMiniModal={setOpenTaskMiniModal}
          />
        }
        {
          openTaskMiniModal === "users" && <UserModal setOpenTaskMiniModal={setOpenTaskMiniModal} boardId={boardId} taskId={task.t_id} admin={task.admin_id} taskUsers={task.assignees} />
        }
        {
          openTaskMiniModal === "editComment" && <EditComments setOpenTaskMiniModal={setOpenTaskMiniModal} setCommentFn={setCommentFn} comment={comment} />
        }
        
      </AnimatePresence>
    </div>
  )
}

export default Content
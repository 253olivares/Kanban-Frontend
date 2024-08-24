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
  task,
  openTaskMiniModal,
  setOpenTaskMiniModal,
  comment
} : {
  task:task,
  openTaskMiniModal:miniTaskTypes,
  setOpenTaskMiniModal: React.Dispatch<React.SetStateAction<miniTaskTypes>>,
  comment:comments | null
}) => {

    const appContext = useContext(AppContext);
    const{taskMiniModal} = appContext!;

  return (
    <div
    ref={taskMiniModal}
    className='
      bg-SpaceBlue

      block

      rounded-xl

      relative
      z-[1]

      sLaptop:p-[0.766rem]
      mLaptop:p-[0.958rem]
      desktop:p-[1.15rem]
      largeDesktop:p-[1.437rem]

      max-w-[75%]
    '
    >
      <AnimatePresence>
        {
          openTaskMiniModal === "delete" && <DeleteModal 
          taskId={task.t_id} 
          listId={task.l_id}
          admin={task.admin_id}
          taskUsers={task.assignees}
          comments={task.comments}
          setOpenTaskMiniModal={setOpenTaskMiniModal}
          />
        }
        {
          openTaskMiniModal === "users" && <UserModal taskId={task.t_id} admin={task.admin_id} taskUsers={task.assignees} />
        }
        {
          openTaskMiniModal === "editComment" && <EditComments comment={comment} />
        }
        
      </AnimatePresence>
    </div>
  )
}

export default Content
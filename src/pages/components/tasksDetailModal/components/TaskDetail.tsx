import { ReactNode, memo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import headerBackground from '/assets/taskModal/TaskHeaderBack.png';
import { useAppDispatch} from '../../../../reduxStore/hook';
import TaskInformation from './TaskInformation';
import { addCommentToTask, task } from '../../../../reduxStore/tasks/tasksSlice';
import { board } from '../../../../reduxStore/boards/boardsSlice';
import { workspace } from '../../../../reduxStore/workspace/workspaceSlice';
import TaskBottomInfo from './TaskBottomInfo';
import { user } from '../../../../reduxStore/users/userSlice';
import TaskMiniModal from './TasksMiniModal/TaskMiniModal';
import { miniTaskTypes } from '../TaskDetailModal';
import { comments, createNewComments } from '../../../../reduxStore/comments/commentsSlice';
import { getIndividualList } from '../../../../customLogic/CustomLogic';

const TaskDetail = memo((
  {
    openTaskMiniModal,
    setOpenTaskMiniModal,
    userInfo,
    userId,
    workspace,
    task,
    board,
    openCommentEdit,
    setCommentFn,
    comment
  } : {
    openTaskMiniModal:miniTaskTypes,
    setOpenTaskMiniModal:React.Dispatch<React.SetStateAction<miniTaskTypes>>,
    userInfo:user,
    userId:string,
    workspace:workspace,
    task:task,
    board:board,
    openCommentEdit:()=>void,
    setCommentFn: (comment:comments | null)=>void,
    comment:comments | null
  }
):ReactNode => {

  const dispatch = useAppDispatch();

  const adminCred = userId === task.admin_id;

  const [taskDescription,setTaskDescription] = useState<string>(task.description);
  const [comments, setComment] = useState<string>("");

  const addNewComment = () => {
    dispatch(createNewComments({ taskId:task.t_id,userId:userId,comments:comments})).unwrap().then((x)=>{
      dispatch(addCommentToTask({taskId:task.t_id,commentId:x.newComment.c_id}))
      setComment("");
    })
  }

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
    className={`
    
    bg-[#61647E]

    sLaptop:w-[36.666rem]
    mLaptop:w-[45.833rem]
    desktop:w-[55rem]
    largeDesktop:w-[68.75rem]

    sLaptop:rounded-[0.344rem]
    mLaptop:rounded-[0.43rem]
    desktop:rounded-[0.516rem]
    largeDesktop:rounded-[0.645rem]

    overflow-hidden

    relative

    flex
    flex-col

    sLaptop:max-h-[95%]

    `}
    >
      <AnimatePresence>
      {openTaskMiniModal && <TaskMiniModal boardId={board.b_id} setCommentFn={setCommentFn} comment={comment} task={task} openTaskMiniModal={openTaskMiniModal} setOpenTaskMiniModal={setOpenTaskMiniModal} />}
      </AnimatePresence>
      <ImageHeader workspaceName={workspace.name} boardName={board.name} selectList={task.l_id} imgSrc={headerBackground} />
      <TaskInformation setOpenTaskMiniModal={setOpenTaskMiniModal} adminCred={adminCred} taskId={task.t_id} taskName={task.name} filter={task.priority} members={task.assignees} comments={task.comments} story={task.story} />
      <TaskBottomInfo boardId={board.b_id} setCommentFn={setCommentFn} openCommentEdit={openCommentEdit} addNewComment={addNewComment} setOpenTaskMiniModal={setOpenTaskMiniModal} taskDescription={taskDescription} setTaskDescription={setTaskDescription} comments={comments} setComment={setComment} userInfo={userInfo} adminCred={adminCred} task={task}/>
    </motion.div>
  )
})

const ImageHeader = memo((
  {
    workspaceName,
    boardName,
    selectList,
    imgSrc
  } : {
    workspaceName:string,
    boardName:string,
    selectList:string,
    imgSrc:string
  }
) => {

  // const list = useAppSelector(state=>selectListById(state,selectList));
  
  const list = getIndividualList(selectList);
  
  if(!list) return;
  return <div className='
  w-full

  h-auto
  relative
  
  bg-SpaceBlueSelected
  '>
    <img className='
    w-full

    sLaptop:h-[1.916rem]
    mLaptop:h-[2.396rem]
    desktop:h-[2.875rem]
    largeDesktop:h-[3.594rem]
    ' src={imgSrc} alt="HeaderBackground" />

    <div className='
      top-0
      left-0
      
      absolute  
      
      w-full
      h-full

      flex
      items-center

      px-[2.5%]
      
    '>
      <p className='
      
      sLaptop:text-[0.8rem]
      mLaptop:text-[1rem]
      desktop:text-[1.2rem]
      largeDesktop:text-[1.5rem]

      text-PrimaryWhite

      font-medium
      leading-none

      w-[80%]

      text-nowrap
      overflow-hidden
      text-ellipsis
      '>{workspaceName} / {boardName} / {list[0].name}</p>
    </div>
  </div>
})

export default TaskDetail
import { ReactNode, memo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
import TaskHead0 from '/assets/TaskHead_0.png';
import TaskHead1 from '/assets/TaskHead_1.png';
import TaskHead0_Mobile from '/assets/TaskHead_1_mobile.png';
import TaskHead1_mobile from '/assets/TaskHead_0_mobile.png';
import x_icon from '/assets/addBoard.png';
import { changeTaskModal } from '../../../../reduxStore/modal/modalSlice';
import scrollbarImage from '/assets/scrollBarTrack.png';


export const taskHeaders:Record<number,string> = {
  0: TaskHead0 ,
  1: TaskHead1 ,
  2: ''
}

export const taskHeadersMobile:Record<number,string> = {
  0: TaskHead0_Mobile,
  1: TaskHead1_mobile,
  2: "",
}


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
    style={{
      // @ts-ignore
      "--img": `url(${scrollbarImage})`
    }}
    className={`
    
    bg-[#61647E]

    w-full
    sLaptop:w-[36.666rem]
    mLaptop:w-[45.833rem]
    desktop:w-[55rem]
    largeDesktop:w-[68.75rem]

    h-full
    sLaptop:h-auto

    sLaptop:rounded-[0.344rem]
    mLaptop:rounded-[0.43rem]
    desktop:rounded-[0.516rem]
    largeDesktop:rounded-[0.645rem]

    overflow-auto
    boardsScroll
    sLaptop:overflow-hidden

    relative

    flex
    flex-col

    sLaptop:max-h-[95%]

    `}
    >
      <AnimatePresence>
      {openTaskMiniModal && <TaskMiniModal boardId={board.b_id} setCommentFn={setCommentFn} comment={comment} task={task} openTaskMiniModal={openTaskMiniModal} setOpenTaskMiniModal={setOpenTaskMiniModal} />}
      </AnimatePresence>
      <ImageHeader 
      workspaceName={workspace.name} 
      boardName={board.name} 
      selectList={task.l_id} 
      imgSrc={board.background} />
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
    imgSrc:number
  }
) => {

  // const list = useAppSelector(state=>selectListById(state,selectList));
  const dispatch = useAppDispatch();
  const list = getIndividualList(selectList);
  
  if(!list) return;
  return <div className='
  w-full

  block
  h-auto
  relative
  
  bg-SpaceBlueSelected
  '>
    <img className='
    w-full
    hidden
    sLaptop:block
    sLaptop:h-[1.916rem]
    mLaptop:h-[2.396rem]
    desktop:h-[2.875rem]
    largeDesktop:h-[3.594rem]
    ' src={taskHeaders[imgSrc]} alt="HeaderBackground" />

    <img className='
    w-full

    h-[1.367rem]
    mobile:h-[1.822rem]
    sMobile:h-[2.916rem]
    mMobile:h-[3.5rem]
    sLaptop:hidden
    ' src={taskHeadersMobile[imgSrc]} alt="HeaderBacgroundMobile" />

    <div className='
      top-0
      left-0
      
      absolute  
      
      w-full
      h-full

      flex
      items-center
    
      justify-between

      px-[2.5%]
      
    '>
      <p className='
      
      text-[0.531rem]
      mobile:text-[0.708rem]
      sMobile:text-[1.134rem]
      mMobile:text-[1.361rem]
      sLaptop:text-[0.8rem]
      mLaptop:text-[1rem]
      desktop:text-[1.2rem]
      largeDesktop:text-[1.5rem]

      text-PrimaryWhite

      font-medium
      leading-none

      w-[70%]
      sLaptop:w-[80%]

      text-nowrap
      overflow-hidden
      text-ellipsis
      '>{workspaceName} / {boardName} / {list[0].name}</p>

      <div 
      onClick={()=>{
        dispatch(changeTaskModal(false))
      }}
      className='
      h-full
      flex
      flex-row

      cursor-pointer

      text-[0.649rem]
      mobile:text-[0.866rem]
      sMobile:text-[1.385rem]
      mMobile:text-[1.663rem]
      sLaptop:hidden
      items-center

      text-PrimaryWhite

      opacity-75

      gap-[0.351rem]
      mobile:gap-[0.468rem]
      sMobile:gap-[.75rem]
      mMobile:gap-[0.9rem]

      font-medium

      '>
        Close Task
        <img className='
          rotate-45

          w-[0.878rem]
          mobile:w-[1.171rem]
          sMobile:w-[1.875rem]
          mMobile:W-[2.25rem]

        ' src={x_icon} alt="" />
      </div>
    </div>
   
  </div>
})

export default TaskDetail
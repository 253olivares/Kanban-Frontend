import { ReactNode, memo } from 'react';
import { motion } from 'framer-motion';
import headerBackground from '/assets/taskModal/TaskHeaderBack.png';
import { useAppSelector } from '../../../../reduxStore/hook';
import { selectListById } from '../../../../reduxStore/lists/listsSlice';
import TaskInformation from './TaskInformation';
import { task } from '../../../../reduxStore/tasks/tasksSlice';
import { board } from '../../../../reduxStore/boards/boardsSlice';
import { workspace } from '../../../../reduxStore/workspace/workspaceSlice';
import TaskBottomInfo from './TaskBottomInfo';

const TaskDetail = memo((
  {
    workspace,
    task,
    board
  } : {
    workspace:workspace,
    task:task,
    board:board
  }
):ReactNode => {

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

    flex
    flex-col

    sLaptop:max-h-[95%]

    `}
    >
      <ImageHeader workspaceName={workspace.name} boardName={board.name} selectList={task.l_id} imgSrc={headerBackground} />
      <TaskInformation task={task} />
      <TaskBottomInfo task={task}/>
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

  const list = useAppSelector(state=>selectListById(state,selectList));
  
  return <div className='
  w-full

  h-auto
  relative
  
  bg-SpaceBlueSelected
  '>
    <img className='
    w-full
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
      '>{workspaceName} / {boardName} / {list.name}</p>
    </div>
  </div>
})

export default TaskDetail
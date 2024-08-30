import { memo } from 'react'
import { setBoard, task } from '../../../../../reduxStore/tasks/tasksSlice'
import { useAppDispatch, useAppSelector } from '../../../../../reduxStore/hook'
import { changeTaskModal, setSelectTask } from '../../../../../reduxStore/modal/modalSlice'
import { getIndividualList } from '../../../../../customLogic/CustomLogic'
import { selectBoardById } from '../../../../../reduxStore/boards/boardsSlice'
import { motion } from 'framer-motion'
import { selectWorkspaceById } from '../../../../../reduxStore/workspace/workspaceSlice'
import TaskHead from './taskComponents/TaskHead'
import TaskNameFilter from './taskNameAndFilter/TaskNameFilter'
import StoryPoint from './storyPoint/StoryPoint'

const Tasks = memo((
    {
        durat,
        task
    } : {
        durat:number
        task:task
    }
) => {
  const dispatch = useAppDispatch();

  const listTaskFrom = getIndividualList(task.l_id);

  const board = useAppSelector(state => selectBoardById(state,listTaskFrom ? listTaskFrom[0].b_id : ""))

  const workspace = useAppSelector(state=>selectWorkspaceById(state,board.w_id));

  if(!listTaskFrom) return;
  return (
    <motion.div 
    initial= {{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{
      duration: .5,
      delay:durat
    }}
    onClick={()=>{
      dispatch(changeTaskModal(true));
      dispatch(setSelectTask(task.t_id));
      dispatch(setBoard(board));
    }}
    className='
    w-full
    

    bg-SpaceBlueSelected

    text-PrimaryWhite

    cursor-pointer

    rounded-[0.234rem]
    mobile:rounded-[0.312rem]
    sMobile:rounded-[0.5rem]
    mMobile:rounded-[0.6rem]

    sLaptop:rounded-[0.305rem]
    mLaptop:rounded-[0.381rem]
    desktop:rounded-[0.458rem]
    largeDesktop:rounded-[0.572rem]

    flex
    flex-col

    overflow-clip

    shrink-0  
    '>
      <TaskHead head={board.background} workspaceName = {workspace.name} boardName = {board.name} listName = {listTaskFrom[0].name} />
      <div className='
      flex
      flex-row

      px-[2.5%]
      '>
        <TaskNameFilter
        taskName={task.name}
        filter = {task.priority}
        members={task.assignees.length+1}
        comments={task.comments.length}
        />
        <StoryPoint
        storyPoint = {task.story}
        />
      </div>
    </motion.div>
  )
})

export default Tasks
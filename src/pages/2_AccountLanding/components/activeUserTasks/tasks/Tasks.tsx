import { memo } from 'react'
import { setBoard, task } from '../../../../../reduxStore/tasks/tasksSlice'
import { useAppDispatch, useAppSelector } from '../../../../../reduxStore/hook'
import { changeTaskModal, setSelectTask } from '../../../../../reduxStore/modal/modalSlice'
import { getIndividualList } from '../../../../../customLogic/CustomLogic'
import { selectBoardById } from '../../../../../reduxStore/boards/boardsSlice'
import { motion } from 'framer-motion'

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

    h-28
    
    bg-SpaceBlueSelected

    text-PrimaryWhite

    cursor-pointer
    '>
        {task.name} WIP*
    </motion.div>
  )
})

export default Tasks
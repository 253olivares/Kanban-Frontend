import { memo } from 'react'
import { setBoard, task } from '../../../../../reduxStore/tasks/tasksSlice'
import { useAppDispatch, useAppSelector } from '../../../../../reduxStore/hook'
import { changeTaskModal, setSelectTask } from '../../../../../reduxStore/modal/modalSlice'
import { getIndividualList } from '../../../../../customLogic/CustomLogic'
import { selectBoardById } from '../../../../../reduxStore/boards/boardsSlice'

const Tasks = memo((
    {
        task
    } : {
        task:task
    }
) => {
  const dispatch = useAppDispatch();

  const listTaskFrom = getIndividualList(task.l_id);


  const board = useAppSelector(state => selectBoardById(state,listTaskFrom ? listTaskFrom[0].b_id : ""))

  if(!listTaskFrom) return;
  return (
    <div 
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
    </div>
  )
})

export default Tasks
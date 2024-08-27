import { memo } from 'react'
import { task } from '../../../../../reduxStore/tasks/tasksSlice'

const Tasks = memo((
    {
        task
    } : {
        task:task
    }
) => {
  return (
    <div className='
    w-full

    h-20
    
    bg-SpaceBlueSelected

    text-PrimaryWhite
    '>
        {task.name} WIP*
    </div>
  )
})

export default Tasks
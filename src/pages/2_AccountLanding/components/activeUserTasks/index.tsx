import { memo } from "react"
import { task } from "../../../../reduxStore/tasks/tasksSlice"
import Tasks from "./tasks/Tasks"

const index = memo((
  {
    getUserTasks
  } : {
    getUserTasks:task[]
  }
) => {
  return (
    <div className="
     w-[70%]
     grow 
    ">
      {
        getUserTasks.map((task)=>
          <Tasks task={task} key={task.t_id} />
        )
      }
    </div>
  )
})

export default index
import { removeMultipleUsersFromTask } from "../../../../../../../../customLogic/CustomLogic"
import { removeMulitpleComments } from "../../../../../../../../reduxStore/comments/commentsSlice"
import { useAppDispatch } from "../../../../../../../../reduxStore/hook"
import { deleteTaskFromList } from "../../../../../../../../reduxStore/lists/listsSlice"
import { changeTaskModal } from "../../../../../../../../reduxStore/modal/modalSlice"
import { deleteTasksFromListDelete } from "../../../../../../../../reduxStore/tasks/tasksSlice"
import { deleteTaskFromUsers } from "../../../../../../../../reduxStore/users/userSlice"
import { miniTaskTypes } from "../../../../../TaskDetailModal"

const DeleteModal = ({
  setOpenTaskMiniModal,
  taskId,
  listId,
  comments,
  taskUsers
} : {
  setOpenTaskMiniModal: React.Dispatch<React.SetStateAction<miniTaskTypes>>,
  taskId:string,
  listId:string,
  comments:string[],
  taskUsers:string[]
}) => {

  return (
    <div className="
      flex
      flex-col

      sLaptop:gap-[0.833rem]
      mLaptop:gap-[1.041rem]
      desktop:gap-[1.25rem]
      largeDesktop:gap-[1.562rem]
    ">
      <Message message = {"Are you sure you want to delete this task. Users involved will be removed and action will not be recoverable!"} />
      <DeleteButton comments={comments} taskUsers={taskUsers} setOpenTaskMiniModal={setOpenTaskMiniModal}  listId={listId} taskId={taskId}/>
    </div>
  )
}
const Message = ({message}:{message:string}) => {
  return (
    <h1 className="

      text-PrimaryWhite

      sLaptop:text-[1.066rem]
      mLaptop:text-[1.333rem]
      desktop:text-[1.6rem]
      largeDesktop:text-[2rem]

      leading-tight
      font-medium
    ">{message}</h1>
  )
}

const DeleteButton = (
  {
    taskId,
    listId,
    taskUsers,
    comments,
    setOpenTaskMiniModal
  }
  :
  {
    taskId:string,
    listId:string,
    taskUsers:string[],
    comments:string[],
    setOpenTaskMiniModal:React.Dispatch<React.SetStateAction<miniTaskTypes>>
  }) => {
  const dispatch = useAppDispatch();
  return(<button 
    onClick={()=>{
      dispatch(changeTaskModal(false))
      setOpenTaskMiniModal("")

      dispatch(deleteTaskFromUsers([taskId])).unwrap().then(()=>{
        dispatch(deleteTaskFromList({listId:listId,deleteTask:taskId}));

        removeMultipleUsersFromTask(taskUsers,taskId);

        dispatch(deleteTasksFromListDelete([taskId]))

        dispatch(removeMulitpleComments({commentsToDelete:comments}))
      }).finally(()=>{
        console.log("Task has been removed")
      }).catch((e:any)=>{
        console.log("Ran into issue!nbn",e)
      })

    }}
    className="

    text-PrimaryWhite

    w-full

    opacity-50
    hover:opacity-100

    sLaptop:text-[0.986rem]
    mLaptop:text-[1.233rem]
    desktop:text-[1.48rem]
    largeDesktop:text-[1.85rem]

    sLaptop:py-[0.266rem]
    mLaptop:py-[0.333rem]
    desktop:py-[0.4rem]
    largeDesktop:py-[.5rem]

    font-bold
        
    sLaptop:rounded-[0.266rem]
    mLaptop:rounded-[0.333rem]
    desktop:rounded-[.4rem]
    largeDesktop:rounded-[.5rem]

    bg-[#F9453E]

    ">Delete Task</button>)
}

export default DeleteModal
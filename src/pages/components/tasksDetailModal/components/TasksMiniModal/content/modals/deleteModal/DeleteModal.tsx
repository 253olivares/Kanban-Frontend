import { removeMultipleUsersFromTask } from "../../../../../../../../customLogic/CustomLogic"
import { removeMulitpleComments } from "../../../../../../../../reduxStore/comments/commentsSlice"
import { useAppDispatch } from "../../../../../../../../reduxStore/hook"
import { deleteTaskFromList } from "../../../../../../../../reduxStore/lists/listsSlice"
import { changeTaskModal } from "../../../../../../../../reduxStore/modal/modalSlice"
import { deleteTasksFromListDelete } from "../../../../../../../../reduxStore/tasks/tasksSlice"
import { deleteTaskFromUsers } from "../../../../../../../../reduxStore/users/userSlice"
import { miniTaskTypes } from "../../../../../TaskDetailModal";
import x_icon from '/assets/addBoard.png';


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

      gap-[0.585rem]
      mobile:gap-[0.781rem]
      sMobile:gap-[1.25rem]
      mMobile:gap-[1.5rem]
      sLaptop:gap-[0.833rem]
      mLaptop:gap-[1.041rem]
      desktop:gap-[1.25rem]
      largeDesktop:gap-[1.562rem]
    "> 
      <div className="
      flex
      sLaptop:hidden
      flex-row
    
      justify-between
      items-center
      ">
        <h1 className="
        text-[0.937rem]
        mobile:text-[1.25rem]
        sMobile:text-[2rem]
        mMobile:text-[2.4rem]

        font-medium

        text-PrimaryWhite

        leading-none
        ">Delete Task:</h1>
        <img onClick={(
          () =>setOpenTaskMiniModal("")
        )} className="

          cursor-pointer

          w-[1.054rem]
          mobile:w-[1.406rem]
          sMobile:w-[2.25rem]
          mMobile:W-[2.7rem]

          rotate-45
        " src={x_icon} alt="" />
      </div>
      <Message message = {"Are you sure you want to delete this task. Users involved will be removed and action will not be recoverable!"} />
      <DeleteButton comments={comments} taskUsers={taskUsers} setOpenTaskMiniModal={setOpenTaskMiniModal}  listId={listId} taskId={taskId}/>
    </div>
  )
}
const Message = ({message}:{message:string}) => {
  return (
    <h1 className="

      text-PrimaryWhite

      text-[0.703rem]
      mobile:text-[0.937rem]
      sMobile:text-[1.5rem]
      mMobile:text-[1.8rem]
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

    text-[0.820rem]
    mobile:text-[1.093rem]
    sMobile:text-[1.75rem]
    mMobile:text-[2.1rem]
    sLaptop:text-[0.986rem]
    mLaptop:text-[1.233rem]
    desktop:text-[1.48rem]
    largeDesktop:text-[1.85rem]

    py-[0.234rem]
    mobile:py-[0.312rem]
    sMobile:py-[.5rem]
    mMobile:py-[0.6rem]
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
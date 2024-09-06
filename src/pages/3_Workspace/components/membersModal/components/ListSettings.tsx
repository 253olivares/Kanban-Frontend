import { motion } from "framer-motion"
import { memo, useContext } from "react"
import  x_Mark from '/assets/Add_New_Workspace.svg'
import { AppContext } from "../../../../appRefContext/appRefContext"
import { useAppDispatch, useAppSelector } from "../../../../../reduxStore/hook"
import { deleteList, getSelectedList } from "../../../../../reduxStore/lists/listsSlice"
import { deleteTaskFromBoardListDelete } from "../../../../../reduxStore/boards/boardsSlice"
import { deleteTasksFromListDelete } from "../../../../../reduxStore/tasks/tasksSlice"
import { removeMulitpleComments } from "../../../../../reduxStore/comments/commentsSlice"
import { deleteTaskFromUsers } from "../../../../../reduxStore/users/userSlice"


const ListSettings = memo(() => {
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
    className="
      bg-SpaceBlue
      w-[85%]
      flex
      flex-col

      rounded-[0.610rem]
      mobile:rounded-[0.814rem]
      sMobile:rounded-[1.302rem]
      mMobile:rounded-[1.563rem]

      px-[0.915rem]
      mobile:px-[1.220rem]
      sMobile:px-[1.953rem]
      mMobile:px-[2.344rem]

      py-[1.196rem]
      mobile:py-[1.595rem]
      sMobile:py-[2.552rem]
      mMobile:py-[3.063rem]

      gap-[0.468rem]
        mobile:gap-[0.625rem]
        sMobile:gap-[1rem]
        mMobile:gap-[1.2rem]
    " 
    >
        <SettingsHolder />
        <DeleteList />
    </motion.div>
  )
})

const DeleteList = () => {

    const appContext = useContext(AppContext);
    const {deleteListRef} = appContext!;

    const dispatch = useAppDispatch();

    const listData = useAppSelector(getSelectedList);

    return <div
    ref={deleteListRef}
    onClick={()=> {
        listData && dispatch(deleteList(listData))
        .unwrap().then((x)=>{
            dispatch(deleteTaskFromBoardListDelete({boardId:x.listToDelete.b_id,listId:x.listToDelete.l_id}));
            dispatch(deleteTasksFromListDelete(x.listToDelete.tasks)).unwrap().then((y)=>{
                dispatch(removeMulitpleComments({commentsToDelete:y.commentsToDelete}))
            });
            dispatch(deleteTaskFromUsers(x.listToDelete.tasks));
        })
    }}
    className="
    bg-[red]
    text-PrimaryWhite

    cursor-pointer

    font-medium

    text-[1.289rem]
    mobile:text-[1.718rem]
    sMobile:text-[2.75rem]
    mMobile:text-[3.3rem]

    py-[.585rem]
    mobile:py-[.781rem]
    sMobile:py-[1.25rem]
    mMobile:py-[1.5rem]

    rounded-[0.234rem]
    mobile:rounded-[0.3125rem]
    sMobile:rounded-[.5rem]
    mMobile:rounded-[0.6rem]

    text-center

    leading-none

    "
    >
        Delete List
    </div>
}

const SettingsHolder = () => {

    const appContext = useContext(AppContext);
    const {closeListSettings} = appContext!;

    return <div className="
    w-full
    flex
    justify-between
    items-center
    ">
        <h1 className="
        
        text-[1.335rem]
        mobile:text-[1.780rem]
        sMobile:text-[2.848rem]
        mMobile:text-[3.418rem]

        font-medium

        leading-none

        text-PrimaryWhite">
            List Settings:
        </h1>
        <img 
        ref={closeListSettings}
        className="
        rotate-45

        h-[1.525rem]
        mobile:h-[2.034rem]
        sMobile:h-[3.254rem]
        mMobile:h-[3.906rem]
        
        cursor-pointer
      " src={x_Mark} alt="X mark icons" />
    </div>
}

export default ListSettings
import { memo, useContext, useLayoutEffect, useRef } from "react"
import { motion } from "framer-motion";
import { useAppDispatch } from "../../../../../../reduxStore/hook";
import { changeSettings, deleteList, list } from "../../../../../../reduxStore/lists/listsSlice";
import { AppContext } from "../../../../../appRefContext/appRefContext";
import { deleteTasksFromListDelete } from "../../../../../../reduxStore/tasks/tasksSlice";
import { deleteTaskFromBoardListDelete } from "../../../../../../reduxStore/boards/boardsSlice";
import { deleteTaskFromUsers } from "../../../../../../reduxStore/users/userSlice";
import { removeMulitpleComments } from "../../../../../../reduxStore/comments/commentsSlice";

const ListOptionsBody = (
    {
        listData,
        ListSettingsRef,
        setOpenListSettings
    }:{
        listData:list,
        ListSettingsRef:React.RefObject<HTMLImageElement>,
        setOpenListSettings:React.Dispatch<React.SetStateAction<boolean>>
    }) => {

        const dispatch = useAppDispatch();

        // @ts-ignore
        const listOptions = {
            'Edit Name':()=>{}  
        }

        const appContext = useContext(AppContext);
        const {closeListSettings,mobileMembersRef,deleteListRef} = appContext!;

        const bodyRef = useRef<HTMLDivElement>(null);

        useLayoutEffect(()=>{
            const checkClick = (e:MouseEvent | TouchEvent) => {
                const element = e.target as Node;
                if(!bodyRef.current) setOpenListSettings(false);

                if(
                    !bodyRef.current?.contains(element) && 
                    !ListSettingsRef.current?.contains(element) &&
                    !mobileMembersRef.current?.contains(element) 
                    ) 
                        setOpenListSettings(false);

                if(closeListSettings.current?.contains(element)) setOpenListSettings(false);
                if(deleteListRef.current?.contains(element)) {
                    setOpenListSettings(false)
                }
            }

            window.addEventListener('click',checkClick,true);
            return ()=>{
                window.removeEventListener('click',checkClick,true);
            }
        },[])

        useLayoutEffect(()=>{
            dispatch(changeSettings({listSettingsBool:true,listData:listData}))
            return () =>{
                dispatch(changeSettings({listSettingsBool:false,listData:null}))
            }
        },[])

  return (
    <motion.div 
    initial={{ 
        y:'-15%',
        opacity: 0 
      }}
      animate={{ 
        y:0,
        opacity: 1 
      }}
      exit={{ 
        y:'-15%',
        opacity: 0 
      }}
      transition={{
        ease: "easeInOut",
        duration:.3
      }}
    ref={bodyRef}
    className="
        absolute
        z-[5]

        sLaptop:w-[8rem]
        mLaptop:w-[10rem]
        desktop:w-[12rem]
        largeDesktop:w-[15rem]

        hidden
        sLaptop:flex
        flex-col

        top-[150%]

        sLaptop:right-[-.5rem]
        mLaptop:right-[-.625rem]
        desktop:right-[-.75rem]
        largeDesktop:right-[-.937rem]

        dropDownShadow

        sLaptop:rounded-[0.381rem]
        mLaptop:rounded-[0.476rem]
        desktop:rounded-[0.572rem]
        largeDesktop:rounded-[0.715rem]

        sLaptop:p-[0.266rem]
        mLaptop:p-[0.333rem]
        desktop:p-[0.4rem]
        largeDesktop:p-[.5rem]

        bg-PrimaryWhite

    ">
        <ArrowHead />
        <DeleteList listData={listData} />
    </motion.div>
  )
}

const DeleteList = memo(({listData}:{listData:list}) => {

    const dispatch = useAppDispatch();

    const deleteListFunction = () => {
        dispatch(deleteList(listData))
        .unwrap().then((x)=> {
            dispatch(deleteTaskFromBoardListDelete({boardId:x.listToDelete.b_id,listId:x.listToDelete.l_id}));
            dispatch(deleteTasksFromListDelete(x.listToDelete.tasks)).unwrap().then((y)=>{
                dispatch(removeMulitpleComments({commentsToDelete:y.commentsToDelete}))
            });
            dispatch(deleteTaskFromUsers(x.listToDelete.tasks));
        })
    }

    return <div 
    onClick={()=> deleteListFunction()}
    className="
        relative

        bg-transparent
        hover:bg-[red]

        text-[red]

        hover:text-PrimaryWhite

        hover:cursor-pointer

        font-medium

        sLaptop:text-[0.773rem]
        mLaptop:text-[0.966rem]
        desktop:text-[1.16rem]
        largeDesktop:text-[1.45rem]

        sLaptop:py-[0.399rem]
        mLaptop:py-[0.499rem]
        desktop:py-[0.6rem]
        largeDesktop:py-[.75rem]

        sLaptop:rounded-[0.25rem]
        mLaptop:rounded-[0.312rem]
        desktop:rounded-[0.376rem]
        largeDesktop:rounded-[0.47rem]

        text-center
        leading-none

        transition-all
        duration-300
    ">
        Delete List
    </div>
})

const ArrowHead = memo(()=>{
    return <div className="
    absolute
    bg-PrimaryWhite
    block

    sLaptop:w-[0.833rem]
    mLaptop:w-[1.041rem]
    desktop:w-[1.250rem]
    largeDesktop:w-[1.563rem]

    sLaptop:h-[0.833rem]
    mLaptop:h-[1.041rem]
    desktop:h-[1.250rem]
    largeDesktop:h-[1.563rem]

    rotate-45

    sLaptop:top-[calc(-0.833rem/2)]
    mLaptop:top-[calc(-1.041rem/2)]
    desktop:top-[calc(-1.250rem/2)]
    largeDesktop:top-[calc(-1.563rem/2)]

    right-[7.25%]

    " />
})

export default ListOptionsBody
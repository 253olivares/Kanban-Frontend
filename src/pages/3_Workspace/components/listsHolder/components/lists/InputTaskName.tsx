import { motion } from "framer-motion"
import { memo, useContext, useLayoutEffect } from "react";
import checkMark from '/assets/Check_MarkIcon.svg';
import cancelIcon from '/assets/x_Icon.svg';
import { AppContext } from "../../../../../appRefContext/appRefContext";
import { changeAddTask, list, updateListTasks } from "../../../../../../reduxStore/lists/listsSlice";
import { useAppDispatch, useAppSelector } from "../../../../../../reduxStore/hook";
import { createTask } from "../../../../../../reduxStore/tasks/tasksSlice";
import { getAddTaskInput, setAddTaskInput } from "../../../../../../reduxStore/modal/modalSlice";
import { user } from "../../../../../../reduxStore/users/userSlice";

const InputTaskName = memo((
  {
    user,
    listData,
    setOpenTaskName
  }
  :
  {
    user:user,
    listData:list,
    setOpenTaskName:React.Dispatch<React.SetStateAction<boolean>>
  }) => {

    const appContext = useContext(AppContext);
    const {addNewTaskNameRef, mobileAddNewWorkspace,addListTask,addListTaskSubmit} = appContext!;

    const addTaskListName = useAppSelector(getAddTaskInput);
    const dispatch = useAppDispatch();


    useLayoutEffect(()=>{
      const checkClick = (e:MouseEvent | TouchEvent) => {
        const element = e.target as Node;

        if(!addNewTaskNameRef.current) setOpenTaskName(false);

        if(!addNewTaskNameRef.current?.contains(element) && !mobileAddNewWorkspace.current?.contains(element)) {
          setOpenTaskName(false);
        }

        if(addListTask.current?.contains(element))  setOpenTaskName(false);

        if(addListTaskSubmit.current?.contains(element)) {

          setTimeout(()=>{
            setOpenTaskName(false)
          },300
          )
 
        }

      }
      window.addEventListener('click',checkClick,true);
      return ()=>{
        window.removeEventListener('click',checkClick,true);
      }
    },[])

    const submitTaskName = (taskName:string) => {
      if(taskName.trimEnd() === ""){
        alert("Please make sure to enter a name!");
        return
      }
      if(taskName.trim().length>=20) {
        alert("Please enter a shorter name!");
        return; 
      }
      dispatch(createTask({listData:listData,adminId:user.u_id,taskName:taskName}))
      .unwrap()
      .then(x=>{
        dispatch(updateListTasks({list:x.list,newTask:x.newTask}))
      }).catch((e)=>{
        console.log(e);
      })
      setOpenTaskName(false);
    }

    useLayoutEffect(()=>{

      dispatch(changeAddTask({addTaskBool:true,listData:listData}))

      return ()=>{
        dispatch(changeAddTask({addTaskBool:false,listData:null}))
        dispatch(setAddTaskInput(""))
      }
    },[])

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
        ease:'easeInOut',
        duration:.5
    }}
    className="
    w-full
    h-full

    hidden

    sLaptop:flex
    flex-row
    items-center

    px-[4%]

    "
    >
        <form 
        className="
        w-full
        h-full

        flex
        flex-row

        justify-between
        items-center
        grow-0

        sLaptop:gap-[0.533rem]
        mLaptop:gap-[0.666rem]
        desktop:gap-[.8rem]
        largeDesktop:gap-[1rem]
        "
        onSubmit={(e)=>{
            e.preventDefault();
            submitTaskName(addTaskListName);
        }}>
            <input 
            value={addTaskListName}
            className="
            bg-PrimaryWhite
        
            box-border

            sLaptop:text-[0.916rem]
            mLaptop:text-[1.145rem]
            desktop:text-[1.375rem]
            largeDesktop:text-[1.719rem]

            font-medium

            px-[2.5%]

            min-w-0

            flex-shrink

            sLaptop:rounded-[0.166rem]
            mLaptop:rounded-[0.208rem]
            desktop:rounded-[.25rem]
            largeDesktop:rounded-[0.312rem]

            " 
            type="text" 
            onChange={(e)=>{
              if(e.target.value.trim().length >=18) {
                e.target.style.color = "red";
              } else {
                e.target.style.color = "black";
              }
              dispatch(setAddTaskInput(e.target.value));  
            }}
            />

            <div className="
            flex
            flex-row

            grow-0
            shrink-0

            sLaptop:gap-[0.533rem]
            mLaptop:gap-[0.666rem]
            desktop:gap-[.8rem]
            largeDesktop:gap-[1rem]
            ">
                <img className="
                sLaptop:h-[1.145rem]
                mLaptop:h-[1.432rem]
                desktop:h-[1.719rem]
                largeDesktop:h-[2.148rem]

                opacity-75
                hover:opacity-100

                cursor-pointer
                " 
                onClick={()=>setOpenTaskName(false)}
                src={cancelIcon} alt="Cancel" />
                <input className="
                sLaptop:h-[1.145rem]
                mLaptop:h-[1.432rem]
                desktop:h-[1.719rem]
                largeDesktop:h-[2.148rem]

                opacity-75
                hover:opacity-100
            
                cursor-pointer
                " src={checkMark}
                type="image" alt="Approve List Name" />
            </div>
            
        </form>
    </motion.div>
  )
})

export default InputTaskName
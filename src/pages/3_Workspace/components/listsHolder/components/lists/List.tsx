import { memo, useLayoutEffect, useState } from "react"
import { changeAddTask, changeSettings, list } from "../../../../../../reduxStore/lists/listsSlice"
import ListHolder from "./ListHolder"
import AddTaskHolder from "./AddTaskHolder"
import { useAppDispatch } from "../../../../../../reduxStore/hook"
import { setAddTaskInput } from "../../../../../../reduxStore/modal/modalSlice"
import TaskHolders from "./TaskHolders"
import { user } from "../../../../../../reduxStore/users/userSlice"

const List = memo((
  {
    user,
    list,
  }:{
    user:user,
    list:list
  }) => {

    const dispatch = useAppDispatch();

    const [openTaskName,setOpenTaskName] = useState<boolean>(false);
    const [listSetting,setListSetting] = useState<boolean>(false);

    useLayoutEffect(()=>{
      if(openTaskName === true) {
        dispatch(changeAddTask({addTaskBool:true,listData:list}))
      } else {
        dispatch(changeAddTask({addTaskBool:false,listData:null}))
        dispatch(setAddTaskInput(""))
      }
    },[openTaskName]);

    useLayoutEffect(()=>{
      if(listSetting === true) {
        console.log("Settings true")
        dispatch(changeSettings({listSettingsBool:true,listData:list}))
      } else {
        console.log("settings false")
        dispatch(changeSettings({listSettingsBool:false,listData:null}))
      }
    }),[listSetting]

    useLayoutEffect(()=>{
      return ()=>{
        dispatch(changeSettings({listSettingsBool:false,listData:null}))
        dispatch(changeAddTask({addTaskBool:false,listData:null}))
        dispatch(setAddTaskInput(""))
      }
    },[])

    // console.log(adminId);
    // console.log(user);

  return (
    <div 
    className="
    flex
    flex-col

    rounded-[0.244rem]
    mobile:rounded-[0.325rem]
    sMobile:rounded-[0.520rem]
    mMobile:rounded-[0.625rem]

    sLaptop:rounded-[0.333rem]
    mLaptop:rounded-[0.416rem]
    desktop:rounded-[0.5rem]
    largeDesktop:rounded-[0.625rem]

    bg-SpaceBlue

    px-[0.976rem]
    mobile:px-[1.301rem]
    sMobile:px-[2.083rem]
    mMobile:px-[2.499rem]

    sLaptop:px-[1%]

    py-[0.732rem]
    mobile:py-[0.976rem]
    sMobile:py-[1.563rem]
    mMobile:py-[1.875rem]

    sLaptop:py-[0.562rem]
    mLaptop:py-[0.702rem]
    desktop:py-[0.843rem]
    largeDesktop:py-[1.054rem]

    w-full
    sLaptop:w-[14.999rem]
    mLaptop:w-[18.749rem]
    desktop:w-[22.5rem]
    largeDesktop:w-[28.125rem]

    sLaptop:max-h-full

    gap-[.937rem]
    mobile:gap-[1.25rem]
    sMobile:gap-[2rem]
    mMobile:gap-[2.4rem]

    sLaptop:gap-[.666rem]
    mLaptop:gap-[.833rem]
    desktop:gap-[1rem]
    largeDesktop:gap-[1.25rem]

    group

    shrink-0
    "
    >

        <ListHolder listData ={list} listName={list.name} listSetting={listSetting} setListSetting = {setListSetting} />
        {
          list.tasks.length !== 0 ?
          <TaskHolders taskLists={list.tasks} /> : ""
        }
        <AddTaskHolder user={user} listData ={list}  openTaskName={openTaskName} setOpenTaskName={setOpenTaskName} />
    </div>
  )
})

export default List
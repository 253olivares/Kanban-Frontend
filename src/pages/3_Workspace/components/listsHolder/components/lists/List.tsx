import { memo, useLayoutEffect, useState } from "react"
import { changeAddTask, changeSettings, list } from "../../../../../../reduxStore/lists/listsSlice"
import ListHolder from "./ListHolder"
import AddTaskHolder from "./AddTaskHolder"
import { user } from "../../../../../../reduxStore/users/userSlice"
import { useAppDispatch } from "../../../../../../reduxStore/hook"

const List = memo((
  {
    list,
    // @ts-ignore
    adminId,
    // @ts-ignore
    user
  }:{
    list:list,
    adminId:string,
    user:user
  }) => {

    const dispatch = useAppDispatch();

    const [openTaskName,setOpenTaskName] = useState<boolean>(false);
    const [listSetting,setListSetting] = useState<boolean>(false);

    useLayoutEffect(()=>{
      if(openTaskName === true) {
        dispatch(changeAddTask({addTaskBool:true,listData:list}))
      } else {
        dispatch(changeAddTask({addTaskBool:false,listData:null}))
      }
    },[openTaskName]);

    useLayoutEffect(()=>{
      if(listSetting === true) {
        console.log("Settings true")
        dispatch(changeSettings({listSettingsBool:true,listData:list}))
      } else {
        console.log("settings false")
        dispatch(changeSettings({listSettingsBool:false,listData:list}))
      }
    }),[listSetting]

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

    sLaptop:px-[0.416rem]
    mLaptop:px-[0.520rem]
    desktop:px-[0.625rem]
    largeDesktop:px-[0.761rem]

    py-[0.732rem]
    mobile:py-[0.976rem]
    sMobile:py-[1.563rem]
    mMobile:py-[1.875rem]

    sLaptop:py-[0.281rem]
    mLaptop:py-[0.351rem]
    desktop:py-[0.422rem]
    largeDesktop:py-[0.527rem]

    w-full
    sLaptop:w-[14.999rem]
    mLaptop:w-[18.749rem]
    desktop:w-[22.5rem]
    largeDesktop:w-[28.125rem]

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

        <AddTaskHolder listData ={list}  openTaskName={openTaskName} setOpenTaskName={setOpenTaskName} />
    </div>
  )
})

export default List
import { memo, useState } from "react"
import { list } from "../../../../../../reduxStore/lists/listsSlice"
import ListHolder from "./ListHolder"
import AddTaskHolder from "./AddTaskHolder"
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

    const [openTaskName,setOpenTaskName] = useState<boolean>(false);
    const [listSetting,setListSetting] = useState<boolean>(false);

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

    px-[4%]

    sLaptop:px-[1%]

    py-[.820rem]
    mobile:py-[1.093rem]
    sMobile:py-[1.75rem]
    mMobile:py-[2.1rem]

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

    gap-[0.703rem]
    mobile:gap-[.937rem]
    sMobile:gap-[1.5rem]
    mMobile:gap-[1.8rem]

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
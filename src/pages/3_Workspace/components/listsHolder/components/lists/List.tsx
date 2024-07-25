import { memo, useState } from "react"
import { list } from "../../../../../../reduxStore/lists/listsSlice"
import ListHolder from "./ListHolder"
import AddTaskHolder from "./AddTaskHolder"
import TaskHolders from "./TaskHolders"
import { user } from "../../../../../../reduxStore/users/userSlice"
import { board } from "../../../../../../reduxStore/boards/boardsSlice"

const List = memo((
  {
    board,
    user,
    list,
  }:{
    board:board,
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

        <ListHolder userId={user.u_id} boardAdmin={board.u_id} listData ={list} listName={list.name} listSetting={listSetting} setListSetting = {setListSetting} />
        {
          list.tasks.length !== 0 ?
          <TaskHolders taskLists={list.tasks} /> : ""
        }
        {
          user.u_id === board.u_id &&
          <AddTaskHolder user={user} listData ={list}  openTaskName={openTaskName} setOpenTaskName={setOpenTaskName} />
        }
        {
          user.u_id !== board.u_id && list.tasks.length === 0 && <NoAdminNoTasks />
        }
    </div>
  )
})

const NoAdminNoTasks = () => {
  return <div className="
  flex
  flex-row

  justify-center
  items-center

  text-[0.820rem]
  mobile:text-[1.093rem]
  sMobile:text-[1.75rem]
  mMobile:text-[2.1rem]

  sLaptop:text-[0.933rem]
  mLaptop:text-[1.166rem]
  desktop:text-[1.4rem]
  largeDesktop:text-[1.75rem]

  py-[0.468rem]
  mobile:py-[0.625rem]
  sMobile:py-[1rem]
  mMobile:py-[1.2rem]

  sLaptop:py-[0.666rem]
  mLaptop:py-[0.833rem]
  desktop:py-[1rem]
  largeDesktop:py-[1.25rem]

  font-medium

  text-PrimaryWhite

  ">
    No tasks currently found!
  </div>
}

export default List
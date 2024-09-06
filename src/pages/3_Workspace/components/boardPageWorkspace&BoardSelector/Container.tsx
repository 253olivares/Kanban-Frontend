import { memo } from "react";
import MobileMembers from "./components/MobileMembers";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../../reduxStore/hook";
import { selectBoardById } from "../../../../reduxStore/boards/boardsSlice";
import MobileFilter from "./components/MobileFilter";
import MobileSettings from "./components/MobileSettings";

const Container = memo((
  {
    boardAdmin
  } : {
    boardAdmin:string
  }
) => {

  const params = useParams();

  const selectBoard = useAppSelector(state => selectBoardById(state,params?.workspaceId || '')) || null;

  if(!selectBoard || !params.userId ) return;
    
  return (
    <div className="
    w-full
    
    flex
    flex-row

    justify-between

    px-[3.5%]

    py-[0.878rem]
    mobile:py-[1.171rem]
    sMobile:py-[1.875rem]
    mMobile:py-[2.25rem]


    sLaptop:hidden
    ">
      <MobileMembers boardMembers={selectBoard.members} />
      <MobileFilter selectBoard={selectBoard} />
      {
        params.userId === boardAdmin ? <MobileSettings /> : ""
      }
    </div>
  )
})

export default Container
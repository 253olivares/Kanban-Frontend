import { memo } from "react";
import  x_Mark from '/assets/Add_New_Workspace.svg'
import { useAppDispatch, useAppSelector } from "../../../../../reduxStore/hook";
import { setOpenMemberModal } from "../../../../../reduxStore/modal/modalSlice";
import { board, selectBoardById } from "../../../../../reduxStore/boards/boardsSlice";
import { motion } from "framer-motion";
import MembersHolders from "./MembersHolders";

const MembersModal = memo(({paramsBoardId}:{paramsBoardId:string}) => {

    const boardSelect = useAppSelector(state => selectBoardById(state, paramsBoardId)) || null;
  
    if(!boardSelect) return;

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
        w-[82.5%]
        max-h-[90%]
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

      ">
        <HeadHolder boardSelect={boardSelect} />
        <MembersHolders members={boardSelect.members}/>
      </motion.div>
  )
})

const HeadHolder = ({boardSelect}:{boardSelect:board}) => {
  const dispatch = useAppDispatch();
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

        text-PrimaryWhite
      ">
          Member{boardSelect.members.length == 1 ? '': "s"}
      </h1>
      <img 
      onClick={()=> dispatch(setOpenMemberModal(false))}
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

export default MembersModal
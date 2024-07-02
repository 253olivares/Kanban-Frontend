import { memo } from "react";
import  x_Mark from '/assets/Add_New_Workspace.svg'
import { useAppDispatch, useAppSelector } from "../../../../../reduxStore/hook";
import { setOpenMemberModal } from "../../../../../reduxStore/modal/modalSlice";
import { selectBoardById } from "../../../../../reduxStore/boards/boardsSlice";
import { motion } from "framer-motion";

const MembersModal = memo(({paramsBoardId}:{paramsBoardId:string}) => {
    
    const dispatch = useAppDispatch();

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
        min-h-[67.5%]
        max-h-[90%]
        block
    
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

      ">
        <div className="
        w-full
        flex
        justify-between
        items-center
        ">
            <h1 className="
              font-medium

              text-[1.335rem]
              mobile:text-[1.780rem]
              sMobile:text-[2.848rem]
              mMobile:text-[3.418rem]
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

            " src={x_Mark} alt="X mark icons" />
        </div>
      </motion.div>
  )
})

export default MembersModal
import { AnimatePresence, motion} from "framer-motion"
import { useAppDispatch, useAppSelector } from "../../../../../reduxStore/hook"
import { changeBoardModal, getBoardModal } from "../../../../../reduxStore/boards/boardsSlice"
import plusButton from '/assets/addBoard.png';


import { memo } from "react"

import AddName from './addName';
import OpenModal from './openModal';

const addNewBoardHolder = memo(({workspace,durat}:{workspace:string,durat:number}) => {

    const dispatch = useAppDispatch();

    const boardsModal = useAppSelector(getBoardModal);

    console.log("Duration:",durat);

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
        duration: .5,
        delay:durat,
        ease: "easeInOut",
    }}
    
    className={`
    
    addNewBoardHolder

    ${boardsModal?
    `
    ring-SelectorBlue
    `
    :   
    `
    ring-[rgba(255,255,255,.25)]
    hover:ring-SelectorBlue
    hover:cursor-pointer
    `}

    transition-all
    duration-300
    `}>
        <div
        onClick={()=>dispatch(changeBoardModal(true))}
        className="
        w-full
        h-full
        flex
        justify-center
        items-center
        sLaptop:hidden
        "
        >
           <div className="
            glass-gradient-loading 
            rounded-full

            flex
            justify-center
            items-center

            w-[3.135rem]
            mobile:w-[4.18rem]
            sMobile:w-[6.688rem]
            mMobile:w-[8.025rem]

            h-[3.135rem]
            mobile:h-[4.18rem]
            sMobile:h-[6.688rem]
            mMobile:h-[8.025rem]
            ">
                <img 
                className="
                w-[1.64rem]
                mobile:w-[2.186rem]
                sMobile:w-[3.5rem]
                mMobile:w-[4.2rem]

                h-[1.64rem]
                mobile:h-[2.186rem]
                sMobile:h-[3.5rem]
                mMobile:h-[4.2rem]
                "
                src={plusButton} alt="Plus Button" />
            </div> 
        </div>
        <div className="
        w-full
        h-full
        hidden
        sLaptop:block
        ">
        {
        boardsModal ?
            <AnimatePresence>
                <AddName workspace = {workspace} />
            </AnimatePresence>
            :
            <AnimatePresence>
                <OpenModal />
            </AnimatePresence>
        }
        </div>
    </motion.div>
  )
})

export default addNewBoardHolder
import { AnimatePresence, motion} from "framer-motion"
import { useAppSelector } from "../../../../../reduxStore/hook"
import { getBoardModal } from "../../../../../reduxStore/boards/boardsSlice"

import AddName from './addName';
import OpenModal from './openModal';
import MobileAddName from "./mobileAddName"
import { memo } from "react";

const addNewBoardHolder = memo(({workspace,durat}:{workspace:string,durat:number}) => {

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
        <MobileAddName />
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
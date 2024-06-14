import { AnimatePresence, motion} from "framer-motion"
import { useAppSelector } from "../../../../../reduxStore/hook"
import { getBoardModal } from "../../../../../reduxStore/boards/boardsSlice"

import { memo } from "react"

import AddName from './addName';
import OpenModal from './openModal';

const addNewBoardHolder = memo(() => {

    const boardsModal = useAppSelector(getBoardModal);

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
        duration:.5
    }}
    className={`
    sLaptop:w-[12.499rem]
    mLaptop:w-[15.624rem]
    desktop:w-[18.75rem]
    largeDesktop:w-[23.437rem]

    sLaptop:h-[5.208rem]
    mLaptop:h-[6.510rem]
    desktop:h-[7.813rem]
    largeDesktop:h-[9.766rem]

    block

    sLaptop:rounded-[0.333rem]
    mLaptop:rounded-[0.416rem]
    desktop:rounded-[0.5rem]
    largeDesktop:rounded-[0.625rem]

    conic-gradient

    sLaptop:ring-[1.999px]
    mLaptop:ring-[2.499px]
    desktop:ring-[3px]
    largeDesktop:ring-[3.75px]

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

        {
            boardsModal ?
            <AnimatePresence>
                <AddName/>
            </AnimatePresence>
            :
            <AnimatePresence>
                <OpenModal />
            </AnimatePresence>
        }
      
    </motion.div>
  )
})

export default addNewBoardHolder
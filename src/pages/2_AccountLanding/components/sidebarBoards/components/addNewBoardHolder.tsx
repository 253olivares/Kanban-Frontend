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
        delay:durat
    }}
    
    className={`
    
    w-[15.789rem]
    mobile:w-[21.051rem]
    sMobile:w-[33.684rem]
    mMobile:w-[40.421rem]
    sLaptop:w-[12.499rem]
    mLaptop:w-[15.624rem]
    desktop:w-[18.75rem]
    largeDesktop:w-[23.437rem]
    4k:w-[31.249rem]

    h-[6.578rem]
    mobile:h-[8.771rem]
    sMobile:h-[14.034rem]
    mMobile:h-[16.840rem]
    sLaptop:h-[5.208rem]
    mLaptop:h-[6.510rem]
    desktop:h-[7.813rem]
    largeDesktop:h-[9.766rem]
    4k:h-[13.021rem]

    block
    relative

    shrink-0

    rounded-[0.366rem]
    mobile:rounded-[0.488rem]
    sMobile:rounded-[0.781rem]
    mMobile:rounded-[0.937rem]
    sLaptop:rounded-[0.333rem]
    mLaptop:rounded-[0.416rem]
    desktop:rounded-[0.5rem]
    largeDesktop:rounded-[0.625rem]
    4k:rounded-[0.833rem]

    conic-gradient

    ring-[1.875px]
    mobile:ring-[2.5px]
    sMobile:ring-[4px]
    mMobile:ring-[4.8px]
    sLaptop:ring-[1.999px]
    mLaptop:ring-[2.499px]
    desktop:ring-[3px]
    largeDesktop:ring-[3.75px]
    4k:ring-[4.999px]

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
import { motion } from "framer-motion";
import plusButton from '/assets/addBoard.png';
import { useAppDispatch, useAppSelector } from "../../../../../reduxStore/hook";
import { changeBoardModal, getBoardModal } from "../../../../../reduxStore/boards/boardsSlice";


const openModal = () => {

    const dispatch = useAppDispatch()

    const BoardsModal = useAppSelector(getBoardModal);

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
            duration:.5
        }}

       onClick={()=> dispatch(changeBoardModal(true))}

       className={`
       w-full
       h-full
       ${
        BoardsModal? 
        ' hidden'
        :
        ' flex'
       }
       justify-center
       items-center
       transition-all
       duration-300
       `}>
            {/* add button */}
            <div className="
            glass-gradient-loading 
            rounded-full

            flex
            justify-center
            items-center

            sLaptop:w-[2.875rem]
            mLaptop:w-[3.594rem]
            desktop:w-[4.313rem]
            largeDesktop:w-[5.391rem]
            4k:w-[7.187rem]

            sLaptop:h-[2.875rem]
            mLaptop:h-[3.594rem]
            desktop:h-[4.313rem]
            largeDesktop:h-[5.391rem]
            4k:h-[7.187rem]
            ">
                <img 
                className="
                sLaptop:w-[1.375rem]
                mLaptop:w-[1.719rem]
                desktop:w-[2.063rem]
                largeDesktop:w-[2.578rem]
                4k:w-[3.437rem]

                sLaptop:h-[1.375rem]
                mLaptop:h-[1.719rem]
                desktop:h-[2.063rem]
                largeDesktop:h-[2.578rem]
                4k:h-[3.437rem]
                "
                src={plusButton} alt="Plus Button" />
            </div>
      </motion.div>
  )
}

export default openModal
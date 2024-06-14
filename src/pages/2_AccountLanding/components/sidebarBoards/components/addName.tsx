import { motion } from "framer-motion";
import closeButton from '/assets/Add_New_Workspace.svg';
import { useAppDispatch, useAppSelector } from "../../../../../reduxStore/hook";
import { changeBoardModal, getBoardModal } from "../../../../../reduxStore/boards/boardsSlice";


const addName = () => {

    const dispatch = useAppDispatch();

   const BoardsModal = useAppSelector(getBoardModal);

  return (
    <motion.div 
    
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
        duration:.5
    }}

    className={`
      w-full
      h-full
      ${
        !BoardsModal? 
        ' hidden'
        :
        `flex
        flex-col`
       }
       justify-center
       items-center

       sLaptop:gap-[0.333rem]
       mLaptop:gap-[0.416rem]
       desktop:gap-[0.5rem]
       largeDesktop:gap-[0.625rem]

       transition-all
       duration-300
      `}>
        <div className="
        flex flex-row
        justify-between
        px-[5%]
        w-full
        ">
            <h1 className="
            sLaptop:text-[0.875rem]
            mLaptop:text-[1.094rem]
            desktop:text-[1.313rem]
            largeDesktop:text-[1.641rem]
            font-medium
            text-PrimaryWhite
            leading-tight
            ">Enter Name:</h1>
            <img onClick={()=> dispatch(changeBoardModal(false))} className="
            sLaptop:w-[0.958rem]
            mLaptop:w-[1.198rem]
            desktop:w-[1.438rem]
            largeDesktop:w-[1.797rem]
            rotate-45
            hover:cursor-pointer
            " src={closeButton} alt="Close Button" />
        </div>
        <div className="
        w-full
        flex flex-col
        px-[8.6%]

        sLaptop:gap-[0.499rem]
        mLaptop:gap-[0.624rem]
        desktop:gap-[0.75rem]
        largeDesktop:gap-[0.937rem]

        ">
            <input className="
             w-full

             sLaptop:rounded-[0.216rem]
             mLaptop:rounded-[0.270rem]
             desktop:rounded-[0.324rem]
             largeDesktop:rounded-[0.406rem]

             sLaptop:text-[0.799rem]
             mLaptop:text-[0.999rem]
             desktop:text-[1.2rem]
             largeDesktop:text-[1.5rem]

             sLaptop:px-[0.799rem]
             mLaptop:px-[0.333rem]
             desktop:px-[0.4rem]
             largeDesktop:px-[.5rem]

             focus:outline-none

            " type="text" />
            <div className="
            w-full
            text-center
            ">
                <button className="
                
                text-white
                site-borders

                sLaptop:px-[1.208rem]
                mLaptop:px-[1.510rem]
                desktop:px-[1.813rem]
                largeDesktop:px-[2.266rem]

                sLaptop:text-[0.773rem]
                mLaptop:text-[0.966rem]
                desktop:text-[1.16rem]
                largeDesktop:text-[1.45rem]
                font-medium

                sLaptop:rounded-[0.216rem]
                mLaptop:rounded-[0.270rem]
                desktop:rounded-[0.324rem]
                largeDesktop:rounded-[0.406rem]

                focus:outline-none
                ">create</button>
            </div>
        </div>
    </motion.div>
  )
}

export default addName
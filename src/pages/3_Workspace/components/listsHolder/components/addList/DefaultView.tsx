import { memo } from "react";
import { useAppDispatch } from "../../../../../../reduxStore/hook";
import { changeListModalState } from "../../../../../../reduxStore/modal/modalSlice";
import AddList from '/assets/addBoard.png'
import {motion} from 'framer-motion'

const DefaultView = memo(() => {

    const dispatch = useAppDispatch();

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
        ease:'easeInOut',
        duration:.5
    }}
     onClick={()=> dispatch(changeListModalState(true))}
     className="
      w-full
      h-full

      flex
      flex-row
      justify-between
      items-center

      hover:cursor-pointer
      
      sLaptop:px-[0.833rem]
      mLaptop:px-[1.041rem]
      desktop:px-[1.25rem]
      largeDesktop:px-[1.562rem]

      sLaptop:py-[0.562rem]
      mLaptop:py-[0.703rem]
      desktop:py-[0.844rem]
      largeDesktop:py-[1.055rem]

     "
    > 
        <h1 className="
            text-PrimaryWhite

            sLaptop:text-[1.249rem]
            mLaptop:text-[1.562rem]
            desktop:text-[1.875rem]
            largeDesktop:text-[2.343rem]

            font-medium

            leading-none
        ">Add List</h1>
        <img className="
            
            sLaptop:h-[1.145rem]
            mLaptop:h-[1.432rem]
            desktop:h-[1.719rem]
            largeDesktop:h-[2.148rem]
        " src={AddList} alt="Add List Button!" />
    </motion.div>
  )
})

export default DefaultView
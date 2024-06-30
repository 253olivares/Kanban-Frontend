import { useAppDispatch } from "../../../../../../reduxStore/hook";
import { changeListModalState } from "../../../../../../reduxStore/modal/modalSlice";
import AddList from '/assets/addBoard.png'
import {motion} from 'framer-motion'

const DefaultView = () => {

    const dispatch = useAppDispatch();

  return (
    <motion.div
     onClick={()=> dispatch(changeListModalState(true))}
     className="
      w-full
      h-full

      flex
      flex-row
      justify-between
      items-center

      opacity-50
      hover:opacity-100
      hover:cursor-pointer
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
}

export default DefaultView
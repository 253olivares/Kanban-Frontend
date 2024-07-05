import AddNewListName from "./AddNewListName";
import DefaultView from "./DefaultView";
import { useAppSelector } from "../../../../../../reduxStore/hook";
import { getListModal } from "../../../../../../reduxStore/modal/modalSlice";
import { AnimatePresence } from "framer-motion";
import { memo } from "react";
import { motion } from "framer-motion";
import MobileAddList from "./MobileAddList";

// Our div to add a new list
const AddList = memo(() => {
  
  const openModal = useAppSelector(getListModal);

  return (
    <motion.div>
      
      <MobileAddList />

      <div 
      className="
      bg-SpaceBlue

      w-full
      sLaptop:w-[14.999rem]
      mLaptop:w-[18.749rem]
      desktop:w-[22.5rem]
      largeDesktop:w-[28.125rem]

      sLaptop:min-h-[2.583rem]
      mLaptop:min-h-[3.229rem]
      desktop:min-h-[3.875rem]
      largeDesktop:min-h-[4.843rem]

      self-start

      sLaptop:rounded-[0.333rem]
      mLaptop:rounded-[0.416rem]
      desktop:rounded-[0.5rem]
      largeDesktop:rounded-[0.625rem]

      hidden
      sLaptop:flex
      flex-row
      justify-between
      items-center

      shrink-0
      grow-0
      ">
          {
            openModal ? 
            <AnimatePresence>
              <AddNewListName />
            </AnimatePresence>
            :
            <AnimatePresence>
              <DefaultView />
            </AnimatePresence>
          }
      </div>
    </motion.div>
  )
})

export default AddList
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
    <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 1 }}
    transition={{
      duration: .5,
      delay: 0,
      ease: "easeInOut",
  }}
    >
      
      <MobileAddList />

      <div 
      className="
      addListHolder
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
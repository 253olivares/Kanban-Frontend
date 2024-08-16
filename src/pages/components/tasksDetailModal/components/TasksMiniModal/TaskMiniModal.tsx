import Content from "./content/Content";
import { motion } from "framer-motion";


const TaskMiniModal = ({
  setOpenTaskMiniModal
} : {
  setOpenTaskMiniModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {

  return (
    <motion.div  
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
        duration:.3 
    }}
    className='
      absolute

      top-0
      left-0
      w-full
      h-full

      flex
      justify-center
      items-center
      z-10
    '>
      <Content />
      <div
      className="
      absolute
        block
        w-full
        h-full
        sLaptop:bg-[rgba(0,0,0,0.75)]
      "
      onClick={()=> setOpenTaskMiniModal(false)}
      />
    </motion.div>
  )
}

export default TaskMiniModal
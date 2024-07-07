import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AddUserHistoryItem from "./AddUserHistoryItem";
import scrollbarImage from '/assets/scrollBarTrack.png'


const AddHistory = memo(({userHistory}:{userHistory:Record<string,string[]>}) => {
  return (
    <motion.div 
    // @ts-ignore
    style={{"--img":`url(${scrollbarImage})`}}
    className="
    w-full 
    flex 
    flex-col
    
    h-auto

    flex-grow

    transition-all

    boardsScroll
    
    max-h-[20.313rem]

    ">
      <AnimatePresence >
        {
          Object.entries(userHistory).map(([k,v],_)=> (
            <AddUserHistoryItem key={k} v={v}  />
          ))
        }
      </AnimatePresence>
    </motion.div>
  )
})

export default AddHistory
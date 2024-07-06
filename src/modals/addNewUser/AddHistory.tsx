import { memo } from "react";
import { motion } from "framer-motion";

const AddHistory = memo(({userHistory}:{userHistory:Record<string,string>}) => {
  return (
    <motion.div 
    className="w-full 
    flex flex-col">
        {
          Object.entries(userHistory).map(([k,v],_)=> (
            `${k},${v}`
          ))
        }
    </motion.div>
  )
})

export default AddHistory
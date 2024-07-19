import { AnimatePresence } from "framer-motion"
import { memo } from "react"
import AddHistoryItem from "./AddHistoryItem"


const AddHistory = memo(({userHistory}:{userHistory:Record<string,string[]>}) => {
  return (
    <div className="
    w-full

    flex
    flex-col

    h-auto

    flex-grow

    transition-all

    boardsScroll

    max-h-[10.937rem]
    mobile:max-h-[14.582rem]
    sMobile:max-h-[23.332rem]
    mMobile:max-h-[27.998rem]

    ">
         <AnimatePresence>
            {
                Object.entries(userHistory).map(([k,v],i) => 
                    <AddHistoryItem key={k} darkBackground = {i%2 == 1} v={v} />
                )
            }
        </AnimatePresence>
    </div>
  )
})

export default AddHistory
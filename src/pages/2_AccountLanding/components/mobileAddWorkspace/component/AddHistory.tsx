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

    max-h-[14.648rem]
    mobile:max-h-[19.531rem]
    sMobile:max-h-[31.25rem]
    mMobile:max-h-[37.5rem]

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
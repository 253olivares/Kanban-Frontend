import { AnimatePresence, motion } from "framer-motion"
import { useContext } from "react"
import { AppContext } from "../../../appRefContext"

import AddWorkspaceModal from './component/workspaceModal';

const index = () => {

    const appContext= useContext(AppContext);
    const {mobileAddNewWorkspace} = appContext!;

  return (
    <motion.div 

    ref={mobileAddNewWorkspace}

    initial={{ 
        opacity: 0 
      }}
      animate={{ 
        opacity: 1 
      }}
      exit={{ 
        opacity: 0 
      }}
    className="
    absolute
    z-[15]
    top-0
    left-0
    w-dvw
    h-dvh
    overflow-x-hidden
    overflow-y-auto
    no-scrollbar
    bg-[rgba(0,0,0,0.75)]

    flex
    justify-center
    items-center

    sLaptop:hidden
    ">
        <AnimatePresence>
            <AddWorkspaceModal />
        </AnimatePresence>
    </motion.div>
  )
}

export default index
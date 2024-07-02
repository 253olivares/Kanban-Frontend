import { motion } from "framer-motion"
import { useContext } from "react"
import { AppContext } from "../../../appRefContext"

const MembersModal = () => {

  const appContext = useContext(AppContext);
  const {mobileMembersRef} = appContext!;

  return (
    <motion.div 

    ref={mobileMembersRef}

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
    z-[10]
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
      <div className="
        bg-SpaceBlue
        w-[300px]
        h-[500px]
        block
      ">

      </div>
    </motion.div>
  )
}

export default MembersModal
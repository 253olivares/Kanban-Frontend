import { memo } from 'react'
import { motion } from 'framer-motion'

const TaskDetail = memo(() => {
  return (
    <motion.div
    initial={{
        y:25
    }}
    animate={{
        y:0
    }}
    exit={{
        y:25
    }}
    transition={{
        duration:.3
    }}
    className={`
    
    bg-SpaceBlue

    sLaptop:w-[36.666rem]
    mLaptop:w-[45.833rem]
    desktop:w-[55rem]
    largeDesktop:w-[68.75rem]

    h-[10rem]

    sLaptop:rounded-[0.344rem]
    mLaptop:rounded-[0.43rem]
    desktop:rounded-[0.516rem]
    largeDesktop:rounded-[0.645rem]

    `}
    >

    </motion.div>
  )
})

export default TaskDetail
import { motion } from "framer-motion"

const index = () => {
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
      className="relative
      "
    >index</motion.div>
  )
}

export default index
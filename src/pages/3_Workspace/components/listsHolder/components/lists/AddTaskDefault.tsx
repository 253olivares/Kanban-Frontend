import AddList from '/assets/addBoard.png'
import { motion } from 'framer-motion'

const AddTaskDefault = (
    {
        openTaskName, 
      }
      :
      {
        openTaskName:boolean,
      }
) => {  
  console.log(openTaskName);
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
        ease:'easeInOut',
        duration:.5
    }}

    className='
    w-full
    h-full

    hidden

    sLaptop:flex
    flex-row
    justify-between
    items-center

    hover:cursor-pointer

    px-[4%]

    '>
        <h1 className='
        text-PrimaryWhite

        sLaptop:text-[1.249rem]
        mLaptop:text-[1.562rem]
        desktop:text-[1.875rem]
        largeDesktop:text-[2.343rem]

        font-medium

        leading-none
        '>Add Task</h1>

        <img className="
            sLaptop:h-[1.145rem]
            mLaptop:h-[1.432rem]
            desktop:h-[1.719rem]
            largeDesktop:h-[2.148rem]
        " src={AddList} alt="Add List Button!" />
    </motion.div>
  )
}

export default AddTaskDefault
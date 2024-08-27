import AddList from '/assets/addBoard.png'
import { motion } from 'framer-motion'

const AddTaskDefault = (
    {
      setOpenTaskName,
        openTaskName, 
      }
      :
      {
        setOpenTaskName:React.Dispatch<React.SetStateAction<boolean>>,
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
    onClick={()=>setOpenTaskName(true)}
    className='
    w-full
    min-h-[2.226rem]
    mobile:min-h-[2.968rem]
    sMobile:min-h-[4.75rem]
    mMobile:min-h-[5.7rem]

    sLaptop:min-h-[2.266rem]
    mLaptop:min-h-[2.833rem]
    desktop:min-h-[3.4rem]
    largeDesktop:min-h-[4.25rem]

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
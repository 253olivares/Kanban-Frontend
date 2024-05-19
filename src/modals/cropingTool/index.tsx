import {motion} from 'framer-motion';

import SaveButton from './components/saveButton';
import CancelButton from './components/cancelButton';
import { useAppSelector } from '../../reduxStore/hook';
import { getCroppingImage } from '../../reduxStore/modal/modalSlice';

const index = () => {
  // @ts-ignore
  const cropImage = useAppSelector(getCroppingImage);

  return (
    <motion.div
    initial={{
        opacity:0,
        y:25
    }}
    animate={{
        opacity:1,
        y:0
    }}
    exit={{
        opacity:0,
        y:25
    }}
    transition={{
      duration:.3
    }}
    aria-modal="true"
    className="
    absolute
    z-[20]

    bg-SpaceBlue  

    w-full
    h-full

    flex flex-col

    overflow-y-scroll 
    no-scrollbar 
    sLaptop:overflow-hidden
    ">
        <div className='
        grow
        flex items-center justify-center
        '>

        </div>
        <div className='
        
        absolute
        bottom-0
        
        sLaptop:bottom-auto
        sLaptop:relative

        flex justify-between
        
        px-[7.5%]
        sLaptop:py-[1.333rem]
        mLaptop:py-[1.666rem]
        desktop:py-[2rem]
        largeDesktop:py-[2.5rem]
        '>
            <CancelButton/>
            <SaveButton/>
        </div>
    </motion.div>
  )
}

export default index
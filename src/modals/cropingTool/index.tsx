import {motion} from 'framer-motion';

import SaveButton from './components/saveButton';
import CancelButton from './components/cancelButton';
import { useAppSelector } from '../../reduxStore/hook';
import { getCroppingImage } from '../../reduxStore/modal/modalSlice';

const index = () => {
  // @ts-ignore
  const cropImage = useAppSelector(getCroppingImage);
  // @ts-ignore
  const cImage = useAppSelector(getCroppingImage);

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
        bg-black
        '>

        </div>
        <div className='
        absolute
        bottom-0
        
        sLaptop:bottom-auto
        sLaptop:relative

        flex flex-col        
        '>
          <div className='
          flex justify-center
          items-center
          sLaptop:
          mLaptop:
          desktop:
          largeDesktop:h-[6.438rem]
          '>
            <label 
            className='
            text-white
            bg-SelectorBlue
            font-bold
            
            rounded-full

            sLaptop:px-[1.066rem]
            mLaptop:px-[1.333rem]
            desktop:px-[1.6rem]
            largeDesktop:px-[2rem]

            sLaptop:text-[0.92rem]
            sLaptop:leading-[1.84rem]
            mLaptop:text-[1.15rem]
            mLaptop:leading-[2.3rem]
            desktop:text-[1.38rem]
            desktop:leading-[2.76rem]
            largeDesktop:text-[1.725rem]
            largeDesktop:leading-[3.45rem]

            sLaptop:h-[1.84rem]
            mLaptop:h-[2.3rem]
            desktop:h-[2.76rem]
            largeDesktop:h-[3.45rem]

            sLaptop:hover:opacity-75
            sLaptop:hover:cursor-pointer  
            transition-all
            duration-300
          
            '
            htmlFor="ImageSubmission">
              Submit New Image
            </label>
            <input 
              id='ImageSubmission' 
              type="file" 
              onChange={()=> {}}
              className='hidden'
              />
          </div>
          <div className='
          flex justify-between
        
          px-[7.5%]
        
          sLaptop:pb-[1.333rem] 
          mLaptop:pb-[1.666rem]     
          desktop:pb-[2rem]
          largeDesktop:pb-[2.5rem]
          '>
            <CancelButton/>
            <SaveButton/>
          </div>
        </div>
    </motion.div>
  )
}

export default index
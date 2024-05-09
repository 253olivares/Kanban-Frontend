
import {motion} from 'framer-motion';
import { memo } from 'react';

import { openCreateProfile } from '../../../reduxStore/modal/modalSlice';
import { openLogin } from '../../../reduxStore/modal/modalSlice';
import { useAppDispatch } from '../../../reduxStore/hook';


import Button from '../components/mobileButton'
import down from '/assets/Union.png'

const SecondaryModal = memo(({closeMobile}:{closeMobile: ()=>void}) => {

  const dispatch = useAppDispatch();

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration:.25
    }}
    className="fixed sLaptop:hidden z-20 top-0 left-0 w-screen h-screen flex justify-center items-center">
        <motion.div
        initial={{
          y:100
        }}
        animate={{
            y:0
        }}
        exit={{
            y:100
        }}
        className=" absolute block bottom-0 w-full min-h-[10rem] bg-PrimaryWhite rounded-t-[1rem] mMobile:rounded-t-[1.25rem]">
          <div onClick={closeMobile} className='
          w-full cursor-pointer'>
            <img className="mx-auto 
            w-[1.244rem]  
            mobile:w-[1.658rem]
            sMobile:w-[2.653rem]
            mMobile:w-[3.184rem] 
            my-[0.611rem]
            mobile:my-[0.813rem]
            sMobile:my-[1.302rem]
            mMobile:my-[1.563rem]" src={down} alt="Down button" />
          </div>
          <div className=' 
          my-[1.953rem] 
          mobile:my-[2.604rem]
          sMobile:my-[4.166rem] 
          mMobile:my-[5rem] 
          flex flex-col 
          gap-[1.738rem] 
          mobile:gap-[2.317rem]
          sMobile:gap-[3.708rem] 
          mMobile:gap-[4.45rem] 
          justify-center'>
            <div className='text-center'>
              <Button message='Login' fn={()=> {
                closeMobile()
                dispatch(openLogin())
              }} />
            </div>
            <div className='text-center'>
              <Button message='CreateAccount' fn={()=> {
                closeMobile()
                dispatch(openCreateProfile())
              }} />
            </div>
          </div>
        </motion.div>
       <div onClick={closeMobile} className="block sLaptop:hidden absolute z-[-1] w-full h-full bg-[rgba(0,0,0,0.75)]" />
    </motion.div>
  )
})

export default SecondaryModal
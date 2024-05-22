import {motion} from 'framer-motion';
import { memo } from 'react';


import { openCreateProfile,closeMobileModal } from '../../../reduxStore/modal/modalSlice';
import { openLogin } from '../../../reduxStore/modal/modalSlice';
import { useAppDispatch } from '../../../reduxStore/hook';


import Button from '../components/mobileButton'
import down from '/assets/Union.png'


const SecondaryModal = memo(() => {

  const dispatch = useAppDispatch();

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration:.25
    }}
    className="
    fixed
    z-[10]
    top-0 
    left-0 
    w-dvw
    h-dvh
    flex
    flex-col
    justify-end

    sLaptop:hidden 
    ">
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
        className=" 
        relative
        z-[12]
        block 
        w-full 
        min-h-[10rem] 
        bg-PrimaryWhite 
        rounded-t-[1rem] 
        mMobile:rounded-t-[1.25rem]">
          <div onClick={()=>dispatch(closeMobileModal())} className='
          w-full cursor-pointer'>
            <img className="
            mx-auto 
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
                dispatch(closeMobileModal())
                dispatch(openLogin())
              }} />
            </div>
            <div className='text-center'>
              <Button message='CreateAccount' fn={()=> {
                dispatch(closeMobileModal())
                dispatch(openCreateProfile())
              }} />
            </div>
          </div>
        </motion.div>
       <div onClick={()=>dispatch(closeMobileModal())} className="
       block 
       sLaptop:hidden 
       absolute 
       w-full 
       h-full 
       bg-[rgba(0,0,0,0.75)]" />
    </motion.div>
  )
})

export default SecondaryModal
import { memo } from 'react'
import { useAppDispatch } from '../../../reduxStore/hook'
import { openCreateProfile } from '../../../reduxStore/modal/modalSlice'
import { openLogin } from '../../../reduxStore/modal/modalSlice'
import { useLockBodyScroll } from "@uidotdev/usehooks"

import Button from '../components/mobileButton'
import down from '/assets/Union.png'

const SecondaryModal = memo(({closeMobile}:{closeMobile: ()=>void}) => {

  const dispatch = useAppDispatch();

  useLockBodyScroll();

  return (
    <div className="fixed sLaptop:hidden z-20 top-0 left-0 w-screen h-screen flex justify-center items-center">
        <div className=" absolute block bottom-0 w-full min-h-[10rem] bg-PrimaryWhite rounded-t-[1rem] mMobile:rounded-t-[1.25rem]">
          <div onClick={closeMobile} className='w-full cursor-pointer'>
            <img className="mx-auto w-[2.625rem] mMobile:w-[3.125rem] my-5 mMobile:my-6" src={down} alt="Down button" />
          </div>
          <div className=' my-[3rem] sMobile:my-[4.5rem] mMobile:my-[5.25rem] flex flex-col gap-[1.75rem] sMobile:gap-[3.75rem] mMobile:gap-[4rem] justify-center'>
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
        </div>
       <div onClick={closeMobile} className="block sLaptop:hidden absolute z-[-1] w-full h-full bg-[rgba(0,0,0,0.75)]" />
    </div>
  )
})

export default SecondaryModal
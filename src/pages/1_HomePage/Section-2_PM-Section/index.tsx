import Button from "../Components/LargerButton"
import { useAppDispatch } from "../../../reduxStore/hook"
import { openCreateProfile } from "../../../modals/modalSlice"
import { memo } from "react"

// use memo caches our component and only updates when it detects changes have been made to the component itself
const index = memo(() => {
  const dispatch = useAppDispatch();
  return (
    <section className="PM_Section2">
      <div className="PM_Section2 max-w-[1920px] mx-auto ">
        <div className="w-full max-w-[85%] sMobile:max-w-[560px] mMobile:max-w-[650px] sLaptop:max-w-[82%] mx-auto">
          <h1 className="text-linear-gradient 
          font-bold 
          mt-[6.5rem] 
          sMobile:mt-[7.5rem] 
          sLaptop:mt-20 
          text-[1.85rem] leading-[2.2rem]
          sMobile:text-[2.85rem] sMobile:leading-[3.25rem] 
          mMobile:text-[3.5rem] mMobile:leading-[3.938rem] 
          sLaptop:text-[3rem] sLaptop:leading-[3.3rem]
          mLaptop:text-[3.75rem] mLaptop:leading-[4.1rem] 
          desktop:text-[4.4rem] desktop:leading-[5rem]
          sLaptop:max-w-[30rem] 
          mLaptop:max-w-[40rem] 
          desktop:max-w-[50rem]
          ">Project Management Made Easy</h1>
          <p className="text-Slate-gray 
          font-normal 
          mt-4 sMobile:mt-5 mMobile:mt-7 sLaptop:mt-5 desktop:mt-7  
          text-xl sMobile:text-2xl mMobile:text-3xl sLaptop:text-2xl mLaptop:text-3xl desktop:text-[2.375rem] largeDesktop:text-[2.75rem] largeDesktop:leading-[3rem]">
            Ease management trouble with our software. KB aims to make communication easy and task tracking a breeze. All you need to do is take the first step and sign up for an account.
            </p>
          <div className="w-full flex justify-center sLaptop:justify-end mt-8 sMobile:mt-12 mMobile:mt-16 sLaptop:mt-10 mLaptop:mt-12 desktop:mt-20">
            <Button message="Take Your First Step" fn={()=> dispatch(openCreateProfile())}/>
          </div>
          <p className="hidden font-normal sLaptop:block text-Slate-gray text-[1.125rem] leading-[1.5rem] mLaptop:text-xl desktop:text-2xl max-w-[370px] mLaptop:max-w-[460px] desktop:max-w-[560px] float-right text-right mt-3">Try out our free tier and if you like it update to a business or enterprise account.</p>
        </div>
      {/* top right bubblt */}
        <div className="absolute
        w-12 h-12 
        sMobile:w-14 sMobile:h-14
        mMobile:w-16 mMobile:h-16 
        sLaptop:w-11 sLaptop:h-11
        mLaptop:w-[4.25rem] mLaptop:h-[4.25rem]
        desktop:w-[4.5rem] desktop:h-[4.5rem]
        right-3 top-[-10%]
        sMobile:right-4 sMobile:top-[-25%]
        sLaptop:top-2 sLaptop:right-6
        desktop:right-11 desktop:top-9
        rounded-full 
        conic-gradient" />
        {/* Bottom Right */}
        <div className="absolute 
        top-[8rem] right-2
        sMobile:top-[9.5rem] sMobile:right-10 
        mMobile:right-12 mMobile:top-[11rem] 
        sLaptop:top-auto sLaptop:bottom-6 sLaptop:right-[3.25rem]
        mLaptop:bottom-16
        desktop:top-[43.75rem] desktop:right-20
        w-[2.2rem] h-[2.2rem] 
        sMobile:w-[4.5rem] sMobile:h-[4.5rem] 
        mMobile:w-20 mMobile:h-20 
        sLaptop:w-[10rem] sLaptop:h-[10rem]
        desktop:w-[15.125rem] desktop:h-[15.125rem] 
        rounded-full 
        conic-gradient" />
        {/* Bottom Left Bubble */}
        <div className="absolute
        top-[26.5rem] left-[-4.25rem] 
        mMobile:top-[31.875rem] 
        sLaptop:top-[22.25rem] sLaptop:left-[8rem] mLaptop:top-[28rem]
        desktop:top-[33.688rem] desktop:left-48 
        w-[8.5rem] h-[8.5rem] 
        mMobile:w-[10.375rem] mMobile:h-[10.375rem] 
        sLaptop:w-[14.75rem] sLaptop:h-[14.75rem]
        desktop:w-[21.875rem] desktop:h-[21.875rem] 
        rounded-full 
        conic-gradient" />
        {/* Top Left Bubble */}
        <div className="absolute 
        left-5 top-4
        sMobile:top-6 sMobile:left-12 
        mMobile:top-8 mMobile:left-14 
        sLaptop:left-1 sLaptop:top-20
        desktop:top-32 desktop:left-[.25%] 
        w-[2.75rem] h-[2.75rem]
        sMobile:w-[3.25rem] sMobile:h-[3.25rem] 
        mMobile:w-[3.938rem] mMobile:h-[3.938rem] 
        mLaptop:w-[4.25rem] mLaptop:h-[4.25rem]
        desktop:w-32 desktop:h-32 
        rounded-full 
        conic-gradient" />
      </div>
    </section>
  )
})

export default index
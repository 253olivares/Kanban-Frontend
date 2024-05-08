import Button from "../components/LargerButton"
import { useAppDispatch } from "../../../reduxStore/hook"
import { openCreateProfile } from "../../../reduxStore/modal/modalSlice"
import { memo } from "react"

// use memo caches our component and only updates when it detects changes have been made to the component itself
const index = memo(() => {
  const dispatch = useAppDispatch();
  return (
    <section className="
    w-full
    max-w-[1920px]
    relative
    px-[6.5%]
    sLaptop:px-0
    ">
       <div className="
       w-full
       sLaptop:max-w-[82%] 
       mx-auto
       mb-[4.312rem]
       mobile:mb-[5.749rem]
       sMobile:mb-[9.198rem]
       mMobile:mb-[11.063rem]
       ">
          <h1 
          data-aos='fade'
          data-aos-duration='800'
          data-aos-delay='0'
          className="
          text-linear-gradient 
          font-bold 
          
          mt-[3.691rem] 
          mobile:mt-[4.922rem]
          sMobile:mt-[7.875rem] 
          mMobile:mt-[9.438rem]
          sLaptop:mt-20 

          w-[87.5%]
          sLaptop:w-auto

          text-[1.343rem] leading-[1.563rem]
          mobile:text-[1.791rem] mobile:leading-[2.063rem]
          sMobile:text-[2.864rem] sMobile:leading-[3.313rem] 
          mMobile:text-[3.438rem] mMobile:leading-[3.938rem] 
          sLaptop:text-[3rem] sLaptop:leading-[3.3rem]
          mLaptop:text-[3.75rem] mLaptop:leading-[4.1rem] 
          desktop:text-[4.4rem] desktop:leading-[5rem]

          sLaptop:max-w-[30rem] 
          mLaptop:max-w-[40rem] 
          desktop:max-w-[50rem]
          ">Project Management Made Easy</h1>
          <p 
          data-aos='fade'
          data-aos-duration='800'
          data-aos-delay='250'
          className="text-Slate-gray 
          font-normal 

          mt-[0.553rem]
          mobile:mt-[0.784rem]
          sMobile:mt-[1.229rem]
          mMobile:mt-[1.563rem]
          sLaptop:mt-5 
          desktop:mt-7  

          text-[0.733rem]
          mobile:text-[0.977rem]
          sMobile:text-[1.563rem]
          mMobile:text-[1.875rem]
          leading-tight
          sLaptop:text-2xl 
          mLaptop:text-3xl
          desktop:text-[2.375rem] 
          largeDesktop:text-[2.75rem] 
          largeDesktop:leading-[3rem]">
            Ease management trouble with our software. KB aims to make communication easy and task tracking a breeze. All you need to do is take the first step and sign up for an account.
            </p>
          <div 
            data-aos='fade-left'
            data-aos-duration='800'
            data-aos-delay='500' className="
            w-full
            flex justify-center 
            sLaptop:justify-end 
            mt-[1.343rem]
            mobile:mt-[1.791rem]
            sMobile:mt-[2.864rem]
            mMobile:mt-[3.438rem] 
            sLaptop:mt-10 
            mLaptop:mt-12 
            desktop:mt-20">
            <Button message="Take Your First Step" fn={()=> dispatch(openCreateProfile())}/>
          </div>
          <p className="hidden 
          font-normal 
          sLaptop:block 
          text-Slate-gray 
          text-[1.125rem] 
          leading-[1.5rem] 
          mLaptop:text-xl 
          desktop:text-2xl 
          max-w-[370px] 
          mLaptop:max-w-[460px] 
          desktop:max-w-[560px] 
          float-right text-right 
          mt-3">Try out our free tier and if you like it update to a business or enterprise account.</p>
        </div>
      {/* top right bubblt */}
        <div className="absolute
        w-[1.67rem] h-[1.67rem] 
        mobile:w-[2.227rem] mobile:h-[2.227rem]
        sMobile:w-[3.563rem] sMobile:h-[3.563rem]
        mMobile:w-[4.275rem] mMobile:h-[4.275rem] 
        sLaptop:w-11 sLaptop:h-11
        mLaptop:w-[4.25rem] mLaptop:h-[4.25rem]
        desktop:w-[4.5rem] desktop:h-[4.5rem]
        right-[1.5%]
        
        top-[-5.371rem]
        mobile:top-[-7.161rem]
        sMobile:top-[-11.458rem]
        mMobile:top-[-13.75rem]
        sLaptop:top-2 sLaptop:right-6
        desktop:right-11 desktop:top-9

        rounded-full 
        conic-gradient" />

        {/* Bottom Right */}
        <div className="absolute 
        top-[4.547rem]
        mobile:top-[6.063rem]
        sMobile:top-[9.701rem]
        mMobile:top-[11.666rem]
        right-[6.98%]
        sLaptop:top-auto 
        sLaptop:bottom-6 
        sLaptop:right-[3.25rem]
        mLaptop:bottom-16
        desktop:top-[43.75rem] desktop:right-20

        w-[2.044rem] h-[2.044rem] 
        mobile:w-[2.724rem] mobile:h-[2.724rem]
        sMobile:w-[4.359rem] sMobile:h-[4.359rem] 
        mMobile:w-[5.231rem] mMobile:h-[5.231rem]
        sLaptop:w-[10rem] sLaptop:h-[10rem]
        desktop:w-[15.125rem] desktop:h-[15.125rem] 
        rounded-full 
        conic-gradient" />

        {/* Bottom Left Bubble */}
        <div className="absolute
        left-[-7.48%] 
        top-[11.718rem] 
        mobile:top-[15.624rem]
        sMobile:top-[24.999rem]
        mMobile:top-[30rem] 
        sLaptop:top-[22.25rem] sLaptop:left-[8rem] 
        mLaptop:top-[28rem]
        desktop:top-[33.688rem] dsktop:left-48 

        w-[4.053rem] h-[4.053rem] 
        mobile:w-[5.404rem] mobile:h-[5.404rem]
        sMobile:w-[8.646rem] sMobile:h-[8.646rem]
        mMobile:w-[10.375rem] mMobile:h-[10.375rem] 
        sLaptop:w-[14.75rem] sLaptop:h-[14.75rem]
        desktop:w-[21.875rem] desktop:h-[21.875rem] 
        rounded-full 
        conic-gradient" />

        {/* Top Left Bubble */}
        <div className="absolute 
        left-[8.59%] 
        top-[0.747rem]
        mobile:top-[0.996rem] 
        sMobile:top-[1.563rem]
        mMobile:top-[1.938rem] 
        sLaptop:left-1 sLaptop:top-20
        desktop:top-32 desktop:left-[.25%] 

        w-[2.75rem] h-[2.75rem]
        sMobile:w-[3.25rem] sMobile:h-[3.25rem] 
        mMobile:w-[3.938rem] mMobile:h-[3.938rem] 
        mLaptop:w-[4.25rem] mLaptop:h-[4.25rem]
        desktop:w-32 desktop:h-32 
        rounded-full 
        conic-gradient" />
    </section>
  )
})

export default index
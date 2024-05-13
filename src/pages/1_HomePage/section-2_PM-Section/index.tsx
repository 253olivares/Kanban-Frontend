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
    mx-auto
    ">
       <div className="
       w-full
       mx-auto

       sLaptop:px-[8.78%]

       mb-[4.312rem]
       mobile:mb-[5.749rem]
       sMobile:mb-[9.198rem]
       mMobile:mb-[11.063rem]
       sLaptop:mb-[15.208rem]
       mLaptop:mb-[19.042rem]
       desktop:mb-[23.313rem]
       largeDesktop:mb-[28.5rem]
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
          sLaptop:mt-[2.688rem]
          mLaptop:mt-[3.573rem]
          desktop:mt-[4.063rem]
          largeDesktop:mt-[5.078rem]

          w-[87.5%]
          sLaptop:w-[60%]
          sLaptop:max-w-[47.5rem]

          text-[1.343rem] leading-[1.563rem]
          mobile:text-[1.791rem] mobile:leading-[2.063rem]
          sMobile:text-[2.864rem] sMobile:leading-[3.313rem] 
          mMobile:text-[3.438rem] mMobile:leading-[3.938rem] 
          sLaptop:text-[2.917rem] sLaptop:leading-[3.375rem]
          mLaptop:text-[3.646rem] mLaptop:leading-[4.188rem] 
          desktop:text-[4.375rem] desktop:leading-[5rem]
          ">Project Management Made Easy</h1>
          <p 
          data-aos='fade'
          data-aos-duration='800'
          data-aos-delay='250'
          className="
          text-Slate-gray 
          font-normal 

          mt-[0.553rem]
          mobile:mt-[0.784rem]
          sMobile:mt-[1.229rem]
          mMobile:mt-[1.563rem]
          sLaptop:mt-[1.313rem]
          mLaptop:mt-[1.833rem]
          desktop:mt-[2.25rem]
          largeDesktop:mt-[2.688rem]

          text-[0.733rem]
          mobile:text-[0.977rem]
          sMobile:text-[1.563rem]
          mMobile:text-[1.875rem]
          leading-tight
          sLaptop:text-[1.583rem]
          mLaptop:text-[1.979rem]
          desktop:text-[2.375rem] 
          largeDesktop:text-[2.75rem]">
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
            sLaptop:mt-[2.166rem]
            mLaptop:mt-[2.708rem] 
            desktop:mt-[3.25rem]
            largeDesktop:mt-[4.172rem]
            ">
            <Button message="Take Your First Step" fn={()=> dispatch(openCreateProfile())}/>
          </div>
          <p className="
          hidden 
          font-normal 
          sLaptop:block 
          text-Slate-gray 

          text-[1.125rem] 
          leading-[1.5rem] 
          sLaptop:text-[1.042rem]
          mLaptop:text-[1.302rem]
          desktop:text-[1.563rem] 

          max-w-[370px] 
          sLaptop:max-w-none
          w-[44.25%]

          float-right text-right 
          sLaptop:mt-[0.625rem]
          mLaptop:mt-[0.781rem]
          desktop:mt-[0.938rem]
          largeDesktop:mt-[1.172rem]
          ">Try out our free tier and if you like it update to a business or enterprise account.</p>
      </div>
      {/* top right bubblt */}
        <div className="absolute
        w-[1.67rem] h-[1.67rem] 
        mobile:w-[2.227rem] mobile:h-[2.227rem]
        sMobile:w-[3.563rem] sMobile:h-[3.563rem]
        mMobile:w-[4.275rem] mMobile:h-[4.275rem] 
        sLaptop:w-[3rem] sLaptop:h-[3rem]
        mLaptop:w-[3.75rem] mLaptop:h-[3.75rem]
        desktop:w-[4.5rem] desktop:h-[4.5rem]

        right-[1.5%]
        
        top-[-5.371rem]
        mobile:top-[-7.161rem]
        sMobile:top-[-11.458rem]
        mMobile:top-[-13.75rem]
        sLaptop:right-[1.86%]
        sLaptop:top-[1.458rem]
        mLaptop:top-[1.823rem]
        desktop:top-[2.188rem]

        rounded-full 
        conic-gradient" />

        {/* Bottom Right */}
        <div className="absolute 
        top-[4.547rem]
        mobile:top-[6.063rem]
        sMobile:top-[9.701rem]
        mMobile:top-[11.666rem]
        right-[6.98%]
        sLaptop:right-[3.42%]
        sLaptop:top-[29.313rem]
        mLaptop:top-[36.625rem]
        desktop:top-[44rem]
        largeDesktop:top-[50rem]

        w-[2.044rem] h-[2.044rem] 
        mobile:w-[2.724rem] mobile:h-[2.724rem]
        sMobile:w-[4.359rem] sMobile:h-[4.359rem] 
        mMobile:w-[5.231rem] mMobile:h-[5.231rem]
        sLaptop:w-[10.083rem] sLaptop:h-[10.083rem]
        mLaptop:w-[12.604rem] mLaptop:h-[12.604rem]
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
        sLaptop:left-[12.5%]
        sLaptop:top-[20.438rem] 
        mLaptop:top-[26.063rem]
        desktop:top-[31.688rem]
        largeDesktop:top-[40.109rem]

        w-[4.053rem] h-[4.053rem] 
        mobile:w-[5.404rem] mobile:h-[5.404rem]
        sMobile:w-[8.646rem] sMobile:h-[8.646rem]
        mMobile:w-[10.375rem] mMobile:h-[10.375rem] 
        sLaptop:w-[14.75rem] sLaptop:h-[14.75rem]
        mLaptop:w-[18.438rem] mLaptop:h-[18.438rem]
        desktop:w-[22.125rem] desktop:h-[22.125rem] 
      
        rounded-full 
        conic-gradient" />

        {/* Top Left Bubble */}
        <div className="absolute 
        left-[8.59%] 
        top-[0.747rem]
        mobile:top-[0.996rem] 
        sMobile:top-[1.563rem]
        mMobile:top-[1.938rem] 
        sLaptop:left-0
        sLaptop:top-[5.375rem]
        mLaptop:top-[6.688rem]
        desktop:top-[8.063rem]

        w-[2.75rem] h-[2.75rem]
        sMobile:w-[3.25rem] sMobile:h-[3.25rem] 
        mMobile:w-[3.938rem] mMobile:h-[3.938rem] 
        sLaptop:w-[5.208rem] sLaptop:h-[5.208rem]
        mLaptop:w-[6.510rem] mLaptop:h-[6.510rem]
        desktop:w-[7.813rem] desktop:h-[7.813rem] 
        rounded-full 
        conic-gradient" />
    </section>
  )
})

export default index
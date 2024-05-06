import Header from '../header'
import HomeCover from '/assets/Home_Cover.svg'
import HomeCoverMobile from '/assets/Home_Cover_Mobile.svg'
import LogoExport from '/assets/Logo_Export.svg';
import DeskView from '/assets/Ipad_ImageSVG.svg';
import MobileView from '/assets/MobileImageSVG.svg'
import { memo } from 'react';

// use memo caches our component and only updates when it detects changes have been made to the component itself
const index = memo(({openMobile}: {openMobile:()=>void}) => {
  return (
    <section className='conic-gradient Home_Section1'>
        <div className='Home_Section1 max-w-[1920px] mx-auto z-10 overflow-x-clip'>
          <Header mobileOpen={openMobile} />
          <div className='w-full relative px-8 sMobile:px-11 mMobile:px-14 sLaptop:px-[5.625rem] mLaptop:px-28 desktop:px-[8.4rem] largeDesktop:px-[10rem] mt-6 mMobile:mt-8 sLaptop:mt-6 mLaptop:mt-8 desktop:mt-9'>
            <div className='flex gap-3 sMobile:gap-4 sLaptop:gap-6 mLaptop:gap-7 desktop:gap-8'>
              <h1 className='
              font-bold 
              text-4xl
              sMobile:text-5xl 
              mMobile:text-6xl
              sLaptop:text-[3.125rem] 
              mLaptop:text-[3.906rem] 
              desktop:text-[4.688rem]
              sMobile:leading-[3.563rem] 
              mLaptop:leading-[4.5rem]
              desktop:leading-[5.313rem] 
              text-PrimaryWhite'>
                <span className='text-linear-gradient'>W</span>elcome <span className='text-linear-gradient'>T</span>o
              </h1>
              <img className="
              w-8
              sMobile:w-11
              mMobile:w-14 
              sLaptop:w-[3.125rem] 
              mLaptop:w-[3.906rem] 
              desktop:w-[4.688rem]" src={LogoExport} alt="Logo"/>
            </div>

            <p className='text-PrimaryWhite 
            text-lg
            sMobile:text-xl
            mMobile:text-2xl 
            mLaptop:text-3xl
            desktop:text-4xl
            max-w-[300px] 
            sMobile:max-w-[400px]
            mMobile:max-w-[415px]
            sLaptop:max-w-none 
            font-medium 
            tracking-wide'>Organization and communication begins here!</p>

            <img className='
            block 
            sLaptop:hidden 
            z-10 
            absolute 
            w-[30rem]
            sMobile:w-[34rem] 
            mMobile:w-[38rem]
            top-[3rem]
            sMobile:top-5
            right-[-1.25rem]
            sMobile:right-[-2%]
            mMobile:right-[-1%]
            ' src={MobileView} alt="" />

            <img className='
            hidden
            sLaptop:block 
            sLaptop:w-[37rem] mLaptop:w-[46rem] desktop:w-[52rem] 
            z-10 
            absolute 
            sLaptop:right-[4rem] mLaptop:right-20 desktop:right-[7rem] largeDesktop:right-[10rem]
            top-0' 
            src={DeskView} alt="desktopView" />
          </div>
          {/* bubbles */}
        {/* Far Right Bubble */}
        <div className='z-0 
        absolute
        right-[.5rem] 
        sMobile:right-2
        mMobile:right-3
        sLaptop:right-4 
        mLaptop:right-6
        desktop:right-7 
        largeDesktop:right-9 
        top-[12rem]
        mMobile:top-[13rem]
        mLaptop:top-[21rem]
        desktop:top-96 
        largeDesktop:top-[22rem] 
        rounded-full 
        bg-PrimaryWhite
        w-10
        h-10 
        sMobile:w-12
        sMobile:h-12 
        sLaptop:w-10
        sLaptop:h-10 
        mLaptop:w-16 
        mLaptop:h-16
        desktop:w-[4.5rem]  
        desktop:h-[4.5rem]' />
        {/* Middle Top Bubble */}
        <div className='z-0 
        absolute
        right-[8rem]
        sMobile:right-[10rem] 
        mMobile:right-[12rem]
        sLaptop:left-[48%]
        top-[3.5rem] 
        sMobile:top-[4.5rem]
        mMobile:top-[5rem]
        sLaptop:top-[5.375rem] 
        mLaptop:top-[6.75rem] 
        desktop:top-32 
        rounded-full 
        bg-PrimaryWhite
        w-12
        h-12 
        sMobile:w-16
        sMobile:h-16 
        sLaptop:w-[3.833rem] 
        sLaptop:h-[3.833rem] 
        mLaptop:w-[4.75rem] 
        mLaptop:h-[4.75rem] 
        desktop:w-[5.5rem] 
        desktop:h-[5.5rem]' />
        {/* bottom Left Big bubble */}
        <div className='z-0 
        absolute left-[4rem] bottom-[5rem] 
        sMobile:left-[5.5rem] sMobile:bottom-24
        mMobile:bottom-[7.5rem]
        sLaptop:left-20 
        mLaptop:left-24 
        desktop:left-28 
        sLaptop:bottom-[6.375rem] 
        mLaptop:bottom-32 
        desktop:bottom-[9.4rem] 
        rounded-full 
        bg-PrimaryWhite 
        w-12 h-12
        sMobile:w-16 sMobile:h-16 
        mMobile:w-17 mMobile:h-17
        sLaptop:w-[3rem] 
        sLaptop:h-[3rem] 
        mLaptop:w-16 
        mLaptop:h-16 
        desktop:w-[4.5rem] 
        desktop:h-[4.5rem]' />
        {/* Bottom left small Bubble */}
        <div className='z-0 
        absolute left-4 bottom-12 
        sMobile:left-8 sMobile:bottom-14
        mMobile:left-10
        sLaptop:left-12 
        mLaptop:left-14 
        desktop:left-20 
        sLaptop:bottom-12 
        mLaptop:bottom-14 
        desktop:bottom-20 
        rounded-full 
        bg-PrimaryWhite 
        w-7 h-7
        sMobile:w-9 sMobile:h-9
        mMobile:w-10 mMobile:h-10 
        sLaptop:w-[1.875rem] sLaptop:h-[1.875rem] 
        mLaptop:w-9 mLaptop:h-9 
        desktop:h-11 desktop:w-11' />
        </div>
        {/* background wave */}
        <img className='hidden sLaptop:block absolute z-0 w-full bottom-0 left-0' src={HomeCover} alt="HomeCover" />
        <img className='block sLaptop:hidden absolute z-0 w-full bottom-0 left-0' src={HomeCoverMobile} alt="HomeCover" />
    </section>
  )
})

export default index
import { memo } from 'react';

import HomeCoverMobile from '/assets/Home_Cover_Mobile.svg';
import MobileView from '/assets/MobileImageSVG.svg';
import LogoExport from '/assets/Logo_Export.svg';
import DeskView from '/assets/Ipad_ImageSVG.svg';
import HomeCover from '/assets/Home_Cover.svg';
import Header from '../header';


// use memo caches our component and only updates when it detects changes have been made to the component itself
const index = memo(({openMobile}: {openMobile:()=>void}) => {
  return (
    <section className='
  
    conic-gradient 
    Home_Section1'>
        <div className='
        Home_Section1 
        max-w-[1920px]
        mx-auto 
        '>
          <Header mobileOpen={openMobile} />

          <div className='
          w-full 
          relative 

          px-[6.5%]
          sLaptop:px-[5.625rem] 
          mLaptop:px-28 
          desktop:px-[8.4rem] 
          largeDesktop:px-[10rem] 

          mt-[0.537rem]
          mobile:mt-[0.716rem]
          sMobile:mt-[1.145rem]
          mMobile:mt-[1.375rem]
          sLaptop:mt-6  
          mLaptop:mt-8 
          desktop:mt-9

          pb-[10.864rem]
          mobile:pb-[14.485rem]
          sMobile:pb-[23.177rem]
          mMobile:pb-[27.813rem]
          
          ' >
            <div className='
            flex 
            gap-[0.504rem]
            mobile:gap-[0.673rem]
            sMobile:gap-[1.076rem]
            mMobile:gap-[1.313rem]
            sLaptop:gap-6
            mLaptop:gap-7 
            desktop:gap-8'
            >
              <h1 
              data-aos='fade'
              data-aos-duration='800'
              data-aos-delay='500'
              className='
              font-bold 

              text-[1.465rem]
              mobile:text-[1.953rem]
              sMobile:text-[3.125rem]
              mMobile:text-[3.75rem]
              sLaptop:text-[3.125rem] 
              mLaptop:text-[3.906rem] 
              desktop:text-[4.688rem]
              leading-[1.688rem]
              mobile:leading-[2.25rem]
              sMobile:leading-[3.563rem]
              mMobile:leading-[4.313rem] 
              mLaptop:leading-[4.5rem]
              desktop:leading-[5.313rem] 
              text-PrimaryWhite
              '>
                <span className='text-linear-gradient'>W</span>elcome <span className='text-linear-gradient'>T</span>o
              </h1>
              <img 
              data-aos='fade'
              data-aos-duration='800'
              data-aos-delay='500'
              className="
              w-[1.224rem]
              mobile:w-[1.633rem]
              sMobile:w-[2.612rem]
              mMobile:w-[3.125rem]
              sLaptop:w-[3.125rem] 
              mLaptop:w-[3.906rem] 
              desktop:w-[4.688rem]" src={LogoExport} alt="Logo"/>
            </div>

            <p 
            data-aos='fade'
            data-aos-duration='800'
            data-aos-delay='750'
            className='text-PrimaryWhite 

            text-[0.611rem]
            mobile:text-[0.814rem]
            sMobile:text-[1.302rem]
            mMobile:text-[1.563rem]
            mLaptop:text-3xl
            desktop:text-4xl

            max-w-[162.57px]
            mobile:max-w-[216.76px] 
            sMobile:max-w-[346.82px]
            mMobile:max-w-[415px]
            sLaptop:max-w-none 

            font-medium 
            tracking-wide
            '>Organization and communication begins here!</p>

            <img 
            data-aos='fade-left'
            data-aos-duration='800'
            data-aos-delay='250'
            className='
            block 
            sLaptop:hidden 
            z-10 
            absolute 

            w-[8.006rem]
            mobile:w-[10.675rem]
            sMobile:w-[17.079rem]
            mMobile:w-[20.495rem]
            
            right-[7%]

            top-[0.366rem]
            mobile:top-[0.488rem]
            sMobile:top-[0.781rem]
            mMobile:top-[0.938rem]
            ' src={MobileView} alt="" />

            <img 
            data-aos='fade-left'
            data-aos-duration='800'
            data-aos-delay='250'
            className='
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
        right-[1.43%] 
        sLaptop:right-4 
        mLaptop:right-6
        desktop:right-7 
        largeDesktop:right-9 

        top-[4.882rem]
        mobile:top-[6.510rem]
        sMobile:top-[10.416rem]
        mMobile:top-[12.5rem]
        mLaptop:top-[21rem]
        desktop:top-96 
        largeDesktop:top-[22rem] 

        rounded-full 
        bg-PrimaryWhite
        w-[1.465rem]
        h-[1.465rem]
        mobile:w-[1.953rem]
        mobile:h-[1.953rem]
        sMobile:w-[3.125rem]
        sMobile:h-[3.125rem]
        mMobile:w-[3.75rem]
        mMobile:h-[3.75rem]
        sLaptop:w-10
        sLaptop:h-10 
        mLaptop:w-16 
        mLaptop:h-16
        desktop:w-[4.5rem]  
        desktop:h-[4.5rem]' 
        />
        {/* Middle Top Bubble */}
        <div className='z-0 
        
        absolute
        
        right-[25.52%]
        sLaptop:right-auto
        sLaptop:left-[48%]

        top-[2.048rem] 
        mobile:top-[2.897rem]
        sMobile:top-[4.636rem]
        mMobile:top-[5.563rem]
        sLaptop:top-[5.375rem] 
        mLaptop:top-[6.75rem] 
        desktop:top-32 
        rounded-full 
        bg-PrimaryWhite
        w-[1.904rem]
        h-[1.904rem]
        mobile:w-[2.539rem]
        mobile:h-[2.539rem]
        sMobile:w-[4.063rem]
        sMobile:h-[4.063rem]
        mMobile:w-[4.875rem]
        mMobile:h-[4.875rem]
        sLaptop:w-[3.833rem] 
        sLaptop:h-[3.833rem] 
        mLaptop:w-[4.75rem] 
        mLaptop:h-[4.75rem] 
        desktop:w-[5.5rem] 
        desktop:h-[5.5rem]' />
        {/* bottom Left Big bubble */}
        <div className='z-0 
        
        absolute 
        left-[13.54%]
        bottom-[2.929rem] 
        mobile:bottom-[3.906rem]
        sMobile:bottom-[6.249rem]
        mMobile:bottom-[7.5rem]
        sLaptop:left-20 
        mLaptop:left-24 
        desktop:left-28 
        sLaptop:bottom-[6.375rem] 
        mLaptop:bottom-32 
        desktop:bottom-[9.4rem] 
        
        rounded-full 
        bg-PrimaryWhite 

        w-[1.758rem] h-[1.758rem]
        mobile:w-[2.344rem] mobile:h-[2.344rem]
        sMobile:w-[3.75rem] sMobile:h-[3.75rem] 
        mMobile:w-[4.5rem] mMobile:h-[4.5rem]
        sLaptop:w-[3rem] 
        sLaptop:h-[3rem] 
        mLaptop:w-16 
        mLaptop:h-16 
        desktop:w-[4.5rem] 
        desktop:h-[4.5rem]' />
        {/* Bottom left small Bubble */}
        <div className='z-0 
       
        absolute 
        left-[3.03%] 

        bottom-[1.67rem]
        mobile:bottom-[2.226rem]
        sMobile:bottom-[3.563rem]
        mMobile:bottom-[4.25rem]
        sLaptop:left-12 
        mLaptop:left-14 
        desktop:left-20 
        sLaptop:bottom-12 
        mLaptop:bottom-14 
        desktop:bottom-20 
        rounded-full 
        bg-PrimaryWhite 

        w-[1.074rem] h-[1.074rem]
        mobile:w-[1.433rem] mobile:h-[1.433rem]
        sMobile:w-[2.292rem] sMobile:h-[2.292rem]
        mMobile:w-[2.75rem] mMobile:h-[2.75rem]
        sLaptop:w-[1.875rem] sLaptop:h-[1.875rem] 
        mLaptop:w-9 mLaptop:h-9 
        desktop:h-11 desktop:w-11' />
        </div>

        {/* background wave */}
        <img className='
        absolute
        hidden 
        sLaptop:block 
        z-0 
        w-full 
        bottom-0 
        left-0' src={HomeCover} alt="HomeCover" />
        <img className='
        absolute
        block 
        sLaptop:hidden 
        z-0 
        w-full 
        bottom-0 
        left-0' 
        src={HomeCoverMobile} alt="HomeCover" />
    </section>
  )
})

export default index
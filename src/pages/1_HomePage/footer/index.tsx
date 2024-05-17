import LogoExport from '/assets/Logo_Export.svg';
import Instagram from '/assets/InstagramIcon.svg';
import Twitter from '/assets/TwitterIcon.svg';
import Facebook from '/assets/FacebookIcon.svg';
import Linkedin from '/assets/LinkedInIcon.svg';
import LanguageDropdown from '../components/LanguageDropdown';
import EmailInput from '../components/EmailInput';
import {memo} from 'react';


// key value pair
type siteMapInterface = {
  [key: string] : string[]
}

const index = memo(() => {

  // key value pairs
  const siteMap: siteMapInterface = {
    'Help': [
      "Submit Ticket",
      "View Ticket",
      "Contact Form",
      "Live Demo",
      "FAQ"
    ],
    'Legal': [
      "Privacy Policy",
      "Payment Policy",
      "Credit Card"
    ],
    'About Us': [
      "Services",
      "Office Location",
      "Founders",
      "Looking to Help"
    ]
  }


  return (
    <section className="
    conic-gradient">
        {/* back to top section */}
        <div className="
        cursor-pointer
        w-full 
     
        h-[1.953rem]
        mobile:h-[2.604rem]
        sMobile:h-[4.166rem]
        mMobile:h-[5rem]
        sLaptop:h-auto
        sLaptop:py-3
        mLaptop:py-4
        desktop:py-5
        largeDesktop:py-6

        text-center

        text-[0.854rem]
        leading-[1.953rem]
        mobile:text-[1.139rem]
        mobile:leading-[2.604rem]
        sMobile:text-[1.823rem] 
        sMobile:leading-[4.166rem]
        mMobile:text-[2.188rem]
        mMobile:leading-[5rem]
        sLaptop:text-xl 
        mLaptop:text-2xl
        desktop:text-3xl

        font-bold
        sLaptop:font-medium 
        text-PrimaryWhite
        " onClick={()=> {window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          })}}
        >
            Back To Top
        </div>

          {/* middle section */}
        <div className="
        w-full 
        flex justify-center 
        linear-gradientFooter2 
        sLaptop:linear-gradientFooter">
          <div className='
          w-[60%] 
          bg-PrimaryWhite 
          hidden 
          sLaptop:flex
          sLaptop:justify-end
          largeDesktop:items-center
          sLaptop:rounded-r-[2rem] 
          mLaptop:rounded-r-[2.5rem] 
          desktop:rounded-r-[3.125rem]
          '>
            <div className='
            w-full
            largeDesktop:w-[calc(1920px*.6)] 
            float-right
            flex
            sLaptop:gap-14
            mLaptop:gap-16
            desktop:gap-20 
            sLaptop:py-8
            mLaptop:py-[3rem]
            desktop:py-[3.25rem]
            justify-center
             largeDesktop:my-auto
            '>
              {
                Object.entries(siteMap).map(
                  ([key, values],index) => 
                  <div key={index} className='flex flex-col'>
                    <p className='
                    text-black
                    sLaptop:text-[1.75rem]
                    mLaptop:text-4xl 
                    desktop:text-[2.625rem] 
                    font-medium 
                    sLaptop:pr-[1.5rem]
                    mLaptop:pr-[2rem]
                    desktop:pr-9
                    largeDesktop:pr-11
                    sLaptop:pb-[.25rem]
                    mLaptop:pb-[.4rem]
                    desktop:pb-[.75rem]
                    '>{key}</p>
                    <hr className='
                    w-full 
                    h-[.25rem] 
                    desktop:h-[.35rem] 
                    site-borders 
                    border-none
                    rounded-md 
                    mb-[.25rem]
                    desktop:mb-[.5rem]
                    ' />
                    <ul className='
                    text-Slate-gray 
                    sLaptop:text-[0.85rem]
                    mLaptop:text-lg
                    desktop:text-xl
                    font-medium
                    '>
                      {
                        // map our values from the key value pairs
                        values.map(
                          (x,index)=> <li key={index} className='hover:underline py-[.05rem] desktop:py-[.15rem] cursor-pointer'>{x}</li>
                          )
                      }
                    </ul>
                  </div>
                  )
              }
            </div>
          </div>
          <div className='
          w-full
          sLaptop:w-[40%] 
          flex 
          justify-center
          largeDesktop:justify-start
          items-center
          largeDesktop:ml-[calc((1920px*.4)/2-14.5rem)]
          '>
            <div className='
            flex
            flex-col
            gap-[0.906rem] py-[1.148rem]
            mobile:gap-[1.209rem] mobile:py-[1.53rem]
            sMobile:gap-[1.934rem] sMobile:py-[2.448rem]
            mMobile:gap-[2.32rem] mMobile:py-[2.938rem]
            sLaptop:gap-[1.125rem] sLaptop:py-[2.125rem]
            mLaptop:gap-5 mLaptop:py-10
            desktop:gap-7 desktop:py-[3.125rem]
            '>
              {/* language dropdown component */}
              <LanguageDropdown />  
              {/* email input component */}
              <EmailInput />
            </div>
          </div>
        </div>

        {/* copyright info */}
        <div className="w-full
        mx-auto
        py-4
        sMobile:py-5
        mMobile:py-6
        sLaptop:py-[0.813rem]
        mLaptop:py-4
        desktop:py-5
        px-7
        sMobile:px-10
        mMobile:px-[3.125rem]
        sLaptop:px-[3.625rem]
        mLaptop:px-[4.5rem]
        desktop:px-[5.375rem]
        largeDesktop:px-[6rem]
        flex 
        justify-between 
        items-center
        max-w-[1920px] 
        ">
          <div className='
          flex 
          sLaptop:gap-6 
          mLaptop:gap-7 
          desktop:gap-9 
          largeDesktop:gap-14 
          items-center
          text-PrimaryWhite'>
            <img className='
            w-[1.343rem]
            mobile:w-[1.791rem]
            sMobile:w-[2.864rem] 
            mMobile:w-[3.438rem] 
            sLaptop:w-[2.063rem] 
            mLaptop:w-10 
            desktop:w-[3.125rem] 
            largeDesktop:w-[3.75rem]' src={LogoExport} alt="Logo" />
            <p className='
            hidden 
            sLaptop:block 
            font-medium 
            sLaptop:text-base 
            mLaptop:text-xl 
            desktop:text-[1.5rem] 
            largeDesktop:text-[1.75rem]'>@ Copyright Info 2024</p>
          </div>

          <div className='flex 
          gap-[0.611rem]
          mobile:gap-[0.814rem]
          sMobile:gap-[1.302rem] 
          mMobile:gap-[1.563rem] 
          sLaptop:gap-6 
          mLaptop:gap-7 
          desktop:gap-9 
          largeDesktop:gap-14 
          items-center'>
            <img className='
            FooterSocialLink' src={Instagram} alt="Instagram Icon" />
            <img className='
            FooterSocialLink' src={Twitter} alt="Twitter Icon" />
            <img className='FooterSocialLink' src={Facebook} alt="Facebook Icon" />
            <img className='FooterSocialLink' src={Linkedin} alt="LinkedIn Icon" />
          </div>
        </div>
        <div className='
        block 
        sLaptop:hidden'>
          <hr className='
          mx-auto 
          w-[92.18%]
          bg-PrimaryWhite 
          border-none 
          h-[0.122rem]
          mobile:h-[0.163rem]
          sMobile:h-[0.260rem]
          mMobile:h-[0.313rem] 
          rounded-lg' />
          <p className='
          text-center 
          text-PrimaryWhite 
          text-[0.611rem]
          mobile:text-[0.814rem]
          sMobile:text-[1.302rem]
          mMobile:text-[1.563rem] 
          py-[0.753rem]
          mobile:py-[0.983rem]
          sMobile:py-[1.573rem]
          mMobile:py-[1.875rem]
          font-medium'>@ copyright Info 2024  </p>
        </div>
    </section>
  )
})

export default index
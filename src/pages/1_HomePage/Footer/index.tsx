import LogoExport from '/assets/Logo_Export.svg';
import Instagram from '/assets/InstagramIcon.svg';
import Twitter from '/assets/TwitterIcon.svg';
import Facebook from '/assets/FacebookIcon.svg';
import Linkedin from '/assets/LinkedInIcon.svg';
import LanguageDropdown from '../Components/LanguageDropdown';
import EmailInput from '../Components/EmailInput';


// key value pair
type siteMapInterface = {
  [key: string] : string[]
}

const index = () => {

  // key value pairs
  const siteMap: siteMapInterface = {
    'Help': [
      "submit Ticket",
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
    <section className="conic-gradient">
        {/* back to top section */}
        <div className="
        cursor-pointer
        sLaptop:py-3
        mLaptop:py-4
        w-full 
        text-center 
        sLaptop:text-xl 
        mLaptop:text-2xl
        font-medium 
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
        <div className="w-full flex linear-gradientFooter">
          <div className='w-[60%] bg-PrimaryWhite hidden sLaptop:block sLaptop:rounded-r-[2rem] mLaptop:rounded-r-[2.5rem]'>
            <div className='
            w-full
            largeDesktop:w-[calc(1920px*.6)] 
            float-right
            flex 
            gap-12
            sLaptop:py-8
            mLaptop:py-10
            justify-center
            '>
              {
                Object.entries(siteMap).map(
                  ([key, values],index) => 
                  <div key={index} className='flex flex-col'>
                    <p className='
                    text-black
                    text-4xl 
                    font-medium 
                    pr-[2rem]
                    pb-[.5rem]
                    '>{key}</p>
                    <hr className='
                    w-full 
                    h-[.25rem]  
                    site-borders 
                    border-none
                    rounded-md 
                    mb-[.25rem]
                    ' />
                    <ul className='
                    text-Slate-gray 
                    text-lg
                    font-medium
                    '>
                      {
                        // map our values from the key value pairs
                        values.map(
                          (x,index)=> <li key={index} className='hover:underline py-[.05rem] text-base'>{x}</li>
                          )
                      }
                    </ul>
                  </div>
                  )
              }
            </div>
          </div>
          <div className='
          w-[40%] 
          max-w-[calc(1920px*.4)] 
          flex justify-center
          items-center
          '>
            <div className='
            flex
            flex-col 
            sLaptop:gap-[1.125rem] mLaptop:py-[2.125rem]
            mLaptop:gap-5 mLaptop:py-10
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
        sLaptop:py-[0.813rem]
        mLaptop:py-4
        sLaptop:px-[3.625rem]
        mLaptop:px-[4.5rem]
        flex 
        justify-between 
        items-center
        max-w-[1920px] 
        ">
          <div className='flex sLaptop:gap-6 mLaptop:gap-7 items-center text-PrimaryWhite'>
            <img className=' sLaptop:w-[2.063rem] mLaptop:w-10' src={LogoExport} alt="Logo" />
            <p className='font-medium sLaptop:text-base mLaptop:text-xl'>@ Copyright Info 2024</p>
          </div>

          <div className='flex sLaptop:gap-6 mLaptop:gap-7 items-center'>
            <img className='sLaptop:w-[1.75rem] mLaptop:w-9 hover:opacity-75 hover:cursor-pointer' src={Instagram} alt="Instagram Icon" />
            <img className='sLaptop:w-[1.75rem] mLaptop:w-9 hover:opacity-75 hover:cursor-pointer' src={Twitter} alt="Twitter Icon" />
            <img className='sLaptop:w-[1.75rem] mLaptop:w-9 hover:opacity-75  hover:cursor-pointer' src={Facebook} alt="Facebook Icon" />
            <img className='sLaptop:w-[1.75rem] mLaptop:w-9 hover:opacity-75  hover:cursor-pointer' src={Linkedin} alt="LinkedIn Icon" />
          </div>
        </div>
    </section>
  )
}

export default index
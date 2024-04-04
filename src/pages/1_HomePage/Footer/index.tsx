import LogoExport from '/assets/Logo_Export.svg';
import Instagram from '/assets/InstagramIcon.svg';
import Twitter from '/assets/TwitterIcon.svg';
import Facebook from '/assets/FacebookIcon.svg';
import Linkedin from '/assets/LinkedInIcon.svg'

const index = () => {
  return (
    <section className="conic-gradient">
        {/* back to top section */}
        <div className="
        cursor-pointer
        py-4
        w-full 
        text-center 
        text-2xl
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
        <div className="min-h-[250px] w-full flex linear-gradientFooter">
          <div className='w-[60%] min-h-[250px] bg-PrimaryWhite rounded-r-[2.5rem]'>
            <div className=' largeDesktop:w-[calc(1920px*.6)] bg-red-600 min-h-[250px] float-right'>

            </div>
          </div>
          <div className='w-[40%] max-w-[calc(1920px*.4)] min-h-[250px] bg-slate-900'>

          </div>
        </div>

        {/* copyright info */}
        <div className="w-full
        mx-auto
        py-4
        px-[4.5rem]
        flex 
        justify-between 
        items-center
        max-w-[1920px] 
        ">
          <div className='flex gap-7 items-center text-PrimaryWhite'>
            <img className='w-10' src={LogoExport} alt="Logo" />
            <p className='font-medium text-xl'>@ Copyright Info 2024</p>
          </div>

          <div className='flex gap-7 items-center'>
            <img className='w-9' src={Instagram} alt="Instagram Icon" />
            <img className='w-9' src={Twitter} alt="Twitter Icon" />
            <img className='w-9' src={Facebook} alt="Facebook Icon" />
            <img className='w-9' src={Linkedin} alt="LinkedIn Icon" />
          </div>
        </div>
    </section>
  )
}

export default index
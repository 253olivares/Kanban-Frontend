import { Link } from "react-router-dom"

// 404 page that will display when their is a url error
const index = () => {
  return (
    <main className="relative w-screen h-screen bg-PrimaryWhite flex flex-col items-center justify-center overflow-hidden">
      {/* bubbles coded from left to right */}
      <div 
      // top left buble
      data-aos="fade-down"
      data-aos-duration='800'
      data-aos-delay='400'
      className="conic-gradient 
      block absolute
      w-[6rem] h-[6rem]
      mMobile:w-[8rem] mMobile:h-[8rem]
      sLaptop:w-[9rem] sLaptop:h-[9rem]
      desktop:w-[11.5rem] desktop:h-[11.5rem]
      largeDesktop:w-[12rem] largeDesktop:h-[12rem]
      top-[1.75rem] left-[1.75rem]
      sLaptop:top-[2rem] sLaptop:left-[2rem]
      largeDesktop:top-[2.5rem] largeDesktop:left-[2.5rem]
      rounded-full" />

    {/* second bubble top right */}
      <div 
      data-aos="fade-down"
      data-aos-duration='800'
      data-aos-delay='800'
      className="conic-gradient 
      block absolute
      w-[4.75rem] h-[4.75rem]
      mMobile:w-[5rem] mMobile:h-[5rem]
      sLaptop:w-[6.5rem] sLaptop:h-[6.5rem]
      desktop:w-[8.5rem] desktop:h-[8.5rem]
      largeDesktop:w-[10rem] largeDesktop:h-[10rem] 
      top-[6.5rem] right-[2.5rem]
      mMobile:right-[4rem]
      sLaptop:top-[8rem] sLaptop:right-[6rem]
      largeDesktop:top-[10rem] largeDesktop:right-[20rem]
      rounded-full" />

    {/* 3rd Bubble bottom left */}
      <div 
      data-aos="fade-up"
      data-aos-duration='800'
      data-aos-delay='600'
      className="conic-gradient 
      block absolute
      w-[4rem] h-[4rem]
      sLaptop:w-[5.5rem] sLaptop:h-[5.5rem]
      desktop:w-[6.25rem] desktop:h-[6.25rem]
      largeDesktop:w-[7rem] largeDesktop:h-[7rem] 
      bottom-[7rem] left-[3.5rem]
      mMobile:left-[8rem]
      sLaptop:bottom-[8rem] sLaptop:left-[12rem]
      largeDesktop:bottom-[18rem] largeDesktop:left-[25rem] 
      rounded-full" />

    {/* 4th Bubble Bottom right */}
      <div 
      data-aos="fade-up"
      data-aos-duration='800'
      data-aos-delay='1000'
      className="conic-gradient 
      block absolute
      w-[15rem] h-[15rem]
      sLaptop:w-[17.5rem] sLaptop:h-[17.5rem]
      desktop:w-[18.75rem] desktop:h-[18.75rem]
      largeDesktop:w-[20rem] largeDesktop:h-[20rem] 
      bottom-[-2rem] right-[-4rem]
      mMobile:right-[1rem]
      sLaptop:bottom-[-3rem] sLaptop:right-[6.5rem]
      largeDesktop:bottom-[-4rem] largeDesktop:right-[8rem]
      rounded-full" />

      <p 
      
      className="
      text-[4.25rem] mb-[.2rem]
      desktop:text-[5.75rem]
      largeDesktop:text-[7rem] largeDesktop:mb-[.25rem] 
      opacity-25 leading-tight 
      font-Ubuntu font-bold">404 PAGE</p>

      <p 
      data-aos="fade"
      data-aos-duration='800'
      data-aos-delay='1250'
      className="
      text-[1.35rem] mb-2 
      text-center px-[1rem]
      sMobile:max-w-[80%]
      sLaptop:max-w-none
      desktop:text-[1.75rem]
      largeDesktop:text-[2rem] largeDesktop:mb-3 
      text-Slate-gray font-bold">An error has occurred please return to the home page!</p>

      <Link to='/'> <span 
      data-aos="fade"
      data-aos-duration='800'
      data-aos-delay='1250'
      className="
      text-[1.6rem]
      desktop:text-[2rem]
      largeDesktop:text-[2.25rem] 
      text-blue-300 hover:text-blue-600 
      font-bold underline">HOME</span>
      
      </Link>
    </main> 
  )
}

export default index
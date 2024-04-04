import MoneySVG from '/assets/MoneyBottomSVG.svg';
import MoneySVGMobile from '/assets/MoneyMobile.svg';
import PricingCard from '../Components/PricingCard';

const index = () => {

  return (
    <section className="Pricing_Section3 overflow-x-hidden">
      <div className="Pricing_Section3 
      z-[2] 
      max-w-[1920px] 
      mx-auto
      pb-[8.75rem] 
      mMobile:pb-[10.438rem] 
      sLaptop:pb-[8.125rem] 
      mLaptop:pb-[10.75rem] 
      desktop:pb-[12rem] 
      largeDesktop:pb-[17.5rem]">
        <h1 className=' 
        w-full 
        max-w-[85%]
        sMobile:max-w-[560px] 
        mMobile:max-w-[668px] 
        sLaptop:max-w-[82%] 
        block 
        mx-auto
        text-linear-gradient
        font-bold
        text-[1.85rem] leading-[2.2rem]
        sMobile:text-[2.85rem] sMobile:leading-[3.25rem] 
        mMobile:text-[3.5rem] mMobile:leading-[3.938rem] 
        sLaptop:text-[3rem] sLaptop:leading-[3.3rem]
        mLaptop:text-[3.75rem] mLaptop:leading-[4.1rem]
        desktop:text-[4.4rem] desktop:leading-[5rem]  
        '>Affordable Pricing Plans</h1>
        <div className='flex justify-center mt-10 mMobile:mt-[3.125rem] sLaptop:mt-[4.5rem] mLaptop:mt-[5.5rem] desktop:mt-[6.5rem]'>
          <PricingCard />
        </div>
      </div>
      <img className='block sLaptop:hidden absolute bottom-0 w-full' src={MoneySVGMobile} alt="MoneySVGMobile" />
      <img className='hidden sLaptop:block absolute bottom-0 w-full ' src={MoneySVG} alt="Money SVG Background" />
    </section>
  )
}

export default index
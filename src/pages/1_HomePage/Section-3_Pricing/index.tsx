import MoneySVG from '/assets/MoneyBottomSVG.svg';
import PricingCard from '../Components/PricingCard';

const index = () => {

  return (
    <section className="Pricing_Section3">
      <div className="Pricing_Section3 z-[2] max-w-[1920px] mx-auto mLaptop:pb-[10.75rem] desktop:pb-[12rem]">
        <h1 className=' 
        w-full 
        max-w-[85%] 
        sMobile:max-w-[560px] 
        mMobile:max-w-[650px] 
        sLaptop:max-w-[82%] 
        block 
        mx-auto
        text-linear-gradient
        font-bold 
        mLaptop:text-[3.75rem] mLaptop:leading-[4.1rem]
        desktop:text-[4.4rem] desktop:leading-[5rem]  
        '>Affordable Pricing Plans</h1>
        <div className='flex justify-center mLaptop:mt-[5.5rem] desktop:mt-[6.5rem]'>
          <PricingCard />
        </div>
      </div>
      <img className='w-full max-h-[415px] absolute bottom-0' src={MoneySVG} alt="Money SVG Background" />
    </section>
  )
}

export default index
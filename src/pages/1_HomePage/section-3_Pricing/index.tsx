import { memo } from 'react';

import DollarSign from '/assets/Dollar_Sign_Icon.svg';
import MoneySVGMobile from '/assets/MoneyMobile.svg';
import PricingCard from '../components/PricingCard';
import MoneySVG from '/assets/MoneyBottomSVG.svg';


export type pricingPlansType = {
    tier:string,
    price:number,
    includes: string[]
  }

 // use memo caches our component and only updates when it detects changes have been made to the component itself
//  difference of usecallback is that usememo updates depending on the return value which is our jsx
const index = memo(() => {
  const pricingPlans: pricingPlansType[]  = [
    {
    tier: "Starter Kit", 
    price: 0, 
    includes: [
        "1 Workspace Per Account",
        "5 Boards Per Account",
        "Unlimited Lists",
        "Unlimited Tasks",
        "Max of 5 users per workspace"
        ]
    },
    {
      tier: "Business Kit",
      price: 100,
      includes: [
        "5 Workspaces Per Account",
        "20 Boards Per Account",
        "Unlimited Lists",
        "Unlimited Tasks",
        "Max of 20 users per workspace"
      ]
    },
    {
      tier: "Enterprise Kit",
      price:200,
      includes: [
        "Workspaces",
        "Boards",
        "Lists",
        "Tasks",
        "Users"
      ]
    }
  ]

  return (
    <section className="
    Pricing_Section3 
    overflow-y-hidden 
    overflow-x-hidden
    ">
      <div className="
      w-full
      relative 
      z-[2] 
      max-w-[1920px] 
      mx-auto
      ">
        {/* section name */}
        <h1 
        data-aos='fade'
        data-aos-duration='800'
        data-aos-delay='0'
        className=' 
        w-full 
        block 

        px-[6.5%]
        sLaptop:px-[8.78%]

        sLaptop:mx-auto

        text-linear-gradient

        font-bold
        text-[1.343rem] leading-[1.563rem]
        mobile:text-[1.791rem] mobile:leading-[2.063rem]
        sMobile:text-[2.864rem] sMobile:leading-[3.313rem] 
        mMobile:text-[3.438rem] mMobile:leading-[3.938rem] 

        sLaptop:text-[2.917rem] sLaptop:leading-[3.375rem]
        mLaptop:text-[3.646rem] mLaptop:leading-[4.188rem]
        desktop:text-[4.375rem] desktop:leading-[5rem]  
        '>Affordable Pricing Plans</h1>

        {/* section content */}
        <div className='
        flex
        px-[calc(50%_-_(10.376rem_/_2))]
        mobile:px-[calc(50%_-_(13.834rem_/_2))]
        sMobile:px-[calc(50%_-_(22.136rem_/_2))]
        mMobile:px-[calc(50%_-_(26.563rem_/_2))]
        sLaptop:px-0

        gap-[3.5rem]
        mMobile:gap-[6.25rem]
        sLaptop:gap-[2.604rem]
        mLaptop:gap-[3.255rem]
        desktop:gap-[3.906rem]
        sLaptop:justify-center 

        overflow-x-auto 
        no-scrollbar

        pt-[1.196rem]
        mobile:pt-[1.616rem]
        sMobile:pt-[2.573rem]
        mMobile:pt-[3.125rem] 
        sLaptop:pt-[4.417rem] 
        mLaptop:pt-[5.552rem] 
        desktop:pt-[6.688rem]
        largeDesktop:pt-[8.25rem]

        pb-[4.077rem] 
        mobile:pb-[5.449rem]
        sMobile:pb-[8.719rem]
        mMobile:pb-[10.438rem] 
        sLaptop:pb-[8.188rem] 
        mLaptop:pb-[10.25rem] 
        desktop:pb-[12.313rem] 
        largeDesktop:pb-[15.375rem]
        '>
          {
            pricingPlans.map((plan,index) => (
              <PricingCard key={index} plan={plan} position={index} />
            ))
        }
        </div>

        {/* furthers right dollar sign */}
        <img 
        data-aos='fade-down'
        data-aos-duration='800'
        data-aos-delay='200'
        className='
        hidden
        sLaptop:block 
        absolute 
        sLaptop:top-[25rem]
        mLaptop:top-[31.25rem] 
        desktop:top-[37.5rem]
        right-0
        rotate-[-17deg]
        sLaptop:w-[2.75rem]
        mLaptop:w-[3.5rem]
        desktop:w-[4.25rem]
        z-[-1]
        ' src={DollarSign} alt="Dollar Sign" />

        {/* top second dollar sign */}
        <img 
        data-aos='fade-down'
        data-aos-duration='800'
        data-aos-delay='400'
        className='
        block 
        absolute

        top-[2.063rem] right-[8.5%]
        mobile:top-[2.751rem]
        sMobile:top-[4.401rem] 
        mMobile:top-[5.281rem] 
        sLaptop:top-[4rem] sLaptop:right-[7.5rem] 
        mLaptop:top-[5rem] mLaptop:right-[9.375rem]
        desktop:top-[6rem] desktop:right-[11.563rem] 

        rotate-[23deg]

        w-[2.222rem]
        mobile:w-[2.963rem]
        sMobile:w-[4.74rem]
        mMobile:w-[5.688rem]
        sLaptop:w-[3.75rem]
        mLaptop:w-[4.688rem] 
        desktop:w-[5.625rem]
        z-[-1]
        ' src={DollarSign} alt="Dollar Sign" />

        {/* dollar sign 1 far left */}
        <img 
        data-aos='fade-down'
        data-aos-duration='800'
        data-aos-delay='600'
        className='
        block 
        absolute
        top-[14.648rem]
        mobile:top-[19.531rem]
        sMobile:top-[31.249rem]
        mMobile:top-[37.5rem] left-0
        sLaptop:top-[11.25rem] sLaptop:left-[-1.25rem]
        mLaptop:top-[14.375rem] mLaptop:left-[-1.5rem]  
        desktop:top-[17.9rem] desktop:left-[-1rem] 
        rotate-[-14.3deg]

        w-[2.222rem] 
        mobile:w-[2.963rem]
        sMobile:w-[4.74rem]
        mMobile:w-[5.688rem]
        sLaptop:w-[6.25rem]
        mLaptop:w-[8.125rem]
        desktop:w-[9.375rem]
        z-[-1]
        ' src={DollarSign} alt="Dollar Sign" />

      </div>
      <img data-aos='slide-up '
        data-aos-duration='800'
        data-aos-delay='0' className='
        block 
        sLaptop:hidden 
        absolute 
        bottom-0 
        w-full' src={MoneySVGMobile} alt="MoneySVGMobile" />
      <img data-aos='slide-up'
        data-aos-duration='800'
        data-aos-delay='0' className='
        hidden 
        sLaptop:block 
        absolute 
        bottom-0 
        w-full' src={MoneySVG} alt="Money SVG Background" />
    </section>
  )
})

export default index
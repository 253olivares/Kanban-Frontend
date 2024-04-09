import MoneySVG from '/assets/MoneyBottomSVG.svg';
import MoneySVGMobile from '/assets/MoneyMobile.svg';
import PricingCard from '../Components/PricingCard';
import DollarSign from '/assets/Dollar_Sign_Icon.svg';
import React from 'react';


export type pricingPlansType = {
    tier:string,
    price:number,
    includes: string[]
  }

 // use memo caches our component and only updates when it detects changes have been made to the component itself
//  difference of usecallback is that usememo updates depending on the return value which is our jsx
const index = React.memo(() => {
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
    <section className="Pricing_Section3 overflow-y-hidden overflow-x-hidden">
      <div className="Pricing_Section3 
      z-[2] 
      max-w-[1920px] 
      mx-auto">
        {/* section name */}
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

        {/* section content */}
        <div className='flex
        px-[calc(50%_-_(17rem_/_2))]
        sMobile:px-[calc(50%_-_(22.188rem_/_2))]
        mMobile:px-[calc(50%_-_(26.563rem_/_2))]
        sLaptop:px-0
        gap-[3.5rem]
        mMobile:gap-[6.25rem]
        sLaptop:gap-10 
        mLaptop:gap-14
        largeDesktop:gap-16
        sLaptop:justify-center 
        overflow-x-auto 
        no-scrollbar
        pt-10 
        mMobile:pt-[3.125rem] 
        sLaptop:pt-[4.5rem] 
        mLaptop:pt-[5.5rem] 
        desktop:pt-[6.5rem]
        largeDesktop:pt-[7rem]
        pb-[7rem] 
        mMobile:pb-[8rem] 
        sLaptop:pb-[8.125rem] 
        mLaptop:pb-[10.75rem] 
        desktop:pb-[12rem] 
        largeDesktop:pb-[17rem]
        '>
          {
            pricingPlans.map((plan,index) => (
              <PricingCard key={index} plan={plan} />
            ))
        }
        </div>

        {/* furthers right dollar sign */}
        <img className='
        hidden
        sLaptop:block 
        absolute 
        sLaptop:top-[25rem] sLaptop:right-[-.25rem]
        mLaptop:top-[31.25rem] mLaptop:right-[-.5rem]
        desktop:top-[37.5rem]
        rotate-[-17deg]
        sLaptop:w-[2.75rem]
        mLaptop:w-[3.5rem]
        desktop:w-[4.25rem]
        z-[-1]
        ' src={DollarSign} alt="Dollar Sign" />

        {/* top second dollar sign */}
        <img className='
        block 
        absolute
        top-[2.8rem] right-[2.125rem]
        mMobile:top-[3rem] mMobile:right-[2.75rem]
        sLaptop:top-[4rem] sLaptop:right-[7.5rem] 
        mLaptop:top-[5rem] mLaptop:right-[9.375rem]
        desktop:top-[6rem] desktop:right-[11.563rem] 
        rotate-[23deg]
        w-[3.5rem]
        sMobile:w-[4.5rem]
        mMobile:w-[5.5rem]
        sLaptop:w-[3.75rem]
        mLaptop:w-[4.688rem] 
        desktop:w-[5.625rem]
        z-[-1]
        ' src={DollarSign} alt="Dollar Sign" />

        {/* dollar sign 1 far left */}
        <img className='
        block 
        absolute
        top-[24rem]
        mMobile:top-[24rem] left-0
        sLaptop:top-[11.25rem] sLaptop:left-[-1.25rem]
        mLaptop:top-[14.375rem] mLaptop:left-[-1.5rem]  
        desktop:top-[17.9rem] desktop:left-[-1rem] 
        rotate-[-14.3deg]
        w-[4.25rem] 
        sMobile:w-[4.625rem]
        mMobile:w-[5.625rem]
        sLaptop:w-[6.25rem]
        mLaptop:w-[8.125rem]
        desktop:w-[9.375rem]
        z-[-1]
        ' src={DollarSign} alt="Dollar Sign" />

      </div>
      <img className='block sLaptop:hidden absolute bottom-0 w-full' src={MoneySVGMobile} alt="MoneySVGMobile" />
      <img className='hidden sLaptop:block absolute bottom-0 w-full ' src={MoneySVG} alt="Money SVG Background" />
    </section>
  )
})

export default index
import PlanButton from '../Components/PlanButton';
import { pricingPlansType } from '../Section-3_Pricing';

const PricingCard = ({plan}: {plan:pricingPlansType}) => {

  return (
    <div className="
    p-[.2rem]
    sMobile:p-[.25rem]
    mMobile:p-[.3rem]
    sLaptop:p-[0.25rem]
    mLaptop:p-[0.275rem]
    desktop:p-[.3rem] 
    site-borders 
    rounded-[1.25rem] 
    customShadow
    largeDesktop:scale-[.975]
    ">
        <div className="
        flex 
        flex-col
        w-[17rem]
        sMobile:w-[22.188rem]
        mMobile:w-[26.563rem]
        sLaptop:w-[17.5rem]
        mLaptop:w-[22rem] 
        desktop:w-[26.563rem] 
        rounded-2xl 
        bg-PrimaryWhite
        relative 
        ">
            <h1 className="
            px-5 pt-[1.5rem]
            sMobile:px-[1.85rem] sMobile:pt-8
            mMobile:px-9 mMobile:pt-[2rem]
            sLaptop:px-6 sLaptop:pt-[1.625rem]
            mLaptop:px-7 mLaptop:pt-[1.9rem]
            desktop:px-[2.15rem] desktop:pt-[2.625rem]
            text-[2.25rem]
            sMobile:text-[2.75rem]
            mMobile:text-[3.25rem] mMobile:leading-[4.5rem]
            sLaptop:text-4xl
            mLaptop:text-[2.813rem]
            desktop:text-[3.25rem]
            font-medium 
            text-black 
            ">{plan.tier}</h1>
            <div className="flex 
            items-center
            gap-2
            mMobile:gap-3 
            sLaptop:gap-2
            desktop:gap-3
            text-[1.5rem]
            sMobile:text-[2rem]
            mMobile:text-[2.5rem] 
            sLaptop:text-[1.625rem]
            mLaptop:text-[2.063rem]
            desktop:text-[2.5rem]
            px-5
            sMobile:px-[1.85rem] 
            mMobile:px-9 
            sLaptop:px-6 
            mLaptop:px-7
            desktop:px-[2.15rem] 
            font-medium 
            text-Slate-gray 
            mb-3
            sLaptop:my-2
            mLaptop:my-3
            ">
                <p>{plan.price === 0 ? "Free" :`$${plan.price}`}</p> <sup className="font-bold text-base mMobile:text-base sLaptop:text-xs mLaptop:text-base desktop:text-xl">/YR</sup>
            </div>
            <hr className="w-full
            h-[.3rem]
            mMobile:h-[0.375rem] 
            sLaptop:h-[.275rem]
            mLaptop:h-[0.285rem] 
            desktop:h-[0.375rem] 
            site-borders 
            bg-black 
            border-none
            max-w-[15rem]
            sMobile:max-w-[19.5rem]
            mMobile:max-w-[23.438rem] 
            sLaptop:max-w-[15.625rem]
            mLaptop:max-w-[19.531rem]
            desktop:max-w-[23.438rem] 
            mx-auto 
            rounded-md
            mb-4
            mMobile:mb-6
            sLaptop:mb-4
            mLaptop:mb-6" />
            <p className="
            text-xl
            sMobile:text-2xl
            mMobile:text-3xl  
            sLaptop:text-xl
            mLaptop:text-2xl
            desktop:text-3xl 
            font-medium
            px-5
            sMobile:px-[1.85rem] 
            mMobile:px-[2.15rem] 
            sLaptop:px-6
            mLaptop:px-7
            desktop:px-[2.15rem]
            mMobile:mb-1 
            desktop:mb-1
            ">Includes:</p>
            <div className='min-h-[15.625rem] mMobile:min-h-[18.5rem] sLaptop:min-h-[11rem] mLaptop:min-h-[14rem] desktop:min-h-[19.75rem]'>
                {
                    plan.tier === "Enterprise Kit" && 
                    <p className='
                px-5
                sMobile:px-[1.85rem] 
                mMobile:px-[2.15rem] 
                sLaptop:px-6
                mLaptop:px-7
                desktop:px-[2.15rem]
                text-lg
                sMobile:text-xl
                mMobile:text-[1.625rem]
                sLaptop:text-base
                mLaptop:text-xl
                desktop:text-[1.625rem]
                mMobile:leading-[2rem]
                text-Slate-gray
                font-medium
                mt-2
                    '> ALL UNLIMITED</p> 
                }
                <ul className="
            px-[2.6rem]
            sMobile:px-[3.15rem]
            mMobile:px-[3.75rem] 
            sLaptop:px-[2.5rem]
            mLaptop:px-[2.75rem]
            desktop:px-[3.75rem]
            text-lg
            sMobile:text-xl
            mMobile:text-[1.55rem]
            sLaptop:text-base
            mLaptop:text-xl
            desktop:text-[1.625rem]
            mMobile:leading-[2rem]
            text-Slate-gray
            list-disc 
            font-medium 
            desktop:mb-2
            ">
                {
                    plan.includes.map((plan,index)=> <li key={index} className=" my-2 mMobile:my-4 sLaptop:my-1 mLaptop:my-2 desktop:my-5">{plan}</li>
                    )

                }
                </ul>
            </div>
            {
                plan.tier === "Starter Kit" ? 
                    <div>
                        <hr className='w-full h-1 bg-[#8A8DA0]' /> 
                        <p className="
                        w-full
                        py-9
                        sMobile:py-12
                        mMobile:py-[3.75rem] 
                        sLaptop:py-9
                        mLaptop:py-[2.875rem]
                        desktop:py-[3.75rem] 
                        text-center 
                        rounded-br-2xl 
                        rounded-bl-2xl 
                        font-medium
                        text-2xl
                        sMobile:text-3xl
                        mMobile:text-4xl 
                        sLaptop:text-2xl 
                        mLaptop:text-3xl
                        desktop:text-4xl 
                        bg-SpaceBlue 
                        text-PrimaryWhite">DEFAULT PLAN</p>
                    </div>
                :
                    <div className='flex 
                    justify-center 
                    items-center 
                    mt-[.25rem] 
                    min-h-[6.5rem] 
                    sMobile:min-h-[8.25rem] 
                    mMobile:min-h-[10rem] 
                    sLaptop:min-h-[6.5rem] 
                    mLaptop:min-h-[8rem] 
                    desktop:min-h-[10rem]'>
                        <PlanButton message='Select Plan' />
                    </div>
            }
        </div>  
    </div>
  )
}

export default PricingCard
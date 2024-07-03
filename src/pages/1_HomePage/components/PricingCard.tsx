import { openCreateProfile } from '../../../reduxStore/modal/modalSlice';
import { useAppDispatch } from '../../../reduxStore/hook';

import { pricingPlansType } from '../section-3_Pricing/Pricing';
import PlanButton from '../components/PlanButton';

const PricingCard = ({plan,position}: {plan:pricingPlansType,position:number}) => {
    const dispatch = useAppDispatch();
    const delay = 250 * (position+1);
  return (
    <div 
    data-aos='fade-down'
    data-aos-duration='800'
    data-aos-delay={delay}
    className="
    site-borders 

    p-[0.126rem]
    mobile:p-[0.169rem]
    sMobile:p-[0.270rem]
    mMobile:p-[.325rem]
    sLaptop:p-[0.233rem]
    mLaptop:p-[0.291rem]
    desktop:p-[.35rem] 

    rounded-[0.488rem] 
    mobile:rounded-[0.651rem] 
    sMobile:rounded-[1.041rem] 
    mMobile:rounded-[1.25rem]
    sLaptop:rounded-[1.25rem] 
    mLaptop:rounded-[]
    desktop:rounded-[]

    customShadow

    ">
        <div className="
        flex 
        flex-col

        w-[10.376rem]
        mobile:w-[13.834rem]
        sMobile:w-[22.136rem]
        mMobile:w-[26.563rem]
        sLaptop:w-[17.5rem]
        mLaptop:w-[22rem] 
        desktop:w-[26.563rem] 

        rounded-[0.390rem]
        mobile:rounded-[0.520rem]
        sMobile:rounded-[0.833rem]
        mMobile:rounded-[1rem]
        sLaptop:rounded-2xl 

        bg-PrimaryWhite
        relative 
        overflow-hidden
        overflowFix
        ">
            <h1 className="
            px-[8.76%]
            pt-[1.039rem]
            mobile:pt-[1.386rem]
            sMobile:pt-[2.218rem]
            mMobile:pt-[2.661rem]
            sLaptop:px-6 sLaptop:pt-[1.625rem]
            mLaptop:px-7 mLaptop:pt-[1.9rem]
            desktop:px-[2.15rem] desktop:pt-[2.625rem]

            leading-tight
            text-[1.299rem]
            mobile:text-[1.733rem]
            sMobile:text-[2.772rem]
            mMobile:text-[3.326rem] 
            sLaptop:leading-normal
            sLaptop:text-4xl
            mLaptop:text-[2.813rem]
            desktop:text-[3.25rem]

            font-medium 
            text-black 
            ">{plan.tier}</h1>
            <div className="
            flex 
            items-center

            gap-[0.269rem]
            mobile:gap-[0.358rem]
            sMobile:gap-[0.573rem]
            mMobile:gap-[0.688rem]
            sLaptop:gap-2
            desktop:gap-3

            leading-none
            text-[0.976rem]
            mobile:text-[1.302rem]
            sMobile:text-[2.083rem]
            mMobile:text-[2.5rem] 
            sLaptop:leading-normal
            sLaptop:text-[1.625rem]
            mLaptop:text-[2.063rem]
            desktop:text-[2.5rem]

            px-[8.76%]
            sLaptop:px-6 
            mLaptop:px-7
            desktop:px-[2.15rem] 

            font-medium 
            text-Slate-gray 
            
            mt-[0.501rem]
            mobile:mt-[0.668rem]
            sMobile:mt-[1.081rem]
            mMobile:mt-[1.31rem]

            mb-[0.538rem]
            mobile:mb-[0.718rem]
            sMobile:mb-[1.173rem]
            mMobile:mb-[1.383rem]
            sLaptop:my-2
            mLaptop:my-3
            ">
                <p>
                    {
                        plan.price === 0 ? 
                        "Free" :
                        `$${plan.price}`
                    }
                </p> 
                <sup className="
                font-bold 
                text-[0.468rem]
                mobile:text-[0.624rem]
                sMobile:text-[0.998rem]
                mMobile:text-[1.198rem]
                sLaptop:text-xs 
                mLaptop:text-base 
                desktop:text-xl
                ">/YR</sup>
            </div>
            <hr className="
            w-full

            h-[0.146rem]
            mobile:h-[0.195rem]
            sMobile:h-[0.312rem]
            mMobile:h-[0.375rem] 
            sLaptop:h-[.275rem]
            mLaptop:h-[0.285rem] 
            desktop:h-[0.375rem] 

            site-borders 
            bg-black 
            border-none

            max-w-[9.155rem]
            mobile:max-w-[12.207rem]
            sMobile:max-w-[19.531rem]
            mMobile:max-w-[23.438rem] 
            sLaptop:max-w-[15.625rem]
            mLaptop:max-w-[19.531rem]
            desktop:max-w-[23.438rem] 

            mx-auto 

            rounded-md

            mb-[0.585rem]
            mobile:mb-[0.781rem]
            sMobile:mb-[1.249rem]
            mMobile:mb-[1.5rem]
            sLaptop:mb-4
            mLaptop:mb-6" />
            <p className="
            font-medium

            text-[0.757rem]
            mobile:text-[1.009rem]
            sMobile:text-[1.614rem]
            mMobile:text-[1.938rem] 
            sLaptop:text-xl
            mLaptop:text-2xl
            desktop:text-3xl 

            px-[8.76%]
            sLaptop:px-6
            mLaptop:px-7
            desktop:px-[2.15rem]

            desktop:mb-1
            ">Includes:</p>
            <div className='
            min-h-[7.568rem] 
            mobile:min-h-[10.091rem]
            sMobile:min-h-[16.145rem]
            mMobile:min-h-[19.375rem] 
            sLaptop:min-h-[11rem] 
            mLaptop:min-h-[14rem] 
            desktop:min-h-[19.75rem]
            '>
                {
                    plan.tier === "Enterprise Kit" && 
                    <p className='
                    px-[8.76%]
                    sLaptop:px-6
                    mLaptop:px-7
                    desktop:px-[2.15rem]

                    text-[0.634rem]
                    mobile:text-[0.846rem]
                    sMobile:text-[1.354rem]
                    mMobile:text-[1.625rem]
                    sLaptop:text-base
                    mLaptop:text-xl
                    desktop:text-[1.625rem]
                    sLaptop:Mobile:leading-[2rem]
                    
                    mt-[0.195rem]
                    mobile:mt-[0.260rem]
                    sMobile:mt-[0.416rem]
                    mMobile:mt-[.5rem]

                    text-Slate-gray
                    font-medium
                    '> ALL UNLIMITED</p> 
                }
                <ul className="

                px-[14.11%]
                sLaptop:px-[2.5rem]
                mLaptop:px-[2.75rem]
                desktop:px-[3.75rem]

                text-[0.635rem]
                mobile:text-[0.846rem]
                sMobile:text-[1.354rem]
                mMobile:text-[1.625rem]
                leading-tight
                sLaptop:text-base
                mLaptop:text-xl
                desktop:text-[1.625rem]
                text-Slate-gray
                
                list-disc 
                font-medium 
                desktop:mb-2
            ">
                {
                    plan.includes.map((plan,index)=> <li key={index} className="
                    my-[0.324rem]
                    mobile:my-[0.432rem]
                    sMobile:my-[0.692rem]
                    mMobile:my-[0.831rem]
                    sLaptop:my-1 
                    mLaptop:my-2 
                    desktop:my-5">{plan}</li>
                    )

                }
                </ul>
            </div>
            {
                plan.tier === "Starter Kit" ? 
                    <div>
                        <hr className='
                        w-full
                        h-[0.156rem]
                        mobile:h-[0.208rem]
                        sMobile:h-[0.333rem]
                        mMobile:h-[.4rem]
                        sLaptop:h-[0.249rem]
                        mLaptop:h-[0.312rem]
                        desktop:h-[0.375rem]
                        bg-[#8A8DA0]' /> 
                        <p className="
                        w-full
                        py-[1.464rem]
                        mobile:py-[1.953rem]
                        sMobile:py-[3.124rem]
                        mMobile:py-[3.75rem] 
                        sLaptop:py-[2.438rem]
                        mLaptop:py-[3.063rem]
                        desktop:py-[3.688rem] 
                        text-center 
                        
                        font-medium
                        text-[0.854rem]
                        mobile:text-[1.139rem]
                        sMobile:text-[1.823rem]
                        mMobile:text-[2.188rem]
                        sLaptop:text-[1.458rem] 
                        mLaptop:text-[1.823rem]
                        desktop:text-[2.188rem]
                        bg-SpaceBlue 
                        text-PrimaryWhite
                        ">DEFAULT PLAN</p>
                    </div>
                :
                    <div className='flex 
                    justify-center 
                    items-center 
                    min-h-[4.364rem] 
                    mobile:min-h-[5.822rem]
                    sMobile:min-h-[9.314rem] 
                    mMobile:min-h-[11.182rem] 
                    sLaptop:min-h-[7.31rem] 
                    mLaptop:min-h-[9.171rem] 
                    desktop:min-h-[11.032rem]
                    '>
                        <PlanButton fn={()=> dispatch(openCreateProfile())} message='Select Plan' />
                    </div>
            }
        </div>  
    </div>
  )
}

export default PricingCard
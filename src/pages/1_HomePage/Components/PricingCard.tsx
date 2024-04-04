import PlanCard from '../Components/PlanButton';

const PricingCard = () => {

    const Pricing = [
        {
        tier: "Starter Kit", 
        Price: 0, 
        Includes: [
            "Workspace Per Account",
            "5 Boards Per Account",
            "Unlimited Lists",
            "Unlimited Tasks",
            "Max of 5 users per workspace"
            ]
        }]

  return (
    <div className="
    mMobile:p-[.3rem]
    sLaptop:p-[0.25rem]
    mLaptop:p-[0.275rem]
    desktop:p-[.3rem] 
    site-borders 
    rounded-[1.25rem] 
    shadow-2xl">
        <div className="
        flex 
        flex-col
        sMobile:w-[22.188rem]
        mMobile:w-[26.563rem]
        sLaptop:w-[17.688rem]
        mLaptop:w-[22.188rem] 
        desktop:w-[26.563rem] 
        rounded-2xl 
        bg-PrimaryWhite
        relative 
        ">
            <h1 className="
            mMobile:px-9 mMobile:pt-[2rem]
            sLaptop:px-6 sLaptop:pt-[1.625rem]
            mLaptop:px-7 mLaptop:pt-[1.9rem]
            desktop:px-[2.15rem] desktop:pt-[2.625rem]
            text-[3.25rem]
            sLaptop:text-4xl
            mLaptop:text-[2.813rem]
            desktop:text-[3.25rem]
            font-medium 
            text-black 
            ">Starter Kit</h1>
            <div className="flex 
            items-center
            mMobile:gap-3 
            sLaptop:gap-2
            desktop:gap-3
            mMobile:text-[2.5rem] 
            sLaptop:text-[1.625rem]
            mLaptop:text-[2.063rem]
            desktop:text-[2.5rem] 
            mMobile:px-9 
            sLaptop:px-6 
            mLaptop:px-7
            desktop:px-[2.15rem] 
            font-medium 
            text-Slate-gray 
            mMobile:my-3
            sLaptop:my-2
            mLaptop:my-3
            ">
                <p>Free</p> <sup className="font-bold mMobile:text-base sLaptop:text-xs mLaptop:text-base desktop:text-xl">/YR</sup>
            </div>
            <hr className="w-full
            mMobile:h-[0.375rem] 
            sLaptop:h-[.275rem]
            mLaptop:h-[0.285rem] 
            desktop:h-[0.375rem] 
            site-borders 
            bg-black 
            border-none
            mMobile:max-w-[23.438rem] 
            sLaptop:max-w-[15.625rem]
            mLaptop:max-w-[19.531rem]
            desktop:max-w-[23.438rem] 
            mx-auto 
            rounded-md
            mMobile:mb-6
            sLaptop:mb-4
            mLaptop:mb-6" />
            <p className="
            mMobile:text-3xl  
            sLaptop:text-xl
            mLaptop:text-2xl
            desktop:text-3xl 
            font-medium
            mMobile:px-[2.15rem] 
            sLaptop:px-6
            mLaptop:px-7
            desktop:px-[2.15rem]
            mMobile:mb-1 
            desktop:mb-1
            ">Includes:</p>
            <ul className="
            mMobile:px-[3.75rem] 
            sLaptop:px-[2.5rem]
            mLaptop:px-[2.75rem]
            desktop:px-[3.75rem]
            mMobile:text-[1.625rem]
            sLaptop:text-base
            mLaptop:text-xl
            desktop:text-[1.625rem]
            leading-[2rem]
            text-Slate-gray
            list-disc 
            font-medium
            mMobile:mb-2 
            desktop:mb-4
            ">
                <li className=" mMobile:my-5 sLaptop:my-3 mLaptop:my-4 desktop:my-5">Workspace Per Account</li>
                <li className=" mMobile:my-5  sLaptop:my-3 mLaptop:my-4 desktop:my-5">5 Boards Per Account</li>
                <li className=" mMobile:my-5  sLaptop:my-3 mLaptop:my-4 desktop:my-5">Unlimited Lists</li>
                <li className=" mMobile:my-5  sLaptop:my-3 mLaptop:my-4 desktop:my-5">Unlimited Tasks</li>
                <li className=" mMobile:my-5  sLaptop:my-3 mLaptop:my-4 *:desktop:my-5">Max of 5 users per workspace</li>
            </ul>
            {/* <div className='flex justify-center items-center mt-[.25rem] mMobile:min-h-[10rem] sLaptop:min-h-[6.5rem] mLaptop:min-h-[8rem] desktop:min-h-[10rem]'>
                <PlanCard message='Select Plan' />
            </div> */}
            <div>
                <hr className='w-full h-1 bg-[#8A8DA0]' /> 
                <p className="
                w-full
                mMobile:py-[3.75rem] 
                sLaptop:py-9
                mLaptop:py-[2.875rem]
                desktop:py-[3.75rem] 
                text-center 
                rounded-br-2xl 
                rounded-bl-2xl 
                font-medium
                mMobile:text-4xl 
                sLaptop:text-2xl 
                mLaptop:text-3xl
                desktop:text-4xl 
                bg-SpaceBlue 
                text-PrimaryWhite">DEFAULT PLAN</p>
            </div>
        </div>  
    </div>
  )
}

export default PricingCard
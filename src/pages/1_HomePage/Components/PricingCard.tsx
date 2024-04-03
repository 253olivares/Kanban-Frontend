import PlanCard from '../Components/PlanButton';
import star from '/assets/Star_Icon.svg';

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
    mLaptop:p-[0.275rem]
    desktop:p-[.3rem] 
    site-borders 
    rounded-[1.25rem] 
    shadow-2xl">
        <div className="
        flex 
        flex-col 
        mLaptop:w-[22.188rem] 
        desktop:w-[26.563rem] 
        rounded-2xl 
        bg-PrimaryWhite
        relative 
        ">
            <h1 className="
            mLaptop:px-7 mLaptop:pt-[1.9rem]
            desktop:px-[2.15rem] desktop:pt-[2.625rem] 
            mLaptop:text-[2.813rem]
            desktop:text-[3.25rem]
            font-medium 
            text-black 
            ">Starter Kit</h1>
            <div className="flex 
            items-center 
            gap-3 
            mLaptop:text-[2.063rem]
            desktop:text-[2.5rem] 
            mLaptop:px-7
            desktop:px-[2.15rem] 
            font-medium 
            text-Slate-gray 
            mb-3
            ">
                <p>Free</p> <sup className="font-bold mLaptop:text-base desktop:text-xl">/YR</sup>
            </div>
            <hr className="w-full 
            mLaptop:h-[0.285rem] 
            desktop:h-[0.375rem] 
            site-borders 
            bg-black 
            border-none 
            mLaptop:max-w-[19.531rem]
            desktop:max-w-[23.438rem] 
            mx-auto 
            rounded-md 
            mLaptop:mb-6" />
            <p className=" 
            mLaptop:text-2xl
            desktop:text-3xl 
            font-medium 
            mLaptop:px-6
            desktop:px-[2.15rem] 
            desktop:mb-1
            ">Includes:</p>
            <ul className="
            mLaptop:px-[2.75rem]
            desktop:px-[3.75rem] 
            mLaptop:text-xl
            desktop:text-[1.625rem]
            leading-[2rem]
            text-Slate-gray
            list-disc 
            font-medium 8A8DA0
            ">
                <li className="mLaptop:my-4 desktop:my-5">Workspace Per Account</li>
                <li className="mLaptop:my-4 desktop:my-5">5 Boards Per Account</li>
                <li className="mLaptop:my-4 desktop:my-5">Unlimited Lists</li>
                <li className="mLaptop:my-4 desktop:my-5">Unlimited Tasks</li>
                <li className="mLaptop:my-4 *:desktop:my-5">Max of 5 users per workspace</li>
            </ul>
            {/* <div className='flex justify-center items-center mt-[.25rem] mLaptop:min-h-[8rem] desktop:min-h-[10rem]'>
                <PlanCard message='Select Plan' icon={star} />
            </div> */}
            <div>
                <hr className='w-full h-1 bg-[#8A8DA0]' /> 
                <p className="
                w-full
                mLaptop:py-[2.875rem]
                desktop:py-[3.75rem] 
                text-center 
                rounded-br-2xl 
                rounded-bl-2xl 
                font-medium 
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
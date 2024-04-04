const PlanButton = ({message}:{message:string}) => {
  return (
          <button className='
        site-borders
        text-PrimaryWhite
        mMobile:text-[2rem] 
        sLaptop:text-xl
        mLaptop:text-[1.688rem]
        desktop:text-[2rem] 
        font-bold
        mMobile:rounded-[1rem]
        sLaptop:rounded-[.8rem]
        mLaptop:rounded-[1rem]
        mMobile:p-[.2rem]
        sLaptop:p-[.15rem] 
        desktop:p-[.2rem]
        hover:shadow-xl 
        w-auto
        '>
            <span className={`
            flex 
            justify-center 
            items-center
            w-full
            bg-SpaceBlue
            active:bg-SpaceBlueSelected
            mMobile:rounded-xl
            sLaptop:rounded-[.7rem]
            mLaptop:rounded-xl
            mMobile:py-6
            sLaptop:py-4 
            mLaptop:py-5
            desktop:py-6 
            mMobile:min-w-[19.375rem]
            sLaptop:min-w-[12.813rem]
            mLaptop:min-w-[15.938rem]
            desktop:min-w-[19.375rem]

            after:content-[""] 
            after:bg-[url("/assets/Star_Icon.svg")]
            after:inline-block
            mMobile:after:w-10
            mMobile:after:h-10 
            sLaptop:after:w-6
            sLaptop:after:h-6
            mLaptop:after:w-8 
            mLaptop:after:h-8
            desktop:after:h-10 
            desktop:after:w-10 
            after:opacity-0
            hover:after:opacity-100
            after:bg-cover 
            after:bg-no-repeat
            mMobile:after:ml-[-2.5rem]
            sLaptop:after:ml-[-1.5rem]
            mLaptop:after:ml-[-2.15rem]
            desktop:after:ml-[-2.5rem]
            mMobile:hover:after:ml-[.75rem]
            sLaptop:hover:after:ml-[.6rem]
            mLaptop:hover:after:ml-[.75rem]
            after:transition-all 
            after:ease-in-out 
            after:duration-[.6s]
            `}>{message}</span>
        </button>
  )
}

export default PlanButton
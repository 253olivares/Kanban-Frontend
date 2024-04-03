

const PlanButton = ({message, icon}:{message:string, icon:string}) => {
  return (
          <button className='
        site-borders
        text-PrimaryWhite 
        mLaptop:text-[1.688rem]
        desktop:text-[2rem] 
        font-bold 
        rounded-[1rem] 
        mLaptop:p-[.15rem]
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
            rounded-xl 
            mLaptop:py-5
            desktop:py-6 
            mLaptop:min-w-[15.938rem]
            desktop:min-w-[19.375rem]

            after:contnet-[""] 
            after:bg-[url("${icon}")]
            after:inline-block
            mLaptop:after:w-8 
            mLaptop:after:h-8
            desktop:after:h-10 
            desktop:after:w-10 
            after:opacity-0
            hover:after:opacity-100
            after:bg-cover 
            after:bg-no-repeat 
            mLaptop:after:ml-[-2.15rem]
            desktop:after:ml-[-2.5rem]
            hover:after:ml-[.75rem]
            after:transition-all 
            after:ease-in-out 
            after:duration-[.6s]
            `}>{message}</span>
        </button>
  )
}

export default PlanButton
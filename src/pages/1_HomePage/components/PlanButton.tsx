const PlanButton = ({message, fn}:{message:string, fn: ()=> void}) => {
  return (
          <button tabIndex={-1} onClick={()=> fn()} className='

        site-borders
        text-PrimaryWhite

        text-[0.802rem]
        mobile:text-[1.069rem]
        sMobile:text-[1.711rem]
        mMobile:text-[2.053rem]
        sLaptop:text-xl
        mLaptop:text-[1.688rem]
        desktop:text-[2rem] 

        font-bold

        rounded-[0.390rem]
        mobile:rounded-[0.520rem]
        sMobile:rounded-[0.833rem]
        mMobile:rounded-[1rem]
        sLaptop:rounded-[.8rem]
        mLaptop:rounded-[.9rem]

        p-[0.126rem]
        mobile:p-[0.169rem]
        sMobile:p-[0.270rem]
        mMobile:p-[.325rem]
        sLaptop:p-[.15rem] 
        desktop:p-[.2rem]
        
        transition-[box-shadow] 
        ease-in-out 
        duration-300
        w-auto
        '>
            <span className={`
            flex 
            justify-center 
            items-center

            w-full
            bg-SpaceBlue
            sLaptop:active:bg-SpaceBlueSelected

            rounded-[0.292rem]
            mobile:rounded-[0.390rem]
            sMobile:rounded-[0.624rem]
            mMobile:rounded-[.75rem]
            sLaptop:rounded-[.7rem]
            mLaptop:rounded-xl

            h-[2.271rem]
            mobile:h-[3.028rem]
            sMobile:h-[4.844rem]
            mMobile:h-[5.813rem]
            sLaptop:h-auto
            sLaptop:py-4 
            mLaptop:py-5
            desktop:py-6 

            min-w-[7.568rem]
            mobile:min-w-[10.091rem]
            sMobile:min-w-[16.146rem]
            mMobile:min-w-[19.375rem]
            sLaptop:min-w-[12.813rem]
            mLaptop:min-w-[15.938rem]
            desktop:min-w-[19.375rem]

            after:content-[""] 
            after:bg-[url("/assets/Star_Icon.svg")]
            after:inline-block

            sLaptop:after:w-6
            sLaptop:after:h-6
            mLaptop:after:w-8 
            mLaptop:after:h-8
            desktop:after:h-10 
            desktop:after:w-10 

            after:opacity-0
            sLaptop:hover:after:opacity-100

            after:bg-cover 
            after:bg-no-repeat

            sLaptop:after:ml-[-1.5rem]
            mLaptop:after:ml-[-2.15rem]
            desktop:after:ml-[-2.5rem]

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
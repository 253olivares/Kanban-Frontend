
const LargerButton = ({message, fn}: {message:string, fn: ()=> void}) => {
  return (
    <button tabIndex={-1} onClick={()=> fn()} className='
              site-borders
              text-PrimaryWhite

              font-bold
              
              p-[0.089rem]
              mobile:p-[0.119rem]
              sMobile:p-[0.191rem]
              mMobile:p-[.23rem]
              sLaptop:p-[0.199rem]
              mLaptop:p-[0.249rem]
              desktop:p-[.3rem]

              rounded-[0.351rem]
              mobile:rounded-[0.468rem]
              sMobile:rounded-[0.749em]
              mMobile:rounded-[.9rem]
              sLaptop:rounded-[0.733rem]
              mLaptop:rounded-[0.916rem]
              desktop:rounded-[1.1rem]

              transition-[box-shadow] 
              ease-in-out 
              duration-300
              sLaptop:hover:customShadow'
              >
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
        mMobile:rounded-[0.75rem]
        sLaptop:rounded-[0.565rem]
        mLaptop:rounded-[0.707rem]
        desktop:rounded-[0.849rem]

        min-w-[10.742rem]
        mobile:min-w-[14.322rem]
        sMobile:min-w-[22.916rem] 
        mMobile:min-w-[27.5rem]
        sLaptop:min-w-[18.458rem] 
        mLaptop:min-w-[23.073rem]
        desktop:min-w-[27.688rem] 

        text-[0.802rem] 
        leading-[1.831rem]
        mobile:text-[1.069rem]
        mobile:leading-[2.441rem]
        sMobile:text-[1.711rem] 
        sMobile:leading-[3.906rem]
        mMobile:text-[2.053rem]
        mMobile:leading-[4.688rem]
        sLaptop:text-[1.369rem] 
        sLaptop:leading-[3.333rem]
        mLaptop:text-[1.711rem] 
        mLaptop:leading-[4.167rem]
        desktop:text-[2.053rem]
        desktop:leading-[5rem]
        
        h-[1.831rem]
        mobile:h-[2.441rem]
        sMobile:h-[3.906rem]
        mMobile:h-[4.688rem]
        sLaptop:h-[3.333rem]
        mLaptop:h-[4.167rem]
        desktop:h-[5rem]

        after:content-[''] 
        after:bg-[url('/assets/Polygon_4.svg')]
        after:inline-block
        after:h-[1.35rem] 
        after:w-5 
        desktop:after:h-[1.5rem]
        desktop:after:w-6
        after:opacity-0
        sLaptop:hover:after:opacity-100
        after:bg-cover
        after:bg-no-repeat
        after:ml-[-.75rem]
        sLaptop:hover:after:ml-[.75rem]
        after:transition-all 
        after:ease-in-out 
        after:duration-[.6s]
        `}>
            {message}
        </span>
    </button>
  )
}

export default LargerButton
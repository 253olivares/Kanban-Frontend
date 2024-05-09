import { memo } from "react"

const Button = memo(({message, fn}: {message:string, fn: ()=>void}) => {
  return (
    <button
    tabIndex={-1}
    onClick={()=>fn()}
    className='
              min-w-[10.774rem]
              mobile:ming-w-[14.365rem]
              sMobile:min-w-[22.984rem]
              mMobile:min-w-[27.581rem]
              sLaptop:min-w-[8.438rem]
              mLaptop:min-w-[10.313rem]
              desktop:min-w-[12.813rem] 

              site-borders
              text-PrimaryWhite

              text-[1.5rem]
              mobile:text-[]
              sMobile:text-[1.875rem] 
              mMobile:text-[]
              sLaptop:text-lg 
              mLaptop:text-[1.375rem]
              desktop:text-[1.688rem] 

              rounded-[.9rem]
              sLaptop:rounded-lg
              mLaptop:rounded-[0.625rem]
              desktop:rounded-xl 

              font-bold
              
              p-[]
              mobile:p-[]
              sMobile:p-[]
              mMobile:p-[.5rem]
              sLaptop:p-[2.4px] 
              mLaptop:p-[0.175rem]
              desktop:p-[.2rem]

              transition-[box-shadow] 
              ease-in-out
              duration-300
              hover:customShadow
              '>
        <span className='flex 
        justify-center 
        items-center 
        w-full 

        bg-SpaceBlue 
        active:bg-SpaceBlueSelected 

        rounded-[.8rem]
        sLaptop:rounded-md 
        mLaptop:rounded-[0.438rem] 
        desktop:rounded-lg 

        h-[2.309rem]
        mobile:h-[3.078rem]
        sMobile:h-[4.925rem]
        mMobile:h-[5.91rem]
        sLaptop:h-auto
        sLaptop:py-[.2rem] 
        desktop:py-2 

        sLaptop:px-[0.625rem] 
        mLaptop:px-3 
        desktop:px-4
        '>
            {message}
        </span>
    </button>
  )
})

export default Button
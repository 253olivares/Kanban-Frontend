import React from "react"

const Button = React.memo(({message, fn}: {message:string, fn: ()=>void}) => {
  return (
    <button
    tabIndex={-1}
    onClick={()=>fn()}
    className='
              scale-100
              min-w-[19.375rem]
              sLaptop:min-w-[8.438rem]
              mLaptop:min-w-[10.313rem]
              desktop:min-w-[12.813rem] 
              site-borders
              text-PrimaryWhite 
              text-3xl
              sLaptop:text-lg 
              mLaptop:text-[1.375rem]
              desktop:text-[1.688rem] 
              rounded-[.9rem]
              sLaptop:rounded-lg
              mLaptop:rounded-[0.625rem]
              desktop:rounded-xl 
              font-bold
              p-[.2rem]
              sLaptop:p-[2.4px] 
              mLaptop:p-[0.175rem]
              desktop:p-[.2rem]
              transition-[box-shadow] 
              ease-in-out
              duration-300
              hover:customShadow'>
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
        py-3
        sLaptop:py-1 
        desktop:py-2 
        px-4
        sLaptop:px-[0.625rem] 
        mLaptop:px-3 
        desktop:px-4'>
            {message}
        </span>
    </button>
  )
})

export default Button
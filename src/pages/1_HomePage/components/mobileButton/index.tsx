import React from "react"

const Button = React.memo(({message, fn}: {message:string, fn: ()=>void}) => {
  return (
    <button
    tabIndex={-1}
    onClick={()=>fn()}
    className='
              min-w-[20rem]
              sMobile:min-w-[22.5rem]
              mMobile:min-w-[27.5rem]
              site-borders
              text-PrimaryWhite
              text-[2rem] 
              sMobile:text-[2.625rem]
              mMobile:text-5xl
              rounded-[1.1rem]
              font-bold
              p-[.3rem]
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
        py-[.3rem]
        sMobile:py-[.5rem]
        mMobile:py-[.8rem]'>
            {message}
        </span>
    </button>
  )
})

export default Button
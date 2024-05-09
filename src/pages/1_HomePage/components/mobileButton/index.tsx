import React from "react"

const Button = React.memo(({message, fn}: {message:string, fn: ()=>void}) => {
  return (
    <button
    tabIndex={-1}
    onClick={()=>fn()}
    className='
              w-[60%]

              site-borders

              text-PrimaryWhite

              text-[1.283rem] 
              mobile:text-[1.71rem]
              sMobile:text-[2.736rem]
              mMobile:text-[3.283rem]

              rounded-[0.664rem]
              mobile:rounded-[0.885rem]
              sMobile:rounded-[1.416rem]
              mMobile:rounded-[1.7rem]

              font-bold
              
              p-[0.156rem]
              mobile:p-[0.208rem]
              sMobile:p-[0.333rem]
              mMobile:p-[.4rem]

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

        rounded-[0.586rem]
        mobile:rounded-[0.781rem]
        sMobile:rounded-[1.250rem]
        mMobile:rounded-[1.501rem]

        h-[2.309rem]
        mobile:h-[3.078rem]
        sMobile:h-[4.925rem]
        mMobile:h-[5.91rem]
        '>
            {message}
        </span>
    </button>
  )
})

export default Button
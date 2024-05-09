import { memo } from "react"

const Button = memo(({message, fn}: {message:string, fn: ()=>void}) => {
  return (
    <button
    tabIndex={-1}
    onClick={()=>fn()}
    className='
              site-borders
              text-PrimaryWhite

              sLaptop:rounded-[0.499rem]
              mLaptop:rounded-[0.624rem]
              desktop:rounded-[.75rem]

              font-bold
              
              sLaptop:p-[2.4px] 
              mLaptop:p-[0.175rem]
              desktop:p-[.25rem]

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

        sLaptop:min-w-[8.493rem]
        mLaptop:min-w-[10.616rem]
        desktop:min-w-[12.74rem] 
       
        sLaptop:rounded-[0.333rem]
        mLaptop:rounded-[0.416rem] 
        desktop:rounded-[.5rem]

        sLaptop:h-[2.027rem]
        mLaptop:h-[2.534rem]
        desktop:h-[3.04rem]

        sLaptop:text-[1.126rem] 
        mLaptop:text-[1.408rem]
        desktop:text-[1.689rem] 
        sLaptop:leading-[2.027rem]
        mLaptop:leading-[2.534rem]
        desktop:leading-[3.04rem]


        sLaptop:px-[0.625rem] 
        mLaptop:px-[0.724rem]
        desktop:px-[0.869rem]
        '>
            {message}
        </span>
    </button>
  )
})

export default Button
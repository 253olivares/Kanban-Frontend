const Button = ({message}: {message:string}) => {
  return (
    <button className='
              sLaptop:min-w-[135px]
              mLaptop:min-w-[165px]
              desktop:min-w-[205px] 
              site-borders
              text-PrimaryWhite 
              sLaptop:text-lg 
              mLaptop:text-[1.375rem]
              desktop:text-[1.688rem] 
              sLaptop:rounded-lg
              mLaptop:rounded-[0.625rem]
              desktop:rounded-xl 
              font-bold
              sLaptop:p-[2px] 
              mLaptop:p-[0.188rem]
              desktop:p-1 
              hover:customShadow'>
        <span className='flex 
        justify-center 
        items-center 
        w-full 
        bg-SpaceBlue 
        active:bg-SpaceBlueSelected 
        sLaptop:rounded-md 
        mLaptop:rounded-[0.438rem] 
        desktop:rounded-lg 
        mLaptop:py-1 
        desktop:py-2 
        sLaptop:px-[0.625rem] 
        mLaptop:px-3 
        desktop:px-4'>
            {message}
        </span>
    </button>
  )
}

export default Button
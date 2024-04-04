
const LargerButton = ({message}: {message:string}) => {
  return (
    <button className='
              site-borders
              text-PrimaryWhite
              text-[1.25rem] 
              sMobile:text-[1.75rem] 
              sLaptop:text-[1.313rem] 
              mLaptop:text-[1.5rem] 
              desktop:text-3xl 
              largeDesktop:text-4xl
              rounded-[1rem]
              font-bold
              p-[.25rem]
              sLaptop:p-[.2rem]
              hover:customShadow'>
        <span className={`
        flex  
        justify-center 
        items-center 
        w-full 
        bg-SpaceBlue 
        active:bg-SpaceBlueSelected 
        rounded-xl 
        min-w-[18rem]
        sMobile:min-w-[23.25rem] 
        sLaptop:min-w-[18.75rem] 
        mLaptop:min-w-[23rem]
        desktop:min-w-[27.5rem] 
        largeDesktop:min-w-[30rem]
        py-3 
        sLaptop:py-[.6rem] 
        desktop:py-[1rem] 
        largeDesktop:py-[1.25rem]

        after:contenet-[''] 
        after:bg-[url('/assets/Polygon_4.svg')]
        after:inline-block
        after:h-[1.35rem] 
        after:w-5 
        desktop:after:h-[1.5rem]
        desktop:after:w-6
        after:opacity-0
        hover:after:opacity-100
        after:bg-cover
        after:bg-no-repeat
        after:ml-[-.75rem]
        hover:after:ml-[.75rem]
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
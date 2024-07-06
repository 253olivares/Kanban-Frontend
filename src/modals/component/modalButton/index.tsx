
const index = ({message,fn}:{message:string,fn: ()=>void}) => {
  return (
    <button
    tabIndex={-1}
    onClick={()=>fn()}
    type="submit"
    className="
    site-borders
    text-PrimaryWhite

    font-bold

    rounded-[0.488rem]
    mobile:rounded-[0.651rem]
    sMobile:rounded-[1.041rem]
    mMobile:rounded-[1.25rem]
    sLaptop:rounded-lg
    mLaptop:rounded-[0.625rem]
    desktop:rounded-xl 

    min-w-[7.661rem]
    mobile:min-w-[10.214rem]
    sMobile:min-w-[16.343rem]
    mMobile:min-w-[19.612rem]
    sLaptop:min-w-[7.474rem]
    mLaptop:min-w-[9.342rem]
    desktop:min-w-[11.211rem]
    largeDesktop:min-w-[14.014rem]

    p-[0.136rem]
    mobile:p-[0.182rem]
    sMobile:p-[0.291rem]
    mMobile:p-[.35rem]
    sLaptop:p-[2.4px] 
    mLaptop:p-[0.175rem]
    desktop:p-[.2rem]

    transition-[box-shadow] 
    ease-in-out
    duration-300
    hover:customShadow
    "
    >
      <span
      className="
    flex justify-center
    items-center

      w-full

      bg-SpaceBlue 
      active:bg-SpaceBlueSelected 

      rounded-[0.417rem]
      mobile:rounded-[0.556rem]
      sMobile:rounded-[0.889rem]
      mMobile:rounded-[1.068rem]
      sLaptop:rounded-md 
      mLaptop:rounded-[0.438rem] 
      desktop:rounded-lg 

      sLaptop:px-[0.45rem]
      mLaptop:px-[0.578rem]
      desktop:px-[0.75rem]
      largeDesktop:px-[0.875rem]

      h-[1.642rem]
      mobile:h-[2.189rem]
      sMobile:h-[3.502rem]
      mMobile:h-[4.203rem]
      sLaptop:h-[1.833rem]
      mLaptop:h-[2.291rem]
      desktop:h-[2.75rem]
      largeDesktop:h-[3.438rem]

      text-[0.912rem]
      mobile:text-[1.216rem]
      sMobile:text-[1.946rem]
      mMobile:text-[2.335rem]
      sLaptop:text-[0.848rem]
      sLaptop:leading-[1.833rem]
      mLaptop:text-[1.059rem]
      mLaptop:leading-[2.291rem]
      desktop:text-[1.272rem]
      desktop:leading-[2.75rem]
      largeDesktop:text-[1.858rem]
      largeDesktop:leading-[3.438rem]
      "
      >
        {message}
      </span>
    </button>
  )
}

export default index
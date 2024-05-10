
const index = ({message,fn}:{message:string,fn: ()=>void}) => {
  return (
    <button
    tabIndex={-1}
    onClick={()=>fn()}
    className="
    site-borders
    text-PrimaryWhite

    min-w-[7.661rem]
    mobile:min-w-[10.214rem]
    sMobile:min-w-[16.343rem]
    mMobile:min-w-[19.612rem]
    sLaptop:min-w-[7.474rem]
    mLaptop:min-w-[9.342rem]
    desktop:min-w-[11.211rem]
    largeDesktop:min-w-[14.014rem]

    text-[0.912rem]
    mobile:text-[1.216rem]
    sMobile:text-[1.946rem]
    mMobile:text-[2.335rem]
    sLaptop:text-[0.848rem]
    mLaptop:text-[1.059rem]
    desktop:text-[1.272rem]
    largeDesktop:text-[1.858rem]

    font-bold

    p-[0.175rem]
    mobile:p-[0.234rem]
    sMobile:p-[0.374rem]
    mMobile:p-[.45rem]
    sLaptop:p-[0.159rem]
    mLaptop:p-[0.199rem]
    desktop:p-[0.24rem]
    largeDesktop:p-[.3rem]

    rounded-[0.585rem]
    mobile:rounded-[0.781rem]
    sMobile:rounded-[1.249rem]
    mMobile:rounded-[1.5rem]
    sLaptop:rounded-[0.612rem]
    mLaptop:rounded-[0.766rem]
    desktop:rounded-[0.92rem]
    largeDesktop:rounded-[1.15rem]

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

      rounded-[0.417rem]
      mobile:rounded-[0.556rem]
      sMobile:rounded-[0.889rem]
      mMobile:rounded-[1.068rem]
      sLaptop:rounded-[0.533rem]
      mLaptop:rounded-[0.666rem]
      desktop:rounded-[0.8rem]
      largeDesktop:rounded-[1rem]
      "
      >
        {message}
      </span>
    </button>
  )
}

export default index

const saveButton = ({fn}:{fn:()=>void}) => {
  return (
    <button
    onClick={()=>fn()}
    className="

    w-full
    sLaptop:w-auto

    mt-[1.953rem]
    mobile:mt-[2.604rem]
    sMobile:mt-[4.166rem]
    mMobile:mt-[5rem]
    mb-[3.428rem]
    mobile:mb-[4.57rem]
    sMobile:mb-[7.312rem]
    mMobile:mb-[8.776rem]
    sLaptop:my-0

    h-[2.021rem]
    mobile:h-[2.695rem]
    sMobile:h-[4.312rem]
    mMobile:h-[5.175rem]
    sLaptop:h-[1.84rem]
    mLaptop:h-[2.3rem]
    desktop:h-[2.76rem]
    largeDesktop:h-[3.45rem]

    sLaptop:px-[1.399rem]
    mLaptop:px-[1.749rem]
    desktop:px-[2.1rem]
    largeDesktop:px-[2.625rem]

    bg-SelectorBlue
    opacity-100
    text-white

    sLaptop:bg-[#D9D9D9]
    sLaptop:opacity-75
    sLaptop:hover:bg-SelectorBlue
    sLaptop:hover:opacity-100
    sLaptop:hover:text-white

    text-[1.010rem]
    mobile:text-[1.347rem]
    sMobile:text-[2.156rem]
    mMobile:text-[2.588rem]
    sLaptop:text-[0.92rem]
    sLaptop:leading-[1.84rem]
    mLaptop:text-[1.15rem]
    mLaptop:leading-[2.3rem]
    desktop:text-[1.38rem]
    desktop:leading-[2.76rem]
    largeDesktop:text-[1.725rem]
    largeDesktop:leading-[3.45rem]

    font-bold

    rounded-[0.263rem]
    mobile:rounded-[0.351rem]
    sMobile:rounded-[0.562rem]
    mMobile:rounded-[0.675rem]
    sLaptop:rounded-[0.24rem]
    mLaptop:rounded-[0.3rem]
    desktop:rounded-[0.36rem]
    largeDesktop:rounded-[0.45rem]

    transition-all
    duration-500
    "
    >
        Save
    </button>
  )
}

export default saveButton
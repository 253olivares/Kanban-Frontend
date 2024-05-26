import { useState } from "react"
import arrow from '/assets/Polygon_4.svg'

const index = () => {

  // @ts-ignore
    const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="
    flex flex-row

    linear-gradientFooter2

    items-center

    sLaptop:gap-[0.900rem]
    mLaptop:gap-[1.125rem]
    desktop:gap-[1.350rem]
    largeDesktop:gap-[1.688rem]

    rounded-[0.218rem]
    mobile:rounded-[0.291rem]
    sMobile:rounded-[0.465rem]
    mMobile:rounded-[0.558rem]
    sLaptop:rounded-[0.297rem]
    mLaptop:rounded-[0.371rem]
    desktop:rounded-[0.445rem]
    largeDesktop:rounded-[0.557rem]

    py-[0.244rem]
    mobile:py-[0.325rem]
    sMobile:py-[0.520rem]
    mMobile:py-[0.625rem]
    sLaptop:py-[0.333rem]
    mLaptop:py-[0.416rem]
    desktop:py-[0.5rem]
    largeDesktop:py-[0.625rem]

    px-[1.025rem]
    mobile:px-[1.367rem]
    sMobile:px-[2.187rem]
    mMobile:px-[2.625rem]
    sLaptop:px-[0.500rem]
    mLaptop:px-[0.625rem]
    desktop:px-[0.750rem]
    largeDesktop:px-[0.938rem]

    sLaptop:hover:cursor-pointer
    ">
        <span className="
        text-[0.763rem]
        mobile:text-[1.017rem]
        sMobile:text-[1.628rem]
        mMobile:text-[1.953rem]
        sLaptop:text-[1.039rem]
        mLaptop:text-[1.299rem]
        desktop:text-[1.559rem]
        largeDesktop:text-[1.949rem]

        leading-none

        font-bold

        text-PrimaryWhite
        ">Filter List</span>
        <img className="
        hidden
        sLaptop:block
        sLaptop:w-[0.933rem]
        mLaptop:w-[1.166rem]
        desktop:w-[1.4rem]
        largeDesktop:w-[1.75rem]

        rotate-90

        " src={arrow} alt="Arrow" />
    </div>
  )
}

export default index
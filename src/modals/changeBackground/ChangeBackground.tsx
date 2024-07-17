import { memo } from "react"
import ChangeBackgroundHead from "./components/ChangeBackgroundHead"


const ChangeBackground = memo(() => {
  return (
    <div className="

    hidden
    sLaptop:block
    
    bg-SpaceBlue

    sLaptop:rounded-[0.471rem] 
    mLaptop:rounded-[0.588rem]
    desktop:rounded-[0.706rem]
    largeDesktop:rounded-[0.883rem]

    px-[5%]

    sLaptop:py-[1.066rem]
    mLaptop:py-[1.333rem]
    desktop:py-[1.6rem]
    largeDesktop:py-[2rem]

    text-PrimaryWhite

    sLaptop:w-[29.33rem]
    mLaptop:w-[36.66rem]
    desktop:w-[44rem]
    largeDesktop:w-[55rem]

    ">
        <ChangeBackgroundHead />
    </div>
  )
})

export default ChangeBackground
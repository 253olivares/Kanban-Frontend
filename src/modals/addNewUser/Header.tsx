import { memo } from "react"

const Header = memo(() => {
  return (
    <h1 className="
    sLaptop:text-[1.333rem]
    mLaptop:text-[1.666rem]
    desktop:text-[2rem]
    largeDesktop:text-[2.5rem]

    leading-none

    font-medium

    ">Add New User:</h1>
  )
})

export default Header
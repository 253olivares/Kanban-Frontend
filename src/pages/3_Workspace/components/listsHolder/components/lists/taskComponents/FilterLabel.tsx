

const FilterLabel = ({
    // @ts-ignore
    filter,
    color
} : {
    filter:string,
    color:string
}) => {
  return (
    <div className={`
    block

    w-[30%]

    ${color}

    h-[0.507rem]
    mobile:h-[0.677rem]
    sMobile:h-[1.083rem]
    mMobile:h-[1.3rem]

    sLaptop:h-[0.613rem]
    mLaptop:h-[0.766rem]
    desktop:h-[0.92rem]
    largeDesktop:h-[1.15rem]

    rounded-[0.052rem]
    mobile:rounded-[0.135rem]
    sMobile:rounded-[0.260rem]
    mMobile:rounded-[0.313rem]

    sLaptop:rounded-[0.056rem]
    mLaptop:rounded-[0.106rem]
    desktop:rounded-[0.16rem]
    largeDesktop:rounded-[.2rem]

    `}>

    </div>
  )
}

export default FilterLabel
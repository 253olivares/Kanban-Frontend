

const FilterLabel = ({
    // @ts-ignore
    filter,
    color
} : {
    filter:string,
    color:string
}) => {
  return (
    <div 
    className={`
    block

    w-[30%]
    h-full

    ${color}

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
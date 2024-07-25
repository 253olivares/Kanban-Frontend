

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

    sLaptop:h-[0.613rem]
    mLaptop:h-[0.766rem]
    desktop:h-[0.92rem]
    largeDesktop:h-[1.15rem]

    sLaptop:rounded-[0.056rem]
    mLaptop:rounded-[0.106rem]
    desktop:rounded-[0.16rem]
    largeDesktop:rounded-[.2rem]

    `}>

    </div>
  )
}

export default FilterLabel
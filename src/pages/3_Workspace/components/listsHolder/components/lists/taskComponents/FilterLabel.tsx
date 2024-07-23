

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

    sLaptop:h-[]
    mLaptop:h-[]
    desktop:h-[]
    largeDesktop:h-[1.15rem]

    rounded-[.2rem]

    `}>

    </div>
  )
}

export default FilterLabel
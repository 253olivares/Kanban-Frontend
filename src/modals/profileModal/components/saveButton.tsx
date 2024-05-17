
const saveButton = ({fn}:{fn:()=>void}) => {
  return (
    <button
    onClick={()=>fn()}
    className="
    sLaptop:h-[1.84rem]
    mLaptop:h-[2.3rem]
    desktop:h-[2.76rem]
    largeDesktop:h-[3.45rem]

    sLaptop:px-[1.399rem]
    mLaptop:px-[1.749rem]
    desktop:px-[2.1rem]
    largeDesktop:px-[2.625rem]

    bg-[#D9D9D9]
    opacity-75
    hover:bg-SelectorBlue
    hover:opacity-100
    hover:text-white

    sLaptop:text-[0.92rem]
    sLaptop:leading-[1.84rem]
    mLaptop:text-[1.15rem]
    mLaptop:leading-[2.3rem]
    desktop:text-[1.38rem]
    desktop:leading-[2.76rem]
    largeDesktop:text-[1.725rem]
    largeDesktop:leading-[3.45rem]

    font-bold

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
import { memo, useState } from "react"

const BoardNameInput = memo(({boardName}:{boardName:string}) => {

  const [boardNameState, setBoardNameState] = useState<string>(boardName);

  return (
    <input 

    className="
    bg-transparent
    text-PrimaryWhite

    focus:outline-none

    sLaptop:w-[14.999rem]
    mLaptop:w-[18.749rem]
    desktop:w-[22.5rem]
    largeDesktop:w-[28.125rem]
    
    font-bold

    sLaptop:text-[1.066rem]
    mLaptop:text-[1.333rem]
    desktop:text-[1.6rem]
    largeDesktop:text-[2rem]

    px-[2%]

    sLaptop:py-[0.233rem]
    mLaptop:py-[0.291rem]
    desktop:py-[.35rem]
    largeDesktop:py-[0.437rem]

    sLaptop:rounded-[0.299rem]
    mLaptop:rounded-[0.374rem]
    desktop:rounded-[0.45rem]
    largeDesktop:rounded-[0.562rem]

    text-ellipsis
    overflow-hidden

    hover:opacity-75
    hover:cursor-pointer

    hover:ring-SelectorBlue
    hover:ring-[3px]
    hover:glass-gradient

    focus:ring-SelectorBlue
    focus:ring-[3px]
    focus:glass-gradient
    "

    type="text" 
    value={boardNameState}
    onChange={(e)=> setBoardNameState(e.target.value)}
    />
  )
})

export default BoardNameInput
import { board } from "../../../../reduxStore/boards/boardsSlice"

const BoardNameInput = ({board}:{board:board}) => {
  

  return (
    <input 

    className="
    bg-black
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

    text-ellipsis
    overflow-hidden
    "

    type="text" 
    value={board.name}
    />
  )
}

export default BoardNameInput
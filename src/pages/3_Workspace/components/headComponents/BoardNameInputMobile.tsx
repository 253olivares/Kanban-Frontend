import { memo } from "react"


const BoardNameInputMobile = memo(({boardName}:{boardName:string}) => {
  return (
    <h1 className="
    block
    sLaptop:hidden

    font-bold

    text-PrimaryWhite
    leading-none

    hover:cursor-pointer

    ">{boardName}</h1>
  )
})

export default BoardNameInputMobile
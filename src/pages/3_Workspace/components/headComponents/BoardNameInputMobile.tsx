import { memo } from "react"
import { useAppDispatch } from "../../../../reduxStore/hook"
import { changeMobileBoardNameState } from "../../../../reduxStore/modal/modalSlice";


const BoardNameInputMobile = memo(({boardName}:{boardName:string}) => {
  const dispatch = useAppDispatch();
  return (
    <h1 
    onClick={()=>dispatch(changeMobileBoardNameState(true))}
    className="
    block
    sLaptop:hidden

    font-bold

    text-[0.982rem]
    mobile:text-[1.310rem]
    sMobile:text-[2.096rem]
    mMobile:text-[2.516rem]

    text-PrimaryWhite
    leading-none

    hover:cursor-pointer

    ">{boardName}</h1>
  )
})

export default BoardNameInputMobile
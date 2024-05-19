import { useAppDispatch } from "../../../reduxStore/hook"
import { openCloseCroppingTool } from "../../../reduxStore/modal/modalSlice";

const cancelButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button
    className="
  text-white
    bg-[rgba(255,148,148,1)]

    opacity-50
    hover:opacity-100   

    sLaptop:h-[1.84rem]
    mLaptop:h-[2.3rem]
    desktop:h-[2.76rem]
    largeDesktop:h-[3.45rem]

    sLaptop:px-[1.399rem]
    mLaptop:px-[1.749rem]
    desktop:px-[2.1rem]
    largeDesktop:px-[2.625rem]

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
    duration-500"

   onClick={()=> dispatch(openCloseCroppingTool())}>
        Cancel
    </button>
  )
}

export default cancelButton
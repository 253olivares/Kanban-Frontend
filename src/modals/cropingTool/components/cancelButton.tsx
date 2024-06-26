import { useAppDispatch } from "../../../reduxStore/hook"
import { openCloseCroppingTool } from "../../../reduxStore/modal/modalSlice";

const cancelButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button
    className="
  text-white
    bg-[#F9453E]
    sLaptop:opacity-50
    sLaptop:hover:opacity-100   
    croppingToolButton
    "

   onClick={()=> dispatch(openCloseCroppingTool())}>
        Cancel
    </button>
  )
}

export default cancelButton
import { useAppDispatch } from "../../../reduxStore/hook"
import { openCloseCroppingTool } from "../../../reduxStore/modal/modalSlice";

const cancelButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button
    className="
  text-white
    bg-[rgba(255,148,148,1)]
    croppingToolButton
    "

   onClick={()=> dispatch(openCloseCroppingTool())}>
        Cancel
    </button>
  )
}

export default cancelButton
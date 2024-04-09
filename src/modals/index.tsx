import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useAppDispatch } from "../reduxStore/hook";
import { closeModal } from "./modalSlice";
import { useAppSelector } from "../reduxStore/hook";
import { getModalType } from "./modalSlice";

// this is our modal container that will show and hide modals based on what is suppose to be showing
const index = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(getModalType);
  console.log(modal);
    // react hook by ui.dev that will over write the body overflow property
    // The hook as a use effect that overwrites our property and save its previous value then when the component unmounts it 
    // sets the overflow back to its original value
    useLockBodyScroll();

  return (
    <div className=" fixed z-20 top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="w-56 h-32 bg-PrimaryWhite">

      </div>
      <div onClick={()=> dispatch(closeModal())} className="absolute z-[-1] w-full h-full bg-[rgba(0,0,0,0.75)]">
      </div>
    </div>
  )
}

export default index
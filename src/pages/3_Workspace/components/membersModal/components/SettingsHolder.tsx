import { memo } from "react";
import { useAppDispatch } from "../../../../../reduxStore/hook"
import { setSettingModal } from "../../../../../reduxStore/modal/modalSlice";
import  x_Mark from '/assets/Add_New_Workspace.svg';


const SettingsHolder = memo(() => {
    const dispatch = useAppDispatch();
  return (
    <div className="
        w-full
        flex
        justify-between
        items-center
        ">
            <h1 className="
              font-medium

              text-[1.406rem]
              mobile:text-[1.875rem]
              sMobile:text-[3rem]
              mMobile:text-[3.6rem]
              leading-none

              text-PrimaryWhite
            ">
               Settings
            </h1>
            <img 
            onClick={()=> dispatch(setSettingModal(false))}
            className="
              rotate-45

              h-[1.525rem]
              mobile:h-[2.034rem]
              sMobile:h-[3.254rem]
              mMobile:h-[3.906rem]

              cursor-pointer

            " src={x_Mark} alt="X mark icons" />
        </div>
  )
})

export default SettingsHolder
import { motion } from "framer-motion";
import  x_Mark from '/assets/Add_New_Workspace.svg';
import { useAppDispatch } from "../../../../../reduxStore/hook";
import { setSettingModal } from "../../../../../reduxStore/modal/modalSlice";


const SettingsModal = () => {

    const dispatch = useAppDispatch();

  return (
    <motion.div 
    initial={{
        y:25
    }}
    animate={{
        y:0
    }}
    exit={{
        y:25
    }}
    transition={{
        duration:.3
    }}
    className="
    w-full
    h-full
    
    bg-SpaceBlue

    px-[0.915rem]
    mobile:px-[1.220rem]
    sMobile:px-[1.953rem]
    mMobile:px-[2.344rem]

    py-[1.196rem]
    mobile:py-[1.595rem]
    sMobile:py-[2.552rem]
    mMobile:py-[3.063rem]

    ">
        <div className="
        w-full
        flex
        justify-between
        items-center
        ">
            <h1 className="
              font-medium

              text-[1.335rem]
              mobile:text-[1.780rem]
              sMobile:text-[2.848rem]
              mMobile:text-[3.418rem]
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

            " src={x_Mark} alt="X mark icons" />
        </div>
    </motion.div>
  )
}

export default SettingsModal
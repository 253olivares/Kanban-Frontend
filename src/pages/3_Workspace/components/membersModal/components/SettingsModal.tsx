import { motion } from "framer-motion";
import SettingsHolder from "./SettingsHolder";
import SettingsMobileModalOptions from "./SettingsMobileModalOptions";


const SettingsModal = () => {

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

    flex
    flex-col

    gap-[1.172rem]
    mobile:gap-[1.562rem]
    sMobile:gap-[2.5rem]
    mMobile:gap-[3rem]

    ">
      {/* userHistory  */}

      {/*  */}
        <SettingsHolder /> 
        <SettingsMobileModalOptions />
    </motion.div>
  )
}

export default SettingsModal
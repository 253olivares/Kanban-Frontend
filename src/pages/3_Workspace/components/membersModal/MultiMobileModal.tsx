import { motion } from "framer-motion";
import { memo, useContext } from "react";
import { AppContext } from "../../../appRefContext";
import MembersModal from "./components/MembersModal";
import { Params } from "react-router-dom";
import SettingsModal from "./components/SettingsModal";

const MulitMobileModal = memo(({params,memberModal,settingsModal}: {params:Readonly<Params<string>> ,memberModal:boolean,settingsModal:boolean}) => {

  const appContext = useContext(AppContext);
  const {mobileMembersRef} = appContext!;

  return (
    <motion.div 

    ref={mobileMembersRef}

    initial={{ 
      opacity: 0 
    }}
    animate={{ 
      opacity: 1 
    }}
    exit={{ 
      opacity: 0 
    }}
    className={`
    absolute
    z-[10]
    top-0
    left-0
    w-dvw
    h-dvh

    overflow-x-hidden
    overflow-y-auto
    no-scrollbar
    ${memberModal && 'bg-[rgba(0,0,0,0.75)]'}

    flex
    justify-center
    items-center

    sLaptop:hidden
    `}>
      {
        memberModal ?
        <MembersModal paramsBoardId = {params?.workspaceId || "" } /> : ''
      }
      {
        settingsModal? 
        <SettingsModal/> : ''
      }
    </motion.div>
  )
})

export default MulitMobileModal
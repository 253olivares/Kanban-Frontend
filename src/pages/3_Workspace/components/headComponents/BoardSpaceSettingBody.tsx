import { memo, useContext, useLayoutEffect } from "react"
import { useAppDispatch } from "../../../../reduxStore/hook"
import { AppContext } from "../../../appRefContext";
import { motion } from 'framer-motion'
import { setSettingModal } from "../../../../reduxStore/modal/modalSlice";
import DeleteBoard from "./settingsComponents/DeleteBoard";
import ChangeBackground from "./settingsComponents/ChangeBackground";
import ViewUsers from "./settingsComponents/ViewUsers";
import AddNewUser from "./settingsComponents/AddNewUser";

const BoardSpaceSettingBody = memo(() => {

    const dispatch = useAppDispatch();

    const appContext = useContext(AppContext);
    const {settingsBodyRef, settingsRef, mobileMembersRef} = appContext!;

    useLayoutEffect(()=> {
        const checkClick = (e:MouseEvent | TouchEvent) => {
            const element = e.target as Node;

            if(settingsBodyRef.current && !settingsBodyRef.current.contains(element) &&
            settingsRef.current && !settingsRef.current.contains(element)
            || !settingsBodyRef.current
            ) {
              if(!mobileMembersRef.current?.contains(element))dispatch (setSettingModal(false))
            } 

        }   
        window.addEventListener('click',checkClick,true);
       return () => {
        window.removeEventListener('click',checkClick,true);
       }
    },[])

  return (
    <motion.div 
    initial={{ 
        y:'-15%',
        opacity: 0 
      }}
      animate={{ 
        y:0,
        opacity: 1 
      }}
      exit={{ 
        y:'-15%',
        opacity: 0 
      }}
      transition={{
        ease: "easeInOut",
        duration:.3
      }}
    ref={settingsBodyRef} 
    className={` boardSettingsBody `}>
      
      <ArrowHead />
      
      <div className="
      flex
      flex-col
      w-full
      
      ">
      <ViewUsers />

      <AddNewUser />

      <ChangeBackground />
      </div>

      <DeleteBoard />
    </motion.div>
  )
})

const ArrowHead = memo(()=> {

  return <div 
  className=" boardSettingsBodyArrow " />
})

export default BoardSpaceSettingBody
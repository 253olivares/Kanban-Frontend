import { memo, useContext, useLayoutEffect } from "react"
import { useAppDispatch } from "../../../../reduxStore/hook"
import { AppContext } from "../../../appRefContext/appRefContext";
import { motion } from 'framer-motion'
import { openAddNewUser, openChangeBackground, setSettingModal } from "../../../../reduxStore/modal/modalSlice";
import DeleteBoard from "./settingsComponents/DeleteBoard";

const BoardSpaceSettingBody = memo(() => {

    const dispatch = useAppDispatch();

    const appContext = useContext(AppContext);
    const {settingsBodyRef, settingsRef, mobileMembersRef, modalRef, mobileAddNewWorkspace} = appContext!;

    const adminTools = {
      "Add New User": ()=>dispatch(openAddNewUser()) ,
      "Change Background": ()=> dispatch(openChangeBackground()),
    }

    useLayoutEffect(()=> {
        const checkClick = (e:MouseEvent | TouchEvent) => {
            const element = e.target as Node;

            if(settingsBodyRef.current && !settingsBodyRef.current.contains(element) &&
            settingsRef.current && !settingsRef.current.contains(element)
            || !settingsBodyRef.current
            ) {
              if(!mobileMembersRef.current?.contains(element) && 
              !modalRef.current?.contains(element) &&
              !mobileAddNewWorkspace.current?.contains(element)
              )
                dispatch (setSettingModal(false))
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
        {
          Object.entries(adminTools).map(([k,v],_)=>
            <AdminTools key={`desktop_${k}`} buttonName={k} buttonFunction={v} />
          )
        }
      </div>

      <DeleteBoard />
    </motion.div>
  )
})

const AdminTools = memo(({buttonName,buttonFunction}:
  {
    buttonName:string,
    buttonFunction:(()=>void)
  })=> {
    return <div
    className="settingsItems"
    onClick={buttonFunction}
    >
      {buttonName}
    </div>
})

const ArrowHead = memo(()=> {

  return <div 
  className=" boardSettingsBodyArrow " />
})

export default BoardSpaceSettingBody
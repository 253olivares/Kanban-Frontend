import { useContext, useEffect } from "react"
import { AppContext } from "../../../appRefContext"
import { useAppDispatch } from "../../../../reduxStore/hook";
import { changeModal } from "../../../../reduxStore/workspace/workspace";
import { motion } from "framer-motion";

import TextInput from './textBox';

const index = () => {
  const dispatch = useAppDispatch();

  // import a ref so we can track if the user clicks inside and what is clicked
  const appContext = useContext(AppContext);
  const {openSpaceModal,newWorkspaceModal, newWorkspaceModalClose, mobileAddNewWorkspace} = appContext!;

  // this will create a listener which will watch to see if user clicks outside our modal
  // if they do close our modal
  // otherwise keep it open
  useEffect(()=>{
    const checkClick = (e:MouseEvent | TouchEvent):void => {
      const element = e.target as Node;
      
      // a double check for instances where the button is spammed
      // what its ment to do is if a a listener persist afer our modal closes
      // then remove our listener
      // helps solve some bugs we run into
      if(!newWorkspaceModal.current) window.removeEventListener('click',checkClick,true);

      // 2 conditionals 
      if(openSpaceModal.current && 
        newWorkspaceModal.current && 
        !newWorkspaceModal.current.contains(element) &&
        !openSpaceModal.current.contains(element) ||
        newWorkspaceModalClose.current && 
        newWorkspaceModalClose.current.contains(element)
        ){
          if(!mobileAddNewWorkspace.current?.contains(element)){
            window.removeEventListener('click',checkClick,true);
            dispatch(changeModal(false));
          }
        }
            
    }

    
    window.addEventListener('click',checkClick,true);

    return ()=> {
      window.removeEventListener('click',checkClick,true);
    }
  },[])

  return (
    // this will be our state for added new workspaces
    <motion.div
    initial={{ 
      opacity: 0, 
      scale: .9
    }}
    animate={{ 
      opacity: 1,
      scale:1 
    }}
    exit={{ 
      opacity: 0 ,
      scale: .9
    }}
    ref={newWorkspaceModal}
    className={`
    speechBubbleCss
    shadow-2xl
    `}>
      <div className="
      flex
      flex-col

      bg-SpaceBlue

      sLaptop:rounded-[0.541rem]
      mLaptop:rounded-[0.677rem]
      desktop:rounded-[0.812rem]
      largeDesktop:rounded-[1.016rem]
      4k:rounded-[1.354rem]

      sLaptop:w-[13.33rem]
      mLaptop:w-[16.66rem]
      desktop:w-[20rem]
      largeDesktop:w-[25rem]
      4k:w-[33.333rem]

      ring-[2.25px]
      ring-SelectorBlue 
      ">
        {/* h1 and close icon */}
        <div className="
        w-full

        flex
        flex-row

        items-center

        justify-between

        sLaptop:pt-[0.500rem]
        mLaptop:pt-[0.625rem]
        desktop:pt-[0.750rem]
        largeDesktop:pt-[0.938rem]
        4k:pt-[1.250rem]

        sLaptop:pb-[0.333rem]
        mLaptop:pb-[0.416rem]
        desktop:pb-[0.5rem]
        largeDesktop:pb-[0.625rem]
        4k:pb-[0.833rem]

        sLaptop:px-[0.533rem]
        mLaptop:px-[0.416rem]
        desktop:px-[.8rem]
        largeDesktop:px-[1rem]
        4k:px-[1.333rem]
        ">
          <label htmlFor="newWorkSpaceInput" className="
          sLaptop:text-[0.799rem]
          mLaptop:text-[0.999rem]
          desktop:text-[1.2rem]
          largeDesktop:text-[1.5rem]
          4k:text-[1.999rem]

          font-medium
          leading-none
          text-white
          ">New Workspace Name:</label>
          <div
          ref={newWorkspaceModalClose}
          className="
          closeMark
          " />
        </div>
        {/* our input */}
        <div className="
        w-full
        flex 
        flex-row
        relative
        z-[10]

        sLaptop:px-[0.533rem]
        mLaptop:px-[0.666rem]
        desktop:px-[0.8rem]
        largeDesktop:px-[1rem]
        4k:px-[1.333rem]
        
        sLaptop:pb-[0.500rem]
        mLaptop:pb-[0.625rem]
        desktop:pb-[0.750rem]
        largeDesktop:pb-[0.938rem]
        4k:pb-[1.250rem]

        ">  
          <TextInput />
        </div>
      </div>
    </motion.div> 
  )
}

export default index
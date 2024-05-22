import { getCroppingTool, getModalType } from "../reduxStore/modal/modalSlice";
import { useAppDispatch,useAppSelector  } from "../reduxStore/hook";
import { closeModal } from "../reduxStore/modal/modalSlice";

import {motion,AnimatePresence} from 'framer-motion';
import { AppContext } from "../pages/appRefContext";
import { memo, useContext } from "react";

import CreateProfileModal from './createProfileModal';
import ProfileModal from './profileModal';
import LoginModal from './loginModal';

// this is our modal container that will show and hide modals based on what is suppose to be showing
const index = memo(() => {
  
  // create a dispatch function from our redux store to trigger our reducers
  const dispatch = useAppDispatch();

  const appContext = useContext(AppContext);
  const {modalRef} = appContext!;

  // get the modal we want to bring up
  const modal = useAppSelector(getModalType);
  const croppingTool = useAppSelector(getCroppingTool);


  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration:.3
    }}
    ref={modalRef}
    className="
    fixed
    z-[15]
    top-0 
    left-0 

    w-dvw
    h-dvh

    overflow-x-hidden
    overflow-y-auto

    no-scrollbar

    sLaptop:flex 
    sLaptop:justify-center 
    sLaptop:items-center">
      
      <AnimatePresence>
        {modal == 'createProfile' && <CreateProfileModal />}
        {modal == 'logIn' && <LoginModal />}
        {modal == 'profile' && <ProfileModal />}
      </AnimatePresence>

      <div onClick={()=> {
        if(!croppingTool){
          dispatch(closeModal())
        }
      }} 
      className="
      hidden 
      sLaptop:block 
      sLaptop:absolute
      sLaptop:z-[-1]
      sLaptop:w-full 
      sLaptop:h-full
      sLaptop:bg-[rgba(0,0,0,0.75)]" />
    </motion.div>
  )
})

export default index;
import { useAppDispatch,useAppSelector  } from "../reduxStore/hook";
import { getModalType } from "../reduxStore/modal/modalSlice";
import { closeModal } from "../reduxStore/modal/modalSlice";

import {motion,AnimatePresence} from 'framer-motion';
import { memo } from "react";

import CreateProfileModal from './createProfileModal'
import ProfileModal from './profileModal';
import LoginModal from './loginModal';

// this is our modal container that will show and hide modals based on what is suppose to be showing
const index = memo(() => {
  
  // create a dispatch function from our redux store to trigger our reducers
  const dispatch = useAppDispatch();

  // get the modal we want to bring up
  const modal = useAppSelector(getModalType);

 

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration:.3
    }}
    className="
    absolute
    z-20 

    top-0 
    left-0 
    
    w-screen 
    h-screen

    overflow-x-hidden
    overflow-y-auto

    sLaptop:flex 
    sLaptop:justify-center 
    sLaptop:items-center">
      <AnimatePresence>
        {modal == 'createProfile' && <CreateProfileModal />}
        {modal == 'logIn' && <LoginModal />}
        {modal == 'profile' && <ProfileModal />}
      </AnimatePresence>
      <div onClick={()=> dispatch(closeModal())} className="
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
import {memo, lazy, useLayoutEffect, useContext} from 'react';
import { AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";

import { closeModal, getMobileModal, getModalStatus } from '../../reduxStore/modal/modalSlice';
import { checkRemembered, getUser } from '../../reduxStore/users/userSlice';
import { useAppDispatch, useAppSelector } from '../../reduxStore/hook';
import { AppContext } from '../appRefContext';

import SecondaryModalMobile from './components/SecondaryModal';
import ModalContainer from '../../modals'

const MainSection = lazy(()=> import('./section-1_Main-Head'))
const PMSection = lazy(()=>import('./section-2_PM-Section'))
const PricingSection = lazy(()=> import('./section-3_Pricing'));
const Footer = lazy(()=> import('./footer'));

const index = memo(():JSX.Element => {
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const appContext= useContext(AppContext);
  const {pageRef} = appContext!;

  useLayoutEffect(()=> {
    // check to see if a user has their credentials saved for next login
    dispatch(checkRemembered());
  },[])

  // check to see if a user is signed in
  const user = useAppSelector(getUser);

  // changed this to layout effect to prevent page from rendering or painting
  useLayoutEffect(()=> {
    if(user){
      // close modal
      dispatch(closeModal());
      navigate(`/u/${user.u_id}`);
    }
  },[user])

  // state to keep track of when our modal is open
  const modalStatus = useAppSelector(getModalStatus)
  const SecondaryModal = useAppSelector(getMobileModal)

  // In this page we are going to handle our popup states within here
  return (
    <main
    ref={pageRef}
    className={`
    z-0
    block
    relative
    `}>
      <AnimatePresence>
        {/* open and close our modal */}
        { modalStatus &&  <ModalContainer /> }
        {/* secondary modal for mobile only  */}
        { SecondaryModal && <SecondaryModalMobile />}
      </AnimatePresence>
      {/* Main section 1 */}
        <MainSection />
        {/* Project Management Pitch section */}
        <PMSection />
        {/* application pricing section */}
        <PricingSection />
        {/* Footer */}
        <Footer />
    </main>
  )
})

export default index
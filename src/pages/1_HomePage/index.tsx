import {memo, lazy, useLayoutEffect, useContext} from 'react';
import { AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";

import { getMobileModal, getModalStatus } from '../../reduxStore/modal/modalSlice';
import { checkRemembered } from '../../reduxStore/users/userSlice';
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

  // // check to see if a user is signed in
  // const user = useAppSelector(getUser);

  useLayoutEffect(()=> {
    document.body.style.overflowY ="scroll";
    // check to see if a user has their credentials saved for next login
    dispatch(checkRemembered())
    .unwrap()
    .then((x) => {
      console.log("Successful User Found",x);
      navigate(`u/${x.u_id}`);
    }).catch((x) => {
      console.log("No user found: ",x);
    });
  },[])

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
import { getMobileModal, getModalStatus } from '../../reduxStore/modal/modalSlice';
import { useAppSelector } from '../../reduxStore/hook';
import {memo, lazy} from 'react';

import SecondaryModalMobile from './components/SecondaryModal';
import ModalContainer from '../../modals'

import { AnimatePresence } from 'framer-motion';

const MainSection = lazy(()=> import('./section-1_Main-Head'))
const PMSection = lazy(()=>import('./section-2_PM-Section'))
const PricingSection = lazy(()=> import('./section-3_Pricing'));
const Footer = lazy(()=> import('./footer'));

const index = memo(():JSX.Element => {

  // check to see if a user is signed in


  // state to keep track of when our modal is open
  const modalStatus = useAppSelector(getModalStatus)
  const SecondaryModal = useAppSelector(getMobileModal)

  // In this page we are going to handle our popup states within here
  return (
    <main
    className={`
    block
    relative
    w-full
    ${
      SecondaryModal || modalStatus ? 'h-screen overflow-y-hidden' : ''
    }
    overflow-x-hidden
    `}
    >
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
import {memo, useState, lazy} from 'react';
import { useAppSelector } from '../../reduxStore/hook';
import { getModalStatus } from '../../reduxStore/modal/modalSlice';
import ModalContainer from '../../modals'
import SecondaryModalMobile from './components/SecondaryModal';

const MainSection = lazy(()=> import('./section-1_Main-Head'))
const PMSection = lazy(()=>import('./section-2_PM-Section'))
const PricingSection = lazy(()=> import('./section-3_Pricing'));
const Footer = lazy(()=> import('./footer'));

const index = memo(():JSX.Element => {

  // check to see if a user is signed in

  // state to keep track of when our modal is open
  const modalStatus = useAppSelector(getModalStatus)
  const [SecondaryModal, setSecondaryModal] = useState<Boolean>(false)
  // In this page we are going to handle our popup states within here
  return (
    <main>
      {/* open and close our modal */}
      { modalStatus &&  <ModalContainer /> }
      {/* secondary modal for mobile only  */}
      { SecondaryModal && <SecondaryModalMobile closeMobile={()=>setSecondaryModal(false)} />}
      {/* Main section 1 */}
        <MainSection openMobile={()=>setSecondaryModal(true)} />
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
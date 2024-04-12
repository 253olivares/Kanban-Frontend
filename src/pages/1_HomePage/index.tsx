import React from 'react';
import MainSection from './Section-1_Main-Head';
import PMSection from './Section-2_PM-Section';
import PricingSection from './Section-3_Pricing';
import Footer from './Footer'
import { useAppSelector } from '../../reduxStore/hook';
import { getModalStatus } from '../../modals/modalSlice';
import ModalContainer from '../../modals'
import SecondaryModalMobile from './Components/SecondaryModal';

const index = React.memo(():JSX.Element => {
  // state to keep track of when our modal is open
  const modalStatus = useAppSelector(getModalStatus)
  const [SecondaryModal, setSecondaryModal] = React.useState<Boolean>(false)
  // In this page we are going to handle our popup states within here
  return (
    <main>
      {/* open and close our modal */}
      { modalStatus &&  <ModalContainer /> }
      {/* secondary modal for mobile only  */}
      { SecondaryModal && <SecondaryModalMobile closeMobile={()=>setSecondaryModal(false)} /> }
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
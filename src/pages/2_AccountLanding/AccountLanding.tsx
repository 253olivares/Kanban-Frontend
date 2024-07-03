import {AnimatePresence} from 'framer-motion';
import { memo } from 'react';
import { useAppSelector } from '../../reduxStore/hook';
import { getAccountSettings, getFilterModal } from '../../reduxStore/modal/modalSlice';

import AccountSettingModal from '../components/accountSettingModal/AccountSettingsModal';
import UserTasks from './components/currentInvolvedTasks';
import FilterModal from './components/taskFilter/filterModal/FilterModal';
import SidebarInfo from './components/sidebarInfo/Sidebarinfo';

const Bubbles = memo(({clsName}:{clsName:string})=> {
  return <div 
  className={`
  absolute
  block
  rounded-full

  bg-PrimaryWhite
  ${clsName}
  `}
 />
})

const AccountLanding = memo(() => {
  
  const accountSettings = useAppSelector(getAccountSettings);
  const openFilterModal = useAppSelector(getFilterModal);

  const classes = ["bubble1","bubble2","bubble3","bubble4","bubble5"]
  
  return (
    <div className="
    accountLandingIndex
    ">
      {/* design circles that sit in the background of the app */}
      {/* from left to right */}
      {/* First bubble far left */}
      {/* Second bubble from left to right */}
      {/* third bubble */}
      {/* 4th bubble on right bottom */}
      {/* Last bubble on right sits on top of the 4th bubble */}

      { 
        classes.map((x,_)=> 
          <Bubbles key={x} clsName={x} />
        )
      }

      <AnimatePresence>
        { accountSettings ? <AccountSettingModal /> : '' }
        
        { openFilterModal  ? <FilterModal /> : '' }
      </AnimatePresence>
  
      <SidebarInfo />

      <UserTasks />
    </div>
  )
})

export default AccountLanding;
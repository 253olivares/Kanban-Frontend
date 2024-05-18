import AccountSettingModal from '../components/accountSettingModal';
import {AnimatePresence} from 'framer-motion';
import { memo } from 'react';
import { useAppSelector } from '../../reduxStore/hook';
import { getAccountSettings } from '../../reduxStore/modal/modalSlice';

import SidebarInfo from './components/sidebarInfo';
import UserTasks from './components/currentInvolvedTasks';

const index = memo(() => {
  const accountSettings = useAppSelector(getAccountSettings);
  return (
    <div className="
    relative
    bg-SpaceBlue 
    flex-grow
    overflow-hidden
    
    flex flex-row

    ">
    <AnimatePresence>
      {
       accountSettings ? <AccountSettingModal /> : ''
      }
    </AnimatePresence>
       
      <SidebarInfo />

      <UserTasks />
      
    </div>
  )
})

export default index
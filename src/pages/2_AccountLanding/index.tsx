import AccountSettingModal from '../components/accountSettingModal';
import {AnimatePresence} from 'framer-motion';
import { memo } from 'react';
import { useAppSelector } from '../../reduxStore/hook';
import { getAccountSettings } from '../../reduxStore/modal/modalSlice';

const index = memo(() => {
  const accountSettings = useAppSelector(getAccountSettings);
  return (
    <div className="
    relative
    bg-SpaceBlue 
    flex-grow
    overflow-hidden 
    ">
    <AnimatePresence>
      {
       accountSettings ? <AccountSettingModal /> : ''
      }
    </AnimatePresence>
    </div>
  )
})

export default index
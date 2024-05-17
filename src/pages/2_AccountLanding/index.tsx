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
    
    flex flex-row

    ">
    <AnimatePresence>
      {
       accountSettings ? <AccountSettingModal /> : ''
      }
    </AnimatePresence>
      <div className='
      w-[26%]
      h-[100%]
      glass-gradient
      flex items-center justify-center
      '>
        <p className='font-bold text-white'>This is the side bar to display boards and workspaces!</p>
      </div> 
      <div className='
      w-[74%]
      h-[100%]
      flex items-center justify-center
      '>
        <p className='font-bold text-white'>Lists users are involved in will display here! Oldest to newsest</p>
      </div> 
    </div>
  )
})

export default index
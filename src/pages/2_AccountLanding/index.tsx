import {AnimatePresence} from 'framer-motion';
import { memo } from 'react';
import { useAppSelector } from '../../reduxStore/hook';
import { getAccountSettings, getFilterModal } from '../../reduxStore/modal/modalSlice';

import AccountSettingModal from '../components/accountSettingModal';
import UserTasks from './components/currentInvolvedTasks';
import FilterModal from './components/taskFilter/filterModal';
import SidebarInfo from './components/sidebarInfo';

const index = memo(() => {
  
  const accountSettings = useAppSelector(getAccountSettings);
  const openFilterModal = useAppSelector(getFilterModal);
  
  return (
    <div className="
    relative
    bg-SpaceBlue 
    flex-grow
    overflow-hidden
    
    flex flex-row

    z-0
    ">
      {/* design circles that sit in the background of the app */}
      {/* from left to right */}
      {/* First bubble far left */}
      <div 
       className='
       absolute
       block
       rounded-full

       bg-PrimaryWhite
       
       w-[4.785rem]
       h-[4.785rem]
       mobile:w-[6.38rem]
       mobile:h-[6.38rem]
       sMobile:w-[10.208rem]
       sMobile:h-[10.208rem]
       mMobile:w-[12.25rem]
       mMobile:h-[12.25rem]
       sLaptop:w-[3.042rem]
       sLaptop:h-[3.042rem]
       mLaptop:w-[3.802rem]
       mLaptop:h-[3.802rem]
       desktop:w-[4.563rem]
       desktop:h-[4.563rem]
       largeDesktop:w-[5.703rem]
       largeDesktop:h-[5.703rem]
       4k:w-[7.604rem]
       4k:h-[7.604rem]

       bottom-[-1.807rem]
       left-[-2.393rem]
       mobile:bottom-[-2.409rem]
       mobile:left-[-3.19rem]
       sMobile:bottom-[-3.854rem]
       sMobile:left-[-5.104rem]
       mMobile:bottom-[-4.625rem]
       mMobile:left-[-6.125rem]
       sLaptop:bottom-0
       sLaptop:left-[-1.542rem]
       mLaptop:left-[-1.927rem]
       desktop:left-[-2.313rem]
       largeDesktop:left-[-2.891rem]
       '
      />
      {/* Second bubble from left to right */}
      <div 
       className='
       absolute
       rounded-full

       bg-PrimaryWhite

       w-[3.028rem]
       h-[3.028rem]
       mobile:w-[4.036rem]
       mobile:h-[4.036rem]
       sMobile:w-[6.458rem]
       sMobile:h-[6.458rem]
       mMobile:w-[7.75rem]
       mMobile:h-[7.75rem]
       sLaptop:w-[4.083rem]
       sLaptop:h-[4.083rem]
       mLaptop:w-[5.104rem]
       mLaptop:h-[5.104rem]
       desktop:w-[6.125rem]
       desktop:h-[6.125rem]
       largeDesktop:w-[7.656rem]
       largeDesktop:h-[7.656rem]
       4k:w-[10.208rem]
       4k:h-[10.208rem]

       bottom-[-1.514rem]
       left-[0.83rem]
       mobile:bottom-[-2.018rem]
       mobile:left-[1.107rem]
       sMobile:bottom-[-3.229rem]
       sMobile:left-[1.771rem]
       mMobile:bottom-[-3.875rem]
       mMobile:left-[2.125rem]
       sLaptop:bottom-[-2.042rem]
       sLaptop:left-[24.60%]
       mLaptop:bottom-[-2.552rem]
       desktop:bottom-[-3.063rem]
       largeDesktop:bottom-[-3.828rem]
       '
      />
      {/* third bubble */}
      <div 
      className='
      absolute
       rounded-full

       bg-PrimaryWhite
      
       sLaptop:w-[2.792rem]
       sLaptop:h-[2.792rem]
       mLaptop:w-[3.489rem]
       mLaptop:h-[3.489rem]
       desktop:w-[4.188rem]
       desktop:h-[4.188rem]
       largeDesktop:w-[5.234rem]
       largeDesktop:h-[5.234rem]
       4k:w-[6.979rem]
       4k:h-[6.979rem]
       
       hidden
       sLaptop:block
       sLaptop:bottom-[-1.167rem]
       sLaptop:left-[34.17%]
       mLaptop:bottom-[-1.458rem]
       desktop:bottom-[-1.75rem]
       largeDesktop:bottom-[-2.188rem]
       '
      />
      {/* 4th bubble on right bottom */}
      <div 
      className='
      absolute
       rounded-full

       bg-PrimaryWhite
      
       sLaptop:w-[7.333rem]
       sLaptop:h-[7.333rem]
       mLaptop:w-[9.167rem]
       mLaptop:h-[9.167rem]
       desktop:w-[11rem]
       desktop:h-[11rem]
       largeDesktop:w-[13.75rem]
       largeDesktop:h-[13.75rem]
       4k:w-[18.333rem]
       4k:h-[18.333rem]

       hidden
       sLaptop:block
       sLaptop:bottom-[-5.708rem]
       sLaptop:right-[1.125rem]
       mLaptop:bottom-[-7.136rem]
       mLaptop:right-[1.406rem]
       desktop:bottom-[-8.563rem]
       desktop:right-[1.688rem]
       largeDesktop:bottom-[-10.703rem]
       largeDesktop:right-[2.109rem]
       '
      />
      {/* Last bubble on right sits on top of the 4th bubble */}
      <div 
      className='
      absolute
       block
       rounded-full

       bg-PrimaryWhite
      
       w-[2.832rem]
       h-[2.832rem]
       mobile:w-[3.776rem]
       mobile:h-[3.776rem]
       sMobile:w-[6.042rem]
       sMobile:h-[6.042rem]
       mMobile:w-[7.25rem]
       mMobile:h-[7.25rem]
       sLaptop:w-[8.25rem]
       sLaptop:h-[8.25rem]
       mLaptop:w-[10.313rem]
       mLaptop:h-[10.313rem]
       desktop:w-[12.375rem]
       desktop:h-[12.375rem]
       largeDesktop:w-[15.469rem]
       largeDesktop:h-[15.469rem]
       4k:w-[20.625rem]
       4k:h-[20.625rem]
       
       top-[9.87%]
       right-[-1.831rem]
       mobile:right-[-2.441rem]
       sMobile:right-[-3.906rem]
       mMobile:right-[-4.688rem]
       sLaptop:top-auto
       sLaptop:bottom-[-1.083rem]
       sLaptop:right-[-4.792rem]
       mLaptop:bottom-[-1.354rem]
       mLaptop:right-[-5.989rem]
       desktop:bottom-[-1.625rem]
       desktop:right-[-7.188rem]
       largeDesktop:bottom-[-2.031rem]
       largeDesktop:right-[-8.984rem]
       '
      />
      <AnimatePresence>
      {
       accountSettings ? <AccountSettingModal /> : ''
      }
      </AnimatePresence>
      <AnimatePresence>
      {
        openFilterModal  ? <FilterModal /> : ''
      }
      </AnimatePresence>
      <SidebarInfo />

      <UserTasks />
    </div>
  )
})

export default index
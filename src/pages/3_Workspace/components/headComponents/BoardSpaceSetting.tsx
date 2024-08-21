import { memo, useContext } from 'react';
import cogWheel from '/assets/cog.svg';
import { useAppDispatch, useAppSelector } from '../../../../reduxStore/hook';
import { getSettingsModal, setSettingModal } from '../../../../reduxStore/modal/modalSlice';
import { AppContext } from '../../../appRefContext/appRefContext';
import { AnimatePresence } from 'framer-motion';
import BoardSpaceSettingBody from './BoardSpaceSettingBody';


const BoardSpaceSetting = memo(() => {

    const dispatch = useAppDispatch();

    const appContext = useContext(AppContext);
    const {settingsRef} = appContext!;

    const settingsModal = useAppSelector(getSettingsModal);

  return (
    <div className='
       relative

       hidden
       sLaptop:flex

       items-center
    '>
        <img 

        ref={settingsRef}

        onClick={() => dispatch(setSettingModal(!settingsModal))}
        
        className={`
        ${
          settingsModal ? 
          `
          opacity-100
          rotate-180
          `
          :
          `
          opacity-75
          hover:opacity-100
          `
        }
            sLaptop:w-[1.199rem]
            mLaptop:w-[1.499rem]
            desktop:w-[1.8rem]
            largeDesktop:w-[2.25rem]

            transition-all
            duration-500

            block

            hover:cursor-pointer
        `}src={cogWheel} alt="" />
        <AnimatePresence>
          {
            settingsModal?
            <BoardSpaceSettingBody />
            :
            ''
          }
        </AnimatePresence>

    </div>
  )
})

export default BoardSpaceSetting
import { useAppDispatch, useAppSelector } from '../../../../../reduxStore/hook';
import { getSettingsModal, setSettingModal } from '../../../../../reduxStore/modal/modalSlice';
import cogWheel from '/assets/cog.svg';


const MobileSettings = () => {

    const dispatch = useAppDispatch();

    const settingsModal = useAppSelector(getSettingsModal);

  return (
    <div className='
    relative
    flex
    items-center
    '>
        <img src={cogWheel}
        onClick={()=> dispatch(setSettingModal(true))}
        className={`
        ${settingsModal && ` rotate-180`}

        w-[1.171rem]
        mobile:w-[1.56rem]
        sMobile:w-[2.5rem]
        mMobile:w-[3rem]

        transition-all
        duration-500

        block

        hover:cursor-pointer
        `}
        alt="Cogwheel" />
    </div>
  )
}

export default MobileSettings
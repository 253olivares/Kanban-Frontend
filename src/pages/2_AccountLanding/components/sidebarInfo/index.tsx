
import { useContext } from 'react';
import { useAppSelector } from '../../../../reduxStore/hook';
import { getAccountLandingModal } from '../../../../reduxStore/modal/modalSlice';
import WorkspaceBoardHeader from '../workspaceBoardsHeader';
import { AppContext } from '../../../appRefContext';

const index = () => {
    const modal = useAppSelector(getAccountLandingModal);

    const appContext = useContext(AppContext);
    const {mobileSideBarRef} = appContext!;

  return (
    <div
    ref={mobileSideBarRef}
    className={`
      absolute
    ${
        modal ?
        `
        top-0
        `
        :
        `
        rounded-t-[0.390rem]
        mobile:rounded-t-[0.520rem]
        sMobile:rounded-t-[0.833rem]
        mMobile:rounded-t-[1rem]
        sLaptop:rounded-none

        top-[calc(100%-2.933rem)]
        mobile:top-[calc(100%-3.666rem)]
        sMobile:top-[calc(100%-4.4rem)]
        mMobile:top-[calc(100%-5.5rem)]
        `
    }
      transition-[top]
      duration-500
      ease-in-out

      sLaptop:top-auto

      flex items-center 
      flex-col

      w-full
      sLaptop:w-[26%]
      h-[100%]

      sLaptop:relative

      overflow-hidden
      sLaptop:overflow-auto
    `}>
        <div
        className='
        w-full
        block
        sLaptop:hidden
        '
        >
          <WorkspaceBoardHeader />
        </div>
        <div 
        className='
        w-full
        flex-grow
        glass-gradient
        '>

        </div>
      </div>
  )
}

export default index
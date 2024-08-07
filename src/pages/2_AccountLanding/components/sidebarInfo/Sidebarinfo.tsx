
import { memo, useContext} from 'react';
import { useAppDispatch, useAppSelector } from '../../../../reduxStore/hook';
import { getAccountLandingModal } from '../../../../reduxStore/modal/modalSlice';
import { AppContext } from '../../../appRefContext/appRefContext';

import SidebarBoards from '../sidebarBoards/SidebarBoards';
import SidebarWorkspaces from '../sidebarWorkspaces/SidebarWorkspace';
import WorkspaceBoardHeader from '../workspaceBoardsHeader/WorkspaceBoardHeader';
import { getWorkspaceSelect, setNewSelect} from '../../../../reduxStore/workspace/workspaceSlice';
import { getUser } from '../../../../reduxStore/users/userSlice';

const Sidebarinfo = memo(() => {
  
    const dispatch = useAppDispatch();
    const modal: boolean  = useAppSelector(getAccountLandingModal);

    const appContext = useContext(AppContext);
    const {mobileSideBarRef} = appContext!;

    const selectWorkspace: string = useAppSelector(getWorkspaceSelect);
    const setSelectWorkspace = (x:string) => dispatch(setNewSelect(x));
    const user = useAppSelector(getUser);

    const getUserWorkSpaces:string[] = user?.workspaces || [];

  return (
    <div
    ref={mobileSideBarRef}
    className={`
      z-10
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

      bg-SpaceBlue
      sLaptop:bg-transparent
      sLaptop:top-auto

      flex 
      items-center 
      flex-col

      w-full
      sLaptop:w-[25%]
      h-[100%]

      sLaptop:relative

      overflow-hidden
      sLaptop:overflow-visible
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
        {/* px-[4%] */}
        <div 
        className='
        w-full
        
        flex
        flex-col-reverse
        sLaptop:flex-col

        
        flex-grow-0
        h-[calc(100%-2.933rem)]
        mobile:h-[calc(100%-3.666rem)]
        sMobile:h-[calc(100%-4.4rem)]
        mMobile:h-[calc(100%-5.5rem)]
        sLaptop:h-full

        relative
        '>
          <SidebarBoards selectWorkspace={selectWorkspace} />
          <hr className='
          w-[90%]
          sLaptop:w-[91%]

          mx-auto

          bg-white
          opacity-50

          rounded-full

          h-[0.122rem]
          mobile:h-[0.163rem]
          sMobile:h-[0.260rem]
          mMobile:h-[0.313rem]
          sLaptop:h-[0.166rem]
          mLaptop:h-[0.208rem]
          desktop:h-[0.250rem]
          largeDesktop:h-[0.313rem]
          4k:h-[0.417rem]
          
          ' />
          <SidebarWorkspaces 
          setWorkspace={(string)=> setSelectWorkspace(string)} 
          workspaces={getUserWorkSpaces} 
          selectedWorkspace={selectWorkspace} /> 
        </div>
      </div>
  )
})

export default Sidebarinfo;
import { checkRemembered, getUser } from '../../../reduxStore/users/userSlice';
import { useAppDispatch, useAppSelector } from '../../../reduxStore/hook';
import { getListModal, getMembersModal, getMobileBoardNameModal, getModalStatus, getModalType, getSettingsModal } from '../../../reduxStore/modal/modalSlice';
import { useLayoutEffect, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Outlet, useParams } from 'react-router-dom';

import ModalContainer from '../../../modals/Modal'; 
import Header from './component/Header';
import { getWorkSpaceModal, initiateWorkspace } from '../../../reduxStore/workspace/workspaceSlice';
import MobileModal from '../../2_AccountLanding/components/mobileAddWorkspace';
import { getBoardModal, initializeBoards } from '../../../reduxStore/boards/boardsSlice';
import { initialComments } from '../../../reduxStore/comments/commentsSlice';
import { initiateList } from '../../../reduxStore/lists/listsSlice';
import { initiateTask } from '../../../reduxStore/tasks/tasksSlice';
import { initiateUserList } from '../../../reduxStore/userList/userList';
import MembersModal from '../../3_Workspace/components/membersModal/MultiMobileModal';

const AccountHeader = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const params = useParams();

  // console.log('Location: ', location);
  // console.log('params', params);

  // check to make sure a user exists and isx logged in
  const user = useAppSelector(getUser);

  const modalStatus = useAppSelector(getModalStatus);
  const mobileWorkspace = useAppSelector(getWorkSpaceModal);
  const boardsModal = useAppSelector(getBoardModal);
  const modalType = useAppSelector(getModalType);
  const listModal = useAppSelector(getListModal);
  const mobileBoardNameModal = useAppSelector(getMobileBoardNameModal);
  const memberModal = useAppSelector(getMembersModal);
  const settingsModal = useAppSelector(getSettingsModal);

  // a cache check to have the application ato login a user 
  // if they click on this page
  useLayoutEffect(()=> {
    document.body.style.overflowY ="hidden";
    // if a user who does not have a user account visit this page check first if they do not have an account
    // check to see if a user is logged in
    if(!user){
      dispatch(checkRemembered()).unwrap().then((x:any)=> {
        console.log("User exists");

        // security checks to make sure user is logged into correct account and not access boards not registered to them or shared
        // check url for userId entered
        console.log('check userId')
        
        if(params.userId && params.userId !== x.u_id) navigate(`/u/${x.u_id}`);

        if(params.workspaceId && !x.boards.includes(params.workspaceId)){

          alert('Board does not exist or you do not have permission to view board!');

          // check found
          navigate(`/u/${x.u_id}`);
        } 

      }).catch(()=>{
        
        console.log("No user found or wrong user logged in!");
        navigate('/');
      });
    }
    // initiate our states
    dispatch(initiateWorkspace());
    dispatch(initializeBoards());
    dispatch(initiateList());
    dispatch(initiateTask());
    dispatch(initialComments());
    dispatch(initiateUserList());

  },[])

  return (
      <main className={`
      z-[0]
      relative 

      flex 
      flex-col

      w-dvw
      h-dvh
      conic-gradient-noshade 
      overflow-hidden
      ${
        !user && `
        justify-center 
        items-center
        gap-[0.488rem]
        mobile:gap-[0.651rem]
        sMobile:gap-[1.041rem]
        mMobile:gap-[1.25rem]
        sLaptop:gap-[1.066rem]
        mLaptop:gap-[1.333rem]
        desktop:gap-[1.6rem]
        largeDesktop:gap-[2rem]
        4k:gap-[2.666rem]
        `
      }
      `}>
        <AnimatePresence>
          {
            memberModal || settingsModal ?
            <MembersModal params={params} memberModal={memberModal} settingsModal={settingsModal} /> : ''
          }
        </AnimatePresence>
        <AnimatePresence>
        {
          mobileWorkspace || 
          boardsModal || 
          modalType ==='deleteConfirm' || 
          listModal || 
          mobileBoardNameModal ||
          modalType === 'deleteConfirmBoard' ||
          modalType === 'addNewUser'
           ? 
          <MobileModal 
          params = {params}
          boardsModal={boardsModal} 
          mobileWorkspace={mobileWorkspace} 
          modal = {modalType}
          listModal={listModal}
          mobileBoardNameModal = {mobileBoardNameModal}
          /> : ''
        }
        </AnimatePresence>
        <AnimatePresence>
          { modalStatus && <ModalContainer /> }
        </AnimatePresence>
        {/* in the off change a user is not redirected 
        we have the page display different information that lets
        the user know no credentials are saved and they need to login
        */}
        {!user ?
          <>
            <h1 className='
            text-white
              text-[0.585rem]
              mobile:text-[0.781rem]
              sMobile:text-[1.249rem]
              mMobile:text-[1.5rem]
              sLaptop:text-[1.599rem]
              mLaptop:text-[1.999rem]
              desktop:text-[2.4rem]
              largeDesktop:text-[3rem]
              4k:text-[3.999rem]
              font-medium
              text-center
              w-[80%]
              sLaptop:w-[75%]
              desktop:w-[50%]
            '>
              User is not logged in please go to home page and log back in!
            </h1>
            <Link className=' 
            text-white
            font-bold 
            text-[0.585rem]
            mobile:text-[0.781rem]
            sMobile:text-[1.249rem]
            mMobile:text-[1.5rem]
            sLaptop:text-[1.333rem]
            mLaptop:text-[1.666rem]
            desktop:text-[2rem]
            largeDesktop:text-[2.5rem]
            4k:text-[3.333rem]
            underline' to={'/'}>Go Home</Link>
          </>
          :
          <>
          {/* our app header */}
            <Header user={user} params={params} />
            {/* our application itself */}
            <Outlet/>
          </>
        }
      </main>
  )
})

export default AccountHeader;
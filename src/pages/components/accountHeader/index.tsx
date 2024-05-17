import { checkRemembered, getUser } from '../../../reduxStore/users/userSlice';
import { useAppDispatch, useAppSelector } from '../../../reduxStore/hook';
import { getModalStatus } from '../../../reduxStore/modal/modalSlice';
import { useEffect, useLayoutEffect, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';

import ModalContainer from '../../../modals';
import Header from './component/Header';


const index = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // check to make sure a user exists and is logged in
  const user = useAppSelector(getUser);

  const modalStatus = useAppSelector(getModalStatus);

  // a cache check to have the application ato login a user 
  // if they click on this page
  useLayoutEffect(()=> {
    // if a user who does not have a user account visit this page check first if they do not have an account
    // check to see if a user is logged in
    if(!user){
      dispatch(checkRemembered());
    }
  },[])

  useEffect(()=> {
    // after dispatch if has not found a user to remember then
    // make our user navigate to the home page
    if(!user){
      navigate(`/`);
    }
  },[user])

  return (
      <main className={`
      relative 
      z-[0]
      w-screen 
      h-screen 
      conic-gradient-noshade 
      overflow-hidden
      flex 
      flex-col
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
        `
      }
      `}>
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
            underline' to={'/'}>Go Home</Link>
          </>
          :
          <>
          {/* our app header */}
            <Header user={user}/>
            {/* our application itself */}
            <Outlet/>
            
          </>
        }
      </main>
  )
})

export default index  
import { getUser } from "../../../reduxStore/users/userSlice";
import { useAppDispatch, useAppSelector } from "../../../reduxStore/hook";
import { motion } from 'framer-motion';
import { memo, useContext, useEffect} from 'react';
import { closeAccountModal,getCroppingImage } from "../../../reduxStore/modal/modalSlice";
import { AppContext } from "../../appRefContext/appRefContext";
import Account from "./Account";
import Logout from "./Logout";
import Options from "./Options";

const AccountSettingsModal = memo(() => {
    const dispatch = useAppDispatch();

    const appContext = useContext(AppContext);
    const {accountSettingsRef, modalRef,profileRef} = appContext!;
 
    const user = useAppSelector(getUser);
    const dataURL = useAppSelector(getCroppingImage);

    // just exit if no user is found
    if(!user) return;

    useEffect(()=> {
      const clickOnOutside = (e:MouseEvent | TouchEvent)=> {
        // console.log("test");
        const element = e.target as Node;

        // check to see if any of these conditions are meet
        // if they are do nothing as the user is not clicking a element to close the modal
        // just a list of items we do not want to trigger our dispatch
        if(profileRef.current && !profileRef.current.contains(element) 
          && accountSettingsRef.current && !accountSettingsRef.current.contains(element) 
        ) 
            // close settings when modal is not open
            if(!modalRef.current) dispatch(closeAccountModal());
  
      }
      window.addEventListener('click',clickOnOutside,true);

      return () => {
        window.removeEventListener('click',clickOnOutside,true);
      }
    },[]);
    
  return (
    <motion.div
    initial={{ 
       y:'-50%',
      opacity: 0 
    }}
    animate={{ 
       y:0,
      opacity: 1 
    }}
    exit={{ 
      y:'-50%',
      opacity: 0 
    }}
    transition={{
      ease: "easeInOut",
      duration:.3
     }}

    ref={accountSettingsRef}
    className="
    absolute
    top-0
    right-0
    z-[10]

    w-full
    sLaptop:w-[13.566rem]
    mLaptop:w-[16.958rem]
    desktop:w-[20.350rem]
    largeDesktop:w-[25.438rem]
    4k:w-[31.25rem]

    dropDownShadow
    "
    >
      <div className='
      w-full

      rounded-b-[0.244rem]
      mobile:rounded-b-[0.326rem]
      sMobile:rounded-b-[0.521rem]
      mMobile:rounded-b-[0.625rem]
      sLaptop:rounded-br-none
      sLaptop:rounded-bl-[0.311rem]
      mLaptop:rounded-bl-[0.388rem]
      desktop:rounded-bl-[0.466rem]
      largeDesktop:rounded-bl-[0.583rem]
      4K:rounded-bl-[0.776rem]

      ring-SelectorBlue

      ring-[0.122rem]
      mobile:ring-[0.163rem]
      sMobile:ring-[0.261rem]
      mMobile:ring-[0.313rem]
      sLaptop:ring-[0.097rem]
      mLaptop:ring-[0.121rem]
      desktop:ring-[0.146rem]
      largeDesktop:ring-[0.182rem]
      4k:ring-[0.243rem]

      bg-SpaceBlue
      '>
        {/* Profile Info */}
        <Account user={user} />
        <hr 
        className="
        mx-auto
        w-[calc(86.97%)]
        sLaptop:w-[calc(88.23%)]
        rounded-full

        h-[0.098rem]
        mobile:h-[0.13rem]
        sMobile:h-[0.208rem]
        mMobile:h-[0.5rem]
        sLaptop:h-[0.11rem]
        mLaptop:h-[0.138rem]
        desktop:h-[0.166rem]
        largeDesktop:h-[0.207rem]
        4k:h-[0.275rem]

        bg-PrimaryWhite
        opacity-50
        " />
        <Options />
        <hr 
        className="
        mx-auto
        w-[calc(86.97%)]
        sLaptop:w-[calc(88.23%)]
        rounded-full

        h-[0.098rem]
        mobile:h-[0.13rem]
        sMobile:h-[0.208rem]
        mMobile:h-[0.5rem]
        sLaptop:h-[0.11rem]
        mLaptop:h-[0.138rem]
        desktop:h-[0.166rem]
        largeDesktop:h-[0.207rem]
        4k:h-[0.275rem]

        bg-PrimaryWhite
        opacity-50
        " />
        <Logout dataURL={dataURL} />
      </div>
    </motion.div>
  )
})

export default AccountSettingsModal;
import { getUser, logOut } from "../../../reduxStore/users/userSlice";
import { useAppDispatch, useAppSelector } from "../../../reduxStore/hook";
import {motion} from 'framer-motion';
import { memo, useContext, useEffect} from 'react';
import { closeAccountModal,getCroppingImage,openProfile, setCroppingImageData } from "../../../reduxStore/modal/modalSlice";
import { AppContext } from "../../appRefContext";
import { useNavigate } from "react-router-dom";
import { setNewSelect } from "../../../reduxStore/workspace/workspaceSlice";

const index = memo(() => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
        ) {
            // close settings when modal is not open
            if(!modalRef.current) dispatch(closeAccountModal());
          }  
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
        <div className="
        w-full
        ">
          <div className="
          flex
          justify-center

          gap-[0.976rem]
          mobile:gap-[1.302rem]
          sMobile:gap-[2.083rem]
          mMobile:gap-[2.5rem]
          sLaptop:gap-[0.625rem]
          mLaptop:gap-[0.781rem]
          desktop:gap-[0.938rem]
          largeDesktop:gap-[1.172rem]
          4k:gap-[1.563rem]

          py-[0.854rem]
          mobile:py-[1.139rem]
          sMobile:py-[1.823rem]
          mMobile:py-[2.188rem]
          sLaptop:py-[1.016rem]
          mLaptop:py-[1.270rem]
          desktop:py-[1.524rem]
          largeDesktop:py-[1.906rem]
          4k:py-[2.541rem]

          "> 
            <div className="
            flex-grow-0

            p-[0.099rem]
            mobile:p-[0.133rem]
            sMobile:p-[0.212rem]
            mMobile:p-[0.254rem]
            sLaptop:p-[0.11rem]
            mLaptop:p-[0.138rem]
            desktop:p-[0.166rem]
            largeDesktop:p-[0.207rem]
            4k:p-[0.276rem]

            rounded-full
            linear-gradientFooter
            ">
              <img 
              className="
              w-[2.319rem]
              mobile:w-[3.093rem]
              sMobile:w-[4.948rem]
              mMobile:w-[5.938rem]
              sLaptop:w-[2.574rem]
              mLaptop:w-[3.217rem]
              desktop:w-[3.86rem]
              largeDesktop:w-[4.826rem]
              4k:w-[6.434rem]

              rounded-full
              "
              src={`${user.pfp}`} alt="" />
            </div>
            <div className="
            flex 
            flex-col
            justify-center

            gap-[0.226rem]
            mobile:gap-[0.302rem]
            sMobile:gap-[0.483rem]
            mMobile:gap-[0.579rem]
            sLaptop:gap-[0.258rem]
            mLaptop:gap-[0.322rem]
            desktop:gap-[0.386rem]
            largeDesktop:gap-[0.483rem]
            4k:gap-[0.643rem]

            ">
              <h1 className="
              text-PrimaryWhite
              font-medium

              text-[0.976rem]
              mobile:text-[1.302rem]
              sMobile:text-[2.083rem]
              mMobile:text-[2.5rem]
              sLaptop:text-[0.919rem]
              mLaptop:text-[1.149rem]
              desktop:text-[1.379rem]
              largeDesktop:text-[1.723rem]
              4k:text-[2.298rem]

              leading-none
              ">{user.username}</h1>
              <p className="
              font-medium
              text-PrimaryWhite

              text-[0.561rem]
              mobile:text-[0.749rem]
              sMobile:text-[1.198rem]
              mMobile:text-[2.083rem]
              sLaptop:text-[0.551rem]
              mLaptop:text-[0.689rem]
              desktop:text-[0.828rem]
              largeDesktop:text-[1.034rem]
              4k:text-[1.379rem]

              opacity-50
              leading-none
              ">{user.email}</p>
            </div>  
          </div>
        </div>
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
        <div className="
        mx-auto
        w-[calc(86.97%)]
        sLaptop:w-[calc(88.23%)]
        flex flex-col

        text-PrimaryWhite
        font-medium

        text-[0.928rem]
        mobile:text-[1.237rem]
        sMobile:text-[1.979rem]
        mMobile:text-[2.375rem]
        sLaptop:text-[0.919rem]
        mLaptop:text-[1.149rem]
        desktop:text-[1.379rem]
        largeDesktop:text-[1.723rem]
        4k:text-[2.298rem]

        leading-tight
        sLaptop:leading-none

        gap-[0.708rem]
        mobile:gap-[0.944rem]
        sMobile:gap-[1.510rem]
        mMobile:gap-[1.813rem]
        sLaptop:gap-[0.441rem]
        mLaptop:gap-[0.551rem]
        desktop:gap-[0.662rem]
        largeDesktop:gap-[0.828rem]
        4k:gap-[1.103rem]

        py-[0.537rem]
        mobile:py-[0.716rem]
        sMobile:py-[1.145rem]
        mMobile:py-[1.375rem]
        sLaptop:py-[0.871rem]
        mLaptop:py-[1.121rem]
        desktop:py-[1.375rem]
        largeDesktop:py-[1.619rem]
        4k:py-[2.241rem]

        sLaptop:pl-[0.441rem]
        mLaptop:pl-[0.551rem]
        desktop:pl-[0.662rem]
        largeDesktop:pl-[0.828rem]
        4k:pl-[1.103rem]
        " >
          <p 
          onClick={()=>{
            dispatch(openProfile())
          }}
          className="
          text-center
          sLaptop:text-left
          sLaptop:hover:opacity-50
          hover:cursor-pointer
          ">Edit Profile</p>
          <p className="
          text-center
          sLaptop:text-left
          sLaptop:hover:opacity-50
          hover:cursor-pointer
          ">Billing & Payment</p>
          <p className="
          text-center
          sLaptop:text-left
          sLaptop:hover:opacity-50
          hover:cursor-pointer
          ">Archive</p>
          <p className="
          text-center
          sLaptop:text-left
          sLaptop:hover:opacity-50
          hover:cursor-pointer
          ">Help</p>
        </div>
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
        <div className="
        w-full
        ">
          <button 
          onClick={()=> {
            try {
              // incase user changed their profile image we set the value back to null
             if(dataURL) dispatch(setCroppingImageData(null));

              // change modal state that hides the menu options
              dispatch(closeAccountModal());
 
              // log out user
              dispatch(logOut());

              dispatch(setNewSelect(''));
             
              navigate('/');
            } catch(e:any){
              alert("Ran into issue logging out!");
            }
          }}
          className="
          w-full
          text-center

          text-[0.928rem]
          leading-[2.686rem]
          mobile:text-[1.237rem]
          mobile:leading-[3.581rem]
          sMobile:text-[1.979rem]
          sMobile:leading-[5.729rem]
          mMobile:text-[2.375rem]
          mMobile:leading-[6.875rem]
          sLaptop:text-[0.919rem]
          sLaptop:leading-[2.206rem]
          mLaptop:text-[1.149rem]
          mLaptop:leading-[2.758rem]
          desktop:text-[1.379rem]
          desktop:leading-[3.309rem]
          largeDesktop:text-[1.723rem]
          largeDesktop:leading-[4.136rem]
          4k:text-[2.298rem]
          4k:leading-[5.515rem]

          h-[2.686rem]
          mobile:h-[3.581rem]
          sMobile:h-[5.729rem]
          mMobile:h-[6.875rem]
          sLaptop:h-[2.206rem]
          mLaptop:h-[2.758rem]
          desktop:h-[3.309rem]
          largeDesktop:h-[4.136rem]
          4k:h-[5.515rem]

          font-medium
          text-PrimaryWhite
          sLaptop:hover:opacity-50
          ">
            Logout
          </button>
        </div>
      </div>
    </motion.div>
  )
})

export default index
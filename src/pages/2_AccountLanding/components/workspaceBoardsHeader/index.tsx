import { useContext, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../reduxStore/hook'
import { closeAccountLandingModal, getAccountLandingModal, openAccountLadingModal } from '../../../../reduxStore/modal/modalSlice';
import arrow from '/assets/DropDown_Icon.svg'
import { AppContext } from '../../../appRefContext';

const index = () => {
    const dispatch = useAppDispatch();

    const modalState = useAppSelector(getAccountLandingModal);

    const appContext = useContext(AppContext);
    const {mobileSideBarRef,mobileAddNewWorkspace} = appContext!;

    const listening = (e:MouseEvent | TouchEvent) => {
      const elements = e.target as Node;
      if(mobileSideBarRef.current && !mobileSideBarRef.current.contains(elements)){
        if(!mobileAddNewWorkspace.current?.contains(elements)) dispatch(closeAccountLandingModal())
      }
    }

    useEffect(()=>{
      if(modalState){
        window.addEventListener('click', listening,true);
      }
      ()=>{
        window.removeEventListener('click', listening,true);
      }
    },[modalState])

  return (
    <div
    onClick={()=>{
      if(!modalState){
        dispatch(openAccountLadingModal())
      } else {
        dispatch(closeAccountLandingModal())
        window.removeEventListener('click', listening,true);
      }
    }}
    className="
    w-full
    linear-gradientFooter
    flex
    justify-between
    items-center
    px-[4.55%]

    h-[2.933rem]
    mobile:h-[3.666rem]
    sMobile:h-[4.4rem]
    mMobile:h-[5.5rem]
    ">
        <h1
        className="
        font-medium
        text-[0.976rem]
        mobile:text-[1.302rem]
        sMobile:text-[2.083rem]
        mMobile:text-[2.5rem]
        text-white
        "
        >Workspaces / Boards</h1>
        <img 
        className={`
        w-[1.244rem]
        mobile:w-[1.658rem]
        sMobile:w-[2.653rem]
        mMobile:w-[3.184rem]
    
        transition-all
        duration-500
        ease-in-out
        ${
            modalState && 
            `
            rotate-180
            
            `
        }

        `}
        src={arrow} alt="Arrow" />
    </div>
  )
}

export default index
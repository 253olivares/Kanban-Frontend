import { openCreateProfile } from '../../../reduxStore/modal/modalSlice';
import { openLogin } from '../../../reduxStore/modal/modalSlice';
import { useAppDispatch } from '../../../reduxStore/hook';

import HamburgerMenu from '/assets/Menu_Icon.svg';
import LogoExport from '/assets/KbIconMobile.svg';
import Button from '../components/Button';

const index = ({mobileOpen}: {mobileOpen: ()=> void}) => {
  // get our dispatch
  const dispatch = useAppDispatch();

  return (
    <header className="
    w-full 

    py-[1.221rem]
    mobile:py-[1.628rem]
    sMobile:py-[2.604rem]
    mMobile:py-[3.125rem]
    sLaptop:py-[2.625rem]
    mLaptop:py-[3.281rem] 
    desktop:py-[3.938rem]

    px-[6.5%]
    sLaptop:px-[3.625]
    mLaptop:px-[4.583rem] 
    desktop:px-[5.5rem] 

    flex 
    justify-between 
    items-center
    ">
        <img className="  
        w-[1.631rem]
        mobile:w-[2.175rem]
        sMobile:w-[3.48rem]
        mMobile:w-[4.176rem]
        sLaptop:w-[3.125rem] 
        mLaptop:w-[3.906rem] 
        desktop:w-[4.688rem]" src={LogoExport} alt="Application Logo" />
        <img onClick={mobileOpen} className='
        w-[1.757rem]
        mobile:w-[2.343rem]
        sMobile:w-[3.749rem]
        mMobile:w-[4.5rem]
        block 
        sLaptop:hidden 
        cursor-pointer' src={HamburgerMenu} alt="Hamburger Menu" />
        <div className='hidden 
        sLaptop:flex 
        sLaptop:gap-[0.965rem]
        mLaptop:gap-[1.25rem]   
        desktop:gap-[1.448rem]
        items-center'>
          <Button message="Login" fn={()=> dispatch(openLogin())} />
          <Button message='Create Account' fn={()=> dispatch(openCreateProfile())} />
        </div>
    </header>
  )
}

export default index
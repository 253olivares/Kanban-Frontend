import LogoExport from '/assets/Logo_Export.svg';
import Button from '../Components/Button';
import HamburgerMenu from '/assets/Menu_Icon.svg';
import { useAppDispatch } from '../../../reduxStore/hook';
import { openLogin } from '../../../modals/modalSlice';
import { openCreateProfile } from '../../../modals/modalSlice';

const index = () => {
  // get our dispatch
  const dispatch = useAppDispatch();

  return (
    <header className="w-full py-8 sLaptop:py-11 mLaptop:py-[3.25rem] desktop:py-14 px-6 sMobile:px-10 mMobile:px-12 sLaptop:px-14 mLaptop:px-[4.563rem] desktop:px-[5.5rem] flex justify-between items-center">
        <img className="w-9 sMobile:w-11 mMobile:w-14 sLaptop:w-[3.125rem] mLaptop:w-[3.906rem] desktop:w-[4.688rem]" src={LogoExport} alt="Application Logo" />
        <img className='w-11 sMobile:w-12 mMobile:w-16 block sLaptop:hidden cursor-pointer' src={HamburgerMenu} alt="Hamburger Menu" />
        <div className='hidden sLaptop:flex sLaptop:gap-4 desktop:gap-6 items-center'>
          <Button message="Login" fn={()=> dispatch(openLogin())} />
          <Button message='Create Account' fn={()=> dispatch(openCreateProfile())} />
        </div>
    </header>
  )
}

export default index
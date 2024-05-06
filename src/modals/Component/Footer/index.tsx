import Button from '../cancelButton';
import LogoExport from '/assets/Logo_Export.svg';

const index = () => {
  return (
    <div className="
        relative conic-gradient 
        w-full
        flex justify-between items-center
        px-[1.25rem] py-[1.25rem]
        sMobile:px-[2.25rem] sMobile:py-[1.75rem]
        mMobile:px-12 mMobile:py-9
        sLaptop:px-[3.25rem] sLaptop:py-[1.25rem]
        mLaptop:px-[4rem] mLaptop:py-[1.5rem]
        desktop:px-[4.125rem] desktop:py-[1.6rem]
        largeDesktop:px-[4.25rem] largeDesktop:py-[1.85rem]
        ">
            <Button message='Close' />
            <img className='
            w-[2.25rem]
            sMobile:w-[2.75rem]
            mMobile:w-12
            sLaptop:w-[2.25rem]
            mLaptop:w-[2.75rem]
            desktop:w-[2.969rem]
            largeDesktop:w-[3.15rem]
            ' src={LogoExport} alt="Logo Icons" />
    </div>
  )
}

export default index
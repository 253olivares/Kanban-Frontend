import { forwardRef,memo } from 'react';

type propTypes = {
    type:string,
    label:string,
    value:string,
    changeField: (e:React.ChangeEvent<HTMLInputElement>)=> void
}


const password = memo(forwardRef<HTMLInputElement | null,propTypes>(({
    type,
    label,
    value,
    changeField
  },ref) => {

  return (
    <div className='
    w-full
    flex flex-col
    gap-[0.355rem]
    mobile:gap-[0.474rem]
    sMobile:gap-[0.759rem]
    mMobile:gap-[0.911rem]
    sLaptop:gap-[0.32rem]
    mLaptop:gap-[0.4rem]
    desktop:gap-[0.48rem]
    largeDesktop:gap-[0.6rem]
    '>
        <div
        className='
        w-full flex justify-between
        items-center
        '>
            <label htmlFor={label}
            className='labelCss'>
                {label}
            </label>
        </div>
        <input 
        ref={ref}
        onChange={(e)=> changeField(e)}
        className='inputCss'

        value={value}
        id={label}
        type={type}
        />
    </div>
  )
}));

export default password
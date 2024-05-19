import editIcon from '/assets/Edit_Icon.svg';
import { memo } from 'react';

type propTypes = {
    css:string,
    edit:boolean,
    type:string,
    label:string,
    value:string,
    enableField: ()=> void,
    changeField: (e:React.ChangeEvent<HTMLInputElement>)=> void
}

const RestrictedInputBoxes = memo(({  
  edit,
  type,
  label,
  value,
  enableField,
  changeField
}:propTypes) => {

  return (
    <div
     className="
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
     "
    >
        <div 
        onClick={()=>enableField()}
        className="
        w-full
        flex justify-between
        items-center
        sLaptop:hover:cursor-pointer
        group
        ">
            <label 
            className='
            labelCss
            pointer-events-none
            group-hover:
            '
            htmlFor={label}>{label}:</label>
            <img className={`
            ${edit ?
              `
              opacity-100
              ` 
              :
              `
              opacity-50  
              group-hover:opacity-100
              `}
            w-[1.220rem]
            mobile:w-[1.627rem]
            sMobile:w-[2.604rem]
            mMobile:w-[3.125rem]
            sLaptop:w-[1rem]
            mLaptop:w-[1.25rem]
            desktop:w-[1.5rem]
            largeDesktop:w-[1.875rem]
            `} src={editIcon} alt="Edit_button" />
        </div>
        <input 
        onChange={(e)=> changeField(e)}
        disabled={!edit}
        className={`
        ${
          !edit && 'pointer-events-none'
        }
          
        inputCss

        ${
          edit ? 
          `
          ring-0
          focus:bg-PrimaryWhite
          focus:ring-SelectorBlue
          sLaptop:focus:ring-[0.08rem]
          mLaptop:focus:ring-[0.1rem]
          desktop:focus:ring-[0.12rem]
          largeDesktop:focus:ring-[0.15rem]
          `
          :
          `
          opacity-50
          ring
          ring-Slate-gray
          sLaptop:ring-[0.08rem]
          mLaptop:ring-[0.1rem]
          desktop:ring-[0.12rem]
          largeDesktop:ring-[0.15rem]
          `
        }`}
        value={value}
        id={label}
        type={type} />
    </div>
  )
})

export default RestrictedInputBoxes
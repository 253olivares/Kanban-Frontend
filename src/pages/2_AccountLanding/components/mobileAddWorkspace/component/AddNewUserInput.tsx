
import { memo } from 'react';
import searchGlass from '/assets/SearchGlass.svg'

const AddNewUserInput = memo(({
  emailInput,
  setInput,
  userRole,
  inputRef,
  checkEmailInput
} : {
  emailInput:string,
  setInput:(emailInput:string)=> void,
  userRole:boolean,
  inputRef:React.RefObject<HTMLInputElement>,
  checkEmailInput:()=> void
}) => {
  return (
    <form 
    className='w-full relative'
    onSubmit={(e)=> {
        e.preventDefault();
        inputRef.current?.blur();
        checkEmailInput();
    }}>
        <input
        ref={inputRef}
        value={emailInput}
        onChange={(e)=> {
          if(inputRef.current) inputRef.current.style.color='#F5F5F5';
          setInput(e.target.value)
        }}
        disabled={userRole}
        type="email"
        placeholder="Example@gmail.com" 
        className='
        w-full

        bg-SpaceBlueSelected

        px-[3%]

        py-[0.499rem]
        mobile:py-[0.624rem]
        sMobile:py-[.75rem]
        mMobile:py-[0.937rem]

        rounded-[0.333rem]
        mobile:rounded-[0.416rem]
        sMobile:rounded-[0.5rem]
        mMobile:rounded-[0.625rem]

        text-[.937rem]
        mobile:text-[1.25rem]
        sMobile:text-[2rem]
        mMobile:text-[2.4rem]

        focus:outline-none

        focus:ring-[0.145rem]
        mobile:focus:ring-[0.182rem]
        sMobile:focus:ring-[0.219rem]
        mMobile:focus:ring-[0.273rem]
        focus:ring-[rgba(255,255,255,.25)]
        '
        />
        <input 
        className="
        absolute
        right-[2.5%]

        top-[calc(50%-(1.406rem/2))]
        mobile:top-[calc(50%-(1.875rem/2))]
        sMobile:top-[calc(50%-(3rem/2))]
        mMobile:top-[calc(50%-(3.6rem/2))]

        w-[1.406rem]
        mobile:w-[1.875rem]
        sMobile:w-[3rem]
        mMobile:w-[3.6rem]

        hover:cursor-pointer
        "

        type="image" src={searchGlass} alt="Search Glass" />
    </form> 
  )
})

export default AddNewUserInput
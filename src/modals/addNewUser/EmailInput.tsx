import { memo } from 'react'
import searchGlass from '/assets/SearchGlass.svg'

const EmailInput = memo((
  {
    emailInput,
    setInput,
    userRole,
    inputRef,
    checkEmailInput
  }:{
    emailInput:string,
    setInput:(emailInput:string)=> void,
    userRole:boolean,
    inputRef:React.RefObject<HTMLInputElement>,
    checkEmailInput:()=> void
  }) => {

  return (
    <form 
    onSubmit={(e)=> {
      e.preventDefault();
      inputRef.current?.blur();
      checkEmailInput();

    }}
    className="w-full relative">
        <input 
        ref={inputRef}
        value={emailInput}
        onChange={(e)=> {
          if(inputRef.current) inputRef.current.style.color='#F5F5F5';
          setInput(e.target.value)
        }}
        disabled={userRole}
        className="
        w-full
        
        bg-SpaceBlueSelected

        focus:outline-none

        px-[2%]
      
        sLaptop:py-[0.499rem]
        mLaptop:py-[0.624rem]
        desktop:py-[.75rem]
        largeDesktop:py-[0.937rem]

        sLaptop:rounded-[0.333rem]
        mLaptop:rounded-[0.416rem]
        desktop:rounded-[0.5rem]
        largeDesktop:rounded-[0.625rem]
   
        sLaptop:text-[0.999rem]
        mLaptop:text-[1.249rem]
        desktop:text-[1.5rem]
        largeDesktop:text-[1.875rem]


        sLaptop:focus:ring-[0.145rem]
        mLaptop:focus:ring-[0.182rem]
        desktop:focus:ring-[0.219rem]
        largeDesktop:focus:ring-[0.273rem]
        focus:ring-[rgba(255,255,255,.25)]

        " placeholder="Example@email.com" type="email" />

        <input 
        className='
        absolute
        right-[2%]

        sLaptop:top-[calc(50%-(1.666rem/2))]
        mLaptop:top-[calc(50%-(2.083rem/2))]
        desktop:top-[calc(50%-(2.5rem/2))]
        largeDesktop:top-[calc(50%-(3.125rem/2))]

        sLaptop:w-[1.666rem]
        mLaptop:w-[2.083rem]
        desktop:w-[2.5rem]
        largeDesktop:w-[3.125rem]

        hover:cursor-pointer
        ' type="image" src={searchGlass} alt="Search glass" />
    </form>
  )
})

export default EmailInput
import { useState, FormEvent } from "react";

const EmailInput = () => {

    const [inputValue, setInputValue] = useState<string>('')
    const [iserror, setError] = useState<boolean>(false);
    const [submission,setSubmission] = useState<boolean>(false);

    // test email to make sure its valid
    function emailValidation (email:string):boolean {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    const validateAndSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!emailValidation(inputValue)) {
            setError(true);
            return
        }
        setError(false);
        setSubmission(true);
        setInputValue('');
    }

  return (
        <form onSubmit={(e)=> validateAndSubmit(e)}>
            <div className='flex flex-col w-[22rem] sMobile:w-[30rem] mMobile:w-[35rem] sLaptop:w-[19rem] mLaptop:w-[22rem] desktop:w-[25rem] largeDesktop:w-[29rem]'>
                <label 
                htmlFor="email"
                className='
                relative
                text-2xl
                sMobile:text-[2.125rem] sMobile:leading-[2.25rem]
                mMobile:text-[2.5rem] mMobile:leading-[2.75rem]
                sLaptop:text-[1.25rem] sLaptop:leading-[1.5rem]
                mLaptop:text-[1.625rem] mLaptop:leading-[1.8rem]
                desktop:text-[1.875rem] desktop:leading-[2rem]
                largeDesktop:text-[2.25rem] largeDesktop:leading-[2.5rem]
                text-PrimaryWhite
                font-medium
                pb-[.45rem]
                desktop:pb-[.5rem]
                '>Newspaper:
                {
                    iserror &&
                <p className="
                absolute
                right-0 
                top-[calc(50%-(1.75rem/2))]
                sMobile:top-[calc(50%-(2.15rem/2))]
                mMobile:top-[calc(50%-(2.5rem/2))]
                sLaptop:top-[calc(50%-(1.25rem/2))]
                mLaptop:top-[calc(50%-(1.55rem/2))]
                desktop:top-[calc(50%-(1.8rem/2))]
                largeDesktop:top-[calc(50%-(2.5rem/2))]
                text-xl
                sMobile:text-[2rem] sMobile:leading-[2.15rem]
                mMobile:text-[2.25rem] mMobile:leading-[2.50rem]
                sLaptop:text-[1rem] sLaptop:leading-[1.25rem]
                mLaptop:text-[1.35rem] mLaptop:leading-[1.55rem]
                desktop:text-[1.60rem] desktop:leading-[1.8rem]
                largeDesktop:text-[2.25rem] largeDesktop:leading-[2.5rem] text-PrimaryWhite font-medium">Email is invalid!</p>
                }

                {
                    submission &&
                    <p className="
                absolute
                right-0 
                top-[calc(50%-(1.75rem/2))]
                sMobile:top-[calc(50%-(2.15rem/2))]
                mMobile:top-[calc(50%-(2.5rem/2))]
                sLaptop:top-[calc(50%-(1.25rem/2))]
                mLaptop:top-[calc(50%-(1.55rem/2))]
                desktop:top-[calc(50%-(1.8rem/2))]
                largeDesktop:top-[calc(50%-(2.5rem/2))]
                text-xl
                sMobile:text-[2rem] sMobile:leading-[2.15rem]
                mMobile:text-[2.25rem] mMobile:leading-[2.50rem]
                sLaptop:text-[1rem] sLaptop:leading-[1.25rem]
                mLaptop:text-[1.35rem] mLaptop:leading-[1.55rem]
                desktop:text-[1.60rem] desktop:leading-[1.8rem]
                largeDesktop:text-[2.25rem] largeDesktop:leading-[2.5rem] text-PrimaryWhite font-medium">Email sent!</p>
                }

                </label>
                    
                <div className='flex'>
                    <input 
                    tabIndex={-1}
                    className='
                    px-3 py-2 
                    sMobile:px-6 sMobile:py-3
                    largeDesktop:px-4 largeDesktop:py-3
                    sLaptop:px-3
                    sLaptop:py-2
                    rounded-l-[.4rem]
                    w-[88%]
                    text-2xl
                    sMobile:text-[2rem]
                    mMobile:text-[2.5rem]
                    sLaptop:text-xl
                    mLaptop:text-2xl 
                    desktop:text-3xl
                    largeDesktop:text-4xl
                    focus:outline-none 
                    font-medium
                    ' 
                    type="email"
                    id="email"
                    value={inputValue}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setInputValue(e.target.value)} 
                    placeholder='Enter your email..' 
                    required
                    />
                    <button
                    tabIndex={-1}
                    className='
                    py-2 px-5 
                    font-medium
                    text-2xl
                    sMobile:text-[2rem]
                    mMobile:text-[2.5rem]
                    sLaptop:text-xl
                    mLaptop:text-2xl 
                    desktop:text-3xl
                    largeDesktop:text-4xl
                    bg-SpaceBlue 
                    text-PrimaryWhite
                    rounded-r-[.4rem] 
                    active:bg-SpaceBlueSelected'
                    type="submit"
                    >Send</button>
                </div>
            </div>
        </form>
  )
}

export default EmailInput
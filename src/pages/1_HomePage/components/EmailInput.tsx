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
            <div className='
            flex flex-col 
            w-[14.233rem] 
            mobile:w-[18.978rem]
            sMobile:w-[30.364rem] 
            mMobile:w-[36.438rem] 
            sLaptop:w-[19rem] 
            mLaptop:w-[22rem] 
            desktop:w-[25rem] 
            largeDesktop:w-[29rem]
            relative
            '>
                <label 
                htmlFor="email"
                className='
                relative
                text-[1.007rem]
                mobile:text-[1.343rem] 
                sMobile:text-[2.149rem] 
                mMobile:text-[2.578rem]
                leading-tight
                sLaptop:text-[1.25rem] sLaptopS:leading-[1.5rem]
                mLaptop:text-[1.625rem] mLaptop:leading-[1.8rem]
                desktop:text-[1.875rem] desktop:leading-[2rem]
                largeDesktop:text-[2.25rem] largeDesktop:leading-[2.5rem]
                text-PrimaryWhite

                font-medium
                pb-[0.223rem]
                mobile:pb-[0.318rem]
                sMobile:pb-[0.571rem]
                mMobile:pb-[0.672rem]
                desktop:pb-[.5rem]
                '>Newspaper:
                {
                    iserror &&
                <p className="
                absolute
                right-0 
                top-0
                sLaptop:top-[calc(50%-(1.25rem/2))]
                mLaptop:top-[calc(50%-(1.55rem/2))]
                desktop:top-[calc(50%-(1.8rem/2))]
                largeDesktop:top-[calc(50%-(2.5rem/2))]
                text-[0.878rem]
                leading-[1.258rem]
                mobile:text-[1.171rem]
                mobile:leading-[1.678rem]
                sMobile:text-[1.874rem]
                sMobile:leading-[2.686rem]
                mMobile:text-[2.25rem]
                mMobile:leading-[3.223rem]
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
                top-0
                sLaptop:top-[calc(50%-(1.25rem/2))]
                mLaptop:top-[calc(50%-(1.55rem/2))]
                desktop:top-[calc(50%-(1.8rem/2))]
                largeDesktop:top-[calc(50%-(2.5rem/2))]
                text-[0.878rem]
                leading-[1.258rem]
                mobile:text-[1.171rem]
                mobile:leading-[1.678rem]
                sMobile:text-[1.874rem]
                sMobile:leading-[2.686rem]
                mMobile:text-[2.25rem]
                mMobile:leading-[3.223rem]
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
                    font-medium

                    h-[1.953rem]
                    mobile:h-[2.604rem]
                    sMobile:h-[4.166rem]
                    mMobile:h-[5rem]
                    px-[4.11%]
                    sLaptop:h-auto
                    sLaptop:px-3 sLaptop:py-2
                    largeDesktop:px-4 largeDesktop:py-3

                    rounded-l-[0.269rem]
                    mobile:rounded-l-[0.358rem]
                    sMobile:rounded-l-[0.573rem]
                    mMobile:rounded-l-[0.688rem]
                    sLaptop:rounded-l-[.4rem]
                    
                    w-[88%]

                    text-[0.976rem]
                    mobile:text-[1.302rem]
                    sMobile:text-[2.083rem]
                    mMobile:text-[2.5rem]
                    leading-[1.679rem]
                    mobile:leading-[2.238rem]
                    sMobile:leading-[3.581rem]
                    mMobile:leading-[4.297rem]
                    sLaptop:leading-normal
                    sLaptop:text-xl
                    mLaptop:text-2xl 
                    desktop:text-3xl
                    largeDesktop:text-4xl

                    focus:outline-none 

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
                    px-[0.913rem]
                    mobile:px-[1.219rem]
                    sMobile:px-[1.951rem]
                    mMobile:px-[2.342rem]
                    sLaptop:px-5 
                    font-medium

                    text-[0.976rem]
                    mobile:text-[1.302rem]
                    sMobile:text-[2.083rem]
                    mMobile:text-[2.5rem]
                    leading-none
                    sLaptop:leading-normal
                    sLaptop:text-xl
                    mLaptop:text-2xl 
                    desktop:text-3xl
                    largeDesktop:text-4xl

                    bg-SpaceBlue 
                    text-PrimaryWhite

                    rounded-r-[0.269rem]
                    mobile:rounded-r-[0.358rem]
                    sMobile:rounded-r-[0.573rem]
                    mMobile:rounded-r-[0.688rem]
                    sLaptop:rounded-l-[0rem]

                    active:bg-SpaceBlueSelected'
                    type="submit"
                    >Send</button>
                </div>
            </div>
        </form>
  )
}

export default EmailInput
import React from "react"

const EmailInput = () => {

    const [inputValue, setInputValue] = React.useState<string>('')

  return (
        <div className='flex flex-col sLaptop:w-[19rem]  mLaptop:w-[22rem] desktop:w-[25rem] largeDesktop:w-[29rem]'>
            <label className='
            text-2xl
            sLaptop:text-[1.25rem] sLaptop:leading-[1.5rem]
            mLaptop:text-[1.625rem] mLaptop:leading-[1.8rem]
            desktop:text-[1.875rem] desktop:leading-[2rem]
            largeDesktop:text-[2.25rem] largeDesktop:leading-[2.5rem]
            text-PrimaryWhite
            font-medium
            pb-[.45rem] 
            desktop:pb-[.5rem]
            '>Newspaper:</label>
                
            <div className='flex'>
                <input className='
                px-3 py-2 
                largeDesktop:px-4 largeDesktop:py-3
                rounded-l-[.4rem]
                w-[88%]
                text-2xl
                sLaptop:text-xl
                mLaptop:text-2xl 
                desktop:text-3xl
                largeDesktop:text-4xl
                focus:outline-none 
                font-medium
                ' 
                value={inputValue}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setInputValue(e.target.value)} type="text" placeholder='Enter your email..' />
                <button className='
                py-2 px-5 
                font-medium
                text-2xl
                sLaptop:text-xl
                mLaptop:text-2xl 
                desktop:text-3xl
                largeDesktop:text-4xl
                bg-SpaceBlue 
                text-PrimaryWhite
                rounded-r-[.4rem] 
                active:bg-SpaceBlueSelected'>Send</button>
            </div>
        </div>
  )
}

export default EmailInput
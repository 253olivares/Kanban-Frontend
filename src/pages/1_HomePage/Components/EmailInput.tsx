import React from "react"

const EmailInput = () => {

    const [inputValue, setInputValue] = React.useState<string>('')

  return (
        <div className='flex flex-col w-[22rem] '>
            <label className='
            text-[1.625rem] leading-[1.8rem]
            text-PrimaryWhite
            font-medium
            pb-[.45rem]
            '>Newspaper:</label>
                
            <div className='flex'>
                <input className='
                px-3 py-2 
                rounded-l-[.4rem]
                w-[88%]
                text-2xl 
                focus:outline-none 
                font-medium
                ' 
                value={inputValue}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setInputValue(e.target.value)} type="text" placeholder='Enter your email..' />
                <button className='
                py-2 px-5 
                font-medium
                text-2xl bg-SpaceBlue 
                text-PrimaryWhite
                rounded-r-[.4rem] 
                active:bg-SpaceBlueSelected'>Send</button>
            </div>
        </div>
  )
}

export default EmailInput
import React from 'react'
import x from '/assets/x_Icon.svg'
import check from '/assets/Check_MarkIcon.svg'

const index = React.memo(({reqs}: {reqs:Record<string,Boolean>}) => {
  return (
    <div>
      <p className='
      font-normal 
      mb-3
      sLaptop:mb-[.25rem]
      desktop:mb-2
      largeDesktop:mb-[.65rem]
      text-[1rem]
      sMobile:text-2xl
      sLaptop:text-[.9rem]
      mLaptop:text-base
      desktop:text-lg
      largeDesktop:text-2xl
      leading-tight'>Requirements:</p>
      <div className='flex gap-7'>
        <div className='flex flex-col gap-[1rem] sLaptop:gap-[.5rem] largeDesktop:gap-[.75rem]'>
          <div className='flex items-center gap-3'>
            <img className=' w-4 mMobile:w-5 sLaptop:w-[.75rem] mLaptop:w-[.9rem] desktop:w-4 largeDesktop:w-[1.25rem]' src={reqs.charLimit ? check : x} alt="" />
            <p className=' text-xs sMobile:text-[1.2rem] mMobile:text-[1.5rem] sLaptop:text-[.775rem] mLaptop:text-[.95rem] desktop:text-base largeDesktop:text-xl leading-snu'>12 Characters</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className=' w-4 mMobile:w-5 sLaptop:w-[.75rem] mLaptop:w-[.9rem] desktop:w-4 largeDesktop:w-[1.25rem]' src={reqs.numReq ? check : x} alt="" />
            <p className=' text-xs sMobile:text-[1.2rem] mMobile:text-[1.5rem] sLaptop:text-[.775rem] mLaptop:text-[.95rem] desktop:text-base largeDesktop:text-xl leading-snu'>Least 1 number</p>
          </div>
        </div>
        <div className='flex flex-col gap-[1rem] sLaptop:gap-[.5rem] largeDesktop:gap-[.75rem]'>
          <div className='flex items-center gap-3'>
            <img className=' w-4 mMobile:w-5 sLaptop:w-[.75rem] mLaptop:w-[.9rem] desktop:w-4 largeDesktop:w-[1.25rem]' src={reqs.specialChar ? check : x} alt="" />
            <p className=' text-xs sMobile:text-[1.2rem] mMobile:text-[1.5rem] sLaptop:text-[.775rem] mLaptop:text-[.95rem] desktop:text-base largeDesktop:text-xl leading-snug'>Least 1 special character</p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default index
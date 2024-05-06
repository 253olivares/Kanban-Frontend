import x from '/assets/x_Icon.svg'
import check from '/assets/Check_MarkIcon.svg'

const index = ({reqs}: {reqs:Record<string,Boolean>}) => {
  return (
    <div className='flex flex-col'>
      <span className='
       font-normal
        text-[1rem]
        mb-[.8rem]
       sMobile:text-[1.5rem]
       sMobile:mb-[1rem]
       mMobile:text-[1.75rem]
       mMobile:mb-[1.15rem]
       sLaptop:text-[.85rem]
       sLaptop:mb-[.25rem]
       mLaptop:text-[1.15rem] 
        mLaptop:mb-[.5rem]
       leading-none
      '>Requirements:</span>
      <div className='flex gap-7'>
        <div className='flex flex-col gap-[1.5rem] sLaptop:gap-[.25rem] mLaptop:gap-[.5rem] largeDesktop:gap-[.75rem]'>
          <div className='flex items-center gap-3'>
            <img className=' w-4 h-4 mMobile:w-6 mMobile:h-6 sLaptop:h-auto sLaptop:w-[.75rem] mLaptop:w-[.9rem] desktop:w-4 largeDesktop:w-[1.25rem]' src={reqs.charLimit ? check : x} alt="" />
            <p className=' text-xs sMobile:text-[1.2rem] mMobile:text-[1.5rem] sLaptop:text-[.775rem] mLaptop:text-[.95rem] desktop:text-base largeDesktop:text-xl leading-snu'>12 Characters</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className=' w-4 h-4 mMobile:w-6 mMobile:h-6 sLaptop:h-auto sLaptop:w-[.75rem] mLaptop:w-[.9rem] desktop:w-4 largeDesktop:w-[1.25rem]' src={reqs.numReq ? check : x} alt="" />
            <p className=' text-xs sMobile:text-[1.2rem] mMobile:text-[1.5rem] sLaptop:text-[.775rem] mLaptop:text-[.95rem] desktop:text-base largeDesktop:text-xl leading-snu'>Least 1 number</p>
          </div>
        </div>
        <div className='flex flex-col gap-[1.5rem] sLaptop:gap-[.25rem] mLaptop:gap-[.5rem] largeDesktop:gap-[.75rem]'>
          <div className='flex items-center gap-3'>
            <img className=' w-4 mMobile:w-5 sLaptop:w-[.75rem] mLaptop:w-[.9rem] desktop:w-4 largeDesktop:w-[1.25rem]' src={reqs.specialChar ? check : x} alt="" />
            <p className=' text-xs sMobile:text-[1.2rem] mMobile:text-[1.5rem] sLaptop:text-[.775rem] mLaptop:text-[.95rem] desktop:text-base largeDesktop:text-xl leading-snug'>Least 1 special character</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
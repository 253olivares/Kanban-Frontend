import x from '/assets/x_Icon.svg'
import check from '/assets/Check_MarkIcon.svg'

const index = ({reqs}: {reqs:Record<string,Boolean>}) => {
  return (
    <div className='flex flex-col'>
      <span className='
       font-normal

       mb-[0.298rem]
       mobile:mb-[0.377rem]
       sMobile:mb-[0.603rem]
       mMobile:mb-[0.711rem]
       sLaptop:mb-[.25rem]
       mLaptop:mb-[.5rem]

       text-[0.683rem]
       mobile:text-[0.911rem]
       sMobile:text-[1.458rem]
       mMobile:text-[1.75rem]
       sLaptop:text-[.85rem]
       mLaptop:text-[1.15rem] 

       leading-tight
      '>Requirements:</span>
      <div className='flex 
      gap-[1.159rem]
      mobile:gap-[1.546rem]
      sMobile:gap-[2.474rem]
      mMobile:gap-[2.969rem]'>
        <div className='
        flex flex-col 
        gap-[0.348rem] 
        mobile:gap-[0.464rem]
        sMobile:gap-[0.743rem]
        mMobile:gap-[0.891rem]
        sLaptop:gap-[.25rem] 
        mLaptop:gap-[.5rem] 
        largeDesktop:gap-[.75rem]'>
          <div className='
          flex items-center 
          gap-[0.348rem]
          mobile:gap-[0.464rem]
          sMobile:gap-[0.743rem]
          mMobile:gap-[0.891rem]'>
            <img className='
            w-[0.585rem] h-[0.585rem]
            mobile:w-[0.781rem] mobile:h-[0.781rem]
            sMobile:w-[1.249rem] sMobile:h-[1.249rem]
            mMobile:w-[1.5rem] mMobile:h-[1.5rem]
            sLaptop:h-auto sLaptop:w-[.75rem] 
            mLaptop:w-[.9rem] desktop:w-4 
            largeDesktop:w-[1.25rem]' src={reqs.charLimit ? check : x} alt="" />
            <p className='
            text-[.585rem]
            mobile:text-[0.781rem]
            sMobile:text-[1.263rem] 
            mMobile:text-[1.5rem] 
            sLaptop:text-[.775rem] 
            mLaptop:text-[.95rem] 
            desktop:text-base 
            largeDesktop:text-xl 
            leading-snug'>12 Characters</p>
          </div>
          <div className='
          flex items-center 
          gap-[0.348rem]
          mobile:gap-[0.464rem]
          sMobile:gap-[0.743rem]
          mMobile:gap-[0.891rem]'>
            <img className='
            w-[0.585rem] h-[0.585rem]
            mobile:w-[0.781rem] mobile:h-[0.781rem]
            sMobile:w-[1.249rem] sMobile:h-[1.249rem]
            mMobile:w-[1.5rem] mMobile:h-[1.5rem]
            sLaptop:h-auto sLaptop:w-[.75rem] 
            mLaptop:w-[.9rem] desktop:w-4 
            largeDesktop:w-[1.25rem]
            ' src={reqs.numReq ? check : x} alt="" />
            <p className=' 
            text-[.585rem]
            mobile:text-[0.781rem]
            sMobile:text-[1.263rem] 
            mMobile:text-[1.5rem] 
            sLaptop:text-[.775rem] 
            mLaptop:text-[.95rem] 
            desktop:text-base 
            largeDesktop:text-xl 
            leading-snug'>Least 1 number</p>
          </div>
        </div>
        <div className='
        flex flex-col 
        gap-[0.348rem] 
        mobile:gap-[0.464rem]
        sMobile:gap-[0.743rem]
        mMobile:gap-[0.891rem]
        sLaptop:gap-[.25rem] 
        mLaptop:gap-[.5rem] 
        largeDesktop:gap-[.75rem]'>
          <div className='
          flex items-center 
          gap-[0.348rem]
          mobile:gap-[0.464rem]
          sMobile:gap-[0.743rem]
          mMobile:gap-[0.891rem]'>
            <img className='
            w-[0.585rem] h-[0.585rem]
            mobile:w-[0.781rem] mobile:h-[0.781rem]
            sMobile:w-[1.249rem] sMobile:h-[1.249rem]
            mMobile:w-[1.5rem] mMobile:h-[1.5rem]
            sLaptop:h-auto sLaptop:w-[.75rem] 
            mLaptop:w-[.9rem] desktop:w-4 
            largeDesktop:w-[1.25rem]
             ' src={reqs.specialChar ? check : x} alt="" />
            <p className=' 
            text-[.585rem]
            mobile:text-[0.781rem]
            sMobile:text-[1.263rem] 
            mMobile:text-[1.5rem] 
            sLaptop:text-[.775rem] 
            mLaptop:text-[.95rem] 
            desktop:text-base 
            largeDesktop:text-xl 
            leading-snug
            '>Least 1 special character</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
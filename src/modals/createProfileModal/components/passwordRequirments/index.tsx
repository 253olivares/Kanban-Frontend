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
       sLaptop:mb-[0.317rem]
       mLaptop:mb-[0.396rem]
       desktop:mb-[0.475rem]
       largeDesktop:mb-[0.563rem]


       text-[0.683rem]
       mobile:text-[0.911rem]
       sMobile:text-[1.458rem]
       mMobile:text-[1.75rem]
       sLaptop:text-[0.799rem]
       mLaptop:text-[0.999rem] 
       desktop:text-[1.2rem]
       largeDesktop:text-[1.5rem]
       leading-none
      '>Requirements:</span>
      <div className='flex 
      gap-[1.159rem]
      mobile:gap-[1.546rem]
      sMobile:gap-[2.474rem]
      mMobile:gap-[2.969rem]
      sLaptop:gap-[1.255rem]
      mLaptop:gap-[1.569rem]
      desktop:gap-[1.883rem]
      largeDesktop:gap-[2.353rem]
      '>
        <div className='
        flex flex-col 
        gap-[0.348rem] 
        mobile:gap-[0.464rem]
        sMobile:gap-[0.743rem]
        mMobile:gap-[0.891rem]
        sLaptop:gap-[0.376rem] 
        mLaptop:gap-[0.471rem]
        desktop:gap-[0.565rem] 
        largeDesktop:gap-[0.706rem]'>
          <div className='
          flex items-center 
          gap-[0.348rem]
          mobile:gap-[0.464rem]
          sMobile:gap-[0.743rem]
          mMobile:gap-[0.891rem]
          sLaptop:gap-[0.376rem]
          mLaptop:gap-[0.471rem]
          desktop:gap-[0.565rem]
          largeDesktop:gap-[0.706rem]
          '>
            <img className='
            w-[0.585rem] h-[0.585rem]
            mobile:w-[0.781rem] mobile:h-[0.781rem]
            sMobile:w-[1.249rem] sMobile:h-[1.249rem]
            mMobile:w-[1.5rem] mMobile:h-[1.5rem]
            sLaptop:h-auto 
            sLaptop:w-[0.773rem] 
            mLaptop:w-[0.966rem] 
            desktop:w-[1.16rem]
            largeDesktop:w-[1.45rem]
            ' src={reqs.charLimit ? check : x} alt="" />
            <p className='
            text-[.585rem]
            mobile:text-[0.781rem]
            sMobile:text-[1.263rem] 
            mMobile:text-[1.5rem] 
            sLaptop:text-[0.666rem] 
            mLaptop:text-[0.833rem] 
            desktop:text-[1rem]
            largeDesktop:text-[1.25rem]
            leading-snug'>8 Characters</p>
          </div>
          <div className='
          flex items-center 
          gap-[0.348rem]
          mobile:gap-[0.464rem]
          sMobile:gap-[0.743rem]
          mMobile:gap-[0.891rem]
          sLaptop:gap-[0.376rem]
          mLaptop:gap-[0.471rem]
          desktop:gap-[0.565rem]
          largeDesktop:gap-[0.706rem]
          '>
            <img className='
            w-[0.585rem] h-[0.585rem]
            mobile:w-[0.781rem] mobile:h-[0.781rem]
            sMobile:w-[1.249rem] sMobile:h-[1.249rem]
            mMobile:w-[1.5rem] mMobile:h-[1.5rem]
            sLaptop:h-auto 
            sLaptop:w-[0.773rem] 
            mLaptop:w-[0.966rem] 
            desktop:w-[1.16rem]
            largeDesktop:w-[1.45rem]
            ' src={reqs.numReq ? check : x} alt="" />
            <p className=' 
            text-[.585rem]
            mobile:text-[0.781rem]
            sMobile:text-[1.263rem] 
            mMobile:text-[1.5rem] 
            sLaptop:text-[0.666rem] 
            sLaptop:leading-[0.773rem]
            mLaptop:text-[0.833rem] 
            mLaptop:leading-[0.966rem]
            desktop:text-[1rem]
            desktop:leading-[1.16rem]
            largeDesktop:text-[1.25rem]
            largeDesktop:leading-[1.45rem]
            leading-snug'>Least 1 number</p>
          </div>
        </div>
        <div className='
        flex flex-col 
        gap-[0.348rem] 
        mobile:gap-[0.464rem]
        sMobile:gap-[0.743rem]
        mMobile:gap-[0.891rem]
        sLaptop:gap-[0.376rem] 
        mLaptop:gap-[0.471rem]
        desktop:gap-[0.565rem] 
        largeDesktop:gap-[0.706rem]
        '>
          <div className='
          flex items-center 
          gap-[0.348rem]
          mobile:gap-[0.464rem]
          sMobile:gap-[0.743rem]
          mMobile:gap-[0.891rem]
          sLaptop:gap-[0.376rem]
          mLaptop:gap-[0.471rem]
          desktop:gap-[0.565rem]
          largeDesktop:gap-[0.706rem]'>
            <img className='
             w-[0.585rem] h-[0.585rem]
             mobile:w-[0.781rem] mobile:h-[0.781rem]
             sMobile:w-[1.249rem] sMobile:h-[1.249rem]
             mMobile:w-[1.5rem] mMobile:h-[1.5rem]
             sLaptop:h-auto 
             sLaptop:w-[0.773rem] 
             mLaptop:w-[0.966rem] 
             desktop:w-[1.16rem]
             largeDesktop:w-[1.45rem]
             ' src={reqs.specialChar ? check : x} alt="" />
            <p className=' 
            text-[.585rem]
            mobile:text-[0.781rem]
            sMobile:text-[1.263rem] 
            mMobile:text-[1.5rem] 
            sLaptop:text-[0.666rem] 
            mLaptop:text-[0.833rem] 
            desktop:text-[1rem]
            largeDesktop:text-[1.25rem]
            leading-snug
            '>Least 1 special character</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
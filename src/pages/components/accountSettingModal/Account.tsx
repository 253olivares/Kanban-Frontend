import { memo } from "react"
import { user } from "../../../reduxStore/users/userSlice"

const Account = memo(({user}: {user:user}) => {
  return (
    <div className="
    w-full
    ">
        <div className="
          flex
          justify-center

          gap-[0.976rem]
          mobile:gap-[1.302rem]
          sMobile:gap-[2.083rem]
          mMobile:gap-[2.5rem]
          sLaptop:gap-[0.625rem]
          mLaptop:gap-[0.781rem]
          desktop:gap-[0.938rem]
          largeDesktop:gap-[1.172rem]
          4k:gap-[1.563rem]

          py-[0.854rem]
          mobile:py-[1.139rem]
          sMobile:py-[1.823rem]
          mMobile:py-[2.188rem]
          sLaptop:py-[1.016rem]
          mLaptop:py-[1.270rem]
          desktop:py-[1.524rem]
          largeDesktop:py-[1.906rem]
          4k:py-[2.541rem]

          mx-auto

          "> 
            <div className="
            flex-grow-0

            p-[0.099rem]
            mobile:p-[0.133rem]
            sMobile:p-[0.212rem]
            mMobile:p-[0.254rem]
            sLaptop:p-[0.11rem]
            mLaptop:p-[0.138rem]
            desktop:p-[0.166rem]
            largeDesktop:p-[0.207rem]
            4k:p-[0.276rem]

            rounded-full
            linear-gradientFooter
            ">
              <img 
              className="
              w-[2.319rem]
              mobile:w-[3.093rem]
              sMobile:w-[4.948rem]
              mMobile:w-[5.938rem]
              sLaptop:w-[2.574rem]
              mLaptop:w-[3.217rem]
              desktop:w-[3.86rem]
              largeDesktop:w-[4.826rem]
              4k:w-[6.434rem]

              rounded-full
              "
              src={`${user.pfp}`} alt="" />
            </div>
            <div className="
            flex 
            flex-col
            justify-center

            gap-[0.226rem]
            mobile:gap-[0.302rem]
            sMobile:gap-[0.483rem]
            mMobile:gap-[0.579rem]
        
            ">
              <h1 className="
              text-PrimaryWhite
              font-medium

              text-[0.976rem]
              mobile:text-[1.302rem]
              sMobile:text-[2.083rem]
              mMobile:text-[2.5rem]
              sLaptop:text-[0.919rem]
              mLaptop:text-[1.149rem]
              desktop:text-[1.379rem]
              largeDesktop:text-[1.723rem]
              4k:text-[2.298rem]

              sLaptop:max-w-[8.333rem]
              mLaptop:max-w-[10.416rem]
              desktop:max-w-[12.5rem]
              largeDesktop:max-w-[15.625rem]
              overflow-hidden
              text-ellipsis

              leading-tight
              ">{user.username}</h1>
              <p className="
              font-medium
              text-PrimaryWhite

              text-[0.561rem]
              mobile:text-[0.749rem]
              sMobile:text-[1.198rem]
              mMobile:text-[2.083rem]
              sLaptop:text-[0.551rem]
              mLaptop:text-[0.689rem]
              desktop:text-[0.828rem]
              largeDesktop:text-[1.034rem]
              4k:text-[1.379rem]

              sLaptop:max-w-[8.333rem]
              mLaptop:max-w-[10.416rem]
              desktop:max-w-[12.5rem]
              largeDesktop:max-w-[15.625rem]
              text-ellipsis

              opacity-50
              leading-tight
              ">{user.email}</p>
            </div>  
        </div>
    </div>
  )
})

export default Account
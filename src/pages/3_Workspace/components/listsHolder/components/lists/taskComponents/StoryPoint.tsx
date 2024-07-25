
const StoryPoint = ({
  points
} : {
  points:number
}) => {
  return (
    <div className="
      flex
      flex-row

      pb-[1.123rem]
      mobile:pb-[1.497rem]
      sMobile:pb-[2.395rem]
      mMobile:pb-[2.875rem]

      sLaptop:pb-[0.933rem]
      mLaptop:pb-[1.166rem]
      desktop:pb-[1.4rem]
      largeDesktop:pb-[1.75rem]
    
      justify-center
    ">
      <div className="

        relative

        w-[2.734rem]
        mobile:w-[3.645rem]
        sMobile:w-[5.833rem]
        mMobile:w-[7rem]

        sLaptop:w-[2.933rem]
        mLaptop:w-[3.666rem]
        desktop:w-[4.4rem]
        largeDesktop:w-[5.5rem]

        h-[2.734rem]
        mobile:h-[3.645rem]
        sMobile:h-[5.833rem]
        mMobile:h-[7rem]

        sLaptop:h-[2.933rem]
        mLaptop:h-[3.666rem]
        desktop:h-[4.4rem]
        largeDesktop:h-[5.5rem]

        rounded-full

        bg-SpaceBlue

        flex
        justify-center
        items-center
      ">
        <h1 className="

          text-[0.683rem]
          mobile:text-[0.911rem]
          sMobile:text-[1.458rem]
          mMobile:text-[1.75rem]

          sLaptop:text-[0.613rem]
          mLaptop:text-[0.766rem]
          desktop:text-[0.92rem]
          largeDesktop:text-[1.15rem]
          text-PrimaryWhite

          font-medium

          absolute

          leading-none

          bottom-[5%]
          sLaptop:bottom-[10%]
          left-[-40%]
          sLaptop:left-[-27.5%]
        ">
          Story <br />
          Point
        </h1>
        <span
         className="
          font-bold

          text-[1.269rem]
          mobile:text-[1.692rem]
          sMobile:text-[2.708rem]
          mMobile:text-[3.25rem]

          sLaptop:text-[1.333rem]
          mLaptop:text-[1.666rem]
          desktop:text-[2rem]
          largeDesktop:text-[2.5rem]

          text-PrimaryWhite
         "
        >{points}</span>
      </div>
    </div>
  )
}

export default StoryPoint
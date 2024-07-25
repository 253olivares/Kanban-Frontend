
const StoryPoint = () => {
  return (
    <div className="
      flex
      flex-row

      sLaptop:pb-[0.933rem]
      mLaptop:pb-[1.166rem]
      desktop:pb-[1.4rem]
      largeDesktop:pb-[1.75rem]
    
      justify-center
    ">
      <div className="

        relative

        sLaptop:w-[2.933rem]
        mLaptop:w-[3.666rem]
        desktop:w-[4.4rem]
        largeDesktop:w-[5.5rem]

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
          sLaptop:text-[0.613rem]
          mLaptop:text-[0.766rem]
          desktop:text-[0.92rem]
          largeDesktop:text-[1.15rem]
          text-PrimaryWhite

          font-medium

          absolute

          leading-none

          bottom-[10%]
          left-[-27.5%]
        ">
          Story <br />
          Point
        </h1>
        <span
         className="
          font-medium

          sLaptop:text-[1.333rem]
          mLaptop:text-[1.666rem]
          desktop:text-[2rem]
          largeDesktop:text-[2.5rem]

          text-PrimaryWhite
         "
        >0</span>
      </div>
    </div>
  )
}

export default StoryPoint
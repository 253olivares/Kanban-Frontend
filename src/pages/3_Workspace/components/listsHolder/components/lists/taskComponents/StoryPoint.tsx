
const StoryPoint = () => {
  return (
    <div className="
      flex
      flex-row

      sLaptop:pb-
      mLaptop:pb-[]
      desktop:pb-[]
      largeDesktop:pb-[1.75rem]
    
      justify-center
    ">
      <div className="

        relative

        sLaptop:w-[]
        mLaptop:w-[]
        desktop:w-[]
        largeDesktop:w-[5.5rem]

        sLaptop:h-[]
        mLaptop:h-[]
        desktop:h-[]
        largeDesktop:h-[5.5rem]

        rounded-full

        bg-SpaceBlue

        flex
        justify-center
        items-center
      ">
        <h1 className="
          text-[1.15rem]
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

          sLaptop:text-[]
          mLaptop:text-[]
          desktop:text-[]
          largeDesktop:text-[2.5rem]

          text-PrimaryWhite
         "
        >0</span>
      </div>
    </div>
  )
}

export default StoryPoint
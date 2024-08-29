import { memo } from 'react'

const StoryPoint = memo((
    {
        storyPoint
    } : {
        storyPoint:number
    }
) => {
  return (
    <div className='
    flex
    flex-col

    justify-between
    '>
        <StoryPointContent storyPoint ={storyPoint} />
    </div>
  )
})

const StoryPointContent = memo((
    {
        storyPoint
    } : {
        storyPoint:number
    }
) => {
    return <div
     className='
     rounded-full

     bg-SpaceBlue

     sLaptop:h-[4.048rem]
     mLaptop:h-[5.060rem]
     desktop:h-[6.073rem]
     largeDesktop:h-[7.591rem]

     sLaptop:w-[4.048rem]
     mLaptop:w-[5.060rem]
     desktop:w-[6.073rem]
     largeDesktop:w-[7.591rem]

     sLaptop:mt-[calc(-4.048rem/6)]
     mLaptop:mt-[calc(-5.060rem/6)]
     desktop:mt-[calc(-6.073rem/6)]
     largeDesktop:mt-[calc(-7.591rem/6)]

     flex
     justify-center
     items-center

     sLaptop:text-[1.493rem]
     mLaptop:text-[1.866rem]
     desktop:text-[2.24rem]
     largeDesktop:text-[2.8rem]
     text-PrimaryWhite

     font-bold

     relative
     '
    >   
        {storyPoint}
        <StoryText />
    </div>
})

const StoryText = memo(()=>{
    return <h1 className="
  
    sLaptop:text-[0.833rem]
    mLaptop:text-[1.041rem]
    desktop:text-[1.25rem]
    largeDesktop:text-[1.562rem]
    text-PrimaryWhite
  
    font-medium
  
    absolute
  
    bottom-[5%]
    left-[-25%]
  
    leading-tight
  ">
    Story <br />
    Point
  </h1>
})

export default StoryPoint
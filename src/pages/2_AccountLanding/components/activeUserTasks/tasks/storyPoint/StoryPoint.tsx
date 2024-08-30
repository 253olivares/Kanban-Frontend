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

     h-[2.783rem]
     mobile:h-[3.711rem]
     sMobile:h-[5.938rem]
     mMobile:h-[7.125rem]

     sLaptop:h-[4.048rem]
     mLaptop:h-[5.060rem]
     desktop:h-[6.073rem]
     largeDesktop:h-[7.591rem]

     w-[2.783rem]
     mobile:w-[3.711rem]
     sMobile:w-[5.938rem]
     mMobile:w-[7.125rem]

     sLaptop:w-[4.048rem]
     mLaptop:w-[5.060rem]
     desktop:w-[6.073rem]
     largeDesktop:w-[7.591rem]

     mt-[calc(-2.783rem/6)]
     mobile:mt-[calc(-3.711em/6)]
     sMobile:mt-[calc(-5.938rem/6)]
     mMobile:mt-[calc(-7.125rem/6)]

     sLaptop:mt-[calc(-4.048rem/6)]
     mLaptop:mt-[calc(-5.060rem/6)]
     desktop:mt-[calc(-6.073rem/6)]
     largeDesktop:mt-[calc(-7.591rem/6)]

     flex
     justify-center
     items-center

     text-[1.230rem]
     mobile:text-[1.640rem]
     sMobile:text-[2.625rem]
     mMobile:text-[3.15rem]

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
  
    text-[0.528rem]
    mobile:text-[0.705rem]
    sMobile:text-[1.128rem]
    mMobile:text-[1.353rem]

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
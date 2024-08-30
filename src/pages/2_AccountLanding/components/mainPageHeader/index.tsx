import { memo } from 'react';
import FilterList from '../taskFilter/TaskFilter';

const index =memo(() => {
  return (
    <div className="
    w-full
    flex
    flex-row
    justify-between

    items-center

    pt-[0.786rem]
    mobile:pt-[1.049rem]
    sMobile:pt-[1.678rem]
    mMobile:pt-[2.013rem]
    sLaptop:pt-[1.766rem]
    mLaptop:pt-[2.208rem]
    desktop:pt-[2.650rem]
    largeDesktop:pt-[3.313rem]
    4k:pt-[4.417rem]

    pb-[0.761rem]
    mobile:pb-[1.015rem]
    sMobile:pb-[1.625rem]
    mMobile:pb-[1.95rem]
    sLaptop:pb-[0.916rem]
    mLaptoP:pb-[1.145rem]
    desktop:pb-[1.375rem]
    largeDesktop:pb-[1.718rem]
    4k:pb-[2.291rem]

    px-[6.5%]
    sLaptop:px-[11%]
    ">
      <h1 className="

      text-[1.074rem]
      mobile:text-[1.433rem]
      sMobile:text-[2.292rem]
      mMobile:text-[2.75rem]
      sLaptop:text-[1.667rem]
      mLaptop:text-[2.083rem]
      desktop:text-[2.5rem]
      largeDesktop:text-[3.125rem]
      4k:text-[4.166rem]

      leading-snug
      
      font-bold

      text-white
      ">
        Current Tasks
      </h1>
      <FilterList />
    </div>
  )
})

export default index
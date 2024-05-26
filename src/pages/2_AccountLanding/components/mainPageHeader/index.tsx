import FilterList from '../taskFilter';

const index = () => {
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

    pb-[0.268rem]
    mobile:pb-[0.358rem]
    sMobile:pb-[0.573rem]
    mMobile:pb-[0.687rem]
    sLaptop:pb-[0.458rem]
    mLaptoP:pb-[0.572rem]
    desktop:pb-[0.687rem]
    largeDesktop:pb-[0.859rem]

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
      leading-snug
      
      font-bold

      text-white
      ">
        Current Tasks
      </h1>
      <FilterList />
    </div>
  )
}

export default index
import { useContext, useEffect, useState } from "react"

import { getFilters } from "../../../../reduxStore/tasks/tasksSlice";
import { useAppSelector } from "../../../../reduxStore/hook";
import { AppContext } from "../../../appRefContext";

import arrow from '/assets/Polygon_4.svg'

import FilterLabels from './label'


const index = () => {

  // @ts-ignore
    const [openModal, setOpenModal] = useState<boolean>(false);

    const appContext= useContext(AppContext);
    const {filterRef,filterRefHead} = appContext!;

    const filters = useAppSelector(getFilters);


    const listening = (e:MouseEvent | TouchEvent) => {
      
      if(filterRef.current && !filterRef.current.contains(e.target as Node)){

        if(filterRefHead.current && !filterRefHead.current.contains(e.target as Node)) setOpenModal(false);
      
        window.removeEventListener('click',listening,true);
      } 
    }

    useEffect(()=> {
      return () => {
        window.removeEventListener('click',listening,true);
      }
    },[]);

  return (
    <div className="
    relative
    ">
      <div
      ref={filterRefHead}
      onClick={()=> {
        if(!openModal) {
          setOpenModal(true)
          window.addEventListener('click',listening,true);
        } else {
          setOpenModal(false)
        }
      }}
      className="
      relative
      z-[5]

      flex flex-row

      linear-gradientFooter2

      items-center

      sLaptop:gap-[0.900rem]
      mLaptop:gap-[1.125rem]
      desktop:gap-[1.350rem]
      largeDesktop:gap-[1.688rem]

      rounded-[0.218rem]
      mobile:rounded-[0.291rem]
      sMobile:rounded-[0.465rem]
      mMobile:rounded-[0.558rem]
      sLaptop:rounded-[0.297rem]
      mLaptop:rounded-[0.371rem]
      desktop:rounded-[0.445rem]
      largeDesktop:rounded-[0.557rem]

      py-[0.244rem]
      mobile:py-[0.325rem]
      sMobile:py-[0.520rem]
      mMobile:py-[0.625rem]
      sLaptop:py-[0.333rem]
      mLaptop:py-[0.416rem]
      desktop:py-[0.5rem]
      largeDesktop:py-[0.625rem]

      px-[1.025rem]
      mobile:px-[1.367rem]
      sMobile:px-[2.187rem]
      mMobile:px-[2.625rem]
      sLaptop:px-[0.500rem]
      mLaptop:px-[0.625rem]
      desktop:px-[0.750rem]
      largeDesktop:px-[0.938rem]

      sLaptop:hover:cursor-pointer
      ">
        <span className="
        text-[0.763rem]
        mobile:text-[1.017rem]
        sMobile:text-[1.628rem]
        mMobile:text-[1.953rem]
        sLaptop:text-[1.039rem]
        mLaptop:text-[1.299rem]
        desktop:text-[1.559rem]
        largeDesktop:text-[1.949rem]

        leading-none

        font-bold

        text-PrimaryWhite
        ">Filter List</span>
        <img className={`
        hidden
        sLaptop:block
        sLaptop:w-[0.933rem]
        mLaptop:w-[1.166rem]
        desktop:w-[1.4rem]
        largeDesktop:w-[1.75rem]

        ${
          openModal ?
          'rotate-[270deg]'
          :
          'rotate-90'
        }
        transition-[transform]
        duration-300
        `}
        
        src={arrow} alt="Arrow" />
      </div>
      <div
      ref={filterRef}
      className={`
      absolute

      w-full
      bg-PrimaryWhite

      dropDownShadow
    
      sLaptop:rounded-b-[0.237rem]
      mLaptop:rounded-b-[0.371rem]
      desktop:rounded-b-[0.446rem]
      largeDesktop:rounded-b-[0.557rem]

      min-h-28

      sLaptop:top-[calc(100%-0.533rem)]
      mLaptop:top-[calc(100%-0.666rem)]
      desktop:top-[calc(100%-0.8rem)]
      largeDesktop:top-[calc(100%-1rem)]

      ${
        openModal ? 
        `
        visible 
        scale-100 
        opacity-100
        ` 
        : 
        `
        invisible 
        scale-[.985] 
        opacity-0
        `
      }
      
      sLaptop:pt-[calc(0.533rem+0.541rem)]
      mLaptop:pt-[calc(0.666rem+0.677rem)]
      desktop:pt-[calc(0.8rem+0.813rem)]
      largeDesktop:pt-[calc(1rem+1.016)]

      sLaptop:pb-[0.541rem]
      mLaptop:pb-[0.677rem]
      desktop:pb-[0.813rem]
      largeDesktop:pb-[1.016]
      
      flex
      flex-col

      sLaptop:gap-[0.375rem]
      mLaptop:gap-[0.469rem]
      desktop:gap-[0.563rem]
      largeDesktop:gap-[0.703rem]

      transition-all
      duration-300
      `}>
        {
          Object.entries(filters).map(([k,v],index)=> 
            <FilterLabels key={index} k={k} v={v} />
          )
        }
      </div>
    </div>
  )
}

export default index
import { memo, useContext } from "react";
import triangle from '/assets/Polygon_6.svg';
import { useAppSelector } from "../../../../reduxStore/hook";
import { getFilterModal, setOpenModal } from "../../../../reduxStore/modal/modalSlice";
import { useDispatch } from "react-redux";
import { AppContext } from "../../../appRefContext";

import BoardPageFilterBody from "./BoardPageFilterBody";
import { AnimatePresence } from "framer-motion";

const BoardPageFilter = memo(({filters}:{filters:Record<string,boolean>}) => {
  
  console.log(filters);

  const dispatch = useDispatch();

  const filterModal = useAppSelector(getFilterModal);

  const appContext = useContext(AppContext);
  const {filterRefHead2} = appContext!;

  return (
    <div className="
      relative

      hidden
      sLaptop:block

      shrink-0
    ">
      <div 
      ref={filterRefHead2}
      onClick={()=> dispatch(setOpenModal(!filterModal))}
      className={`
        flex
        flex-row
        relative

        shrink-0

        justify-center 
        items-center
        
        sLaptop:gap-[1.687rem]
        mLaptop:gap-[2.109rem]
        desktop:gap-[2.531rem]
        largeDesktop:gap-[3.163rem]

        sLaptop:px-[0.749rem]
        mLaptop:px-[0.937rem]
        desktop:px-[1.125rem]
        largeDesktop:px-[1.406rem]

        ${
          filterModal ?
          `
          opacity-100
          `
          :
          `
          opacity-75

          hover:opacity-100
          `
        }

        transition-[opacity]
        duration-500
        hover:cursor-pointer
      `}>
        <h1 className="
        sLaptop:text-[1.312rem]
        mLaptop:text-[1.640rem]
        desktop:text-[1.969rem]
        largeDesktop:text-[2.461rem]
        leading-none

        text-PrimaryWhite

        font-medium
        ">Filter</h1>
        <img className={`
          sLaptop:w-[0.875rem]
          mLaptop:w-[1.094rem]
          desktop:w-[1.313rem]
          largeDesktop:w-[1.641rem]

          ${filterModal && 'rotate-180'}

          transition-[transform]
          duration-500
        `}
        src={triangle} alt="Arrow for filter" />
      </div>
      <AnimatePresence>
        {
          filterModal ? <BoardPageFilterBody /> : ''
        }
      </AnimatePresence>
    </div>
  )
})

export default BoardPageFilter
import {motion} from 'framer-motion';
import { memo, useContext } from 'react';
import { AppContext } from '../../../../appRefContext';
import { useAppSelector } from '../../../../../reduxStore/hook';
import { getFilters } from '../../../../../reduxStore/tasks/tasksSlice';

import FilterLabels from '../label/Label'

const FilterModal = memo(() => {

    const appContext = useContext(AppContext);
    const {filterModalRef} = appContext!;

    const filters = useAppSelector(getFilters);
    
  return (
    <motion.div
    initial={{ 
        y:'-50%',
        opacity: 0 
      }}
      animate={{ 
        y:0,
        opacity: 1 
      }}
      exit={{ 
        y:'-50%',
        opacity: 0 
      }}
      transition={{
        duration:.3
      }}
      ref={filterModalRef}
      className='filterModal'
    >
        <Header />
        <div className='
        w-full
        flex
        flex-col

        gap-[0.610rem]
        mobile:gap-[0.814rem]
        sMobile:gap-[1.302rem]
        mMobile:gap-[1.563rem]

        pt-[0.976rem]
        mobile:pt-[1.302rem]
        sMobile:pt-[2.083rem]
        mMobile:pt-[2.5rem]

        pb-[0.488rem]
        mobile:pb-[0.651rem]
        sMobile:pb-[1.0415rem]
        mMobile:pb-[1.25rem]

        justify-center
        items-center
        '>
            {
                Object.entries(filters).map(([k,v],index)=> 
                    <FilterLabels key={index} k={k} v={v} />
                )
            }
        </div>
        <CloseButton />
    </motion.div>
  )
})

const CloseButton = memo(() => {
  
  const appContext = useContext(AppContext);
  const {closeFilterModal} = appContext!;
  
  return  <button 
  ref={closeFilterModal}
  className='
  w-full
  text-[0.976rem]
  mobile:text-[1.302rem]
  sMobile:text-[2.083rem]
  mMobile:text-[2.5rem]

  py-[0.781rem]
  mobile:py-[1.041rem]
  sMobile:py-[1.666rem]
  mMobile:py-[2rem]

  text-white

  font-medium
  '>
    Close
  </button>
})

const Header = memo(() => {
  return <h1 className="
  px-[7.8%]
  w-full

  pt-[0.823rem]
  mobile:pt-[1.098rem]
  sMobile:pt-[1.758rem]
  mMobile:pt-[2.109rem]

  font-medium

  text-[0.927rem]
  mobile:text-[1.236rem]
  sMobile:text-[1.979rem]
  mMobile:text-[2.375rem]

  text-PrimaryWhite
  ">Select Labels:</h1>
})

export default FilterModal;
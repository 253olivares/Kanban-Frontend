import { memo, useRef } from 'react'
import cog from '/assets/cog.svg'
import ListOptionsBody from './ListOptionsBody';
import { AnimatePresence } from 'framer-motion';
import { list } from '../../../../../../reduxStore/lists/listsSlice';

const ListOptions = memo(({
    listData,
    listSetting,
    setListSetting
} : {
    listData:list,
    listSetting:boolean,
    setListSetting:React.Dispatch<React.SetStateAction<boolean>>
}) => {

  const ListSettingsRef = useRef<HTMLImageElement>(null);

  return (
    <div className='
    relative
    '>
      <img 
      ref={ListSettingsRef}
      onClick={()=> {
        setListSetting(!listSetting)
      }
      }
      className={`
      text-PrimaryWhite
      
      cursor-pointer

      opacity-100

      sLaptop:opacity-0
      sLaptop:group-hover:opacity-75
      sLaptop:group-hover:hover:opacity-100
      ${
        listSetting ?
        `
        rotate-180
        sLaptop:opacity-100
        ` : ``
      }

      h-[1.025rem]
      mobile:h-[1.367rem]
      sMobile:h-[2.188rem]
      mMobile:h-[2.625rem]

      sLaptop:h-auto
      sLaptop:w-[1rem]
      mLaptop:w-[1.25rem]
      desktop:w-[1.5rem]
      largeDesktop:w-[1.875rem]

      transition-all
      duration-500
      `}

      src={cog}
      
      />
      <AnimatePresence>
        {
          listSetting ? <ListOptionsBody listData ={listData} setOpenListSettings={setListSetting} ListSettingsRef = {ListSettingsRef} /> : ""
        }
      </AnimatePresence>
    </div>
  )
})

export default ListOptions
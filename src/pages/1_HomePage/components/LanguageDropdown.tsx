import { getLanguages, getSelectLanguage, changeLanguage } from '../../../reduxStore/languages/languageSlice';
import { useAppDispatch, useAppSelector } from '../../../reduxStore/hook';

import { useRef, useState, useEffect } from 'react';

import Polygon from '/assets/Polygon_5.svg';

const LanguageDropdown = () => {
   // create this ref if needed
  const htmlRef = useRef<HTMLButtonElement>(null);
  const [dropDown, setDropdown] = useState<Boolean>(false);

  // get our dispatch for redux
  const dispatch = useAppDispatch();

  // get our language list and get our select language
  const languagesList:string[] = useAppSelector(getLanguages);
  const language = useAppSelector(getSelectLanguage);

  // listener to close our drop down
  const listening = () => {
    // our listener that we create so that we can close our drop don if user clicks anywhere outside our dropdown
    setDropdown(false)
    // remove listener when we click again
    window.removeEventListener('click', listening,true);
  }

  useEffect(()=> {
   return ()=> {
    // a cleaner to remove our listener when we unmount this component
    // use case a user changes pages when the dropdown is extended
    // remove our listener when our component unloads we dont need it
    window.removeEventListener('click', listening,true);
   }
  },[])

  return (
    <div className='flex 
    flex-col 
    w-[14.233rem] 
    mobile:w-[18.978rem]
    sMobile:w-[30.364rem] 
    mMobile:w-[36.438rem] 
    sLaptop:w-[19rem] 
    mLaptop:w-[22rem] 
    desktop:w-[25rem] 
    largeDesktop:w-[29rem] 
    relative
    '>
        <label className='
        text-[1.007rem]
        mobile:text-[1.343rem] 
        sMobile:text-[2.149rem] 
        mMobile:text-[2.578rem]
        leading-tight
        sLaptop:text-[1.25rem] sLaptop:leading-[1.5rem]
        mLaptop:text-[1.625rem] mLaptop:leading-[1.8rem]
        desktop:text-[1.875rem] desktop:leading-[2rem]
        largeDesktop:text-[2.25rem] largeDesktop:leading-[2.5rem]
        text-PrimaryWhite

        font-medium
        pb-[0.223rem]
        mobile:pb-[0.318rem]
        sMobile:pb-[0.571rem]
        mMobile:pb-[0.672rem]
        desktop:pb-[.5rem]

        '>Languages:</label>
        <button tabIndex={-1} ref={htmlRef} onClick={()=> {
          setDropdown(true);
          // check to make sure we dont have this running already
          // set true to keep function from running when we don't need to
          window.addEventListener('click', listening,true);
        }} 
        className={`
        flex 
        justify-between items-center

        font-black
        bg-PrimaryWhite
        ${
          dropDown ? `
          rounded-t-[0.269rem]
          mobile:rounded-t-[0.358rem]
          sMobile:rounded-t-[0.573rem]
          mMobile:rounded-t-[0.688rem]
          ` : ` 
          rounded-[0.269rem]
          mobile:rounded-[0.358ren]
          sMobile:rounded-[0.573rem]
          mMobile:rounded-[0.688rem]
          `
        }
        text-left 

        px-[0.733rem]
        mobile:px-[0.977rem]
        sMobile:px-[1.563rem]
        mMobile:px-[1.875rem]
        sLaptop:py-2
        sLaptop:px-3
        largeDesktop:px-4 largeDesktop:py-3

        text-[1.007rem]
        mobile:text-[1.343rem]
        sMobile:text-[2.149rem]
        mMobile:text-[2.578rem]
        leading-[1.679rem]
        mobile:leading-[2.238rem]
        sMobile:leading-[3.581rem]
        mMobile:leading-[4.297rem]
        sLaptop:leading-normal
        sLaptop:text-xl
        mLaptop:text-2xl
        desktop:text-3xl
        largeDesktop:text-4xl

        h-[1.953rem]
        mobile:h-[2.604rem]
        sMobile:h-[4.166rem]
        mMobile:h-[5rem]
        sLaptop:h-auto

        w-full
        `}> 
        {language}
        <img className={`
        w-[1.163rem]
        mobile:w-[1.551rem]
        sMobile:w-[2.481rem]
        mMobile:w-[2.977rem]
        sLaptop:w-6
        mLaptop:w-7
        desktop:w-8
        ${ dropDown && 'rotate-180'}
        transition-all
        duration-300
        `} src={Polygon} alt="Polygon" />
        </button>
        <ul className={`
        z-10
        absolute
        top-[100%]
        ${
          dropDown ? ' visible scale-100 opacity-100' : 'invisible scale-[.975] opacity-0'
        } 
        transition-all
        duration-300
        w-full 
        text-[1.007rem]
        mobile:text-[1.343rem]
        sMobile:text-[2.149rem]
        mMobile:text-[2.578rem]
        sLaptop:text-xl
        mLaptop:text-2xl
        desktop:text-3xl
        largeDesktop:text-4xl
        `}>
          {
            languagesList.map((lang,index) => 
            <li key={index} onClick={()=> dispatch(changeLanguage(lang))} className={`
            bg-PrimaryWhite 
            ${
              lang === language && 'font-bold'
            }
            cursor-pointer
            hover:bg-slate-300 
            last:rounded-b-[0.5rem] 

            px-[0.585rem] py-[0.292rem]
            mobile:px-[0.781rem] mobile:py-[0.390rem]
            sMobile:px-[1.249rem] sMobile:py-[0.624rem]
            mMobile:px-[1.5rem] mMobile:py-[.75rem]
            largeDesktop:px-4 largeDesktop:py-3
            `}>{lang} </li>
            )
          }        
        </ul>
    </div>
  )
}

export default LanguageDropdown
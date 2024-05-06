import { useRef, useState, useEffect } from 'react';
import Polygon from '/assets/Polygon_5.svg';
import { useAppDispatch, useAppSelector } from '../../../reduxStore/hook';
import { getLanguages, getSelectLanguage, changeLanguage } from '../../../reduxStore/languages/languageSlice';

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
    <div className='flex flex-col w-[22rem] sMobile:w-[30rem] mMobile:w-[35rem] sLaptop:w-[19rem] mLaptop:w-[22rem] desktop:w-[25rem] largeDesktop:w-[29rem] relative'>
        <label className='
        text-2xl
        sMobile:text-[2.125rem] sMobile:leading-[2.25rem]
        mMobile:text-[2.5rem] mMobile:leading-[2.75rem]
        sLaptop:text-[1.25rem] sLaptop:leading-[1.5rem]
        mLaptop:text-[1.625rem] mLaptop:leading-[1.8rem]
        desktop:text-[1.875rem] desktop:leading-[2rem]
        largeDesktop:text-[2.25rem] largeDesktop:leading-[2.5rem]
        text-PrimaryWhite
        font-medium
        pb-[.45rem]
        desktop:pb-[.5rem]
        '>Languages:</label>
        <button tabIndex={-1} ref={htmlRef} onClick={()=> {
          setDropdown(true);
          // check to make sure we dont have this running already
          // set true to keep function from running when we don't need to
          window.addEventListener('click', listening,true);
        }} 
        className={`
        flex justify-between items-center
        font-black
        bg-PrimaryWhite
        ${
          dropDown ? 'rounded-t-[0.5rem]' : '  rounded-[0.5rem]'
        }
        text-left 
        px-3 py-2 
        sMobile:px-6 sMobile:py-3
        mMobile:py-4
        sLaptop:py-2
        sLaptop:px-3
        largeDesktop:px-4 largeDesktop:py-3
        text-2xl
        sMobile:text-[2rem]
        mMobile:text-[2.5rem]
        sLaptop:text-xl
        mLaptop:text-2xl
        desktop:text-3xl
        largeDesktop:text-4xl
        w-full
        `}> 
        {language}
        <img className={`
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
        text-2xl
        sMobile:text-[2rem]
        mMobile:text-[2.5rem]
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
            px-3 
            py-2
            sMobile:px-6 sMobile:py-3
            largeDesktop:px-4 largeDesktop:py-3
            `}>{lang} </li>
            )
          }        
        </ul>
    </div>
  )
}

export default LanguageDropdown
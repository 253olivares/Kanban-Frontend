import React from 'react';
import Polygon from '/assets/Polygon_5.svg';

const LanguageDropdown = () => {

  const languagesList: string[] = [
    'English',
    'Spanish'
  ]

  // create this ref if needed
  const htmlRef = React.useRef<HTMLButtonElement>(null);
  const [dropDown, setDropdown] = React.useState<Boolean>(false);
  const [language, setLanguage] = React.useState<string>(languagesList[0]);

  // listener to close our drop down
  const listening = () => {
    console.log('test');
    setDropdown(false)
    // remove listener when we click again
    window.removeEventListener('click', listening,true);
  }

  React.useEffect(()=> {
   ()=> {
    // remove our listener when our component unloads we dont need it
    window.removeEventListener('click', listening,true);
   }
  },[])

  return (
    <div className='flex flex-col w-[22rem] relative'>
        <label className='
        text-[1.625rem] leading-[1.8rem]
        text-PrimaryWhite
        font-medium
        pb-[.45rem]
        '>Languages:</label>
        <button ref={htmlRef} onClick={()=> {
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
        text-2xl
        w-full
        `}> 
        {language}
        <img className={`
        w-7
        ${ dropDown && 'rotate-180'}
        transition-all
        duration-300
        `} src={Polygon} alt="Polygon" />
        </button>
        <ul className={`
        absolute
        top-[100%]
        ${
          dropDown ? ' visible scale-100 opacity-100' : 'invisible scale-[.975] opacity-0'
        } 
        transition-all
        duration-300
        w-full 
        text-2xl
        `}>
          {
            languagesList.map((lang,index) => 
            <li key={index} onClick={()=>setLanguage(lang)} className={`
            bg-PrimaryWhite 
            ${
              lang === language && 'font-bold'
            }
            cursor-pointer
            hover:bg-slate-300 
            last:rounded-b-[0.5rem] 
            px-3 
            py-2
            `}>{lang} </li>
            )
          }        
        </ul>
    </div>
  )
}

export default LanguageDropdown
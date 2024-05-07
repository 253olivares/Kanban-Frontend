import {motion} from 'framer-motion';
import { useState } from 'react';

import CreateAccountButton from '../../pages/1_HomePage/components/Button';
import Inputs from '../component/entryFields';
import Footer from '../component/footer';


const index = () => {

  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    remember: false
  })

  // input sanitization function
  // take in string and replace each input and replace with html code
  function sanitize(string:string) {
    const map:Record<string,string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
        "?": '&#63;',
        "$": "&#36;",
        " ": "&#00;"
    };
    // look for the following values
    // create an array of the values I want to search for and declare it as incase sensitive
    // and mark as a global search
    const reg = /[&<>"'/?$ ]/ig;
    // replace each value as its found
    return string.replace(reg, (match)=>(map[match]));
  }

  const checkInputs = () => {
    let username = userInfo.username.trim();
    let password = userInfo.password.trim();
    let remember = userInfo.remember;
    if(username !== '' && password !== '') {
      let sanitizedUsername = sanitize(username);
      let sanitizedPassword = sanitize(password);
      alert(`User input information:
        uername: ${sanitizedUsername}
        password:${sanitizedPassword}
        remember:${remember}
      `)
      setUserInfo({
        username: '',
        password: '',
        remember: false
      })
    } else {
      alert("Please make sure to input a username and password")
    }
  }

  return (
    <motion.div 
    initial={{
      y:25
    }}
    animate={{
        y:0
    }}
    exit={{
        y:25
    }}
    className="bg-PrimaryWhite block w-full min-h-[100vh] sLaptop:min-h-0 sLaptop:w-[28.5rem] mLaptop:w-[35rem]  desktop:w-[39.663rem] largeDesktop:w-[42.5rem] rounded-[0.906rem] overflow-y-scroll no-scrollbar sLaptop:overflow-hidden">
      <h1 className="
        mt-[4rem]
        mb-[2.25rem]
        mMobile:mt-[4.688rem]
        mMobile:mb-[2.813rem]
        sLaptop:mt-[1.8rem]
        sLaptop:mb-[1.15rem]
        mLaptop:mt-[2.4rem]
        mLaptop:mb-[1.5rem]
        desktop:mt-[2.5rem]
        desktop:mb-[1.5rem]
        text-center
        w-full
        font-bold
        text-linear-gradient 
        text-[2.063rem]
        mMobile:text-[2.5rem]
        sLaptop:text-[1.4rem]
        mLaptop:text-[2rem]
        desktop:text-[2.375rem]
        largeDesktop:text-[2.5rem]
      ">
        Sign In
      </h1>
      <form className="
      my-auto
      sLaptop:my-0
      flex flex-col 
      pb-[8.149rem]
      sLaptop:pb-0
      gap-[.25rem]
      mMobile:gap-[.35rem]
      sLaptop:gap-[.25rem]
      mLaptop:gap-[.3rem]
      px-[2rem]
      sMobile:px-[5.313rem]
      mMobile:px-[4.5rem]
      sLaptop:px-[3.85rem]
      mLaptop:px-[4.2rem]
      font-normal
      " onSubmit={(e)=> e.preventDefault()}>
        {/* username */}
        <div className="modalPasswordInputDiv">
          <Inputs 
          className="modalInputs"
          id="username"
          type="text"
          label="Username"
          value={userInfo.username}
          func={(e:React.ChangeEvent<HTMLInputElement>)=> {
            setUserInfo(x=> ({...x,username:e.target.value}))
          }}
          />
        </div>
        {/* password */}
        <div className="modalPasswordInputDiv mt-4">
          <Inputs 
          className="modalInputs"
          id="password"
          type="password"
          label="Password"
          value={userInfo.password}
          func={(e:React.ChangeEvent<HTMLInputElement>)=> {
            setUserInfo(x=> ({...x,password:e.target.value}))
          }}
          />
        </div>
        {/* remember checkbox */}
        <div className="flex items-center gap-5 sLaptop:gap-3 my-7  sMobile:my-14 sLaptop:my-5 desktop:my-9 sLaptop:ml-5 mLaptop:ml-7 desktop:ml-9">
          <input checked={userInfo.remember} onChange={(e)=>setUserInfo(x=>({...x,remember:e.target.checked}))} className=" w-7 h-7 mMobile:w-8 mMobile:h-8 sLaptop:w-5 sLaptop:h-5 desktop:w-6 desktop:h-6" type="checkbox" id="rememberMe" />
          <label className=" font-normal sMobile:text-[1.5rem] mMobile:text-[1.688rem] sLaptop:text-[.85rem] mLaptop:text-[1.15rem] desktop:text-xl" htmlFor="rememberMe">Remember Me</label>
        </div>
        <div  className='flex justify-center
        desktop:scale-95
         pt-[2.5rem] pb-[2.5rem] sMobile:pt-[3.75rem] sMobile:pb-[3.75rem] sLaptop:pt-[1.4rem] sLaptop:pb-[2rem] mLaptop:pt-[1.6rem] desktop:pt-[1.70rem] desktop:pb-[2.4rem] largeDesktop:pt-[2rem] largeDesktop:pb-[2.75rem]'>
          <CreateAccountButton message="Login" fn={()=>{checkInputs()}} />
        </div>    
      </form>
      {/* Footer */}
      <div className="absolute sLaptop:relative bottom-0 w-full">
        <Footer />
      </div>
    </motion.div>
  )
}

export default index
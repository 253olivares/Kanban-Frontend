import {motion} from 'framer-motion';
import { useState } from 'react';

import CreateAccountBtn from '../component/modalButton';
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
    className="
    relative
    bg-PrimaryWhite 
    w-full
    h-auto
    min-h-screen

    overflow-y-scroll
    no-scrollbar

    sLaptop:min-h-0 
    sLaptop:w-[28.5rem] 
    mLaptop:w-[35rem]  
    desktop:w-[39.663rem] 
    largeDesktop:w-[42.5rem] 
    
    sLaptop:rounded-[0.906rem]
    sLaptop:overflow-hidden
    ">
      <div 
      className='
      relative
      w-full
      pb-[3.026rem]
      mobile:pb-[4.004rem]
      sMobile:pb-[6.406rem]
      mMobile:pb-[7.688rem]
      sLaptop:pb-0
      '
      >
        <h1 className="

        pt-[2.441rem]
        pb-[2.196rem]
        mobile:pt-[3.255rem]
        mobile:pb-[2.927rem]
        sMobile:pt-[5.208rem]
        sMobile:pb-[4.708rem]
        mMobile:pt-[6.25rem]
        mMobile:pb-[5.625rem]
        sLaptop:pt-[1.8rem]
        sLaptop:pb-[1.15rem]
        mLaptop:pt-[2.4rem]
        mLaptop:pb-[1.5rem]
        desktop:pt-[2.5rem]
        desktop:pb-[1.5rem]

        text-center
        w-full
        font-bold

        text-linear-gradient 
        text-[1.367rem]
        mobile:text-[1.822rem]
        sMobile:text-[2.916rem]
        mMobile:text-[3.5rem]
        sLaptop:text-[1.4rem]
        mLaptop:text-[2rem]
        desktop:text-[2.375rem]
        largeDesktop:text-[2.5rem]
      ">
        Sign In
        </h1>
        <form className="
        flex flex-col 

        my-auto
        sLaptop:my-0

        sLaptop:gap-[.25rem]
        mLaptop:gap-[.3rem]

        px-[13.02%]
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
          <div className="
          pt-[1rem]
          mobile:pt-[1.313rem]
          sMobile:pt-[2.063rem]
          mMobile:pt-[2.5rem]
          sLaptop:pt-0
          modalPasswordInputDiv
          ">
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
          <div className="
          flex 
          items-center 

          gap-[0.671rem]
          mobile:gap-[0.895rem]
          sMobile:gap-[1.433rem]
          mMobile:gap-[1.719rem]
          sLaptop:gap-3 

          pt-[1.465rem]
          pb-[1.904rem]  
          mobile:pt-[1.953rem]
          mobile:pb-[2.539rem]
          sMobile:pt-[3.125rem]
          sMobile:pb-[4.063rem]
          mMobile:pt-[3.75rem]
          mMobile:pb-[4.875rem]
          sLaptop:py-5 
          desktop:py-9 

          pl-[0.733rem]
          mobile:pl-[0.954rem]
          sMobile:pl-[1.563rem]
          mMobile:pl-[1.875rem]
          sLaptop:pl-5 
          mLaptop:pl-7 
          desktop:pl-9">
            <input checked={userInfo.remember} onChange={(e)=>setUserInfo(x=>({...x,remember:e.target.checked}))} 
            className="
            w-[1.074rem] h-[1.074rem]
            mobile:w-[1.432rem] mobile:h-[1.432rem]
            sMobile:w-[2.291rem] sMobile:h-[2.291rem]
            mMobile:w-[2.75rem] mMobile:h-[2.75rem]
            sLaptop:w-5 sLaptop:h-5 
            desktop:w-6 desktop:h-6" type="checkbox" id="rememberMe" />
            <label className="
            font-normal 
            text-[0.781rem]
            mobile:text-[1.041rem]
            sMobile:text-[1.666rem] 
            mMobile:text-[2rem] 
            sLaptop:text-[.85rem] 
            mLaptop:text-[1.15rem] 
            desktop:text-xl" htmlFor="rememberMe">Remember Me</label>
          </div>
          <div  className='flex justify-center
          desktop:scale-95
          pt-[1.904rem] 
          pb-[4.169rem] 
          mobile:pt-[2.539rem]
          mobile:pb-[5.559rem]
          sMobile:pt-[4.063rem] 
          sMobile:pb-[8.894rem] 
          mMobile:pt-[4.875rem]
          mMobile:pb-[10.673rem]
          sLaptop:pt-[1.4rem] 
          sLaptop:pb-[2rem] 
          mLaptop:pt-[1.6rem] 
          desktop:pt-[1.70rem] 
          desktop:pb-[2.4rem] 
          largeDesktop:pt-[2rem] 
          largeDesktop:pb-[2.75rem]'>
            <CreateAccountBtn message="Login" fn={()=>{checkInputs()}} />
          </div>    
        </form>
      </div>
      {/* Footer */}
      <div className="
      absolute 
      bottom-[0]
      w-full
      h-[3.026rem]
      mobile:h-[4.004rem]
      sMobile:h-[6.406rem]
      mMobile:h-[7.688rem]
      sLaptop:relative ">
        <Footer />
      </div>
    </motion.div>
  )
}

export default index
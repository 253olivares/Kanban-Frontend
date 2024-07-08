import {motion} from 'framer-motion';

import { checkLogin } from '../../reduxStore/users/userSlice';
import CreateAccountBtn from '../component/modalButton';
import Inputs from '../component/entryFields';
import Footer from '../component/footer';
import { useAppDispatch, useAppSelector } from '../../reduxStore/hook';
import { getUserInfo, changeUserInfoEmail,changeUserInfoPassword,changeUserInfoRemember } from '../../reduxStore/users/userSlice';
import { sanitize } from '../../customLogic/CustomLogic';
import { closeModal } from '../../reduxStore/modal/modalSlice';
import { useNavigate } from 'react-router-dom';

const index = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userInfo = useAppSelector(getUserInfo);
 
  // input sanitization function
  // take in string and replace each input and replace with html code
 

  const checkInputs = async () => {
    let email = userInfo.email.trim();
    let password = userInfo.password.trim();

    if(email !== '' && password !== '') {
    
      let sanitizedPassword = sanitize(password);

      dispatch(checkLogin({
        email:email,
        password:sanitizedPassword,
        remember:userInfo.remember
      }))
      .unwrap().then((x)=>{
        console.log("Login successful!");
        dispatch(closeModal());
        navigate(`u/${x.u_id}`);
      }).catch();

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
    transition={{
      duration:.3
    }}
    className="
    relative
    bg-PrimaryWhite 

    w-full
    min-h-dvh

    sLaptop:min-h-0 
    sLaptop:w-[25rem] 
    mLaptop:w-[31.247rem]  
    desktop:w-[37.5rem] 
    largeDesktop:w-[46.875rem]
    
    sLaptop:rounded-[0.471rem] 
    mLaptop:rounded-[0.588rem]
    desktop:rounded-[0.706rem]
    largeDesktop:rounded-[0.883rem]
    
    overflow-y-scroll
    no-scrollbar
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
      sLaptop:pb-0'
      >
        <h1 
        className="
        pt-[2.441rem]
        pb-[2.196rem]
        mobile:pt-[3.255rem]
        mobile:pb-[2.927rem]
        sMobile:pt-[5.208rem]
        sMobile:pb-[4.708rem]
        mMobile:pt-[6.25rem]
        mMobile:pb-[5.625rem]
        sLaptop:pt-[1.667rem]
        sLaptop:pb-[1.656rem]
        mLaptop:pt-[2.083rem]
        mLaptop:pb-[2.085rem]
        desktop:pt-[2.5rem]
        desktop:pb-[2.515rem]
        largeDesktop:pt-[3.125rem]
        largeDesktop:pb-[3.159rem]

        text-center
        w-full
        font-bold

        text-linear-gradient 
        text-[1.367rem]
        mobile:text-[1.822rem]
        sMobile:text-[2.916rem]
        mMobile:text-[3.5rem]
        sLaptop:text-[1.333rem]
        mLaptop:text-[1.666rem]
        desktop:text-[2rem]
        largeDesktop:text-[2.5rem]">
        Sign In
        </h1>

        <form className="
        flex flex-col 

        my-auto
        sLaptop:my-0

        px-[13.02%]
        sLaptop:px-[12.30%]

        font-normal
        " onSubmit={(e)=> {
          e.preventDefault()
          checkInputs();
        }}>
          {/* username */}
          <div className="modalPasswordInputDiv">
            <Inputs 
            id="loginEmail"
            type="text"
            label="Email"
            value={userInfo.email}
            func={(e:React.ChangeEvent<HTMLInputElement>)=> {
              dispatch(changeUserInfoEmail(e.target.value))
            }}
            />
          </div>
          {/* password */}
          <div className="
          pt-[1rem]
          mobile:pt-[1.313rem]
          sMobile:pt-[2.063rem]
          mMobile:pt-[2.5rem]
          sLaptop:pt-[0.75rem]
          mLaptop:pt-[0.938rem]
          desktop:pt-[1.125rem]
          largeDesktop:pt-[1.375rem]
          
          modalPasswordInputDiv
          ">
            <Inputs 
            id="password"
            type="password"
            label="Password"
            value={userInfo.password}
            func={(e:React.ChangeEvent<HTMLInputElement>)=> {
              dispatch(changeUserInfoPassword(e.target.value))
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
          sLaptop:gap-[0.733rem] 
          mLaptop:gap-[0.917rem]
          desktop:gap-[1.1rem]
          largeDesktop:gap-[1.375rem]

          pt-[1.465rem]
          pb-[1.904rem]  
          mobile:pt-[1.953rem]
          mobile:pb-[2.539rem]
          sMobile:pt-[3.125rem]
          sMobile:pb-[4.063rem]
          mMobile:pt-[3.75rem]
          mMobile:pb-[4.875rem]
          sLaptop:pt-[1.152rem] 
          sLaptop:pb-[1.519rem]
          mLaptop:pt-[1.375rem]
          mLaptop:pb-[1.833rem]
          desktop:pt-[1.65rem]
          desktop:pb-[2.2rem]
          largeDesktop:pt-[2.063rem]
          largeDesktop:pb-[2.75rem]

          pl-[0.733rem]
          mobile:pl-[0.954rem]
          sMobile:pl-[1.563rem]
          mMobile:pl-[1.875rem]
          sLaptop:pl-[1.283rem]
          mLaptop:pl-[1.604rem] 
          desktop:pl-[1.925rem]
          largeDesktop:pl-[2.406rem]
          ">
            <input checked={userInfo.remember} onChange={()=>dispatch(changeUserInfoRemember())} 
            className="
            w-[1.074rem] h-[1.074rem]
            mobile:w-[1.432rem] mobile:h-[1.432rem]
            sMobile:w-[2.291rem] sMobile:h-[2.291rem]
            mMobile:w-[2.75rem] mMobile:h-[2.75rem]
            sLaptop:w-[0.999rem] sLaptop:h-[0.999rem] 
            mLaptop:w-[1.249rem] mLaptop:h-[1.249rem]
            desktop:w-[1.5rem] desktop:h-[1.5rem]
            largeDesktop:w-[1.875rem] largeDesktop:h-[1.875rem]
            " type="checkbox" id="rememberMe" />
            <label className="
            font-normal 
            text-[0.781rem]
            mobile:text-[1.041rem]
            sMobile:text-[1.666rem] 
            mMobile:text-[2rem] 
            sLaptop:text-[0.733rem] 
            mLaptop:text-[0.917rem] 
            desktop:text-[1.1rem]
            largeDesktop:text-[1.375rem]
            " htmlFor="rememberMe">Remember Me</label>
          </div>
          <div  className='flex justify-center
          sLaptop:scale-95
          pt-[1.904rem] 
          pb-[4.169rem] 
          mobile:pt-[2.539rem]
          mobile:pb-[5.559rem]
          sMobile:pt-[4.063rem] 
          sMobile:pb-[8.894rem] 
          mMobile:pt-[4.875rem]
          mMobile:pb-[10.673rem]
          sLaptop:pt-[0rem] 
          sLaptop:pb-[2.355rem] 
          mLaptop:pb-[2.939rem]
          desktop:pb-[3.528rem] 
          largeDesktop:pb-[4.409rem]'>
            <CreateAccountBtn message="Login" fn={async()=>{}} />
          </div>    
        </form>

      </div>

      {/* Footer */}
      <div className="
       absolute
       bottom-0
       w-full
       h-[3.026rem]
       mobile:h-[4.004rem]
       sMobile:h-[6.406rem]
       mMobile:h-[7.688rem]
       sLaptop:relative 
       sLaptop:h-auto"
      >
        <Footer />
      </div>
    </motion.div>
  )
}

export default index
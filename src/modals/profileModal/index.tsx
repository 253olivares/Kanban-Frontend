import { getUser } from '../../reduxStore/users/userSlice';
import { useAppSelector } from '../../reduxStore/hook';

import {motion} from 'framer-motion'
import { useLayoutEffect, useRef, useState } from 'react';

import PasswordStrength from './components/passwordStrength';
import SaveButton from './components/saveButton';
import PasswordReq from './components/passwordRequirments';
import RestrictedInputBoxes from './components/restrictedInputBoxes';
import PasswordInput from './components/password';
import Footer from '../component/footer';
import { checkIfEmailExistsEdit, checkPasswordMatch } from '../../customLogic';

const index = () => {
  const user = useAppSelector(getUser);

  if(!user){
    return;
  }

  const repass = useRef<HTMLInputElement|null>(null);

  const [userInfo,setUserInfo] = useState({
    firstname:user.first_name,
    firstnameEdit:false,
    lastname:user.last_name,
    lastnameEdit:false,
    newPassword:'',
    reTypeNewPassword:'',
    email:user.email,
    emailEdit:false,
    username:user.username,
    usernameEdit:false,
    pfp:user.pfp,
  })

  const [passwordReq,setPasswordReq] = useState<Record<string,boolean>>({
    charLimit: false,
    numReq: false,
    specialChar:false
  })

  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const checkPassword = () => {
    let totalPoints = 0;
    let req ={
        charLimit: false,
        numReq: false,
        specialChar:false 
    }

    // create a snapshot of our password that we are going to use to check
    const passwordSnapshot = userInfo.newPassword;
    const specialChar = `~\`!@#$%^&*()_-+={[}]|\:;"'<,>.?/`
    const leastOneNumber = '0123456789';

    
    if (passwordSnapshot.length >= 8) {
      totalPoints = totalPoints + 1;
      req = {
        ...req,
        charLimit:true
    }}

    
    // for loop to check if we have a special character if we find one break the loop
    for(let i=0; i<=specialChar.length-1; i++ ){
      let found = false
     for(let x=0; x<=passwordSnapshot.length-1; x++){
      if(passwordSnapshot[x] === specialChar[i]){
          totalPoints = totalPoints + 1;
          req = {
              ...req,
              specialChar:true
          }
          found=true;
          break;
      }
     }
     if(found) break;
    }

   // checker for numbers now
   for(let i=0; i<=leastOneNumber.length-1; i++ ){
    let found = false
   for(let x=0; x<=passwordSnapshot.length-1; x++){
    if(passwordSnapshot[x] === leastOneNumber[i]){
        totalPoints = totalPoints + 1;
        req = {
            ...req,
            numReq:true
        }
        found=true;
        break;
    }
   }
   if(found) break;
   }

    // set our new reqs that meet conditions
    setPasswordReq(()=> req);
    // set our new strength value
    setPasswordStrength(() => totalPoints);
  }

  const checkifPasswordsMatch = () => {
    if(userInfo.reTypeNewPassword !== '')
    if(userInfo.newPassword !== userInfo.reTypeNewPassword){
      if(repass.current){
        repass.current.style.backgroundColor = "rgba(255,148,148,.5)"
      }
    } else if(userInfo.newPassword === userInfo.reTypeNewPassword){
      if(repass.current) {
        repass.current.style.backgroundColor = "rgba(195,255,139,.5)"
      }
    }
  }

  function emailValidation (email:string):boolean {
    // email pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // test it to see if it passes the check
    return pattern.test(email);
  }

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

  useLayoutEffect(()=> {
    if(userInfo.newPassword !== ''){
      checkPassword()
      checkifPasswordsMatch()
    } else {
      setPasswordReq({
        charLimit: false,
        numReq: false,
        specialChar:false
      })
      setPasswordStrength(0)
    }
  },[userInfo.newPassword])

  useLayoutEffect(()=> {
    if(userInfo.reTypeNewPassword !== ''){
      checkifPasswordsMatch()
    } else {
      if(repass.current)
      repass.current.style.background = "#B3B3B3";
    }
  },[userInfo.reTypeNewPassword,userInfo.newPassword])

  const checkSubmission = () => {
    const emailValid = emailValidation(userInfo.email);
    const passwordMatch = userInfo.newPassword === userInfo.reTypeNewPassword;
    const sanitizedPassword = sanitize(userInfo.newPassword);
    const sanitizedFirstname = sanitize(userInfo.firstname);
    const sanitizedLastname = sanitize(userInfo.lastname);
    const sanitizedUsername = sanitize(userInfo.username);

    const match = checkIfEmailExistsEdit(userInfo.email,user.email);

    const checkEncryptionPassword = checkPasswordMatch(sanitizedPassword,user.password);

    if(match){
      alert('Email is already in use please try a different email!');
    } else if (!passwordMatch) {
      alert('Please make sure your passwords match');
    } else if (!emailValid){
      alert('Please make sure you entered a valid email address.');
    }else if (sanitizedFirstname === '' || sanitizedLastname=== '' || sanitizedUsername==='' || userInfo.email==='') {
      alert('Please make sure all fields are entered when saving edits!');
    } else if (sanitizedPassword.length >= 20) {
      alert('Please make sure your new password is not longer than 20 letters!');
    } else if (passwordStrength!==3 && userInfo.newPassword !== ''){
      alert('Please make sure your new password meets all its requirements!');
    } else if (checkEncryptionPassword === true){
      alert('Please make sure your new password does not match your previous password!');
    } else {
      alert('Changes to your account have been made');
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
    className='
    relative
    bg-PrimaryWhite 
    w-full 
    h-auto

    min-h-screen
    sLaptop:min-h-0

    sLaptop:h-auto

    sLaptop:w-[30rem] 
    mLaptop:w-[37.496rem]
    desktop:w-[45rem] 
    largeDesktop:w-[56.25rem] 

    sLaptop:rounded-[0.471rem] 
    mLaptop:rounded-[0.588rem]
    desktop:rounded-[0.706rem]
    largeDesktop:rounded-[0.883rem]

    overflow-y-scroll
    no-scrollbar
    sLaptop:overflow-hidden
    '
    >
      <div
      className='
      relative
      w-full
      sLaptop:px-[7.5%]
      pb-[3.026rem]
      mobile:pb-[4.004rem]
      sMobile:pb-[6.406rem]
      mMobile:pb-[7.688rem]
      sLaptop:pb-0
      flex
      flex-col
      sLaptop:flex-row
      sLaptop:gap-[1.32rem]
      mLaptop:gap-[1.65rem]
      desktop:gap-[1.98rem]
      largeDesktop:gap-[2.475rem]
      '>
        {/* left items */}
        <div
         className='
         flex
         flex-col
         w-full
         sLaptop:w-[50%]
         '
        >
          {/* image and change image */}
          <div className='
          flex flex-col
          items-center

          sLaptop:pt-[1.72rem]
          mLaptop:pt-[2.15rem]
          desktop:pt-[2.58rem]
          largeDesktop:pt-[3.225rem]

          sLaptop:gap-[0.8rem]
          mLaptop:gap-[1rem]
          desktop:gap-[1.2rem]
          largeDesktop:gap-[1.5rem]

          '>
            <div 
            className='
            p-[0.224rem]
            mobile:p-[0.298rem]
            sMobile:p-[0.477rem]
            mMobile:p-[0.573rem
            sLaptop:p-[0.12rem]
            mLaptop:p-[0.15rem]
            desktop:p-[0.18rem]
            largeDesktop:p-[0.225rem]
            linear-gradientFooter
            rounded-full 
            '>
              <img 
              className='
              w-[5.219rem]
              mobile:w-[6.958rem]
              sMobile:w-[11.133rem]
              mMobile:w-[13.359rem]
              sLaptop:w-[7.703rem]
              mLaptop:w-[9.629rem]
              desktop:w-[11.556rem]
              largeDesktop:w-[14.445rem]
              rounded-full
              '
              src={`data:image/png;base64,${userInfo.pfp}`} alt="AccountImage" />
            </div>
            <label className='
            sLaptop:text-[0.92rem]
            mLaptop:text-[1.15rem]
            desktop:text-[1.38rem]
            largeDesktop:text-[1.725rem]
            font-medium
            text-Slate-gray
            sLaptop:cursor-pointer
            sLaptop:hover:underline
            ' htmlFor="image-upload">
              Change Icon
            </label>
            <input className='
            hidden
            ' id="image-upload" type="file"/>
          </div>
          {/* username and email inputs */}
          <div className='
          sLaptop:mt-[1.24rem]
          mLaptop:mt-[1.55rem]
          desktop:mt-[1.86rem]
          largeDesktop:mt-[2.325rem]

          sLaptop:gap-[0.900rem]
          mLaptop:gap-[1.125rem]
          desktop:gap-[1.350rem]
          largeDesktop:gap-[1.688rem]

          flex
          flex-col

          sLaptop:mb-[3.333rem]
          mLaptop:mb-[4.166rem]
          desktop:mb-[5rem]
          largeDesktop:mb-[6.25rem]

          '>
            <RestrictedInputBoxes
            css={''}
            edit={userInfo.emailEdit}
            type={'email'}
            label={'Email'}
            value={userInfo.email}
            enableField={()=> {
              setUserInfo(x=>({...x,emailEdit:!x.emailEdit}))
            }}
            changeField={(e:React.ChangeEvent<HTMLInputElement>)=> {
              setUserInfo(x=>({...x,email:e.target.value}));
            }}
            />

            <RestrictedInputBoxes
            css={''}
            edit={userInfo.usernameEdit}
            type={'text'}
            label={'Username'}
            value={userInfo.username}
            enableField={()=> {
              setUserInfo(x=>({...x,usernameEdit:!x.usernameEdit}))
            }}
            changeField={(e:React.ChangeEvent<HTMLInputElement>)=> {
              setUserInfo(x=>({...x,username:e.target.value}));
            }}
            />
          </div>
        </div>
        {/* right items */}
        <div className='
        flex
        flex-col
        w-full
        sLaptop:w-[50%]

        sLaptop:mt-[3.88rem]
        mLaptop:mt-[4.849rem]
        desktop:mt-[5.82rem]
        largeDesktop:mt-[7.275rem]
        '>
          <div className='
          flex flex-col
          
          sLaptop:gap-[0.338rem]
          mLaptop:gap-[0.4rem]
          desktop:gap-[0.48rem]
          largeDesktop:gap-[0.563rem]
          '>
            <RestrictedInputBoxes
              css={''}
              edit={userInfo.firstnameEdit}
              type={'text'}
              label={'First Name'}
              value={userInfo.firstname}
              enableField={()=> {
                setUserInfo(x=>({...x,firstnameEdit:!x.firstnameEdit}))
              }}
              changeField={(e:React.ChangeEvent<HTMLInputElement>)=> {
                setUserInfo(x=>({...x,firstname:e.target.value}));
              }}
              />

            <RestrictedInputBoxes
              css={''}
              edit={userInfo.lastnameEdit}
              type={'text'}
              label={'Last Name'}
              value={userInfo.lastname}
              enableField={()=> {
                setUserInfo(x=>({...x,lastnameEdit:!x.lastnameEdit}))
              }}
              changeField={(e:React.ChangeEvent<HTMLInputElement>)=> {
                setUserInfo(x=>({...x,lastname:e.target.value}));
              }}
              />
            <PasswordInput 
            type='password'
            label='New Password'
            value={userInfo.newPassword}
            changeField={(e:React.ChangeEvent<HTMLInputElement>)=> {
              setUserInfo(x=> ({...x,newPassword:e.target.value}))
            }}
            />
             <PasswordInput 
            ref={repass}
            type='password'
            label='Re-type New Password'
            value={userInfo.reTypeNewPassword}
            changeField={(e:React.ChangeEvent<HTMLInputElement>)=> {
              setUserInfo(x=> ({...x,reTypeNewPassword:e.target.value}))
            }}
            />  
            <div
             className='
             sLaptop:mt-[0.533rem]
             mLaptop:mt-[0.666rem]
             desktop:mt-[0.8rem]
             largeDesktop:mt-[1rem]
             '
            >
              <PasswordStrength status={passwordStrength} />
            </div>
            <div className='
            flex
            justify-between
            items-center

            sLaptop:my-[0.399rem]
            mLaptop:my-[0.499rem]
            desktop:my-[0.6rem]
            largeDesktop:my-[0.75rem]
            '>
              <PasswordReq reqs={passwordReq}/>
              <SaveButton fn={()=>checkSubmission()}/>
            </div>
          </div>
        </div>
      </div>
      <div className='
      absolute
      bottom-0
      w-full
      h-[3.026rem]
      mobile:h-[4.004rem]
      sMobile:h-[6.406rem]
      mMobile:h-[7.688rem]
      sLaptop:relative 
      sLaptop:h-auto
      '>
        <Footer/>
      </div>
    </motion.div>
  )
}

export default index
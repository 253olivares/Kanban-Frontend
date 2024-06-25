import { changeCreateAccountEmail, changeCreateAccountFirstname, changeCreateAccountLastname, changeCreateAccountPassword, changeCreateAccountUsername, changeCreateAccountretypePassword, createAccount, getCreateAccountInfo } from '../../reduxStore/users/userSlice';
import {useState, useLayoutEffect, useRef } from 'react';
import { checkIfEmailExists } from '../../customLogic';
import { useAppDispatch, useAppSelector } from '../../reduxStore/hook';
import {motion} from 'framer-motion';

import PasswordStrength from './components/passwordStrength';
import CreateAccountButton from '../component/modalButton';
import PasswordReq from './components/passwordRequirments';
import Inputs from '../component/entryFields';
import Footer from '../component/footer';
import { sanitize,emailValidation } from '../../customLogic';
import { closeModal } from '../../reduxStore/modal/modalSlice';
import { useNavigate } from 'react-router-dom';

const index = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // create a ref to allow us to motify our retypepassword input
    const repass = useRef<HTMLInputElement>(null)

    // keep track of all our values that the user inputs
    const userInfo = useAppSelector(getCreateAccountInfo);
    
    // update our password strength
    const [passwordStrength, setPasswordStrength] = useState<number>(0);

    // this is to keep track of the ui that shows users hwat password requirements they are missing
    const [passwordRequirements, setPasswordRequirements] = useState<Record<string,boolean>>({
        charLimit: false,
        numReq: false,
        specialChar:false
    })

    // our function that will run a check of user input making sure their password meets requirements 
    const checkPassword = () => {
        let totalPoints = 0;
        let req ={
            charLimit: false,
            numReq: false,
            specialChar:false 
        }

        // create a snapshot of our password that we are going to use to check
        const passwordSnapshot = userInfo.password;
        const specialChar = `~\`!@#$%^&*()_-+={[}]|\:;"'<,>.?/`
        const leastOneNumber = '0123456789'

        if (passwordSnapshot.length >= 8) {
          totalPoints++;
          req = {
            ...req,
            charLimit:true
        }}

        // code improvements
        // for loop to check if we have a special character if we find one break the loop'
        for(const char of specialChar){
            if(passwordSnapshot.includes(char)){
                totalPoints++;
                req = {
                    ...req,
                    specialChar:true
                }
                break;
            }
        }

        for(const number of leastOneNumber){
            if(passwordSnapshot.includes(number)){
                totalPoints++;
                req = {
                    ...req,
                    numReq:true
                }
                break;
            }
        }

        // previous loops left to show code improvements left

        // for(let i=0; i<=specialChar.length-1; i++ ){
        //     let found = false
        //    for(let x=0; x<=passwordSnapshot.length-1; x++){
        //     if(passwordSnapshot[x] === specialChar[i]){
        //         totalPoints = totalPoints + 1;
        //         req = {
        //             ...req,
        //             specialChar:true
        //         }
        //         found=true;
        //         break;
        //     }
        //    }
        //    if(found) break;
        // }

        // // checker for numbers now
        // for(let i=0; i<=leastOneNumber.length-1; i++ ){
        //     let found = false
        //    for(let x=0; x<=passwordSnapshot.length-1; x++){
        //     if(passwordSnapshot[x] === leastOneNumber[i]){
        //         totalPoints = totalPoints + 1;
        //         req = {
        //             ...req,
        //             numReq:true
        //         }
        //         found=true;
        //         break;
        //     }
        //    }
        //    if(found) break;
        // }
        // set our new reqs that meet conditions
        setPasswordRequirements(()=> req);
        // set our new strength value
        setPasswordStrength(() => totalPoints);
    }

    const checkifPasswordsMatch=()=> {

        // Minor improvements in readability
        const refCheck = repass.current;
        const passChecking = userInfo.retypePassword;
 
        if(passChecking !==''&& refCheck)
        if(userInfo.password !== passChecking){
            refCheck.style.backgroundColor = "rgba(255,148,148,.5)";
        } else {
            refCheck.style.backgroundColor = "rgba(195,255,139,.5)";
        }
    }
    
    // layout effect to calculate if our password is valid
    useLayoutEffect(()=> {
        if(userInfo.password !== ''){
            checkPassword();
            // checkifPasswordsMatch();
        } else {
            // otherwise if our password is blank reset our values
            setPasswordRequirements({
                charLimit: false,
                numReq: false,
                specialChar:false
            })
            setPasswordStrength(0)
        }
    },[userInfo.password])

    // a layouteffect to see if our password match
    useLayoutEffect(()=>{
        if(userInfo.retypePassword !== '') {
            checkifPasswordsMatch();
        } else {
            if(repass.current)
            repass.current.style.backgroundColor = "#CECECE";
        }
    },[userInfo.retypePassword,userInfo.password])

    //   final check before submitting all user information
    const checkInputs = () => {

        let {password,email} = userInfo;

        const emailValid = emailValidation(email);
        const passwordMatch = password === userInfo.retypePassword;
        const sanitizedPassword = sanitize(password);
        const sanitizedFirstname = sanitize(userInfo.firstname.trim());
        const sanitizedLastname = sanitize(userInfo.lastname.trim());
        const sanitizedUsername = sanitize(userInfo.username.trim());

        const match = checkIfEmailExists(email);

        // console.log('sanitizedFirstname:',sanitizedFirstname);
        // console.log('sanitizsedLastname',sanitizedLastname);
        // console.log('sanitizedUsername:',sanitizedUsername);
        // console.log('sanitizedPassword:',sanitizedPassword)

        if(match){
            alert('Email already in use please try a different email!')
        } else if (sanitizedFirstname === '' || sanitizedLastname === '' || sanitizedUsername === '' || email === '' || sanitizedPassword === ''){
            alert('Please make sure to fill out all fields!');
        } else if(sanitizedPassword.length >= 20){
            alert('Please make sure your password is not longer than 20 characters!')
        } else if (passwordStrength!== 3){
            alert('Please make sure your password meets all its requirements!')
        } else if (!passwordMatch || !emailValid){
            alert("Please make sure your passwords match and email is valid!")
        } else {
            dispatch(createAccount({
                firstname: sanitizedFirstname, 
                lastname: sanitizedLastname,
                username: sanitizedUsername,
                email: email,
                password: sanitizedPassword
            }))
            .unwrap().then((x)=> {
                console.log("Create account successful!");
                dispatch(closeModal());
                navigate(`u/${x.u_id}`);
            }).catch();
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
    sLaptop:w-[24.999rem] 
    mLaptop:w-[31.249rem]
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
     sLaptop:pb-0
     '
    >
        <h1 className='
        text-linear-gradient
        text-center
        font-bold
        w-full

        pt-[1.88rem]
        pb-[1.097rem]
        mobile:pt-[2.501rem]
        mobile:pb-[1.463rem]
        sMobile:pt-[4.011rem]
        sMobile:pb-[2.364rem]
        mMobile:pt-[4.813rem]
        mMobile:pb-[2.813rem]
        sLaptop:pt-[1.569rem]
        sLaptop:pb-[1.354rem]
        mLaptop:pt-[1.961rem]
        mLaptop:pb-[1.678rem]
        desktop:pt-[2.353rem]
        desktop:pb-[2.001rem]
        largeDesktop:pt-[2.943rem]
        largeDesktop:pb-[2.549rem]

        text-[1.367rem]
        mobile:text-[1.822rem]
        sMobile:text-[2.916rem]
        mMobile:text-[3.5rem]
        sLaptop:text-[1.255rem]
        mLaptop:text-[1.569rem]
        desktop:text-[1.883rem]
        largeDesktop:text-[2.353rem]
        leading-none
        '>Create an Account</h1>
        <form className='
            flex 
            flex-col 

            px-[13.02%]
            sLaptop:px-[11.5%]
            font-normal

        ' onSubmit={(e)=> e.preventDefault()}>
            {/* first name last name */}
            <div className='
            flex 
            flex-col 
            sLaptop:flex-row 
            sLaptop:gap-[0.439rem] 
            mLaptop:gap-[0.549rem] 
            desktop:gap-[0.659rem]
            largeDesktop:gap-[0.824rem]
            '>
                <div className='modalHalfInputDiv
                 pt-[0.488rem]
                 mobile:pt-[0.651rem]
                 sMobile:pt-[1.042rem]
                 mMobile:pt-[1.25rem]
                 sLaptop:pt-0
                '>
                    <Inputs 
                    id='fName'
                    type='text'
                    label='First Name'
                    value={userInfo.firstname}
                    func={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch(changeCreateAccountFirstname(e.target.value))}
                    />
                </div>
                <div className='modalHalfInputDiv
                 pt-[0.488rem]
                 mobile:pt-[0.651rem]
                 sMobile:pt-[1.042rem]
                 mMobile:pt-[1.25rem]
                 sLaptop:pt-0
                '>
                    <Inputs 
                    id='lName'
                    type='text'
                    label='Last Name'
                    value={userInfo.lastname}
                    func={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch(changeCreateAccountLastname(e.target.value))}
                    />
                </div>
            </div>
            {/* username and email */}
            <div className='
            flex 
            flex-col 
            sLaptop:flex-row 
            sLaptop:gap-[0.439rem] 
            mLaptop:gap-[0.549rem] 
            desktop:gap-[0.659rem]
            largeDesktop:gap-[0.824rem]

            sLaptop:pt-[0.251rem]
            mLaptop:pt-[0.314rem]
            desktop:pt-[0.376rem]
            largeDesktop:pt-[0.471rem]
            '>
                <div className='modalHalfInputDiv 
                 pt-[0.488rem]
                 mobile:pt-[0.651rem]
                 sMobile:pt-[1.042rem]
                 mMobile:pt-[1.25rem]
                 sLaptop:pt-0
                '>
                    <Inputs 
                    id='username'
                    type='text'
                    label='Username'
                    value={userInfo.username}
                    func={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch(changeCreateAccountUsername(e.target.value))}
                    />
                </div>
                <div className='modalHalfInputDiv
                 pt-[0.488rem]
                 mobile:pt-[0.651rem]
                 sMobile:pt-[1.042rem]
                 mMobile:pt-[1.25rem]
                 sLaptop:pt-0
                '>
                    <Inputs 
                    id='newEmail'
                    type='email'
                    label='Email'
                    value={userInfo.email}
                    func={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch(changeCreateAccountEmail(e.target.value))}
                    />
                </div>
            </div>
            {/* password */}
            <div className='modalPasswordInputDiv
             pt-[0.488rem]
             mobile:pt-[0.651rem]
             sMobile:pt-[1.042rem]
             mMobile:pt-[1.25rem]
             sLaptop:pt-[0.251rem]
             mLaptop:pt-[0.314rem]
             desktop:pt-[0.376rem]
             largeDesktop:pt-[0.471rem]
            '>
                    <Inputs 
                    id='password'
                    type='password'
                    label='Password'
                    value={userInfo.password}
                    func={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch(changeCreateAccountPassword(e.target.value))}
                    />
            </div>
            {/* retype password */}
            <div className='modalPasswordInputDiv 
            
            pt-[0.488rem]
            mobile:pt-[0.651rem]
            sMobile:pt-[1.042rem]
            mMobile:pt-[1.25rem]
            sLaptop:pt-[0.251rem]
            mLaptop:pt-[0.314rem]
            desktop:pt-[0.376rem]
            largeDesktop:pt-[0.471rem]

            pb-[0.61rem]
            mobile:pb-[0.814rem]
            sMobile:pb-[1.302rem]
            mMobile:pb-[1.563rem]
            sLaptop:pb-[0.516rem]
            mLaptop:pb-[0.519rem]
            desktop:pb-[0.524rem]
            largeDesktop:pb-[0.779rem]
            '>
                    <Inputs 
                    ref={repass}
                    id='retypePassword'
                    type='password'
                    label='Re-type Password'
                    value={userInfo.retypePassword}
                    func={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch(changeCreateAccountretypePassword(e.target.value))}
                    />
            </div>
            {/* password strength */}
            {/* this will be a component */}
            <PasswordStrength status={passwordStrength} />
            {/* password requirements */}
            {/* this will be a component */}
            <PasswordReq reqs={passwordRequirements} />
            {/* submit button */}
            <div className='
            sLaptop:scale-95
            flex 
            justify-center 
            pt-[1.51rem] pb-[3.428rem] 
            mobile:pt-[2.014] mobile:pb-[4.57rem]
            sMobile:pt-[3.222rem] sMobile:pb-[7.312rem] 
            mMobile:pt-[3.866rem] mMobile:pb-[8.776rem]
            sLaptop:py-[1.261rem] 
            mLaptop:py-[1.607rem]
            desktop:py-[1.829rem] 
            largeDesktop:py-[2.349rem]'>
                <CreateAccountButton message="Create Account" fn={()=>{checkInputs()}} />
            </div>
        </form>
    </div>
        {/* footer */}
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
         <Footer />
    </div>
    </motion.div>
  )
}

export default index
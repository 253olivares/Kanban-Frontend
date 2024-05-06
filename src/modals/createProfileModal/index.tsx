import {useState, useLayoutEffect, useRef } from 'react';
import CreateAccountButton from '../../pages/1_HomePage/components/Button';
import Inputs from '../component/entryFields'
import PasswordReq from './components/passwordRequirments';
import PasswordStrength from './components/passwordStrength'
import Footer from '../component/footer';

const index = () => {
    // create a ref to allow us to motify our retypepassword input
    const repass = useRef<HTMLInputElement>(null)

    // keep track of all our values that the user inputs
    const [userInfo, setUserInfo] = useState<Record<string,string>>({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        retypePassword: ''
    })
    
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

        if (passwordSnapshot.length >= 12) {
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
        setPasswordRequirements(()=> req);
        // set our new strength value
        setPasswordStrength(() => totalPoints);
    }
    const checkifPasswordsMatch=()=> {
        if(userInfo.retypePassword !=='')
        if(userInfo.password !== userInfo.retypePassword){
            if(repass.current){
                repass.current.style.backgroundColor = "rgba(255,148,148,.5)"
            }
        } else if (userInfo.password === userInfo.retypePassword) {
            if(repass.current) {
                repass.current.style.backgroundColor = "rgba(195,255,139,.5)"
            }

        }
    }

    // layout effect to calculate if our password is valid
    useLayoutEffect(()=> {
        if(userInfo.password !== ''){
            checkPassword();
            checkifPasswordsMatch();
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
            repass.current.style.backgroundColor = "#d9d9d9";
        }
    },[userInfo.retypePassword])
    

    // validate our email
    function emailValidation (email:string):boolean {
        // email pattern
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // test it to see if it passes the check
        return pattern.test(email);
    }

    // sanitizer our inputs 
    // pass our input values and then return a string of them sanitized
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
    

    //   final check before submitting all user information
    const checkInputs = () => {
        let firstname = userInfo.firstname.trim();
        let lastname = userInfo.lastname.trim();
        let username = userInfo.username.trim();
        let email = userInfo.email;
        let password = userInfo.password;
        let retypepassword = userInfo.retypePassword;

        const emailValid = emailValidation(email);
        const passwordMatch = password === retypepassword;
        const sanitizedPassword = sanitize(password);
        const sanitizedFirstname = sanitize(firstname);
        const sanitizedLastname = sanitize(lastname);
        const sanitizedUsername = sanitize(username);

        if(passwordMatch && emailValid) {
            alert(`Your information is:
            firstname: ${sanitizedFirstname}
            lastname: ${sanitizedLastname}
            username: ${sanitizedUsername}
            email:${email}
            password:${sanitizedPassword}
            `)
            setUserInfo({
                firstname: '',
                lastname: '',
                username: '',
                email: '',
                password: '',
                retypePassword: ''
            })
        } else {
            alert("Please make sure your passwords match and email is valid!")
        }
    }

  return (
    <div className="bg-PrimaryWhite block w-full h-full sLaptop:h-auto  sLaptop:w-[31.5rem]  mLaptop:w-[38rem] desktop:w-[39.663rem] largeDesktop:w-[42.5rem] sLaptop:rounded-[0.906rem] overflow-y-scroll no-scrollbar sLaptop:overflow-hidden">
        <h1 className='
        mt-[2.25rem]
        mb-[1.25rem]
        sMobile:mt-[4rem]
        sMobile:mb-[2.25rem]
        mMobile:mt-[4.688rem]
        mMobile:mb-[2.813rem]
        sLaptop:mt-[1.65rem]
        sLaptop:mb-[1rem]
        mLaptop:mt-[2.4rem]
        mLaptop:mb-[1.5rem]
        desktop:mt-[2.5rem]
        desktop:mb-[1.5rem]
        text-center
        w-full
        font-bold
        text-linear-gradient
        text-[1.25rem] 
        sMobile:text-[2.063rem]
        mMobile:text-[2.5rem]
        sLaptop:text-[1.4rem]
        mLaptop:text-[2rem]
        desktop:text-[2.375rem]
        largeDesktop:text-[2.5rem]
        '>Create an Account</h1>
        <form className='
            flex 
            flex-col 
            gap-4
            sMobile:gap-5
            sLaptop:gap-[.2rem]
            mLaptop:gap-[.3rem]
            desktop:gap-[.35rem]
            px-[2.5rem]
            sMobile:px-[5.313rem]
            mMobile:px-[6.25rem]
            sLaptop:px-[3.25rem]
            mLaptop:px-[4.2rem]
            desktop:px-[4.5rem] 
            font-normal
        ' onSubmit={(e)=> e.preventDefault()}>
            {/* first name last name */}
            <div className='flex flex-col sLaptop:flex-row gap-4 mMobile:gap-5 sLaptop:gap-[.4rem] mLaptop:gap-[.6rem] desktop:gap-[.75rem]'>
                <div className='modalHalfInputDiv'>
                    <Inputs 
                    className='modalInputs'
                    id='fName'
                    type='text'
                    label='First Name'
                    value={userInfo.firstName}
                    func={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        setUserInfo(x => ({...x, firstname:e.target.value}
                        ))}}
                    />
                </div>
                <div className='modalHalfInputDiv'>
                    <Inputs 
                    className='modalInputs'
                    id='lName'
                    type='text'
                    label='Last Name'
                    value={userInfo.lastname}
                    func={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        setUserInfo(x => ({...x, lastname:e.target.value}
                        ))}}
                    />
                </div>
            </div>
            {/* username and email */}
            <div className='flex flex-col sLaptop:flex-row gap-4 mMobile:gap-5 sLaptop:gap-[.4rem] mLaptop:gap-[.6rem] desktop:gap-[.75rem]'>
                <div className='modalHalfInputDiv'>
                    <Inputs 
                    className='modalInputs'
                    id='username'
                    type='text'
                    label='Username'
                    value={userInfo.username}
                    func={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        setUserInfo(x => ({...x, username:e.target.value}
                        ))}}
                    />
                </div>
                <div className='modalHalfInputDiv'>
                    <Inputs 
                    className='modalInputs'
                    id='newEmail'
                    type='email'
                    label='Email'
                    value={userInfo.email}
                    func={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        setUserInfo(x => ({...x, email:e.target.value}
                        ))}}
                    />
                </div>
            </div>
            {/* password */}
            <div className='modalPasswordInputDiv'>
                    <Inputs 
                    className='modalInputs'
                    id='password'
                    type='password'
                    label='Password'
                    value={userInfo.password}
                    func={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        setUserInfo(x => ({...x, password:e.target.value}))
                    }}
                    />
            </div>
            {/* retype password */}
            <div className='modalPasswordInputDiv'>
                    <Inputs 
                    ref={repass}
                    className='modalInputs'
                    id='retypePassword'
                    type='password'
                    label='Re-type Password'
                    value={userInfo.retypePassword}
                    func={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        setUserInfo(x => ({...x, retypePassword:e.target.value}
                        ))}}
                    />
            </div>
            {/* password strength */}
            {/* this will be a component */}
            <PasswordStrength status={passwordStrength} />
            {/* password requirements */}
            {/* this will be a component */}
            <PasswordReq reqs={passwordRequirements} />
            {/* submit button */}
            <div className='flex justify-center 
             desktop:scale-95
            pt-[2.5rem] pb-[2.5rem] sMobile:pt-[3.75rem] sMobile:pb-[3.75rem] sLaptop:pt-[1.4rem] sLaptop:pb-[2rem] mLaptop:pt-[1.6rem] desktop:pt-[1.70rem] desktop:pb-[2.4rem] largeDesktop:pt-[2rem] largeDesktop:pb-[2.75rem]'>
                <CreateAccountButton message="Create Account" fn={()=>{checkInputs()}} />
            </div>
        </form>
        {/* footer */}
        <Footer />
    </div>
  )
}

export default index
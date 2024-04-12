import React, { HtmlHTMLAttributes, MutableRefObject } from 'react';
import CreateAccountButton from '../../pages/1_HomePage/Components/Button';
import Inputs from '../Component/EntryFields'
import PasswordReq from './Components/PasswordRequirments';
import PasswordStrength from './Components/PasswordStrength'
import Footer from '../Component/Footer';

const index = () => {
    // keep track of all our values that the user inputs
    const [userInfo, setUserInfo] = React.useState<Record<string,string>>({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        retypePassword: ''
    })
    
    // update our password strength
    const [passwordStrength, setPasswordStrength] = React.useState<0|1|2|3>(0);

    // this is to keep track of the ui that shows users hwat password requirements they are missing
    const [passwordRequirements, setPasswordRequirements] = React.useState<Record<string,boolean>>({
        charLimit: false,
        numReq: false,
        specialChar:false
    })

    // our function that will run a check of user input making sure their password meets requirements 
    const checkPassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo(x => ({...x, password:e.target.value}))
    }
    
    const checkInputs = () => {
        
    }

  return (
    <div className="bg-PrimaryWhite block w-full h-full sLaptop:h-auto  sLaptop:w-[32.5rem]  mLaptop:w-[38rem] desktop:w-[39.663rem] largeDesktop:w-[42.5rem] sLaptop:rounded-[0.906rem] overflow-y-scroll no-scrollbar sLaptop:overflow-hidden">
        <h1 className='
        mt-[2.25rem]
        mb-[1.25rem]
        sMobile:mt-[4rem]
        sMobile:mb-[2.25rem]
        mMobile:mt-[4.688rem]
        mMobile:mb-[2.813rem]
        sLaptop:mt-[1.8rem]
        sLaptop:mb-[1.15rem]
        mLaptop:mt-[2.4rem]
        mLaptop:mb-[1.5rem]
        desktop:mt-[2.5rem]
        desktop:mb-[1.75rem]
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
            sLaptop:gap-[.25rem]
            mLaptop:gap-[.3rem]
            desktop:gap-[.35rem]
            px-[2.5rem]
            sMobile:px-[5.313rem]
            mMobile:px-[6.25rem]
            sLaptop:px-[3.85rem]
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
                    func={(e:React.ChangeEvent<HTMLInputElement>)=>checkPassword(e)}
                    />
            </div>
            {/* retype password */}
            <div className='modalPasswordInputDiv'>
                    <Inputs 
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
            <div >
                <PasswordStrength status={passwordStrength} />
            </div>
            {/* password requirements */}
            {/* this will be a component */}
            <div>
                <PasswordReq reqs={passwordRequirements} />
            </div>
            {/* submit button */}
            <div className='flex justify-center 
            pt-[2.5rem] pb-[2.5rem] sMobile:pt-[3.75rem] sMobile:pb-[3.75rem] sLaptop:pt-[1.4rem] sLaptop:pb-[2rem] mLaptop:pt-[1.6rem] desktop:pt-[1.70rem] desktop:pb-[2.4rem] largeDesktop:pt-[2rem] largeDesktop:pb-[2.75rem]'>
                <CreateAccountButton message="Create Account" fn={()=>{}} />
            </div>
        </form>
        {/* footer */}
        <Footer />
    </div>
  )
}

export default index
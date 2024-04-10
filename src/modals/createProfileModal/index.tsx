import React from 'react';
import LogoExport from '/assets/Logo_Export.svg';
import Button from '../Component/CancelButton';
import CreateAccountButton from '../../pages/1_HomePage/Components/Button';
import Inputs from './Components/EntryFields'
import PasswordReq from './Components/PasswordRequirments';
import PasswordStrength from './Components/PasswordStrength'

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
    // this is to keep track of the ui that shows users hwat password requirments they are missing
    const [passwordRequirements, setPasswordRequirements] = React.useState<Record<string,boolean>>({
        charLimit: false,
        numReq: false,
        specialChar:false
    })

    const checkPassword = () => {

    }

  return (
    <div className="bg-PrimaryWhite min-w-[39.375rem] block rounded-[0.906rem] overflow-hidden">
        <h1 className='
        my-[2.25rem]
        text-center
        w-full
        text-[2.375rem]
        font-bold
        text-linear-gradient 
        '>Create an Account</h1>
        <form className='
            flex 
            flex-col 
            gap-2
            px-[4.5rem] 
            font-normal
        ' onSubmit={(e)=> e.preventDefault()}>
            {/* first name last name */}
            <div className='flex gap-3 w-full'>
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
            <div className='flex gap-3 w-full'>
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
                        setUserInfo(x => ({...x, password:e.target.value}
                        ))}}
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
            <div>
                <PasswordStrength />
            </div>
            {/* password requirements */}
            {/* this will be a component */}
            <div>
                <PasswordReq />
            </div>
            {/* submit button */}
            <div className='flex justify-center my-[2.5rem]'>
                <CreateAccountButton message="Create Account" fn={()=>{}} />
            </div>
        </form>
        {/* footer */}
        <div className="relative conic-gradient min-w-[37.5rem] 
        flex justify-between items-center
        px-[4.125rem] py-[1.875rem]">
            <Button message='Close' />
            <img className='
            w-[2.969rem] h-[2.969rem]
            ' src={LogoExport} alt="Logo Icons" />
        </div>
    </div>
  )
}

export default index
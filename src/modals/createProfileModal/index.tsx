import LogoExport from '/assets/Logo_Export.svg';
import Button from '../Component/CancelButton';
import CreateAccountButton from '../../pages/1_HomePage/Components/Button';


const index = () => {
    

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
        '
        onSubmit={(e)=> e.preventDefault()}>
            {/* first name last name */}
            <div className='flex gap-3 w-full'>
                <div className='modalHalfInputDiv'>
                    <label htmlFor="fName">First Name:</label>
                    <input className='modalInputs' id='fName' type="text" required />
                </div>
                <div className='modalHalfInputDiv'>
                    <label htmlFor='lName'>Last Name:</label>
                    <input className='modalInputs' id='lName' type="text" required />
                </div>
            </div>
            {/* username and email */}
            <div className='flex gap-3 w-full'>
                <div className='modalHalfInputDiv'>
                    <label htmlFor="username">Username:</label>
                    <input className='modalInputs' id='username' type="text" required />
                </div>
                <div className='modalHalfInputDiv'>
                    <label htmlFor='email'>Email:</label>
                    <input className='modalInputs' id='email' type="email" required />
                </div>
            </div>
            {/* password */}
            <div className='modalPasswordInputDiv'>
                <label htmlFor="password">Password:</label>
                <input className='modalInputs' id='password' type="password" />
            </div>
            {/* retype password */}
            <div className='modalPasswordInputDiv'>
                <label htmlFor="retypePassword">Re-type Password:</label>
                <input className='modalInputs' id="retypePassword" type="password" />
            </div>
            {/* password strength */}
            <div>

            </div>
            {/* password requirements */}
            <div>

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
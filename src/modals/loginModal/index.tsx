import React from "react"
import LogoExport from '/assets/Logo_Export.svg';
import Inputs from '../Component/EntryFields'
import CreateAccountButton from '../../pages/1_HomePage/Components/Button';
import Button from "../Component/CancelButton";

const index = () => {

  const [userInfo, setUserInfo] = React.useState({
    username: '',
    password: '',
    remember: false
  })

  return (
    <div className="bg-PrimaryWhite min-w-[39.375rem] block rounded-[0.906rem] overflow-hidden">
      <h1 className="
      mt-[2.5rem] mb-[1.75rem]
      text-center
      w-full
      text-[2.375rem]
      font-bold
      text-linear-gradient
      ">
        Sign In
      </h1>
      <form className="
      flex flex-col gap-[.35rem] px-[4.5rem] font-normal
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
        <div className="flex gap-3 my-9 ml-9">
          <input checked={userInfo.remember} onChange={(e)=>setUserInfo(x=>({...x,remember:e.target.checked}))} className="w-6 h-6" type="checkbox" id="rememberMe" />
          <label className=" font-normal text-xl" htmlFor="rememberMe">Remember Me</label>
        </div>
        <div className="flex justify-center mb-16">
          <CreateAccountButton message="Login" fn={()=>{}} />
        </div>    
      </form>
      {/* Footer */}
      <div className="relative conic-gradient min-w-[37.5rem]
        flex justify-between items-center
        px-[4.125rem] py-[1.75rem]">
          <Button message="close" />
          <img className='
            w-[2.969rem] h-[2.969rem]
            ' src={LogoExport} alt="Logo" />
        </div>
    </div>
  )
}

export default index
import React from "react"
import Inputs from '../Component/EntryFields'
import CreateAccountButton from '../../pages/1_HomePage/Components/Button';
import Footer from '../Component/Footer'

const index = () => {

  const [userInfo, setUserInfo] = React.useState({
    username: '',
    password: '',
    remember: false
  })

  return (
    <div className="bg-PrimaryWhite block w-full h-full sLaptop:scale-[.925] sLaptop:w-[28.5rem] mLaptop:scale-95 mLaptop:w-[35rem] desktop:scale-100 desktop:w-[39.663rem] largeDesktop:w-[42.5rem] largeDesktop:scale-[1.2] rounded-[0.906rem] overflow-y-scroll no-scrollbar sLaptop:overflow-hidden">
      <h1 className="
       mt-[4.688rem]
       mb-[2.813rem]
       sLaptop:mt-[1.8rem]
       sLaptop:mb-[1.15rem]
       mLaptop:mt-[2.4rem]
       mLaptop:mb-[1.5rem]
       desktop:mt-[2.5rem]
       desktop:mb-[1.75rem]
       largeDesktop:mb-[2rem]
       text-center
       w-full
       font-bold
       text-linear-gradient 
       text-[2.5rem]
       sLaptop:text-[1.4rem]
       mLaptop:text-[2rem]
       desktop:text-[2.375rem]
       largeDesktop:text-[2.5rem] 
      ">
        Sign In
      </h1>
      <form className="
      flex flex-col 
      pb-[8.149rem]
      sLaptop:gap-[.25rem]
      mLaptop:gap-[.3rem]
      gap-[.35rem]
      sLaptop:px-[3.85rem]
      mLaptop:px-[4.2rem]
      px-[4.5rem] font-normal
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
        <div className="flex items-center gap-5 sLaptop:gap-3 my-14 sLaptop:my-5 desktop:my-9 sLaptop:ml-5 mLaptop:ml-7 desktop:ml-9">
          <input checked={userInfo.remember} onChange={(e)=>setUserInfo(x=>({...x,remember:e.target.checked}))} className=" w-8 h-8 sLaptop:w-5 sLaptop:h-5 desktop:w-6 desktop:h-6" type="checkbox" id="rememberMe" />
          <label className=" font-normal text-[1.688rem] sLaptop:text-[.85rem] mLaptop:text-[1.15rem] desktop:text-xl" htmlFor="rememberMe">Remember Me</label>
        </div>
        <div  className='flex justify-center sLaptop:scale-[1.15] mLaptop:scale-[.95] desktop:scale-[.875] largeDesktop:scale-95 pt-[3.75rem] pb-[3.75rem] sLaptop:pt-[1.4rem] sLaptop:pb-[2rem] mLaptop:pt-[1.6rem] desktop:pt-[1.70rem] desktop:pb-[2.4rem] largeDesktop:pt-[2rem] largeDesktop:pb-[2.75rem]'>
          <CreateAccountButton message="Login" fn={()=>{}} />
        </div>    
      </form>
      {/* Footer */}
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default index
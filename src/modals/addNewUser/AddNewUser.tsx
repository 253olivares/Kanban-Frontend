import { memo, useLayoutEffect, useState } from "react";
import Header from "./Header";
import EmailInput from "./EmailInput";
import AddHistory from "./AddHistory";

const AddNewUser = memo(() => {

  // @ts-ignore
  const [userHistory,setUserHistory] = useState();
  
  useLayoutEffect(()=>{

    // check for new user



  },[])

  return <div className="
  relative

  bg-SpaceBlue

  hidden
  sLaptop:flex
  flex-col

  justify-center

  sLaptop:w-[34.666rem]
  mLaptop:w-[43.333rem]
  desktop:w-[52rem]
  largeDesktop:w-[65rem]

  sLaptop:rounded-[0.471rem] 
  mLaptop:rounded-[0.588rem]
  desktop:rounded-[0.706rem]
  largeDesktop:rounded-[0.883rem]

  px-[5%]

  sLaptop:py-[1.066rem]
  mLaptop:py-[1.333rem]
  desktop:py-[1.6rem]
  largeDesktop:py-[2rem]

  text-PrimaryWhite

  transition-[height]

  ">
    <Header />
  
    <div className="
    flex
    flex-col
    ">
      <EmailInput />
      <p>Please enter a valid user email address!</p>
    </div>
    <AddHistory  />
  </div>
})

export default AddNewUser
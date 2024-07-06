import { memo, useLayoutEffect, useRef, useState } from "react";
import Header from "./Header";
import EmailInput from "./EmailInput";
import AddHistory from "./AddHistory";
import { checkIfEmailExists, emailValidation, getUserHistory } from "../../customLogic/CustomeLogic";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hook";
import { changeUserRoleNameState, getRolState } from "../../reduxStore/modal/modalSlice";
import RoleModal from "./RoleModal";

const AddNewUser = memo(() => {

  const params = useParams();
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const [emailInput,setEmailInput] = useState<string>("");
  const [userHistory,setUserHistory] = useState<Record<string,string>|null>(null);
  const userRole = useAppSelector(getRolState);

  useLayoutEffect(()=>{

    // check for new user
    const userHistoryData = getUserHistory(params?.workspaceId||"");

    setUserHistory(userHistoryData);

  },[])

  if(!params.workspaceId) return;
  if(!userHistory) return;

  const checkEmailInput = () => {

    if(emailInput.trim()===""){
      alert("Please enter an email!")
      return; 
    }

    if(!emailValidation(emailInput.trim())){
      alert("Please enter a valid email address!");
      return;
    }

    if(userHistory[emailInput]) {
      alert("User already exists in board!");
      return;
    }

    const match = checkIfEmailExists(emailInput);

    if(!match) {
      alert("User does not exist!");
      if(inputRef.current) inputRef.current.style.color ='red';
      return;
    } else {
      dispatch(changeUserRoleNameState(true));
    }

  }

  return <div className=" addNewUserHolder ">
    <AnimatePresence>
    {
      userRole ? <RoleModal emailInput={emailInput} /> : ""
    }
    </AnimatePresence>
    <Header />
    <div className="
    flex
    flex-col

    sLaptop:gap-[.533rem]
    mLaptop:gap-[.666rem]
    desktop:gap-[.8rem]
    largeDesktop:gap-[1rem]

    ">
      <EmailInput 
      emailInput = {emailInput} 
      setInput = {(emailInput:string)=> setEmailInput(emailInput)} 
      inputRef = {inputRef}
      checkEmailInput = {checkEmailInput}
      />
      <p className="
        sLaptop:text-[0.799rem]
        mLaptop:text-[0.999rem]
        desktop:text-[1.2rem]
        largeDesktop:text-[1.5rem]

        leading-none

      ">Please enter a valid user email address! </p>
    </div>

    <hr className="
        w-full
        bg-PrimaryWhite
        opacity-50

        sLaptop:h-[0.133rem]
        mLaptop:h-[0.166rem]
        desktop:h-[0.2rem]
        largeDesktop:h-[.25rem]
        
        rounded-full 
        " />

    {
      Object.keys(userHistory).length !== 0 ?
      <AddHistory userHistory={userHistory} /> : ''
    }
  </div>
})

export default AddNewUser 
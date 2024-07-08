import { memo, useLayoutEffect, useRef, useState } from "react";
import Header from "./Header";
import EmailInput from "./EmailInput";
import AddHistory from "./AddHistory";
import { checkIfEmailExists, emailValidation, updateSelectUser } from "../../customLogic/CustomLogic";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hook";
import { addUserHistoryToState, changeUserRoleNameState, getRolState, getUserHistoryState } from "../../reduxStore/modal/modalSlice";
import RoleModal from "./RoleModal";
import AnimateHeight, { Height } from "react-animate-height";
import { addUserToWorkspace, getWorkspaceSelect } from "../../reduxStore/workspace/workspaceSlice";
import { addUserToBoard } from "../../reduxStore/boards/boardsSlice";

const AddNewUser = memo(({...props}) => {

  const params = useParams();
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const [emailInput,setEmailInput] = useState<string>("");
  const [height,setHeight] = useState<Height>('auto');

  const contentDiv = useRef<HTMLDivElement | null>(null);

  const userHistory  = useAppSelector(getUserHistoryState);
  const userRole = useAppSelector(getRolState);
  const selectWorkspace = useAppSelector(getWorkspaceSelect);


  if(!params.workspaceId) return;
  if(!userHistory) return;

  const addusertohistory = (user:Record<string,string[]>) => {
    if(inputRef.current) inputRef.current.style.color='green';
    dispatch(addUserHistoryToState({user:user,boardId:params.workspaceId!}));

    // Add user to board and workspace member collection
    dispatch(addUserToWorkspace({workspaceId:selectWorkspace,u_id:Object.values(user)[0][0]}))

    // adding user to board members array
    dispatch(addUserToBoard({boardId:params.workspaceId!,u_id:Object.values(user)[0][0],role:Object.values(user)[0][1]}))

    updateSelectUser(Object.values(user)[0][0],params.workspaceId!,selectWorkspace);
  }

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
      if(inputRef.current) inputRef.current.style.color='green';
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

  useLayoutEffect(()=> {
    const element = contentDiv.current as HTMLDivElement;
    const resizeObserver = new ResizeObserver(()=> {
      setHeight(element.clientHeight);
    })
    resizeObserver.observe(element);
    return ()=> resizeObserver.disconnect();
  },[])

  return <AnimateHeight 
      {...props}
      height={height}
      contentClassName="auto-content addNewUserHolder"
      contentRef={contentDiv}
      disableDisplayNone>
      <AnimatePresence>
      {
        userRole ? <RoleModal emailInput={emailInput} addusertohistory={addusertohistory} /> : ""
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
        userRole={userRole}
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

    <div className="
    flex
    flex-col
    sLaptop:gap-[.533rem]
    mLaptop:gap-[.666rem]
    desktop:gap-[.8rem]
    largeDesktop:gap-[1rem]

    flex-grow

    h-auto

    transition-all

    ">
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
      <AnimatePresence>
        <AddHistory userHistory={userHistory} />
      </AnimatePresence>
    </div>
  </AnimateHeight>
})

export default AddNewUser 
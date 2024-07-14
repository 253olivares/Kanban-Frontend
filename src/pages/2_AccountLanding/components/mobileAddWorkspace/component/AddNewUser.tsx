import { memo, useLayoutEffect, useRef, useState } from "react"
import AnimateHeight, { Height } from "react-animate-height"
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../reduxStore/hook";
import { addUserEmail, addUserHistoryToState, changeUserRoleNameState, closeModal, getAddUserEmail, getRolState, getUserHistoryState } from "../../../../../reduxStore/modal/modalSlice";
import { addUserToWorkspace, getWorkspaceSelect } from "../../../../../reduxStore/workspace/workspaceSlice";
import x_mark from '/assets/addBoard.png'
import AddNewUserInput from "./AddNewUserInput";
import AddHistoryComp from "./AddHistory";
import UserRoleMobile from "./UserRoleMobile";
import { addUserToBoard } from "../../../../../reduxStore/boards/boardsSlice";
import { checkIfEmailExists, emailValidation, updateSelectUser } from "../../../../../customLogic/CustomLogic";
import { AnimatePresence } from "framer-motion";

const AddNewUser = memo(({...props}) => {

    const params = useParams();
    // @ts-ignore
    const dispatch = useAppDispatch();

    // @ts-ignore
    const inputRef = useRef<HTMLInputElement>(null);

    // @ts-ignore
    // const [emailInput,setEmailInput] = useState<string>("");
    const [height,setHeight] = useState<Height>('auto');

    const contentDiv = useRef<HTMLDivElement | null>(null);

    const setEmailInput = (text:string) => dispatch(addUserEmail(text));

    const emailInput = useAppSelector(getAddUserEmail);
    const userHistory = useAppSelector(getUserHistoryState);
    const userRole = useAppSelector(getRolState);
    const selectWorkspace = useAppSelector(getWorkspaceSelect);

    if(!params.workspaceId) return;
    if(!userHistory) return;

    // @ts-ignore
    const addusertohistory = (user:Record<string,string[]>) => {
        if(inputRef.current) inputRef.current.style.color = "green"
        dispatch(addUserHistoryToState({user:user,boardId:params.workspaceId!}))

        dispatch(addUserToWorkspace({workspaceId:selectWorkspace,u_id:Object.values(user)[0][0]}));

        dispatch(addUserToBoard({boardId:params.workspaceId!,u_id:Object.values(user)[0][0],role:Object.values(user)[0][1]}));

        updateSelectUser(Object.values(user)[0][0],params.workspaceId!,selectWorkspace);
    }   
    

    // @ts-ignore
    const checkEmailInput = () => {

        if(emailInput.trim()===""){
            alert("Please enter an email!")
            return;
        }

        if(!emailValidation(emailInput.trim())){
            alert("Please enter a valid email address!");
            return 
        }

        if(userHistory[emailInput]){
            if(inputRef.current) inputRef.current.style.color = "green";
            alert("User already exists in board!");
            return;
        }

        const match = checkIfEmailExists(emailInput);

        if(!match){
            alert("User does not exist!");
            if(inputRef.current) inputRef.current.style.color = "red";
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
        return () => resizeObserver.disconnect();
    },[])

  return (
    <AnimateHeight
    {...props}
    contentClassName="addNewUserMobile"
    contentRef={contentDiv}
    height={height}
    style={{
        width: '90%'
    }}
    disableDisplayNone
    >
        <AnimatePresence>
        {
            userRole ? <UserRoleMobile emailInput={emailInput} addusertohistory={addusertohistory} /> : ""
        }
        </AnimatePresence>
        <AddNewUserHolder />
        <div className="
        flex
        flex-col

        ">
            <AddNewUserInput 
            emailInput={emailInput} 
            setInput={setEmailInput}
            userRole ={userRole}
            inputRef={inputRef}
            checkEmailInput={checkEmailInput}
            />
        </div>
        <div className="
        flex
        flex-col

        flex-grow

        h-auto

        transition-all
        ">
            <hr className="
            w-full

            bg-PrimaryWhite
            opacity-50

            h-[0.117rem]
            mobile:h-[0.156rem] 
            sMobile:h-[.25rem]
            mMobile:h-[.3rem]

            rounded-full

            mb-[0.820rem]
            mobile:mb-[1.093rem]
            sMobile:mb-[1.75rem]
            mMobile:mb-[2.1rem]
            " />
                <AddHistoryComp userHistory={userHistory} />
        </div>
    </AnimateHeight>
  )
})

const AddNewUserHolder = memo(() => {

    const dispatch = useAppDispatch();

    return <div className="
    w-full
    flex
    justify-between
    items-center
    ">
        <h1 className="
           text-[1.335rem]
           mobile:text-[1.780rem]
           sMobile:text-[2.848rem]
           mMobile:text-[3.418rem]

           font-medium

           leading-none
   
           text-PrimaryWhite
        ">Add New User</h1>
        <img 
        onClick={()=> dispatch(closeModal())}
        className="
          rotate-45

          h-[1.525rem]
          mobile:h-[2.034rem]
          sMobile:h-[3.254rem]
          mMobile:h-[3.906rem]
            
          cursor-pointer
        " src={x_mark} alt="Close icon" />
    </div>
})

export default AddNewUser
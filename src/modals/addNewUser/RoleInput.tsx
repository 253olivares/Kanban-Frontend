import { memo, useState } from "react"
import { useAppDispatch } from "../../reduxStore/hook";
import { changeUserRoleNameState } from "../../reduxStore/modal/modalSlice";
import { getUserByEmail } from "../../customLogic/CustomeLogic";


const RoleInput = memo((
    {
        emailInput,
        addusertohistory
    }:{
        emailInput:string,
        addusertohistory:(user: Record<string, string[]>)=>void
    }) => {

    const dispatch = useAppDispatch();

    const [input,setInput] = useState<string>("");
    const user = getUserByEmail(emailInput);

    if(!user) return;
    const addUserToBoard = () => {
        const date = new Date;

        const addUserHistory:Record<string,string[]> = {};
        addUserHistory[user.email] = [user.u_id,input,date.toLocaleString()];

        addusertohistory(addUserHistory);
        // alert(`New user added to board user history: ${user.email}, ${input},${date.toLocaleString()}`)
        dispatch(changeUserRoleNameState(false))
    }
    
  return (
    <form 
    onSubmit={(e)=> {
        e.preventDefault()
        addUserToBoard()
    }}
    className="
     bg-SpaceBlue

     sLaptop:p-[0.799rem]
     mLaptop:p-[0.999rem]
     desktop:p-[1.2rem]
     largeDesktop:p-[1.5rem]

     sLaptop:rounded-[0.471rem] 
     mLaptop:rounded-[0.588rem]
     desktop:rounded-[0.706rem]
     largeDesktop:rounded-[0.883rem]

     largeDesktop:gap-[1.35rem]

     relative 
     z-[6]

     min-w-[45%]

     flex
     flex-col
    ">
        <Header />
        <Input input={input} setInput={setInput} />
        <UserControl input={input} />
    </form>
  )
})

export const Header = memo(() => {
    return <h1 className="
    
     sLaptop:text-[0.799rem]
     mLaptop:text-[0.999rem]
     desktop:text-[1.2rem]
     largeDesktop:text-[1.5rem]
    
     leading-none

     font-medium
    ">Please Enter User's Role:</h1>
})

export const Input = memo(({input,setInput}:{input:string,setInput:(e:string)=>void})=> {
    return <input
    className="
    w-full

    sLaptop:text-[0.799rem]
    mLaptop:text-[0.999rem]
    desktop:text-[1.2rem]
    largeDesktop:text-[1.5rem]

    bg-SpaceBlueSelected

    focus:outline-none

    sLaptop:rounded-[0.133rem]
    mLaptop:rounded-[0.166rem]
    desktop:rounded-[0.2rem]
    largeDesktop:rounded-[.25rem]

    sLaptop:py-[0.266rem]
    mLaptop:py-[0.333rem]
    desktop:py-[0.4rem]
    largeDesktop:py-[.5rem]

    px-[2.5%]

    " 
    value={input} 
    placeholder="Enter Role..." 
    onChange={(e) => setInput(e.target.value)} />
})

const UserControl = memo(({input}:{input:string}) => {
    return <div className="
    w-full

    flex
    flex-row

    justify-between
    ">
        <CancelSubmit />

        <SubmitRole input={input}/>
    </div>
})

const CancelSubmit = memo(()=> {
    const dispatch = useAppDispatch();
    return <button

    onClick={ ()=> {dispatch(changeUserRoleNameState(false))}}
    type="reset"
    className="
    
    font-bold

    opacity-75

    bg-PrimaryWhite

    text-black

    sLaptop:py-[0.266rem]
    mLaptop:py-[0.333rem]
    desktop:py-[0.4rem]
    largeDesktop:py-[.5rem]
    sLaptop:px-[.533rem]
    mLaptop:px-[.666rem]
    desktop:px-[.8rem]
    largeDesktop:px-[1rem]

    sLaptop:text-[0.666rem]
    mLaptop:text-[0.833rem]
    desktop:text-[1rem]
    largeDesktop:text-[1.25rem]

    sLaptop:rounded-[0.133rem]
    mLaptop:rounded-[0.166rem]
    desktop:rounded-[0.2rem]
    largeDesktop:rounded-[.25rem]
    "   
    >
        Cancel
    </button>
})

const SubmitRole = ({input}:{input:string}) => {
    return <button 
    type="submit"
    onClick={()=> {

    }}
    disabled={input.trim()=== ""}
    className="
    font-bold

    bg-SelectorBlue

    disabled:opacity-25
    disabled:bg-PrimaryWhite
    enabled:text-PrimaryWhite
    disabled:text-black

    transition-all
    duration-300

    sLaptop:py-[0.266rem]
    mLaptop:py-[0.333rem]
    desktop:py-[0.4rem]
    largeDesktop:py-[.5rem]
    sLaptop:px-[.533rem]
    mLaptop:px-[.666rem]
    desktop:px-[.8rem]
    largeDesktop:px-[1rem]

    sLaptop:text-[0.666rem]
    mLaptop:text-[0.833rem]
    desktop:text-[1rem]
    largeDesktop:text-[1.25rem]

    sLaptop:rounded-[0.133rem]
    mLaptop:rounded-[0.166rem]
    desktop:rounded-[0.2rem]
    largeDesktop:rounded-[.25rem]
    "
    >
        Save
    </button>
}


export default RoleInput
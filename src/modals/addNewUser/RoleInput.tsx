import { memo } from "react"
import { useAppDispatch, useAppSelector } from "../../reduxStore/hook";
import { changeUserRoleNameState, getUserRole, setAddUserRole } from "../../reduxStore/modal/modalSlice";
import { getUserByEmail } from "../../customLogic/CustomLogic";


const RoleInput = memo((
    {
        emailInput,
        addusertohistory
    }:{
        emailInput:string,
        addusertohistory:(user: Record<string, string[]>)=>void
    }) => {

    const dispatch = useAppDispatch();

    // const [input,setInput] = useState<string>("");

    const input = useAppSelector(getUserRole);

    const setInput = (text:string) => dispatch(setAddUserRole(text));
    
    const user = getUserByEmail(emailInput);

    if(!user) return;
    const addUserToBoard = () => {
        const date = new Date;

        const addUserHistory:Record<string,string[]> = {};
        addUserHistory[user.email.toLowerCase()] = [user.u_id,input,date.toLocaleString()];

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

     p-[.585rem]
     mobile:p-[.781rem]
     sMobile:p-[1.25rem]
     mMobile:p-[1.5rem]

     sLaptop:p-[0.799rem]
     mLaptop:p-[0.999rem]
     desktop:p-[1.2rem]
     largeDesktop:p-[1.5rem]

     rounded-[.351rem]
     mobile:rounded-[.468rem]
     sMobile:rounded-[.75rem]
     mMobile:rounded-[.9rem]

     sLaptop:rounded-[0.471rem] 
     mLaptop:rounded-[0.588rem]
     desktop:rounded-[0.706rem]
     largeDesktop:rounded-[0.883rem]

     gap-[.632rem]
     mobile:gap-[.843rem]
     sMobile:gap-[1.35rem]
     mMobile:gap-[1.62rem]

     sLaptop:gap-[.719rem]
     mLaptop:gap-[.899rem]
     desktop:gap-[1.08rem]
     largeDesktop:gap-[1.35rem]

     relative 
     z-[6]

     sLaptop:min-w-[45%]

     flex
     flex-col

     w-full
     sLaptop:w-auto

    ">
        <Header />
        <Input input={input} setInput={setInput} />
        <UserControl input={input} />
    </form>
  )
})

const Header = memo(() => {
    return <h1 className="

     text-[1.054rem]
     mobile:text-[1.406rem]
     sMobile:text-[2.25rem]
     mMobile:text-[2.7rem]
    
     sLaptop:text-[0.799rem]
     mLaptop:text-[0.999rem]
     desktop:text-[1.2rem]
     largeDesktop:text-[1.5rem]
    
     leading-none

     font-medium

    ">Please Enter User's Role:</h1>
})

const Input = memo(({input,setInput}:{input:string,setInput:(e:string)=>void})=> {
    return <input
    className="

    w-full

    text-[.937rem]
    mobile:text-[1.25rem]
    sMobile:text-[2rem]
    mMobile:text-[2.4rem]

    sLaptop:text-[0.799rem]
    mLaptop:text-[0.999rem]
    desktop:text-[1.2rem]
    largeDesktop:text-[1.5rem]

    bg-SpaceBlueSelected

    focus:outline-none

    rounded-[.234rem]
    mobile:rounded-[.312rem]
    sMobile:rounded-[.5rem]
    mMobile:rounded-[.6rem]

    sLaptop:rounded-[0.133rem]
    mLaptop:rounded-[0.166rem]
    desktop:rounded-[0.2rem]
    largeDesktop:rounded-[.25rem]

    py-[.304rem]
    mobile:py-[.406rem]
    sMobile:py-[.65rem]
    mMobile:py-[.78rem]

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

    px-[1.142rem]
    mobile:px-[1.523rem]
    sMobile:px-[2.438rem]
    mMobile:px-[2.925rem]
    
    py-[0.292rem]
    mobile:py-[0.390rem]
    sMobile:py-[0.625rem]
    mMobile:py-[0.75rem]

    sLaptop:py-[0.266rem]
    mLaptop:py-[0.333rem]
    desktop:py-[0.4rem]
    largeDesktop:py-[.5rem]
    sLaptop:px-[.533rem]
    mLaptop:px-[.666rem]
    desktop:px-[.8rem]
    largeDesktop:px-[1rem]

    text-[0.703rem]
    mobile:text-[0.937rem]
    sMobile:text-[1.5rem]
    mMobile:text-[1.8rem]

    sLaptop:text-[0.666rem]
    mLaptop:text-[0.833rem]
    desktop:text-[1rem]
    largeDesktop:text-[1.25rem]

    rounded-[0.175rem]
    mobile:rounded-[0.233rem]
    sMobile:rounded-[0.374rem]
    mMobile:rounded-[0.448rem]

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

    px-[1.142rem]
    mobile:px-[1.523rem]
    sMobile:px-[2.438rem]
    mMobile:px-[2.925rem]
    
    py-[0.292rem]
    mobile:py-[0.390rem]
    sMobile:py-[0.625rem]
    mMobile:py-[0.75rem]

    sLaptop:py-[0.266rem]
    mLaptop:py-[0.333rem]
    desktop:py-[0.4rem]
    largeDesktop:py-[.5rem]
    sLaptop:px-[.533rem]
    mLaptop:px-[.666rem]
    desktop:px-[.8rem]
    largeDesktop:px-[1rem]

    text-[0.703rem]
    mobile:text-[0.937rem]
    sMobile:text-[1.5rem]
    mMobile:text-[1.8rem]

    sLaptop:text-[0.666rem]
    mLaptop:text-[0.833rem]
    desktop:text-[1rem]
    largeDesktop:text-[1.25rem]

    rounded-[0.175rem]
    mobile:rounded-[0.233rem]
    sMobile:rounded-[0.374rem]
    mMobile:rounded-[0.448rem]

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
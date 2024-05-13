import { useAppDispatch } from "../../../reduxStore/hook"
import { logOut } from "../../../reduxStore/users/userSlice";

const index = () => {
    const dispatch = useAppDispatch();
  return (
    <div className='
    absolute
    block
    top-0
    right-0
    z-[3]
    w-full
    sLaptop:w-[12.5rem]
    mLaptop:w-[17.647rem]
    desktop:w-[18.75rem]
    largeDesktop:w-[23.438rem]
    4k:w-[31.25rem]
    min-h-[300px]
    rounded-b-[0.244rem]
    mobile:rounded-b-[0.326rem]
    sMobile:rounded-b-[0.521rem]
    mMobile:rounded-b-[0.625rem]
    sLaptop:rounded-br-none
    sLaptop:rounded-bl-[0.311rem]
    mLaptop:rounded-bl-[0.388rem]
    desktop:rounded-bl-[0.466rem]
    largeDesktop:rounded-bl-[0.583rem]
    4K:rounded-bl-[0.776rem]
    bg-black
    '>
        <button
         className="
         text-white
         "
        onClick={()=>{
            dispatch(logOut());
        }}
        >
            Sign Out
        </button>
    </div>
  )
}

export default index
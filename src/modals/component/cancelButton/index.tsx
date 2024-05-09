import { useAppDispatch } from "../../../reduxStore/hook";
import { closeModal } from "../../../reduxStore/modal/modalSlice";
import { memo } from "react";

const Button = memo(({message}: {message:string}) => {
    const dispatch = useAppDispatch();
    return (
      <button
      onClick={()=> dispatch(closeModal())}
      className='
          site-borders
          text-PrimaryWhite

          min-w-[5.479rem]
          mobile:min-w-[7.306rem]
          sMobile:min-w-[11.689rem]
          mMobile:min-w-[14.028rem]
                
          sLaptop:min-w-[7.188rem]
          mLaptop:min-w-[8.438rem]
          desktop:min-w-[9.375rem] 

          text-[0.912rem]
          mobile:text-[1.216rem]
          sMobile:text-[1.946rem]
          mMobile:text-[2.335rem]
          sLaptop:text-lg 
          mLaptop:text-[1.375rem]
          desktop:text-[1.406rem] 

          font-bold

          rounded-[0.488rem]
          mobile:rounded-[0.651rem]
          sMobile:rounded-[1.041rem]
          mMobile:rounded-[1.25rem]
          sLaptop:rounded-lg
          mLaptop:rounded-[0.625rem]
          desktop:rounded-xl 
        
          p-[0.111rem]
          mobile:p-[0.148rem]
          sMobile:p-[0.237rem]
          mMobile:p-[.285rem]
          
          sLaptop:p-[2.4px] 
          mLaptop:p-[0.175rem]
          desktop:p-[.2rem]

          transition-[box-shadow] 
          ease-in-out
          duration-300
          sLaptop:hover:customShadow
                
          '>
            <span className='
            flex justify-center 
            items-center 

            w-full 

            bg-SpaceBlue 
            active:bg-SpaceBlueSelected 

            rounded-[0.417rem]
            mobile:rounded-[0.556rem]
            sMobile:rounded-[0.889rem]
            mMobile:rounded-[1.068rem]
            sLaptop:rounded-md 
            mLaptop:rounded-[0.438rem] 
            desktop:rounded-lg 

            h-[1.566rem]
            mobile:h-[2.088rem]
            sMobile:h-[3.34rem]
            mMobile:h-[4.008rem]
            sLaptop:h-auto
            sLaptop:py-1 
            desktop:py-2 
            sLaptop:px-[0.625rem] 
            mLaptop:px-3 
            desktop:px-4'>
                {message}
            </span>
      </button>
    )
  })
  
  export default Button
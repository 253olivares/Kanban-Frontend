import { memo, useContext } from "react";
import { useAppDispatch, useAppSelector } from "../../../../reduxStore/hook"
import { closeAccountModal, getAccountSettings, openAccountModal } from "../../../../reduxStore/modal/modalSlice";
import { user } from "../../../../reduxStore/users/userSlice";
import { AppContext } from "../../../appRefContext/appRefContext";


const ProfileIcon = memo(({boardBackground,user}:{boardBackground:number | null,user:user}) => {
    const dispatch = useAppDispatch();

    const accountSettings = useAppSelector(getAccountSettings);

    const appContext = useContext(AppContext)
    const {profileRef} = appContext!;

  return (
    <div 
            ref={profileRef}
            onClick={()=> {
                if(!accountSettings){
                    dispatch(openAccountModal())
                } else {
                    dispatch(closeAccountModal())
                }
            }}
            
            className={`
            
            p-[0.071rem]
            mobile:p-[0.095rem]
            sMobile:p-[0.153rem]
            mMobile:p-[0.183rem
            sLaptop:p-[0.113rem]
            mLaptop:p-[0.141rem]
            desktop:p-[0.169rem]
            largeDesktop:p-[0.211rem]
            4k:p-[0.281rem]

            ${
                accountSettings ?
                `
                hoverBlue
                ` 
                :
                `
                ${
                   !boardBackground || boardBackground === 0 ?
                   "linear-gradientFooter" : ""
                }
                ${
                    boardBackground === 1 ?
                    "conic-gradient-noshade" : ""
                }
                sLaptop:hover:hoverBlue
                `
            }
            sLaptop:hover:cursor-pointer
            rounded-full 

            cursor-pointer
            `}>
                <img 
                className='
                w-[1.587rem]
                mobile:w-[2.116rem]
                sMobile:w-[3.386rem]
                mMobile:w-[4.063rem]
                sLaptop:w-[2.5rem]  
                mLaptop:w-[3.125rem]
                desktop:w-[3.75rem]
                largeDesktop:w-[4.688rem]
                4k:w-[6.25rem]
                rounded-full
                '
                src={`${user.pfp}`} alt="" />
            </div>
  )
})

export default ProfileIcon
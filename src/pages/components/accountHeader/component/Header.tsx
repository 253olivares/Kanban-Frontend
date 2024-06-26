import { closeAccountModal, getAccountSettings, openAccountModal } from '../../../../reduxStore/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../../../../reduxStore/hook';

import { memo, useContext } from 'react';

import { user } from '../../../../reduxStore/users/userSlice';
import { Params, useNavigate } from 'react-router-dom';
import icon from '/assets/Logo_Export.svg';
import { AppContext } from '../../../appRefContext';

import InputHeader from '../../../3_Workspace/components/headComponents/BoardNameInput';
import FilterBoard from '../../../3_Workspace/components/headComponents/BoardPageFilter';
import MemebersBoard from '../../../3_Workspace/components/headComponents/BoardPageMemebers';
import { selectBoardById } from '../../../../reduxStore/boards/boardsSlice';


// pass out user information to our header
const Header = memo(({user,params}:{user:user, params:Readonly<Params<string>>}) => {
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const appContext = useContext(AppContext);
    const {profileRef} = appContext!;

    const accountSettings = useAppSelector(getAccountSettings);
    const selectBoard = useAppSelector(state => selectBoardById(state,params?.workspaceId || '')) || null;

    console.log("Select board: ",selectBoard);

    if(!user) return;

  return (
    <div className={`

    relative
    z-[5]
    w-full
    
    h-[3.051rem]
    mobile:h-[4.069rem]
    sMobile:h-[6.510rem]
    mMobile:h-[7.813rem]
    sLaptop:h-[3.333rem]
    mLaptop:h-[4.167rem]
    desktop:h-[5rem]
    largeDesktop:h-[6.25rem]
    4k:h-[8.333rem]

    glass-gradient
    border-b-[0.122rem]
    mobile:border-b-[0.163rem]
    sMobile:border-b-[0.260rem]
    mMobile:border-b-[0.313rem]
    sLaptop:border-b-[0.208rem]
    mLaptop:border-b-[0.260rem]
    desktop:border-b-[0.312rem]
    largeDesktop:border-b-[0.391rem]
    4k:border-b-[0.521rem]
    
    border-[#6B6E86]

    flex
    justify-between
    items-center
    
    shrink-0

    px-[5.62%]

    `}>
        {/* app Icon and workspace info */}
        <div className={`
        flex
        items-center
        ${
            params.workspaceId &&
            `
            justify-between

            sLaptop:gap-[1.666rem]
            mLaptop:gap-[2.083rem]
            desktop:gap-[2.5rem]
            largeDesktop:gap-[3.125rem]
            ` 
        }
        `}>
            <img 
            onClick={()=> {
                navigate(`/u/${user.u_id}`);
            }}
            className={`
            w-[1.221rem]
            mobile:w-[1.628rem]
            sMobile:w-[2.604rem]
            mMobile:w-[3.125rem]
            sLaptop:w-[2.083rem]
            mLaptop:w-[2.604rem]
            desktop:w-[3.125rem]
            largeDesktop:w-[3.906rem]
            4k:w-[5.208rem]
            sLaptop:hover:cursor-pointer
            `}
            src={icon} alt="" />
        
            {
            params.workspaceId && selectBoard ?
                <>
                    <InputHeader board={selectBoard} />
                    <FilterBoard board={selectBoard} />
                    <MemebersBoard board={selectBoard} />
                </>
                    :
                ``
                }
            
        </div>
        {/* account icon */}
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
            linear-gradientFooter
            sLaptop:hover:hoverBlue
            `
         }
         sLaptop:hover:cursor-pointer
         rounded-full 
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
    </div>
  )
})

export default Header
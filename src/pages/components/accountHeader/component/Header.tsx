import { useAppDispatch, useAppSelector } from '../../../../reduxStore/hook';

import { memo, useEffect} from 'react';

import { user } from '../../../../reduxStore/users/userSlice';
import { Params } from 'react-router-dom';

import AppIcon from './AppIcon';

import InputHeaderMobile from '../../../3_Workspace/components/headComponents/BoardNameInputMobile';
import InputHeader from '../../../3_Workspace/components/headComponents/BoardNameInput';
import FilterBoard from '../../../3_Workspace/components/headComponents/BoardPageFilter';
import MemebersBoard from '../../../3_Workspace/components/headComponents/BoardPageMemebers';
import CogBoard from '../../../3_Workspace/components/headComponents/BoardSpaceSetting';
import { selectBoardById } from '../../../../reduxStore/boards/boardsSlice';
import { getFilters } from '../../../../reduxStore/tasks/tasksSlice';
import ProfileIcon from './ProfileIcon';
import { getWorkspaceSelect, setNewSelect } from '../../../../reduxStore/workspace/workspaceSlice';

// pass out user information to our header
const Header = memo(({user,params}:{user:user, params:Readonly<Params<string>>}) => {
    
    const dispatch = useAppDispatch();

    const selectBoard = useAppSelector(state => selectBoardById(state,params?.workspaceId || '')) || null;
    const filters = useAppSelector(getFilters);
    const workspaceSelect = useAppSelector(getWorkspaceSelect);
    
    if(!user) return;
    if(selectBoard !== null && !selectBoard.members){
        alert('Project has recently been updated with new back end build! If you are getting this error it needs to be updated. Project will soon reset the localstorage to make sure its build is up to date!');
    }
    useEffect(()=> {
        if(selectBoard !== null && workspaceSelect === ''){
            dispatch(setNewSelect(selectBoard.w_id))
        }   
    },[])
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

            sLaptop:gap-[1.083rem]
            mLaptop:gap-[1.354rem]
            desktop:gap-[1.625rem]
            largeDesktop:gap-[2.031rem]
            ` 
        }
        `}>
            
            <AppIcon user={user} />
        
            {
            params.workspaceId && selectBoard ?
                <>
                    <InputHeader boardName={selectBoard.name} boardId = {selectBoard.b_id} />
                    <FilterBoard filters={filters} />
                    <MemebersBoard boardMembers={selectBoard.members} />
                </>
                    :
                ``
                }
            
        </div>
        {
            params.workspaceId && selectBoard ?
            <InputHeaderMobile  boardName={selectBoard.name} /> : ''
        }
        {/* account icon */}
        <div className='
        flex
        flex-row

        sLaptop:gap-[1.499rem]
        mLaptop:gap-[1.874rem]
        desktop:gap-[2.25rem]
        largeDesktop:gap-[2.812rem]
        '>
            {
                params.workspaceId && selectBoard && user.u_id === selectBoard.u_id?
                <CogBoard /> : ''
            }

            <ProfileIcon user={user} />
        </div>
    </div>  
  )
})

export default Header
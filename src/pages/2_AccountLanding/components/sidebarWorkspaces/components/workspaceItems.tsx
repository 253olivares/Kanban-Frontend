import { memo } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../reduxStore/hook'
import { selectWorkspaceById } from '../../../../../reduxStore/workspace/workspaceSlice';
import trashIcon from '/assets/Trash_IconRed.svg'
import { openConfirmDelete } from '../../../../../reduxStore/modal/modalSlice';
import { getUser } from '../../../../../reduxStore/users/userSlice';

const workspaceItems = memo((
    {
        setWorkspacefn,
        workspaceId,
        selectedWorkspace
    }
    :
    {
        setWorkspacefn: (string:string) => void,
        workspaceId:string,
        selectedWorkspace:string
    }
) => {

    const dispatch = useAppDispatch();

    const item = useAppSelector((state) => selectWorkspaceById(state,String(workspaceId)));
    const user = useAppSelector(state => getUser(state))

    if(!item || !user) return;

  return (
    <div 
    className={`
    sLaptop:w-full

    flex
    flex-row
    justify-center
    items-center

    sLaptop:justify-between
 
    shrink-0

    gap-[0.937rem]
    mobile:gap-[1.25rem]
    sMobile:gap-[2rem]
    mMobile:gap-[2.4rem]
    sLaptop:gap-0
    
    px-[1.025rem]
    mobile:px-[1.367rem]
    sMobile:px-[2.187rem]
    mMobile:px-[2.625rem]
    sLaptop:px-[0.833rem]
    mLaptop:px-[1.042rem]
    desktop:px-[1.25rem]
    largeDesktop:px-[1.563rem]
    4k:px-[1.75rem]

    sLaptop:py-[0.479rem]
    mLaptop:py-[0.583rem]
    desktop:py-[0.688rem]
    largeDesktop:py-[0.875rem]
    4k:py-[1rem]

    ${
        selectedWorkspace === item.w_id ?
        `
        opacity-100
        bg-SpaceBlueSelected

        ` : `
        opacity-50
        hover:opacity-85
        hover:cursor-pointer
        `
    }
    transition-all
    duration-500

    rounded-[0.244rem]
    mobile:rounded-[0.325rem]
    sMobile:rounded-[0.520rem]
    mMobile:rounded-[0.625rem]
    sLaptop:rounded-[0.333rem]
    mLaptop:rounded-[0.417rem]
    desktop:rounded-[0.5rem]
    largeDesktop:rounded-[0.625rem]
    4k:rounded-[0.833rem]

    relative
    `}
    onClick={()=>setWorkspacefn(item.w_id)}>
        <h1
        className='

        leading-[0.878rem]
        text-[0.854rem]
        mobile:leading-[1.171rem]
        mobile:text-[1.139rem]
        sMobile:leading-[1.875rem]
        sMobile:text-[1.823rem]
        mMobile:leading-[2.25rem]
        mMobile:text-[2.188rem]
        
        4k:leading-[2.499rem]
        4k:text-[2.603rem]
        largeDesktop:leading-[1.875rem]
        largeDesktop:text-[1.953rem]
        desktop:text-[1.563rem]
        desktop:leading-[1.5rem]
        mLaptop:text-[1.302rem]
        mLaptop:leading-[1.249rem]
        sLaptop:text-[1.042rem]
        sLaptop:leading-[0.999rem]

        font-medium
        sLaptop:w-[calc(100%-0.933rem)]
        mLaptop:w-[calc(100%-1.166rem)]
        desktop:w-[calc(100%-1.401rem)]
        largeDesktop:w-[calc(100%-1.752rem)]
        4k:w-[calc(100%-2.335rem)]

        text-white
        text-nowrap

        text-ellipsis
        overflow-hidden
    
        '
        >{item.name}</h1>

        {
            selectedWorkspace === item.w_id && item.u_id === user.u_id ?
            <img 
            onClick={()=>dispatch(openConfirmDelete())}
            className='
            sLaptop:opacity-50
            sLaptop:hover:opacity-100
            sLaptop:hover:cursor-pointer

            h-[0.878rem]
            mobile:h-[1.171rem]
            sMobile:h-[1.875rem]
            mMobile:h-[2.25rem]

            sLaptop:h-[0.999rem]
            mLaptop:h-[1.249rem]
            desktop:h-[1.5rem]
            largeDesktop:h-[1.875rem]
            4k:h-[2.499rem]
            ' src={trashIcon} alt="trashIcon" /> : ''
        }
    </div>
  )
})

export default workspaceItems
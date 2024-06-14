import { memo } from 'react'
import { useAppSelector } from '../../../../../reduxStore/hook'
import { selectById } from '../../../../../reduxStore/workspace/workspaceSlice';

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
    const item = useAppSelector((state) => selectById(state,String(workspaceId)));

    if(!item) return;

    console.log(selectedWorkspace === item.w_id)

  return (
    <div 
    className={`
    sLaptop:w-full

    flex
    justify-center
    items-center

    sLaptop:block
 
    shrink-0
    
    px-[1.025rem]
    mobile:px-[1.367rem]
    sMobile:px-[2.187rem]
    mMobile:px-[2.625rem]
    sLaptop:px-[0.833rem]
    mLaptop:px-[1.042rem]
    desktop:px-[1.25rem]
    largeDesktop:px-[1.563rem]

    sLaptop:py-[0.479rem]
    mLaptop:py-[0.583rem]
    desktop:py-[0.688rem]
    largeDesktop:py-[0.875rem]

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
    `}
    onClick={()=>setWorkspacefn(item.w_id)}>
        <h1
        className='
        leading-none

        text-[0.854rem]
        mobile:text-[1.139rem]
        sMobile:text-[1.823rem]
        mMobile:text-[2.188rem]

        largeDesktop:text-[1.953rem]
        desktop:text-[1.563rem]
        mLaptop:text-[1.302rem]
        sLaptop:text-[1.042rem]

        font-medium

        text-white
        text-nowrap
        '
        >{item.name}</h1>
    </div>
  )
})

export default workspaceItems
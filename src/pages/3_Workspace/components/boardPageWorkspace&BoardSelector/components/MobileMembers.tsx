import { memo } from 'react'
import { useAppDispatch } from '../../../../../reduxStore/hook'
import { setOpenMemberModal } from '../../../../../reduxStore/modal/modalSlice';
import membersIcon from '/assets/User_Icon.svg'


const MobileMembers = memo(({boardMembers}:{boardMembers:string[][]}) => {
  
    const dispatch = useAppDispatch();

    return (
    <div className='
    relative
    flex
    items-center
    sLaptop:hidden
    shrink-0
    '>
        <div
        onClick={()=>dispatch(setOpenMemberModal(true))}
        className='
        flex
        flex-row
        relative

         justify-center
         items-center

         hover:cursor-pointer

         gap-[0.351rem]
         mobile:gap-[0.468rem]
         sMobile:gap-[0.75rem]
         mMobile:gap-[0.9rem]

        '
        >
        <img className='
            w-[1.171rem]
            mobile:w-[1.562rem]
            sMobile:w-[2.5rem]
            mMobile:w-[3rem]
            ' src={membersIcon} alt="" />

        <h1 className='
        text-[0.878rem]
        mobile:text-[1.171rem]
        sMobile:text-[1.875rem]
        mMobile:text-[2.25rem]
    
        leading-none

        text-PrimaryWhite

        font-medium
        '>
            {boardMembers.length} Member{boardMembers.length !==1? 's':''}
        </h1>
        </div>
    </div>
  )
})

export default MobileMembers
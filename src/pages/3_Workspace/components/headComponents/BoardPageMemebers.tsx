import { memo, useContext } from "react"
import { useDispatch } from "react-redux";
import { AppContext } from "../../../appRefContext/appRefContext";
import { useAppSelector } from "../../../../reduxStore/hook";
import { getMembersModal, setOpenMemberModal } from "../../../../reduxStore/modal/modalSlice";
import triangle from '/assets/Polygon_6.svg';
import membersIcon from '/assets/User_Icon.svg'

import MemberBody from './BoardPageMembersBody';
import { AnimatePresence } from "framer-motion";

const BoardPageMemebers = memo(({boardMembers}:{boardMembers:string[][]}) => {
  
  console.log(boardMembers);

  const dispatch = useDispatch();

  const membersModal = useAppSelector(getMembersModal);

  const appContext = useContext(AppContext);
  const {membersRefHead} = appContext!;

  return (
    <div className="
      relative

      hidden
      sLaptop:flex
      items-center

      shrink-0
    ">
      <div
      ref={membersRefHead}
      onClick={()=> dispatch(setOpenMemberModal(!membersModal))}
      className={`
        flex
        flex-row
        relative

        justify-center
        items-center

        sLaptop:gap-[0.749rem]
        mLaptop:gap-[0.937rem]
        desktop:gap-[1.125rem]
        largeDesktop:gap-[1.406rem]

        sLaptop:px-[0.749rem]
        mLaptop:px-[0.937rem]
        desktop:px-[1.125rem]
        largeDesktop:px-[1.406rem]

        ${
          membersModal ?
          `
           opacity-100
          `
          :
          `
           opacity-75

           hover:opacity-100
          `
        }

        transition-[opacity]
        duration-500
        hover:cursor-pointer

      `}
      >
        <img className="
          sLaptop:w-[1.312rem]
          mLaptop:w-[1.640rem]
          desktop:w-[1.969rem]
          largeDesktop:w-[2.461rem]
        " src={membersIcon} alt="Members Icon" />

        <h1 className="
          sLaptop:text-[1.312rem]
          mLaptop:text-[1.640rem]
          desktop:text-[1.969rem]
          largeDesktop:text-[2.461rem]
          leading-none

          text-PrimaryWhite

          font-medium
        ">
         {boardMembers.length} Member{boardMembers.length !==1? 's':''}
        </h1>

        <img 
        className={`
          
          sLaptop:w-[0.875rem]
          mLaptop:w-[1.094rem]
          desktop:w-[1.313rem]
          largeDesktop:w-[1.641rem]

          ${membersModal && 'rotate-180'}

          transition-[transform]
          duration-500
        `}
        src={triangle} alt="Members arrow" />

      </div>
      <AnimatePresence>
        {
          membersModal ? <MemberBody members={boardMembers} /> : ''
        }
      </AnimatePresence>
    </div>
  )
})

export default BoardPageMemebers
import { memo } from 'react';
import { useAppDispatch } from '../../../../../../reduxStore/hook'
import { changeListModalState } from '../../../../../../reduxStore/modal/modalSlice'
import AddListImage from '/assets/addBoard.png'


const MobileAddList = memo(() => {

    const dispatch = useAppDispatch();

  return (
    <div 
      onClick={()=> dispatch(changeListModalState(true))}
      className="
      bg-SpaceBlue

      w-full

      min-h-[2.539rem]
      mobile:min-h-[3.385rem]
      sMobile:min-h-[5.416rem]
      mMobile:min-h-[6.5rem]

      self-start

      rounded-[0.244rem]
      mobile:rounded-[0.325rem]
      sMobile:rounded-[0.520rem]
      mMobile:rounded-[0.625rem]

      flex
      sLaptop:hidden
      flex-row
      justify-between
      items-center

      hover:cursor-pointer

      shrink-0
      grow-0
      ">
        <div className="
        w-full
        h-full

        flex
        flex-row
        justify-between
        items-center

        px-[0.976rem]
        mobile:px-[1.301rem]
        sMobile:px-[2.083rem]
        mMobile:px-[2.499rem]

        py-[0.732rem]
        mobile:py-[0.976rem]
        sMobile:py-[1.563rem]
        mMobile:py-[1.875rem]
        ">
          <h1 className="
          text-PrimaryWhite

          text-[0.915rem]
          mobile:text-[1.220rem]
          sMobile:text-[1.953rem]
          mMobile:text-[2.344rem]

          font-medium

          leading-none
          ">
            Add List
          </h1>
          <img className="
            h-[1.025rem]
            mobile:h-[1.367rem]
            sMobile:h-[2.188rem]
            mMobile:h-[2.625rem]
        " src={AddListImage} alt="Add List Button!" />
        </div>
      </div>
  )
})

export default MobileAddList
import { useAppDispatch } from '../../../../../reduxStore/hook'
import { closeModal } from '../../../../../reduxStore/modal/modalSlice';
import x_mark from '/assets/addBoard.png'


const CheckBackgroundHolder = () => {
    const dispatch = useAppDispatch();
  return (
    <div className="
    w-full

    flex
    flex-row

    justify-between

    ">
        <h1 className='
        text-[1.335rem]
        mobile:text-[1.780rem]
        sMobile:text-[2.848rem]
        mMobile:text-[3.418rem]

        font-medium

        leading-none

        text-PrimaryWhite
        '>Background:</h1>
        <img className='
        rotate-45

        h-[1.525rem]
        mobile:h-[2.034rem]
        sMobile:h-[3.254rem]
        mMobile:h-[3.906rem]
          
        cursor-pointer
        ' onClick={()=>dispatch(closeModal())} src={x_mark} alt="x Mark" />
    </div>
  )
}

export default CheckBackgroundHolder
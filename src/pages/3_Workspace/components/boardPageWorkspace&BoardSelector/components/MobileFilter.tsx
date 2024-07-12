import { useAppDispatch } from "../../../../../reduxStore/hook"
import { setOpenModal } from "../../../../../reduxStore/modal/modalSlice";


const MobileFilter = () => {
    const dispatch = useAppDispatch();
  return (
    <div className="relative
    flex
    items-center
    cursor-pointer
    ">
        <div 
        onClick={()=> dispatch(setOpenModal(true))}
        className="
        relative
        z-[5]

        flex flex-row

        linear-gradientFooter2

        items-center

        rounded-[0.218rem]
        mobile:rounded-[0.291rem]
        sMobile:rounded-[0.465rem]
        mMobile:rounded-[0.558rem]

        py-[0.366rem]
        mobile:py-[0.487rem]
        sMobile:py-[0.78rem]
        mMobile:py-[0.937rem]

        px-[1.025rem]
        mobile:px-[1.367rem]
        sMobile:px-[2.187rem]
        mMobile:px-[2.625rem]

        sLaptop:hover:cursor-pointer
        "
        >
            <span className="
            text-[0.763rem]
            mobile:text-[1.017rem]
            sMobile:text-[1.628rem]
            mMobile:text-[1.953rem]

            leading-none

            font-bold

            text-PrimaryWhite

            ">
                Filter List
            </span>
        </div>
    </div>
  )
}

export default MobileFilter
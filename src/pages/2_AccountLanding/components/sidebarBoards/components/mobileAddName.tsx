import { changeBoardModal } from "../../../../../reduxStore/boards/boardsSlice"
import { useAppDispatch } from "../../../../../reduxStore/hook"
import plusButton from '/assets/addBoard.png';


const MobileAddName = () => {

    const dispatch = useAppDispatch();

  return <div
  onClick={()=>dispatch(changeBoardModal(true))}
  className="
  w-full
  h-full
  flex
  justify-center
  items-center
  sLaptop:hidden
  "
  >
     <div className="
      glass-gradient-loading 
      rounded-full

      flex
      justify-center
      items-center

      w-[3.135rem]
      mobile:w-[4.18rem]
      sMobile:w-[6.688rem]
      mMobile:w-[8.025rem]

      h-[3.135rem]
      mobile:h-[4.18rem]
      sMobile:h-[6.688rem]
      mMobile:h-[8.025rem]
      ">
          <img 
          className="
          w-[1.64rem]
          mobile:w-[2.186rem]
          sMobile:w-[3.5rem]
          mMobile:w-[4.2rem]

          h-[1.64rem]
          mobile:h-[2.186rem]
          sMobile:h-[3.5rem]
          mMobile:h-[4.2rem]
          "
          src={plusButton} alt="Plus Button" />
      </div> 
  </div>
}

export default MobileAddName
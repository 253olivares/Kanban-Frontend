import { useAppDispatch } from "../../../../../../reduxStore/hook";
import { changeListModalState } from "../../../../../../reduxStore/modal/modalSlice";
import AddList from '/assets/addBoard.png'


const DefaultView = () => {

    const dispatch = useAppDispatch();

  return (
    <> 
        <h1 className="
            text-PrimaryWhite

            sLaptop:text-[1.249rem]
            mLaptop:text-[1.562rem]
            desktop:text-[1.875rem]
            largeDesktop:text-[2.343rem]

            font-medium
        ">Add List</h1>
        <img className="
            sLaptop:h-[1.145rem]
            mLaptop:h-[1.432rem]
            desktop:h-[1.719rem]
            largeDesktop:h-[2.148rem]
        " onClick={()=> dispatch(changeListModalState(true))} src={AddList} alt="Add List Button!" />
    </>
  )
}

export default DefaultView
import AddNewListName from "./AddNewListName";
import DefaultView from "./DefaultView";
import { useAppSelector } from "../../../../../../reduxStore/hook";
import { getListModal } from "../../../../../../reduxStore/modal/modalSlice";

// Our div to add a new list
const AddList = () => {
  
  const openModal = useAppSelector(getListModal);

  return (
    <div className="
    bg-SpaceBlue

    w-[22.5rem]
    h-[3.875rem]

    sLaptop:rounded-[0.333rem]
    mLaptop:rounded-[0.416rem]
    desktop:rounded-[0.5rem]
    largeDesktop:rounded-[0.625rem]

    flex
    flex-row
    justify-between
    items-center

    shrink-0
    grow-0

    sLaptop:px-[]
    mLaptop:px-[]
    desktop:px-[1.25rem]
    largeDesktop:px-[]

    ">
      {
        openModal ? 
        <AddNewListName />
        :
        <DefaultView />
      }
    </div>
  )
}

export default AddList
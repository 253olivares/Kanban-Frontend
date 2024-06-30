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

    sLaptop:w-[14.999rem]
    mLaptop:w-[18.749rem]
    desktop:w-[22.5rem]
    largeDesktop:w-[28.125rem]

    sLaptop:min-h-[2.583rem]
    mLaptop:min-h-[3.229rem]
    desktop:min-h-[3.875rem]
    largeDesktop:min-h-[4.843rem]

    self-start

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

    sLaptop:px-[0.833rem]
    mLaptop:px-[1.041rem]
    desktop:px-[1.25rem]
    largeDesktop:px-[1.562rem]

    sLaptop:py-[0.562rem]
    mLaptop:py-[0.703rem]
    desktop:py-[0.844rem]
    largeDesktop:py-[1.055rem]

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
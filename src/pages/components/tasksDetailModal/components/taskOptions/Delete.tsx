import { miniTaskTypes } from '../../TaskDetailModal';
import deleteIcon from '/assets/trashIcon.svg';

const Delete = ({
  setModal
} : {
  setModal:React.Dispatch<React.SetStateAction<miniTaskTypes>>
}) => {
  return (
    <img 
    onClick={()=>{
      setModal("delete");
    }}
    className='
    h-[0.878rem]
    mobile:h-[1.171rem]
    sMobile:h-[1.875rem]
    mMobile:h-[2.25rem]
    sLaptop:h-[0.733rem]
    mLaptop:h-[0.916rem]
    desktop:h-[1.1rem]
    largeDesktop:h-[1.375rem]

    opacity-100
    sLaptop:opacity-50

    cursor-pointer

    hover:opacity-100
    ' src={deleteIcon} alt="" />
  )
}

export default Delete
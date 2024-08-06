import deleteIcon from '/assets/trashIcon.svg';

const Delete = ({
  setModal
} : {
  setModal:React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <img 
    onClick={()=>{
      setModal(true);
    }}
    className='sLaptop:h-[0.733rem]
    mLaptop:h-[0.916rem]
    desktop:h-[1.1rem]
    largeDesktop:h-[1.375rem]

    opacity-50

    cursor-pointer

    hover:opacity-100
    ' src={deleteIcon} alt="" />
  )
}

export default Delete
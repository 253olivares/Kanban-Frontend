import editIcon from '/assets/Edit_Icon.png'

const EditButton = ({
  setTaskDetail
} : {
  setTaskDetail:React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <img onClick={()=> setTaskDetail(true)} className='sLaptop:h-[0.733rem]
    mLaptop:h-[0.916rem]
    desktop:h-[1.1rem]
    largeDesktop:h-[1.375rem] 

    opacity-50

    cursor-pointer

    hover:opacity-100
    ' src={editIcon} alt="" />
  )
}

export default EditButton
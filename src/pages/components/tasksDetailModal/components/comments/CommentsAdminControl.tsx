import { memo } from 'react';
import editIcon from '/assets/Edit_Icon.png';
import deleteIcon from '/assets/trashIcon.svg';
import { user } from '../../../../../reduxStore/users/userSlice';


const CommentsAdminControl = ({
  commentUser,
  userInfo,
  adminCred
} : {
  commentUser:string,
  userInfo:user,
  adminCred:boolean
}) => {

  console.log("admin use",adminCred)
  return (
    <div className="
    flex
    flex-row

    sLaptop:gap-[0.333rem]
    mLaptop:gap-[0.416rem]
    desktop:gap-[.5rem]
    largeDesktop:gap-[.625rem]

    ">
      
        { 
          userInfo.u_id === commentUser && <EditIcon/>
        }
        {
          adminCred || userInfo.u_id === commentUser ? <DeleteIcon/> : ""
        }
    </div>
  )
}

const DeleteIcon = memo(() => {
    return <img className='
    sLaptop:h-[0.766rem]
    mLaptop:h-[0.958rem]
    desktop:h-[1.15rem]
    largeDesktop:h-[1.437rem]

    opacity-50
    hover:opacity-100

    cursor-pointer
    ' src={deleteIcon} alt="deleteIcon" />
})

const EditIcon = memo(()=>{
    return <img className='
    sLaptop:h-[0.766rem]
    mLaptop:h-[0.958rem]
    desktop:h-[1.15rem]
    largeDesktop:h-[1.437rem]

    opacity-50
    hover:opacity-100

    cursor-pointer
    ' src={editIcon} alt="editIcon" />
})

export default CommentsAdminControl
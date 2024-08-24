import { memo } from 'react';
import editIcon from '/assets/Edit_Icon.png';
import deleteIcon from '/assets/trashIcon.svg';
import { user } from '../../../../../reduxStore/users/userSlice';
import { comments } from '../../../../../reduxStore/comments/commentsSlice';


const CommentsAdminControl = ({
  commentUser,
  userInfo,
  adminCred,
  deleteComment,
  openCommentEdit,
  setCommentFn,
  commentId
} : {
  commentUser:string,
  userInfo:user,
  adminCred:boolean,
  deleteComment:()=>void,
  openCommentEdit:()=>void,
  setCommentFn:(comment:comments)=>void,
  commentId:comments
}) => {


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
          userInfo.u_id === commentUser && <EditIcon clickFn={()=>{
            openCommentEdit()
            setCommentFn(commentId);
          }}/>
        }
        {
          adminCred || userInfo.u_id === commentUser ? <DeleteIcon deleteComment={deleteComment} /> : ""
        }
    </div>
  )
}

const DeleteIcon = memo((
  {
    deleteComment
  } : {
    deleteComment:() => void
  }
) => {
    return <img onClick={deleteComment} className='
    sLaptop:h-[0.766rem]
    mLaptop:h-[0.958rem]
    desktop:h-[1.15rem]
    largeDesktop:h-[1.437rem]

    opacity-50
    hover:opacity-100

    cursor-pointer
    ' src={deleteIcon} alt="deleteIcon" />
})

const EditIcon = memo(({
  clickFn
} : {
  clickFn:()=>void
})=>{
    return <img onClick={clickFn} className='
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
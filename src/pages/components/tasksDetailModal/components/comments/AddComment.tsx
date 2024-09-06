import { memo } from "react"
import { user } from "../../../../../reduxStore/users/userSlice"
 
const AddComment = memo(({
  comments,
  setComment,
  adminCred,
  userInfo,
  assignees,
  addNewComment
} : {
  comments:string,
    setComment:React.Dispatch<React.SetStateAction<string>>,
  adminCred:boolean,
  userInfo:user,
  assignees:string[],
  addNewComment:()=>void
}) => {

  if(!assignees.includes(userInfo.u_id) && !adminCred) return <div className="
    w-full

    flex-grow

    px-[5%]
    sLaptop:px-[3.5%]

    flex
    flex-col

    justify-center
    items-center

    text-center

    sLaptop:h-[6rem]
    mLaptop:h-[7.5rem]
    desktop:h-[9rem]
    largeDesktop:h-[11.25rem]

    sLaptop:text-[0.6rem]
    mLaptop:text-[0.75rem]
    desktop:text-[0.9rem]
    largeDesktop:text-[1.125rem]

    text-PrimaryWhite

    font-medium
    
    ">
      You do not have permission to leave a comment for this Task.
  </div>
  
  return (
    <div className="
    w-full

    px-[5%]
    sLaptop:px-[3.5%]

    flex
    flex-col

    gap-[0.468rem]
    mobile:gap-[0.625rem]
    sMobile:gap-[1rem]
    mMobile:gap-[1.2rem]
    sLaptop:gap-[.533rem]
    mLaptop:gap-[.666rem]
    desktop:gap-[.8rem]
    largeDesktop:gap-[1rem]
    ">
      <TextArea comments={comments} setComment={setComment} />
      <CommentSubmitButton addNewComment={addNewComment} comments={comments} />
    </div>
  )
})

const TextArea = memo((
  {
    comments,
    setComment
  } : {
    comments:string,
    setComment:React.Dispatch<React.SetStateAction<string>>,
  }
) =>{
  return <textarea 
  value={comments}
  onChange={(e)=> setComment(e.target.value)}
  className="
    bg-PrimaryWhite

    focus:outline-none

    rounded-[0.140rem]
    mobile:rounded-[0.187rem]
    sMobile:rounded-[.3rem]
    mMobile:rounded-[0.36rem]
    sLaptop:rounded-[0.133rem]
    mLaptop:rounded-[0.166rem]
    desktop:rounded-[0.2rem]
    largeDesktop:rounded-[0.25rem]

    h-[4.394rem]
    mobile:h-[5.859rem]
    sMobile:h-[9.375rem]
    mMobile:h-[11.25rem]
    sLaptop:h-[4rem]
    mLaptop:h-[5rem]
    desktop:h-[6rem]
    largeDesktop:h-[7.5rem]

    text-[0.632rem]
    mobile:text-[0.843rem]
    sMobile:text-[1.35rem]
    mMobile:text-[1.62rem]
    sLaptop:text-[0.666rem]
    mLaptop:text-[0.833rem]
    desktop:text-[1rem]
    largeDesktop:text-[1.25rem]

    font-medium

    leading-tight

    p-[0.234rem]
    mobile:p-[0.312rem]
    sMobile:p-[.5rem]
    mMobile:p-[0.6rem]
    sLaptop:p-[0.4rem]
    mLaptop:p-[0.5rem]
    desktop:p-[0.6rem]
    largeDesktop:p-[.75rem]

    resize-none
  " name="TaskComment" id="taskComment" />
})

const CommentSubmitButton = memo(({
  comments,
  addNewComment
} : {
  comments:string,
  addNewComment:()=>void
}) =>{  
  return <div className="
    w-full
    flex
    justify-end
  ">
    <button
    onClick={addNewComment}
    disabled={comments.trim() === ""}
    className="


    text-[0.632rem]
    mobile:text-[0.843rem]
    sMobile:text-[1.35rem]
    mMobile:text-[1.62rem]
    sLaptop:text-[0.666rem]
    mLaptop:text-[0.833rem]
    desktop:text-[1rem]
    largeDesktop:text-[1.25rem]

    leading-none

    py-[0.351rem]
    mobile:py-[0.468rem]
    sMobile:py-[.75rem]
    mMobile:py-[0.9rem]
    sLaptop:py-[0.4rem]
    mLaptop:py-[0.5rem]
    desktop:py-[0.6rem]
    largeDesktop:py-[.75rem]

    px-[5%]
    sLaptop:px-[1.066rem]
    mLaptop:px-[1.333rem]
    desktop:px-[1.6rem]
    largeDesktop:px-[2rem]

    rounded-[0.140rem]
    mobile:rounded-[0.187rem]
    sMobile:rounded-[.3rem]
    mMobile:rounded-[0.36rem]
    sLaptop:rounded-[0.186rem]
    mLaptop:rounded-[0.233rem]
    desktop:rounded-[0.28rem]
    largeDesktop:rounded-[.35rem]

    text-PrimaryWhite
    bg-SelectorBlue
    opacity-75
    hover:opacity-95
    active:opacity-100

    outline-none

    font-medium

    disabled:text-PrimaryWhite
    disabled:bg-transparent
    disabled:opacity-50

    transition-all

    "
    >
    Save
    </button>
  </div> 
})

export default AddComment
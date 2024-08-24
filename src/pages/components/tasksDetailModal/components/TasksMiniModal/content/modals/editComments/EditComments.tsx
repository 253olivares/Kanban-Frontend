import { useLayoutEffect, useState } from "react"
import { comments, updateComment } from "../../../../../../../../reduxStore/comments/commentsSlice"
import { miniTaskTypes } from "../../../../../TaskDetailModal"
import { useAppDispatch } from "../../../../../../../../reduxStore/hook"

const EditComments = (
    {
        comment,
        setCommentFn,
        setOpenTaskMiniModal
    } : {
        comment:comments | null,
        setCommentFn:(comment:comments|null)=>void,
        setOpenTaskMiniModal:React.Dispatch<React.SetStateAction<miniTaskTypes>>
    }
) => {

    useLayoutEffect(()=> {
      return ()=> {
        setCommentFn(null);
      }
    },[])

    if(!comment) return
  return (
    <div className=" 
      flex 
      flex-col
      
      sLaptop:gap-[0.666rem]
      mLaptop:gap-[0.833rem]
      desktop:gap-[1rem]
      largeDesktop:gap-[1.25rem]
    ">
      <Header />
      <EditCommentsHolder setOpenTaskMiniModal={setOpenTaskMiniModal} comment={comment} />
    </div>
  )
}

const Header = () => {
  return <h1 className="
  sLaptop:text-[1.2rem]
    mLaptop:text-[1.5rem]
    desktop:text-[1.8rem]
    largeDesktop:text-[2.25rem]

    leading-none

    font-medium

    text-PrimaryWhite
  ">Edit Comments:</h1>
}

const EditCommentsHolder = (
  {
    comment,
    setOpenTaskMiniModal
  } : {
    comment:comments,
    setOpenTaskMiniModal:React.Dispatch<React.SetStateAction<miniTaskTypes>>
  }
) => {

  const [commentChange, setCommentChange] = useState<string>(comment.message);
  return <div className="
    flex 
    flex-col
    
    sLaptop:gap-[.533rem]
    mLaptop:gap-[.666rem]
    desktop:gap-[0.8rem]
    largeDesktop:gap-[1rem]
    ">
    <CommentTextArea commentChange={commentChange} setCommentChange={setCommentChange} />
    <div className="
    w-full

    flex

    justify-between

    px-[2.5%]
    ">
      <CancelButton setOpenTaskMiniModal={setOpenTaskMiniModal} />
      <SaveChanges setOpenTaskMiniModal={setOpenTaskMiniModal} commentChange={commentChange} commentId={comment.c_id}/>
    </div>
  </div>
}

const CommentTextArea = (
  {
    commentChange,
    setCommentChange
  } : {
    commentChange:string,
    setCommentChange:React.Dispatch<React.SetStateAction<string>>
  }
) => {
 
  return <textarea className="
    
    sLaptop:w-[20rem]
    mLaptop:w-[25rem]
    desktop:w-[30rem]
    largeDesktop:w-[37.5rem]

    bg-PrimaryWhite

    sLaptop:text-[0.533rem]
    mLaptop:text-[0.666rem]
    desktop:text-[0.8rem]
    largeDesktop:text-[1rem]

    font-medium

    focus:outline-none

    px-[1.5%]
    py-[1%]

    sLaptop:rounded-[0.106rem]
    mLaptop:rounded-[0.133rem]
    desktop:rounded-[0.16rem]
    largeDesktop:rounded-[.2rem]

    resize-none
  " 
  value={commentChange} 
  onChange={(e)=>setCommentChange(e.target.value)} 
  rows={5}
  name="commentsEdit" 
  id="commentsEdit" 
  />
}

const CancelButton = ({
  setOpenTaskMiniModal
} : {
  setOpenTaskMiniModal:React.Dispatch<React.SetStateAction<miniTaskTypes>>
}) => {
  return <button 
  onClick={()=>{setOpenTaskMiniModal("")}}
  className="

  sLaptop:text-[0.666rem]
  mLaptop:text-[0.833rem]
  desktop:text-[1rem]
  largeDesktop:text-[1.25rem]

  leading-none

  sLaptop:py-[0.4rem]
  mLaptop:py-[0.5rem]
  desktop:py-[0.6rem]
  largeDesktop:py-[.75rem]

  sLaptop:px-[1.066rem]
  mLaptop:px-[1.333rem]
  desktop:px-[1.6rem]
  largeDesktop:px-[2rem]

  sLaptop:rounded-[0.186rem]
  mLaptop:rounded-[0.233rem]
  desktop:rounded-[0.28rem]
  largeDesktop:rounded-[.35rem]

  bg-PrimaryWhite

  opacity-50
  hover:opacity-75

  outline-none

  font-medium

  transition-all

  ">
    Cancel
  </button>
}

const SaveChanges = ({
  commentChange,
  commentId,
  setOpenTaskMiniModal
} : {
  commentChange:string,
  commentId:string,
  setOpenTaskMiniModal:React.Dispatch<React.SetStateAction<miniTaskTypes>>
}) => {
  const dispatch = useAppDispatch();
  return <button 
  onClick={()=>{
    dispatch(updateComment({commentChange:commentChange,commentId:commentId})).unwrap().then(()=>{
      setOpenTaskMiniModal("")
    })
  }}
  className="
  sLaptop:text-[0.666rem]
  mLaptop:text-[0.833rem]
  desktop:text-[1rem]
  largeDesktop:text-[1.25rem]
  
  leading-none

  sLaptop:py-[0.4rem]
  mLaptop:py-[0.5rem]
  desktop:py-[0.6rem]
  largeDesktop:py-[.75rem]

  sLaptop:px-[1.066rem]
  mLaptop:px-[1.333rem]
  desktop:px-[1.6rem]
  largeDesktop:px-[2rem]

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

  transition-all
  ">
    Save
  </button>
}

export default EditComments
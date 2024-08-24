import { comments } from "../../../../../../../../reduxStore/comments/commentsSlice"

const EditComments = (
    {
        comment
    } : {
        comment:comments | null
    }
) => {
    if(!comment) return
  return (
    <div>{comment.message}</div>
  )
}

export default EditComments
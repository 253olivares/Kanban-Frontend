import { comments } from "../../../../../../../../reduxStore/comments/commentsSlice"

const EditComments = (
    {
        comment
    } : {
        comment:comments
    }
) => {
  return (
    <div>{comment.message}</div>
  )
}

export default EditComments

const Comment = ({
    comment
} : {
    comment:string
}) => {
  return (
    <span className="
    w-full
    max-w-full

    sLaptop:text-[0.6rem]
    mLaptop:text-[0.75rem]
    desktop:text-[0.9rem]
    largeDesktop:text-[1.125rem]

    leading-tight

    font-medium

    text-PrimaryWhite

    whitespace-pre-line

    text-wrap

    break-all

    ">{comment}</span>
  )
}

export default Comment;
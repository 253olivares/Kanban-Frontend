
const Comment = ({
    comment
} : {
    comment:string
}) => {
  return (
    <div className="
    w-full

    sLaptop:text-[0.6rem]
    mLaptop:text-[0.75rem]
    desktop:text-[0.9rem]
    largeDesktop:text-[1.125rem]

    whitespace-pre-line

    leading-tight

    font-medium

    text-PrimaryWhite

    ">{`${comment}`}</div>
  )
}

export default Comment;
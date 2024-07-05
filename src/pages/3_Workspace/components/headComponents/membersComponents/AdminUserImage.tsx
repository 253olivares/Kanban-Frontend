import { memo } from "react"


const AdminUserImage = memo(({image}:{image:string}) => {
  return (
    <div className="
    flex-grow-0

    sLaptop:p-[0.11rem]
    mLaptop:p-[0.138rem]
    desktop:p-[0.166rem]
    largeDesktop:p-[0.207rem]
    4k:p-[0.276rem]

    rounded-full
    linear-gradientFooter
    ">
        <img className=" userIconMembersBody " src={image} alt="UserImage" />
    </div>
  )
})

export default AdminUserImage
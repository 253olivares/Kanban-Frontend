import { memo } from "react"


const AdminUserImage = memo(({image,role}:{image:string,role:string}) => {
  return (
    <div className={`
    flex-grow-0

    p-[0.117rem]
    mobile:p-[0.156rem]
    sMobile:p-[.25rem]
    mMobile:p-[0.3rem]
    sLaptop:p-[0.11rem]
    mLaptop:p-[0.138rem]
    desktop:p-[0.166rem]
    largeDesktop:p-[0.207rem]
    4k:p-[0.276rem]

    rounded-full
    ${role === 'admin' || role ==="Admin" ? 'linear-gradientFooter' : 'bg-transparent'}
    `}>
        <img className=" userIconMembersBody " src={image} alt="UserImage" />
    </div>
  )
})

export default AdminUserImage
import { memo } from "react"

const UserImage = memo(({image}:{image:string}) => {

    
  return <img className=" userIconMembersBody " src={image} alt="UserImage" />
})

export default UserImage
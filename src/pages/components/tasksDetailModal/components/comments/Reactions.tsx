import { memo } from "react"
import reactionIcon from '/assets/Reaction_Icon.svg';
import { user } from "../../../../../reduxStore/users/userSlice";


const Reactions = memo(({
  assignees,
  userInfo,
  commentsReactions,
  usersReacted
} : {
  assignees:string[],
  userInfo:user,
  commentsReactions:Record<string,number>,
  usersReacted:Record<string,string[]>
}) => {

  const Reactions:Record<string,number> = {
    "👍" : commentsReactions.thumbUp,
    "🎉" : commentsReactions.party,
    "😊": commentsReactions.smile
  }

  console.log(commentsReactions,usersReacted)
  return (
    <div className="
    flex
    flex-row

    items-center
   
    sLaptop:gap-[0.333rem]
    mLaptop:gap-[0.416rem]
    desktop:gap-[.5rem]
    largeDesktop:gap-[0.625rem]
    ">  
      {Object.entries(Reactions).map(([key,value],_) =>
        <Emoticons emoji={key} number={value} />
      )}
      {
        assignees.includes(userInfo.u_id) && <AddReaction />
      }
    </div>
  )
})

const Emoticons = memo((
  {
    emoji,
    number
  } : {
    emoji:string,
    number:number
  }
)=>{
  if(number===0) return ;
  return <div className="
  flex
  flex-row

  items-center

  text-PrimaryWhite

  font-medium

  leading-none

  sLaptop:gap-[0.166rem]
  mLaptop:gap-[0.208rem]
  desktop:gap-[.25rem]
  largeDesktop:gap-[0.312rem]

  sLaptop:text-[0.666rem]
  mLaptop:text-[0.833rem]
  desktop:text-[1rem]
  largeDesktop:text-[1.25rem]
  ">
    <span>{emoji}</span>
    <span>{number}</span>
  </div>
})

const AddReaction = memo(()=>{
  return <img onClick={
    ()=>{

    }
  } 
  className="
  sLaptop:h-[0.766rem]
  mLaptop:h-[0.958rem]
  desktop:h-[1.15rem]
  largeDesktop:h-[1.437rem]

  opacity-75

  hover:opacity-100

  cursor-pointer
  "
  src={reactionIcon} alt="" />
})

export default Reactions
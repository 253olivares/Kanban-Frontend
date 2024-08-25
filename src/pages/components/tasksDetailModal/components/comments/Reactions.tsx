import { memo, useContext, useLayoutEffect, useRef, useState } from "react"
import reactionIcon from '/assets/Reaction_Icon.svg';
import { user } from "../../../../../reduxStore/users/userSlice";
import { AppContext } from "../../../../appRefContext/appRefContext";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";


const Reactions = memo(({
  adminCred,
  assignees,
  userInfo,
  commentsReactions,
  // @ts-ignore
  usersReacted
} : {
  adminCred:boolean,
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
        <Emoticons key={key} emoji={key} number={value} />
      )}
      {
         assignees.includes(userInfo.u_id) && <AddReaction />
      }
      {
        adminCred && <AddReaction />
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

  const [openCloseOptions,setOpenCloseOptions] = useState<boolean>(false);

  const appContext = useContext(AppContext);
  const {reactionButton} = appContext!;

  return <div ref={reactionButton} className="
  relative
  ">
    <AnimatePresence>
    {
      openCloseOptions && <ReactionOptions setOpenCloseOptions={setOpenCloseOptions} />
    }
    </AnimatePresence>
    
    <img onClick={
      ()=>{
        setOpenCloseOptions(!openCloseOptions);
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
  </div> 
})

const ReactionOptions = memo((
  {
    setOpenCloseOptions
  } : {
    setOpenCloseOptions:React.Dispatch<React.SetStateAction<boolean>>
  }
) => {

  const appContext = useContext(AppContext);
  const {reactionButton} = appContext!;

  const reactionBox = useRef<HTMLDivElement> (null);

  useLayoutEffect(()=>{
    
    const checkClick = (e:MouseEvent | TouchEvent) => {
      const target = e.target as Node;

      if(reactionBox.current && !reactionBox.current.contains(target) &&
      reactionButton.current && !reactionButton.current.contains(target)
    ) {
      setOpenCloseOptions(false)
    } 
    
    } 

    window.addEventListener('click', checkClick, true);

    return () => {
      window.removeEventListener('click', checkClick, true);
    }
  },[])

  return  <motion.div 
    initial={{ 
      y:'15%',
      opacity: 0 
    }}
    animate={{ 
      y:0,
      opacity: 1 
    }}
    exit={{ 
      y:'15%',
      opacity: 0 
    }}
    transition={{
      ease: "easeInOut",
      duration:.3
    }}
    ref={reactionBox} 
    className="
   absolute

   bottom-[150%] 
   left-[-40%]
  
   block

   min-w-48
   min-h-9

   bg-PrimaryWhite
  ">

  </motion.div>
})

export default Reactions
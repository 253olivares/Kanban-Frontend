import { motion } from "framer-motion"
import { memo } from "react";
import { useAppDispatch } from "../../../../../reduxStore/hook";
import { updateCommentsReaction } from "../../../../../reduxStore/comments/commentsSlice";

const ReactionButtons = memo((
    {
        userId,
        reaction,
        usersReacted,
        commentsReactions,
        durat,
        commentID
    } : {
        userId:string,
        reaction:string,
        usersReacted:string[],
        commentsReactions:Record<string,number>,
        durat:number,
        commentID:string
    }
) => {

    const dispatch = useAppDispatch();

    console.log("User reacted",usersReacted);

    const reactedAlready = usersReacted.includes(userId);

    console.log("Result",reactedAlready);

    const reactions :Record<string,string> = {
        thumbUp:"👍",
        party:"🎉",
        smile:"😊"
    }



  return (
    <motion.div
    initial={{
        opacity:0
    }}
    animate={{
        y:[0,"-50%",0],
        opacity:1
    }}
    transition={{
        duration: .3,
        ease: "easeInOut",
        delay:durat
    }}
    onClick={()=>{
        console.log("TEST!")
        if(reactedAlready){
            if(commentsReactions[reaction] === 0) return;
            let removeUserToReaction:Record<string,string[]>;
            let removeCount:Record<string,number>;
            switch (reaction) {
                case "thumbUp":
                    removeUserToReaction ={thumbUp:usersReacted.filter(x=>x!==userId)} 
                    removeCount = {thumbUp:commentsReactions[reaction]-1}
                    break;
                case "party":
                    removeUserToReaction ={party:usersReacted.filter(x=>x!==userId)} 
                    removeCount= {party:commentsReactions[reaction]-1}
                    break;
                case "smile":
                    removeUserToReaction ={smile:usersReacted.filter(x=>x!==userId)} 
                    removeCount = {smile:commentsReactions[reaction]-1}
                    break;
                default:
                    return;
            }
            dispatch(updateCommentsReaction({commentId:commentID,updateList:removeUserToReaction,updateCount:removeCount}))
        } else {
            let addUserToReaction:Record<string,string[]>;
            let addCount:Record<string,number>;
            switch (reaction) {
                case "thumbUp":
                    addUserToReaction ={thumbUp:[...usersReacted,userId]} 
                    addCount = {thumbUp:commentsReactions[reaction]+1}
                    break;
                case "party":
                    addUserToReaction ={party:[...usersReacted,userId]} 
                    addCount= {party:commentsReactions[reaction]+1}
                    break;
                case "smile":
                    addUserToReaction ={smile:[...usersReacted,userId]} 
                    addCount = {smile:commentsReactions[reaction]+1}
                    break;
                default:
                    return;
            }

           console.log(`BIG TEST`, addUserToReaction, addCount);
      
            dispatch(updateCommentsReaction({commentId:commentID,updateList:addUserToReaction,updateCount:addCount}))
        }
    }}
    className={
        `
    flex
    justify-center
    items-center

    sLaptop:text-[0.666rem]
    mLaptop:text-[0.833rem]
    desktop:text-[1rem]
    largeDesktop:text-[1.25rem]

    rounded-full

    cursor-pointer

    ${ 
        reactedAlready &&
        `
        bg-SelectorBlue
        ` 
    }
    hover:bg-SelectorBlue50
    transition-all

    sLaptop:p-[0.266rem]
    mLaptop:p-[0.333rem]
    desktop:p-[0.4rem]
    largeDesktop:p-[.25rem]
    `
    }
    >
        {reactions[reaction]}
    </motion.div>
  )
})

export default ReactionButtons
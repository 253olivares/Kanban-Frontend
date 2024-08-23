import { memo } from "react";
import TaskComment from "./TaskComment";
import scrollbarImage from '/assets/scrollBarTrack.png';
import { user } from "../../../../../reduxStore/users/userSlice";

export type commentTest = {
    c_id: string,
    u_id: string,
    t_id: string,
    message: string,
    date: Date,
    reactions: {
        thumbUp:number,
        party: number,
        smile: number,
    }
    userReactions: {
        thumbUp:string[],
        party:string[],
        smile:string[]
    }
}

const CommentsHolder = memo((
    {
        assignees,
        userInfo,
        adminCred,
        comments
    } : {
        assignees:string[],
        userInfo:user,
        adminCred:boolean
        comments:string[]
    }) => {

  return (
    <div 
    style={{
        // @ts-ignore
        "--img": `url(${scrollbarImage})`
    }}
    className={
        `
        flex
        flex-col

        sLaptop:gap-[0.500rem]
        mLaptop:gap-[0.625rem]
        desktop:gap-[0.750rem]
        largeDesktop:gap-[0.938rem]

        pl-[3.5%]

        sLaptop:pr-[calc(3.5%-5.333px)]
        mLaptop:pr-[calc(3.5%-6.666px)]
        desktop:pr-[calc(3.5%-8px)]
        largeDesktop:pr-[calc(3.5%-10px)]

        sLaptop:h-[5.333rem]
        mLaptop:h-[6.666rem]
        desktop:h-[8rem]
        largeDesktop:h-[10rem]

        boardsScroll

        scrollGutter

        overflow-x-hidden

        ${
            comments.length === 0 && "justify-center items-center"
        }
        `
    }>
        {
            comments.map((comment)=>
                <TaskComment userInfo={userInfo} adminCred={adminCred} key={comment} comment={comment} assignees={assignees} />
            )
        }
        {
            comments.length === 0 && <p className="
             text-PrimaryWhite

             sLaptop:text-[0.8rem]
             mLaptop:text-[1rem]
             desktop:text-[1.2rem]
             largeDesktop:text-[1.5rem]

             font-medium
            ">No Comments.</p>
        }
    </div>
  )
})

export default CommentsHolder
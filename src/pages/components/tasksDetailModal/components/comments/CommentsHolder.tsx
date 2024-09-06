import { memo } from "react";
import TaskComment from "./TaskComment";
import scrollbarImage from '/assets/scrollBarTrack.png';
import { user } from "../../../../../reduxStore/users/userSlice";
import { comments } from "../../../../../reduxStore/comments/commentsSlice";

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
        boardId,
        taskId,
        assignees,
        userInfo,
        adminCred,
        comments,
        openCommentEdit,
        setCommentFn
    } : {
        boardId:string,
        taskId:string,
        assignees:string[],
        userInfo:user,
        adminCred:boolean
        comments:string[],
        openCommentEdit:()=>void,
        setCommentFn:(comment:comments)=>void
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

        mx-[5%]
        sLaptop:mx-0
        sLaptop:px-[5%]

        gap-[0.527rem]
        mobile:gap-[0.703rem]
        sMobile:gap-[1.125rem]
        mMobile:gap-[1.35rem]
        sLaptop:gap-[0.500rem]
        mLaptop:gap-[0.625rem]
        desktop:gap-[0.750rem]
        largeDesktop:gap-[0.938rem]

        sLaptop:pl-[3.5%]

        sLaptop:pr-[calc(3.5%-5.333px)]
        mLaptop:pr-[calc(3.5%-6.666px)]
        desktop:pr-[calc(3.5%-8px)]
        largeDesktop:pr-[calc(3.5%-10px)]

        h-[10.253rem]
        mobile:h-[13.671rem]
        sMobile:h-[21.875rem]
        mMobile:h-[26.25rem]
        sLaptop:h-[5.333rem]
        mLaptop:h-[6.666rem]
        desktop:h-[8rem]
        largeDesktop:h-[10rem]

        boardsScroll

        sLaptop:scrollGutter

        overflow-x-hidden

        ${
            comments.length === 0 && "justify-center items-center"
        }
        `
    }>
        {
            comments.map((comment)=>
                <TaskComment boardId={boardId} taskId={taskId} setCommentFn={setCommentFn} openCommentEdit={openCommentEdit} userInfo={userInfo} adminCred={adminCred} key={comment} comment={comment} assignees={assignees} />
            )
        }
        {
            comments.length === 0 && <p className="
             text-PrimaryWhite

             text-[0.632rem]
             mobile:text-[0.843rem]
             sMobile:text-[1.35rem]
             mMobile:text-[1.62rem]
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
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
        // @ts-ignore
        comments
    } : {
        assignees:string[],
        userInfo:user,
        adminCred:boolean
        comments:string[]
    }) => {

        const testComments:commentTest[] = [
            {
                c_id: "testingId_1",
                u_id: userInfo.u_id,
                t_id: "task_2K5zBHcDdY-QMP9fhvBJv",
                message: "Please to meet you guys. Looking forward to working with everyone!",
                date: new Date(),
                reactions: {
                    thumbUp:0,
                    party:0,
                    smile:0,
                },
                userReactions: {
                    thumbUp:[],
                    party:[],
                    smile:[]
                }
            }, {
                c_id: "testingId_2",
                u_id: userInfo.u_id,
                t_id: "task_2K5zBHcDdY-QMP9fhvBJv",
                message: "Nice to meet you Clay. Please get in touch with Ryan so we can get details of hardware and software you will require.",
                date: new Date(),
                reactions: {
                    thumbUp:0,
                    party:0,
                    smile:0,
                },
                userReactions: {
                    thumbUp:[],
                    party:[],
                    smile:[]
                }
            }
        ]
  return (
    <div 
    style={{
        // @ts-ignore
        "--img": `url(${scrollbarImage})`
    }}
    className="
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

    ">
        {
            testComments.map((comment)=>
                <TaskComment userInfo={userInfo} adminCred={adminCred} key={comment.c_id} comment={comment} assignees={assignees} />
            )
        }
    </div>
  )
})

export default CommentsHolder
import { memo } from 'react'
import AddComment from './AddComment'
import CommentsHolder from './CommentsHolder';
import {  user } from '../../../../../reduxStore/users/userSlice';

const TaskComments = memo(({
    userInfo,
    adminCred,
    taskComments,
    assignees
} : {
    userInfo:user,
    adminCred:boolean,
    taskComments:string[],
    assignees:string[]
}) => {


  return (
    <div className='
        w-full

        flex
        flex-col

        sLaptop:gap-[0.4rem]
        mLaptop:gap-[0.5rem]
        desktop:gap-[0.6rem]
        largeDesktop:gap-[0.75rem]
       
    '>   
        <AddComment adminCred={adminCred} userInfo={userInfo} assignees={assignees}  />
        <CommentsHolder userInfo={userInfo} adminCred={adminCred} comments = {taskComments} assignees={assignees} />
    </div>
  )
})

export default TaskComments  
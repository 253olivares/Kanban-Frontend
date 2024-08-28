import { memo } from 'react';
import UserActiveTasks from '../activeUserTasks';
import Heading from '../mainPageHeader';
import { getUser, user } from '../../../../reduxStore/users/userSlice';
import { useAppSelector } from '../../../../reduxStore/hook';
import { getAndFilterUserTasks, task } from '../../../../reduxStore/tasks/tasksSlice';

const index = memo(() => {

  const user:user | null =  useAppSelector(getUser);

  const getUserTasks:task[] = useAppSelector(getAndFilterUserTasks);

  if(!user)return;
  return (
    <div className='
      w-full
      sLaptop:w-[75%]
      h-[100%]
      flex 
      flex-col
      items-center 
      justify-start
      '>
         <Heading />
        {
          getUserTasks.length === 0
          ?
          <div className='
          w-full
          flex-grow
          flex
          items-center
          justify-center
          '>
            <p className='
            font-bold
          text-white
            text-[0.878rem]
            mobile:text-[1.171rem]
            sMobile:text-[1.874rem]
            mMobile:text-[2.25rem]
            sLaptop:text-[1.466rem]
            mLaptop:text-[1.833rem]
            desktop:text-[2.2rem]
            largeDesktop:text-[2.75rem]
            4k:text-[3.666rem]

            px-[5%]
            text-center
            '>No tasks currently found! <br/> All caught up!</p>
          </div>
          : 
          <UserActiveTasks getUserTasks={getUserTasks} />
        }
    </div> 
  )
})

export default index
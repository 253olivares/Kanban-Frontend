
import usersIcon from '/assets/User_Icon.svg';
import speechBubble from '/assets/SpeechBubbl_Icon.svg';
import { dataShare } from '../../../../../3_Workspace/components/listsHolder/components/lists/taskComponents/TaskInfo';
import { memo } from 'react';

const TaskInfo = (
    {
        members,
        comments
    } : {
        members:number,
        comments:number
    }
) => {
    const data:Record<string,dataShare> = {
        members: {
          icon:usersIcon,
          numbers:members,
        },
        comments: {
          icon:speechBubble,
          numbers:comments
        }
      }
  return (
    <div className='
    flex
    flex-row

    w-full

    gap-[0.410rem]
    mobile:gap-[0.546rem]
    sMobile:gap-[0.875rem]
    mMobile:gap-[1.05rem]

    sLaptop:gap-[0.666rem]
    mLaptop:gap-[0.833rem]
    desktop:gap-[1rem]
    largeDesktop:gap-[1.25rem]
    '>
        {
            Object.entries(data).map(([keys,value],_)=>
                <TaskInfos key={`${keys}`} id={keys} values={value} />
            )
        }
    </div>
  )
}

const TaskInfos = memo((
    {
        id,
        values
      } : {
        id:string,
        values: dataShare
      }
)=>{
    return <div
     className='
     flex
     flex-row

     items-center

     opacity-50

     gap-[0.234rem]
     mobile:gap-[0.312rem]
     sMobile:gap-[0.5rem]
     mMobile:gap-[0.6rem]

     sLaptop:gap-[0.3rem]
     mLaptop:gap-[0.375rem]
     desktop:gap-[0.45rem]
     largeDesktop:gap-[0.562rem]
     '
    >
        <img className="

        h-[0.688rem]
        mobile:h-[0.918rem]
        sMobile:h-[1.469rem]
        mMobile:h-[1.762rem]

        sLaptop:h-[0.935rem]
        mLaptop:h-[1.169rem]
        desktop:h-[1.403rem]
        largeDesktop:h-[1.753rem]

        " src={values.icon} alt="Icon" />
        <h1 className="

        text-[0.439rem]
        mobile:text-[0.586rem]
        sMobile:text-[0.938rem]
        mMobile:text-[1.125rem]

        sLaptop:text-[0.625rem]
        mLaptop:text-[0.781rem]
        desktop:text-[0.938rem]
        largeDesktop:text-[1.172rem]

        text-PrimaryWhite

        leading-none
        ">{values.numbers} <span className="  font-normal">{id}</span></h1>
    </div>
})

export default TaskInfo
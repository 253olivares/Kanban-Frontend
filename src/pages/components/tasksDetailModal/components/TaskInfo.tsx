import { dataShare } from "../../../3_Workspace/components/listsHolder/components/lists/taskComponents/TaskInfo"
import usersIcon from '/assets/User_Icon.svg';
import speechBubble from '/assets/SpeechBubbl_Icon.svg';

const TaskInfoExtra = ({
    members,
    comments
} : {
    members:number,
    comments:number
}) => {

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
    <div className="
 
    flex
    flex-row

    w-full

    gap-[0.468rem]
    mobile:gap-[0.625rem]
    sMobile:gap-[1rem]
    mMobile:gap-[1.2rem]
    sLaptop:gap-[0.666rem]
    mLaptop:gap-[0.833rem]
    desktop:gap-[1rem]
    largeDesktop:gap-[1.25rem]

    ">
        {
            Object.entries(data).map(([keys,values],_)=>
                <TaskInfos key={`${keys}`} id={keys} values={values} />
            )
        }
    </div>
  )
}

const TaskInfos=({
    id,
    values
  } : {
    id:string,
    values: dataShare
  })=>{
    return <div className="
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

    ">
        <img className="

        h-[0.878rem]
        mobile:h-[1.171rem]
        sMobile:h-[1.875rem]
        mMobile:h-[2.25rem]
        sLaptop:h-[0.935rem]
        mLaptop:h-[1.169rem]
        desktop:h-[1.403rem]
        largeDesktop:h-[1.753rem]

        " src={values.icon} alt="Icon" />
        <h1 className="
        text-[0.556rem]
        mobile:text-[0.742rem]
        sMobile:text-[1.188rem]
        mMobile:text-[1.425rem]
        sLaptop:text-[0.625rem]
        mLaptop:text-[0.781rem]
        desktop:text-[0.938rem]
        largeDesktop:text-[1.172rem]

        text-PrimaryWhite
  
        leading-none
        ">{values.numbers} <span className="  font-normal">{id}</span></h1>
        
    </div>
}

export default TaskInfoExtra
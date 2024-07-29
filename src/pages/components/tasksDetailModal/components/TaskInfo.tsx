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

    sLaptop:gap-[0.3rem]
    mLaptop:gap-[0.375rem]
    desktop:gap-[0.45rem]
    largeDesktop:gap-[0.562rem]

    ">
        <img className="

        sLaptop:h-[0.935rem]
        mLaptop:h-[1.169rem]
        desktop:h-[1.403rem]
        largeDesktop:h-[1.753rem]

        " src={values.icon} alt="Icon" />
        <h1 className="

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
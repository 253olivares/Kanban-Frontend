import { taskHeaders } from "../../../../../components/tasksDetailModal/components/TaskDetail"
import TaskHeaderMobile0 from '/assets/TaskHead_0_mobile.png';
import TaskHeaderMobile1 from '/assets/TaskHead_1_mobile.png';
 
const taskHeaderMobile:Record<string,string> = {
  0:TaskHeaderMobile0,
  1:TaskHeaderMobile1,
  2: ""
}

const TaskHead = (
    {
      head,
      workspaceName,
      boardName,
      listName
    } : {
      head:number,
      workspaceName:string,
      boardName:string,
      listName:string
    }
  ) => {
    return <div className='
    w-full
  
    h-auto
    relative

    '>
        <div className='
        top-0
        left-0
  
        absolute
        z-[2]
  
        w-full
        h-full
  
        flex
        items-center
      '>
        <p className='
        
        w-[65%]
        sLaptop:w-[70%]
        
        text-[0.527rem]
        mobile:text-[0.703rem]
        sMobile:text-[1.125rem]
        mMobile:text-[1.35rem]

        sLaptop:text-[0.764rem]
        mLaptop:text-[0.955rem]
        desktop:text-[1.146rem]
        largeDesktop:text-[1.432rem]

        text-PrimaryWhite
  
        font-medium
        leading-none

        px-[2.5%]
  
        text-nowrap
        overflow-hidden
        text-ellipsis
        '>
           {workspaceName} / {boardName} / {listName}
        </p>
      </div>
      <img className="
      relative
        z-[0]

       hidden

      sLaptop:block
      sLaptop:h-[1.916rem]
      mLaptop:h-[2.395rem]
      desktop:h-[2.875rem]
      largeDesktop:h-[3.593rem]

      w-full
      " src={taskHeaders[head]} alt="Header" />
      <img className={
        `
        relative
        z-[0]

        h-[1.318rem]
        mobile:h-[1.757rem]
        sMobile:h-[2.812rem]
        mMobile:h-[3.375rem]

        sLaptop:hidden

        w-full
        `
      }
      
      src={taskHeaderMobile[head]} alt="Headermobile" />
    </div>
  }

export default TaskHead
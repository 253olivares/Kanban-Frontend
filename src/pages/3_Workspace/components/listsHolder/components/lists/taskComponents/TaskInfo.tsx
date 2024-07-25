import usersIcon from '/assets/User_Icon.svg';
import speechBubble from '/assets/SpeechBubbl_Icon.svg'
import { memo } from 'react';

type dataShare = {
  icon:string,
  numbers:number
}

const TaskInfo = memo(( { 
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

      gap-[0.671rem]
      mobile:gap-[0.895rem]
      sMobile:gap-[1.432rem]
      mMobile:gap-[1.719rem]

      sLaptop:gap-[0.933rem]
      mLaptop:gap-[1.166rem]
      desktop:gap-[1.4rem]
      largeDesktop:gap-[1.75rem]
      
    ">
        {
          Object.entries(data).map(([keys,values],_)=>
            <TaskInfos key={`${keys}`} values={values} />
          )
        }
    </div>
  )
})

const TaskInfos = memo(({
  values
} : {
  values: dataShare
}) => {
  return <div className='
  flex
  flex-row

  gap-[0.234rem]
  mobile:gap-[0.312rem]
  sMobile:gap-[0.5rem]
  mMobile:gap-[0.6rem]

  sLaptop:gap-[0.266rem]
  mLaptop:gap-[0.333rem]
  desktop:gap-[0.4rem]
  largeDesktop:gap-[.5rem]

  items-center

  opacity-50
  group-hover/task:opacity-100

  '>
    <img className='

      h-[1.318rem]
      mobile:h-[1.758rem]
      sMobile:h-[2.813rem]
      mMobile:h-[3.375rem]

      sLaptop:h-[1.2rem]
      mLaptop:h-[1.5rem]
      desktop:h-[1.8rem]
      largeDesktop:h-[2.25rem]
    ' src={values.icon} alt="IconFor TaskInfo" />
    <h1 className='

      text-[0.703rem]
      mobile:ext-[0.937rem]
      sMobile:text-[1.5rem]
      mMobile:text-[1.8rem]

      sLaptop:text-[.799rem]
      mLaptop:text-[.999rm]
      desktop:text-[1.2rem]
      largeDesktop:text-[1.5rem]

      font-bold

      text-PrimaryWhite

      leading-none

    '>
      {values.numbers}
    </h1>
  </div>
})

export default TaskInfo
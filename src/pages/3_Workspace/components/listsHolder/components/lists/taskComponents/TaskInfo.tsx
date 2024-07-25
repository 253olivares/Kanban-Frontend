import usersIcon from '/assets/User_Icon.svg';
import speechBubble from '/assets/SpeechBubbl_Icon.svg'

type dataShare = {
  icon:string,
  numbers:number
}

const TaskInfo = () => {

  const data:Record<string,dataShare> = {
    members: {
      icon:usersIcon,
      numbers:1
    },
    comments: {
      icon:speechBubble,
      numbers:0
    }
  }
  return (  
    <div className="
      flex
      flex-row

      w-full

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
}

const TaskInfos = ({
  values
} : {
  values: dataShare
}) => {
  return <div className='
  flex
  flex-row

  sLaptop:gap-[0.266rem]
  mLaptop:gap-[0.333rem]
  desktop:gap-[0.4rem]
  largeDesktop:gap-[.5rem]

  items-center

  opacity-50
  group-hover:opacity-100

  '>
    <img className='
      sLaptop:h-[1.2rem]
      mLaptop:h-[1.5rem]
      desktop:h-[1.8rem]
      largeDesktop:h-[2.25rem]
    ' src={values.icon} alt="IconFor TaskInfo" />
    <h1 className='

      sLaptop:text-[.799rem]
      mLaptop:text-[.999rm]
      desktop:text-[1.2rem]
      largeDesktop:text-[1.5rem]

      font-medium

      text-PrimaryWhite

      leading-none

    '>
      {values.numbers}
    </h1>
  </div>
}

export default TaskInfo
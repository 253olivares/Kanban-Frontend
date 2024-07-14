import { memo } from 'react';
import { getUserFromList } from '../../../../../customLogic/CustomLogic';
import { motion } from 'framer-motion';

const AddHistoryItem = ({v,darkBackground}:{v:string[],darkBackground:boolean}) => {
    
    // @ts-ignore
    const role = v[1];
    // @ts-ignore
    const boardJoinDate = new Date(v[2]);

    const user = getUserFromList(v[0]);

    if(!user) return

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
        duration:.5
      }}
    className={`
    w-full
    flex
    flex-col

    items-center
    justify-center

    px-[2.5%]
    
      ${
        darkBackground && 'bg-SpaceBlueSelected' 
      }

    py-[.468rem]
    mobile:py-[.625rem]
    sMobile:py-[1rem]
    mMobile:py-[1.2rem]


    gap-[.234rem]
    mobile:gap-[.312rem]
    sMobile:gap-[.5rem]
    mMobile:gap-[.6rem]
    `}
    >
        <div className='
        w-full
        flex
        flex-row

        justify-start
        items-center

        gap-[1.75rem]

        '>
          <UserImage image ={user.pfp} />
          <UserName userName ={`${user.first_name} ${user.last_name}`} />
        </div>
        <div className='
        flex
        flex-rows
        w-full

        justify-between
        items-center
        '>
          <Role role={role}  />
          <Joined date={boardJoinDate} />
        </div>
    </motion.div>
  ) 
}

export const UserImage = memo(({image}:{image:string})=> {
  return <img className='
    rounded-full

    w-[2.343rem]
    mobile:w-[3.125rem]
    sMobile:w-[5rem]
    mMobile:w-[6rem]

  ' src={image} alt="User Image" />
})

export const UserName = memo(({userName}:{userName:string})=>{
  return <h1 className='
    font-medium

    text-[1.054rem]
    mobile:text-[1.406rem]
    sMobile:text-[2.25rem]
    mMobile:text-[2.7rem]

    flex-grow

    overflow-hidden

    text-ellipsis

  '>{userName}</h1>
})

export const Role = memo(({role}:{role:string})=>{
  return <p className='
  
  text-[.703rem]
  mobile:text-[.937rem]
  sMobile:text-[1.5rem]
  mMobile:text-[1.8rem]

  '>Role: <span className=' opacity-75 font-medium'>{role}</span></p>
})
  
export const Joined = memo(({date}:{date:Date})=> {
  return <p className='
  
  text-[.703rem]
  mobile:text-[.937rem]
  sMobile:text-[1.5rem]
  mMobile:text-[1.8rem]
  
  '>Joined: {`${
    date.toLocaleDateString('en-US',{weekday:"short"})
    +" "+
    date.toLocaleDateString()
  }`}</p>
})

export default AddHistoryItem
import { memo } from 'react'
import { addUsersTasks, getUserFromList, removeUsersTasks2 } from '../../../../../../../../customLogic/CustomLogic';
import leaveIcon from '/assets/leaveWorkspace.svg';
import addUser from '/assets/addBoard.png'
import { useAppDispatch } from '../../../../../../../../reduxStore/hook';
import { addUserToTask, removeUserFromTask } from '../../../../../../../../reduxStore/tasks/tasksSlice';

const UserEntity = memo((
    {
        userInfo,
        taskId,
        included
    } : {
        email:string,
        userInfo:string[],
        admin:string,
        taskId:string,
        included:boolean
    }
) => {

    const role = userInfo[1];
    const user = getUserFromList(userInfo[0]);

    const dispatch = useAppDispatch();

    const addUserFn = () =>{
        dispatch(addUserToTask({taskToAddToo:taskId,userIdToAdd:userInfo[0]})).unwrap().then(()=>{
            addUsersTasks(userInfo[0],taskId);
        }).finally(()=>{
            console.log("User has been added!");
        })
    }

    const removeUserFn = () => {
        dispatch(removeUserFromTask({taskToAddToo:taskId,userIdToAdd:userInfo[0]})).unwrap().then(()=>{
            removeUsersTasks2(userInfo[0],taskId);
        }).finally(()=>{
            console.log("User removed")
        })
    }

    if(!user) return
  return (
    <div className='

    sLaptop:w-[24.500rem]
    mLaptop:w-[30.625rem]
    desktop:w-[36.750rem]
    largeDesktop:w-[45.938rem]

    sLaptop:py-[0.266rem]
    mLaptop:py-[0.333rem]
    desktop:py-[0.4rem]
    largeDesktop:py-[.5rem]

    flex
    flex-row
    justify-between
    items-center

    sLaptop:px-[0.666rem]
    mLaptop:px-[0.833rem]
    desktop:px-[1rem]
    largeDesktop:px-[1.25rem]

    hover:bg-[rgba(0,0,0,.25)]

    transition-[background-color]

    '>
        <div className='
        flex
        flex-row

        justify-center
        items-center

        sLaptop:gap-[0.799rem]
        mLaptop:gap-[0.999rem]
        desktop:gap-[1.2rem]
        largeDesktop:gap-[1.5rem]
        '>
            <UserIcon userImage = {user.pfp} />
            <UserName userName={`${user.first_name} ${user.last_name}`} />
            <Role userRole={role}/>
        </div>

        {
            included ? role !== "Admin" &&  <ActionButton funct={()=>{removeUserFn()}} icon={leaveIcon} message={"Kick User"} /> : role !== "Admin" &&  <ActionButton funct={()=>{addUserFn()}}  icon={addUser} message={"Add User"} />
        }
    </div>
  )
})

export default UserEntity

const UserIcon = memo((
    {
        userImage
    } : {
        userImage:string
    })=>{
    return <img className='
    rounded-full

    sLaptop:w-[1.599rem]
    mLaptop:w-[1.999rem]
    desktop:w-[2.4rem]
    largeDesktop:w-[3rem]
    ' src={userImage} alt="UserImage" />
})

const UserName = memo((
    {
        userName
    } : {
        userName:string
    }
)=>{
    return <h1 className='
        font-medium

        sLaptop:text-[0.879rem]
        mLaptop:text-[1.098rem]
        desktop:text-[1.32rem]
        largeDesktop:text-[1.65rem]

        sLaptop:w-[8.333rem]
        mLaptop:w-[10.416rem]
        desktop:w-[12.5rem]
        largeDesktop:w-[15.625rem]

        overflow-hidden
        text-ellipsis

        text-PrimaryWhite
    '>
        {userName}
    </h1>
})

const Role = (
    {
        userRole
    } : {
        userRole:string
    }
) =>{
    return <span className="

    text-PrimaryWhite

    sLaptop:text-[.666rem]    
    mLaptop:text-[.832rem]    
    desktop:text-[1rem]
    largeDesktop:text-[1.25rem]
">
    Role: <span className="opacity-50 font-medium 

     sLaptop:max-w-[5.833rem]
     mLaptop:max-w-[7.292rem]
     desktop:max-w-[8.750rem]
     largeDesktop:max-w-[10.938rem]

     overflow-hidden
     text-ellipsis
    ">{userRole}</span>
</span>
}

const ActionButton = (
    {
        funct,
        icon,
        message
    } : {
        funct:()=>void,
        icon:string,
        message:string
    }
) =>{
    return <div 
    onClick={funct}
    className='
    flex
    flex-col

    justify-center
    items-center

    hover:cursor-pointer

    text-PrimaryWhite

    opacity-50
    hover:opacity-100

    sLaptop:gap-[0.266rem]
    mLaptop:gap-[0.332rem]
    desktop:gap-[0.4rem]
    largeDesktop:gap-[.5rem]

    '>
        <img
        className='
          sLaptop:w-[0.72rem]
          mLaptop:w-[0.9rem]
          desktop:w-[1.08rem]
          largeDesktop:w-[1.35rem]
        '
        src={icon} alt="Icon" />
        <p className='
          font-medium

          sLaptop:text-[0.533rem]
          mLaptop:text-[0.666rem]
          desktop:text-[0.8rem]
          largeDesktop:text-[1rem]

          leading-none
        '>{message}</p>
    </div>
}
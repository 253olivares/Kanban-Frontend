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

    w-[13.476rem]
    mobile:w-[17.968rem]
    sMobile:w-[28.75rem]
    mMobile:w-[34.5rem]
    sLaptop:w-[24.500rem]
    mLaptop:w-[30.625rem]
    desktop:w-[36.750rem]
    largeDesktop:w-[45.938rem]

    py-[0.351rem]
    mobile:py-[0.468rem]
    sMobile:py-[.75rem]
    mMobile:py-[0.9rem]
    sLaptop:py-[0.266rem]
    mLaptop:py-[0.333rem]
    desktop:py-[0.4rem]
    largeDesktop:py-[.5rem]

    flex
    flex-row
    justify-between
    items-center

    px-[0.468rem]
    mobile:px-[0.625rem]
    sMobile:px-[1rem]
    mMobile:px-[1.2rem]
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

        gap-[0.468rem]
        mobile:gap-[0.625rem]
        sMobile:gap-[1rem]
        mMobile:gap-[1.2rem]
        sLaptop:gap-[0.799rem]
        mLaptop:gap-[0.999rem]
        desktop:gap-[1.2rem]
        largeDesktop:gap-[1.5rem]
        '>
            <UserIcon userImage = {user.pfp} />
            <div className='
                flex
                flex-col
                sLaptop:flex-row

                sLaptop:gap-[0.799rem]
                mLaptop:gap-[0.999rem]
                desktop:gap-[1.2rem]
                largeDesktop:gap-[1.5rem]
            '>
                <UserName userName={`${user.first_name} ${user.last_name}`} />
                <Role userRole={role}/>
            </div>
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

    w-[2.050rem]
    mobile:w-[2.734rem]
    sMobile:w-[4.375rem]
    mMobile:w-[5.25rem]
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

        text-[0.703rem]
        mobile:text-[0.937rem]
        sMobile:text-[1.5rem]
        mMobile:text-[1.8rem]

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

    text-[0.539rem]
    mobile:text-[0.718rem]
    sMobile:text-[1.15rem]
    mMobile:text-[1.38rem]

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

    sLaptop:opacity-50
    hover:opacity-100    

    gap-[0.234rem]
    mobile:gap-[0.312rem]
    sMobile:gap-[.5rem]
    mMobile:gap-[0.6rem]

    sLaptop:gap-[0.266rem]
    mLaptop:gap-[0.332rem]
    desktop:gap-[0.4rem]
    largeDesktop:gap-[.5rem]

    '>
        <img
        className='
          w-[0.834rem]
          mobile:w-[1.113rem]
          sMobile:w-[1.781rem]
          mMobile:w-[2.137rem]

          sLaptop:w-[0.72rem]
          mLaptop:w-[0.9rem]
          desktop:w-[1.08rem]
          largeDesktop:w-[1.35rem]
        '
        src={icon} alt="Icon" />
        <p className='
          font-medium

          text-[0.539rem]
          mobile:text-[0.718rem]
          sMobile:text-[1.15rem]
          mMobile:text-[1.38rem]

          sLaptop:text-[0.533rem]
          mLaptop:text-[0.666rem]
          desktop:text-[0.8rem]
          largeDesktop:text-[1rem]

          leading-none
        '>{message}</p>
    </div>
}
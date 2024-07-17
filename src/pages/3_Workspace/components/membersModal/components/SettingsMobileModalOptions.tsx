import { memo } from "react"
import { useAppDispatch } from "../../../../../reduxStore/hook"
import { openAddNewUser, openChangeBackground, openConfirmDeleteBoard } from "../../../../../reduxStore/modal/modalSlice"

const SettingsMobileModalOptions = memo(() => {
  return (
    <div className="
    
    flex
    flex-col
    
    flex-grow

    w-full

    ">
        <Options />
        <DeleteWorkspace />
    </div>
  )
})

const Options = memo(() => {

  const dispatch = useAppDispatch();


  const adminTools = {
    "Add New User": ()=>dispatch(openAddNewUser()) ,
    "Change Background": ()=> dispatch(openChangeBackground())
  }

    return <div className="
    flex
    flex-col
    w-full

    flex-grow
   
    gap-[0.468rem]
    mobile:gap-[.625rem]
    sMobile:gap-[1rem]
    mMobile:gap-[1.2rem]

    ">
      {
        Object.entries(adminTools).map(([k,v],_)=> (
          <ButtonChoice key={`mobile_${k}`} buttonName={k} buttonFunction={v} />
        ))
      }
    </div>
})

const ButtonChoice = memo(({buttonName,buttonFunction}:
  {
    buttonName:string,
    buttonFunction:(()=>void)
  }) => {
  return <div
  className="settingsItems"
  onClick={buttonFunction}
  >
    {buttonName}
  </div>
})

const DeleteWorkspace = memo(() => {
    const dispatch = useAppDispatch();
    return <div 
    onClick={()=> dispatch(openConfirmDeleteBoard())}
    className="
    bg-[red]
    text-PrimaryWhite

    cursor-pointer

    font-medium

    text-[1.406rem]
    mobile:text-[1.875rem]
    sMobile:text-[3rem]
    mMobile:text-[3.6rem]

    py-[.7033rem]
    mobile:py-[.9375rem]
    sMobile:py-[1.5rem]
    mMobile:py-[1.8rem]

    rounded-[0.234rem]
    mobile:rounded-[0.3125rem]
    sMobile:rounded-[.5rem]
    mMobile:rounded-[0.6rem]

    text-center

    leading-none
    ">
        DeleteBoard
    </div>
})

export default SettingsMobileModalOptions
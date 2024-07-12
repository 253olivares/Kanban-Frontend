import { memo, useLayoutEffect, useRef, useState } from "react"
import AnimateHeight, { Height } from "react-animate-height"
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../reduxStore/hook";
import { closeModal, getRolState, getUserHistoryState } from "../../../../../reduxStore/modal/modalSlice";
import { getWorkspaceSelect } from "../../../../../reduxStore/workspace/workspaceSlice";
import x_mark from '/assets/addBoard.png'

const AddNewUser = memo(({...props}) => {

    const params = useParams();
    // @ts-ignore
    const dispatch = useAppDispatch();

    // @ts-ignore
    const inputRef = useRef<HTMLInputElement>(null);

    // @ts-ignore
    const [emailInput,setEmailInput] = useState<string>("");
    const [height,setHeight] = useState<Height>('auto');

    const contentDiv = useRef<HTMLDivElement | null>(null);

    const userHistory = useAppSelector(getUserHistoryState);
    // @ts-ignore
    const userRole = useAppSelector(getRolState);
    // @ts-ignore
    const selectWorkspace = useAppSelector(getWorkspaceSelect);

    if(!params.workspaceId) return;
    if(!userHistory) return;

    // @ts-ignore
    const addusertohistory = () => {

    }

    // @ts-ignore
    const checkEmailInput = () => {

    }

    useLayoutEffect(()=> {
        const element = contentDiv.current as HTMLDivElement;
        const resizeObserver = new ResizeObserver(()=> {
            setHeight(element.clientHeight);
        })
        resizeObserver.observe(element);
        return () => resizeObserver.disconnect();
    },[])

    console.log("adafk;flkasfkasl");

  return (
    <AnimateHeight
    {...props}
    contentClassName="addNewUserMobile"
    contentRef={contentDiv}
    height={height}
    style={{
        width: '90%'
    }}
    disableDisplayNone
    >
        <AddNewUserHolder />
        <div className="
        flex
        flex-col

        ">

        </div>
    </AnimateHeight>
  )
})

const AddNewUserHolder = memo(() => {

    const dispatch = useAppDispatch();

    return <div className="
    w-full
    flex
    justify-between
    items-center
    ">
        <h1 className="
           text-[1.335rem]
           mobile:text-[1.780rem]
           sMobile:text-[2.848rem]
           mMobile:text-[3.418rem]

           font-medium

           leading-none
   
           text-PrimaryWhite
        ">Add New User</h1>
        <img 
        onClick={()=> dispatch(closeModal())}
        className="
          rotate-45

          h-[1.525rem]
          mobile:h-[2.034rem]
          sMobile:h-[3.254rem]
          mMobile:h-[3.906rem]
            
          cursor-pointer
        " src={x_mark} alt="Close icon" />
    </div>
})

export default AddNewUser
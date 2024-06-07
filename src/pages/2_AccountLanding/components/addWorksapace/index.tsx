import { useContext, useEffect } from "react"
import { AppContext } from "../../../appRefContext"
import { useAppDispatch } from "../../../../reduxStore/hook";
import { changeModal } from "../../../../reduxStore/workspace/workspace";

const index = () => {
  const dispatch = useAppDispatch();

  // import a ref so we can track if the user clicks inside and what is clicked
  const appContext = useContext(AppContext);
  const {openSpaceModal,newWorkspaceModal, newWorkspaceModalClose} = appContext!;

  // this will create a listener which will watch to see if user clicks outside our modal
  // if they do close our modal
  // otherwise keep it open
  useEffect(()=>{
    const checkClick = (e:MouseEvent | TouchEvent):void => {
      const element = e.target as Node;
      
      // a double check for instances where the button is spammed
      // what its ment to do is if a a listener persist afer our modal closes
      // then remove our listener
      // helps solve some bugs we run into
      if(!newWorkspaceModal.current) window.removeEventListener('click',checkClick,true);

      // 2 conditionals 
      if(openSpaceModal.current && 
        newWorkspaceModal.current && 
        !newWorkspaceModal.current.contains(element) &&
        !openSpaceModal.current.contains(element) ||
        newWorkspaceModalClose.current && 
        newWorkspaceModalClose.current.contains(element)
        ){
          window.removeEventListener('click',checkClick,true);
          dispatch(changeModal(false));} 
    }
    
    window.addEventListener('click',checkClick,true);

    return ()=> {
      window.removeEventListener('click',checkClick,true);
    }
  },[])

  return (
    // this will be our state for added new workspaces
    <div
    ref={newWorkspaceModal}
    className={`
     hidden
     sLaptop:flex

     flex-col

     absolute
     bottom-[-10%]
     z-[5]
     sLaptop:min-h-[150px]
     sLaptop:w-[]
     mLaptop:w-[]
     desktop:w-[]
     largeDesktop:w-[23.75rem]
     left-[100%]
     bg-black
    `}>
      {/* h1 and close icon */}
      <div className="
      w-full
      flex
      flex-row
      justify-between
      "></div>
      {/* our input */}
      <div></div>
    </div>
  )
}

export default index
import { FormEvent, useEffect, useRef, useState } from "react"
import { useAppDispatch} from "../../../../../reduxStore/hook";
import { addNewWorkspace, changeModal } from "../../../../../reduxStore/workspace/workspaceSlice";
import { sanitize } from "../../../../../customLogic/CustomeLogic";
import { updateUserWorkspaces } from "../../../../../reduxStore/users/userSlice";

const index = () => {

  const dispatch = useAppDispatch();

  const [text,setText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  // add something to check for character 12 character limit
  const checkInput = ():void => {
    if(text.trim().length > 15 ) {
      alert("Please make sure your workspace name is less than 15 characters! (Including spaces)");
      return;
    }
    dispatch(addNewWorkspace(sanitize(text.trim())))
      .unwrap()
      // if successful clear text
      .then((x)=> {
        alert('New Workspace successfully added!');
        if(x.newWorkspace) {
          dispatch(updateUserWorkspaces(x.newWorkspace));
        }
        dispatch(changeModal(false));
        setText('');
      });
  }

  useEffect(()=> {

    if(inputRef.current && text.trim().length > 15) {
      inputRef.current.style.color = 'red';
    } else if (inputRef.current && text.trim().length <= 15) {
      inputRef.current.style.color = 'black';
    }

  },[text])


  return (
    <form 
    onSubmit={(e:FormEvent)=> {
      e.preventDefault();
      checkInput();
    }}
    className="
        w-full
        flex 
        flex-row
        relative
        z-[10]

        sLaptop:px-[0.533rem]
        mLaptop:px-[0.666rem]
        desktop:px-[0.8rem]
        largeDesktop:px-[1rem]
        4k:px-[1.333rem]
        
        sLaptop:pb-[0.500rem]
        mLaptop:pb-[0.625rem]
        desktop:pb-[0.750rem]
        largeDesktop:pb-[0.938rem]
        4k:pb-[1.250rem]

        ">  
        <input
          value={text}
          onChange={(e)=>setText(e.target.value)}

          ref={inputRef}

          className=" 
          
          sLaptop:rounded-l-[0.216rem]
          mLaptop:rounded-l-[0.270rem]
          desktop:rounded-l-[0.324rem]
          largeDesktop:rounded-l-[0.406rem]
          4k:rounded-l-[0.541rem]
          
          sLaptop:text-[0.799rem]
          mLaptop:text-[0.999rem]
          desktop:text-[1.2rem]
          largeDesktop:text-[1.5rem]
          4k:text-[1.999rem]

          w-[calc(100%-35%)]

          sLaptop:px-[0.799rem]
          mLaptop:px-[0.333rem]
          desktop:px-[0.4rem]
          largeDesktop:px-[.5rem]
          4k:px-[0.666rem]

          sLaptop:py-[0.133rem]
          mLaptop:py-[0.166rem]
          desktop:py-[0.2rem]
          largeDesktop:py-[.25rem]
          4k:py-[0.333rem]
        
          font-medium
       
          focus:outline-none
          "
          id="newWorkSpaceInput" type="text" />
        <button
        type="submit" 
        disabled={text.trim() === ''}
        className="
          text-white
          site-borders
          w-[35%]

          sLaptop:text-[0.773rem]
          mLaptop:text-[0.966rem]
          desktop:text-[1.16rem]
          largeDesktop:text-[1.45rem]
          4k:text-[1.933rem]

          font-medium

          sLaptop:rounded-r-[0.216rem]
          mLaptop:rounded-r-[0.270rem]
          desktop:rounded-r-[0.324rem]
          largeDesktop:rounded-r-[0.406rem]
          4k:rounded-r-[0.541rem]

          focus:outline-none

          disabled:opacity-75

          ">Create</button>
      </form>
  )
}

export default index
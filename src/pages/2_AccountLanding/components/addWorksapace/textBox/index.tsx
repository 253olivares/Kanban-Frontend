import { useState } from "react"
import { useAppDispatch} from "../../../../../reduxStore/hook";
import { addNewWorkspace, changeModal } from "../../../../../reduxStore/workspace/workspaceSlice";
import { sanitize } from "../../../../../customLogic";
import { updateUserWorkspaces } from "../../../../../reduxStore/users/userSlice";

const index = () => {

  const dispatch = useAppDispatch();

  const [text,setText] = useState<string>('');

  const checkInput = ():void => {
    dispatch(addNewWorkspace(sanitize(text)))
      .unwrap()
      // if successful clear text
      .then((x)=> {
        alert('New Workspace successfully added!');
        if(x?.newWorkspace) {
          dispatch(updateUserWorkspaces(x.newWorkspace));
        }
        dispatch(changeModal(false));
        setText('');
      });
  }

  return (
    <>
        <input
          value={text}
          onChange={(e)=>setText(e.target.value)}
          className=" 
          
          sLaptop:rounded-l-[0.216rem]
          mLaptop:rounded-l-[0.270rem]
          desktop:rounded-l-[0.324rem]
          largeDesktop:rounded-l-[0.406rem]
          
          sLaptop:text-[0.799rem]
          mLaptop:text-[0.999rem]
          desktop:text-[1.2rem]
          largeDesktop:text-[1.5rem]

          w-[calc(100%-35%)]

          sLaptop:px-[0.799rem]
          mLaptop:px-[0.333rem]
          desktop:px-[0.4rem]
          largeDesktop:px-[.5rem]

          sLaptop:py-[0.133rem]
          mLaptop:py-[0.166rem]
          desktop:py-[0.2rem]
          largeDesktop:py-[.25rem]
       
          focus:outline-none
          "
          id="newWorkSpaceInput" type="text" />
        <button 
        disabled={text.trim() === ''}
        onClick={()=>checkInput()}
        className="
          text-white
          site-borders
          w-[35%]

          sLaptop:text-[0.773rem]
          mLaptop:text-[0.966rem]
          desktop:text-[1.16rem]
          largeDesktop:text-[1.45rem]
          font-medium

          sLaptop:rounded-r-[0.216rem]
          mLaptop:rounded-r-[0.270rem]
          desktop:rounded-r-[0.324rem]
          largeDesktop:rounded-r-[0.406rem]

          focus:outline-none
          ">Create</button>
    </>
  )
}

export default index
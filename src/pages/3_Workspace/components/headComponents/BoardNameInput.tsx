import { memo, useEffect, useRef, useState } from "react"
import { useAppDispatch } from "../../../../reduxStore/hook";
import { updateBoardNameFromWorkspace } from "../../../../reduxStore/boards/boardsSlice";

const BoardNameInput = memo(({boardName, boardId}:{boardName:string, boardId:string}) => {

  const dispatch = useAppDispatch();

  const [boardNameState, setBoardNameState] = useState<string>(boardName);
  const [limit, setLimit] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const updateBoardName = (e:React.ChangeEvent<HTMLInputElement>) =>{
    if(e.target.value.trim().length !> 18){
      alert('Please make sure your name is workspace name is less then 16 letters or until letters are no longer red!');
    } else {
      setBoardNameState(e.target.value);
    }
    

    if(e.target.value.trim().length<= 16){
      // save to state and update localStorage

      console.log("Name size!",e.target.value.trim().length)

      console.log("Should run save!");

      dispatch(updateBoardNameFromWorkspace({boardName:e.target.value.trim(),boardId:boardId}))
      .unwrap().catch(()=>{
        alert("Ran into problem updating board name!")
      })

    }
  }

  useEffect(()=>{

    if(inputRef.current && boardNameState.trim().length !> 16){
      setLimit(true);
    } else {
      if(inputRef.current) setLimit(false);
    }
  },[boardNameState])

  return (
    <input 
    ref={inputRef}

    className={`
    bg-transparent
    ${limit ? 'text-red-500' : 'text-PrimaryWhite'}

    focus:outline-none
    
    hidden
    sLaptop:block

    sLaptop:w-[14.999rem]
    mLaptop:w-[18.749rem]
    desktop:w-[22.5rem]
    largeDesktop:w-[28.125rem]
    
    font-bold

    sLaptop:text-[1.066rem]
    mLaptop:text-[1.333rem]
    desktop:text-[1.6rem]
    largeDesktop:text-[2rem]

    px-[1.75%]

    sLaptop:py-[0.233rem]
    mLaptop:py-[0.291rem]
    desktop:py-[.35rem]
    largeDesktop:py-[0.437rem]

    sLaptop:rounded-[0.299rem]
    mLaptop:rounded-[0.374rem]
    desktop:rounded-[0.45rem]
    largeDesktop:rounded-[0.562rem]

    text-ellipsis
    overflow-hidden

    hover:opacity-75
    hover:cursor-pointer

    hover:ring-SelectorBlue
    sLaptop:hover:ring-[1.999px]
    mLaptop:hover:ring-[2.499px]
    desktop:hover:ring-[3px]
    largeDesktop:hover:ring-[3.75px] 
    hover:glass-gradient

    focus:ring-SelectorBlue
    sLaptop:focus:ring-[1.999px]
    mLaptop:focus:ring-[2.499px]
    desktop:focus:ring-[3px]
    largeDesktop:focus:ring-[3.75px]
    focus:glass-gradient
    `}

    type="text" 
    value={boardNameState}
    onChange={(e)=> updateBoardName(e) }
    />
  )
})

export default BoardNameInput
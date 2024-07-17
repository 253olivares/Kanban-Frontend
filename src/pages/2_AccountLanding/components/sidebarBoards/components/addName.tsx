import { motion } from "framer-motion";
import closeButton from '/assets/Add_New_Workspace.svg';
import { useAppDispatch, useAppSelector } from "../../../../../reduxStore/hook";
import { addBoards, changeBoardModal, getBoardModal } from "../../../../../reduxStore/boards/boardsSlice";
import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { updateUserBoards } from "../../../../../reduxStore/users/userSlice";
import { updateWorkspaceBoard } from "../../../../../reduxStore/workspace/workspaceSlice";
import { AppContext } from "../../../../appRefContext/appRefContext";
import { createBoardListCL, createUserHistory } from "../../../../../customLogic/CustomLogic";


const addName = ({workspace}:{workspace:string}) => {

    const dispatch = useAppDispatch();

    const BoardsModal = useAppSelector(getBoardModal);
    const inputRef = useRef<HTMLInputElement>(null);

    const [boardsName, setBoardName] = useState<string>('');

    const appContext = useContext(AppContext);
    const {newAddBoard, mobileAddNewWorkspace} = appContext!;

    const submitBoardName = () => {
      if(boardsName.trim().length > 16) {
        alert('Please make sure the board name is less than 16 characters. (Includes spaces)');
        return;
      }
      if(boardsName.trim() === '') {
        alert("Please enter a name");
        return;
      }
      dispatch(addBoards({boardName:boardsName.trim(),workspaceId:workspace}))
      .unwrap()
      .then((x) => {
        alert('New board successfully added!');
        if(x){
          dispatch(updateUserBoards(x.newBoard));
          dispatch(updateWorkspaceBoard(x.newBoard));
        }
        createUserHistory(x.newBoard);
        createBoardListCL(x.newBoard.b_id);
        dispatch(changeBoardModal(false));
        setBoardName('');
      })
    }

    // set 12 characters Limit 
    useEffect(()=> {
      if(inputRef.current && boardsName.trim().length > 16) {
        inputRef.current.style.color = "red";
      } else {
        if(inputRef.current) inputRef.current.style.color="black";
      }
    },[boardsName])

    useEffect(()=> {

      const checkClick = (e:MouseEvent | TouchEvent):void => {
        const element = e.target as Node;

        console.log('test');

        if(!newAddBoard.current) window.removeEventListener('click', checkClick, true);

        if(!newAddBoard.current?.contains(element) &&
          !mobileAddNewWorkspace.current?.contains(element)){
          window.removeEventListener('click',checkClick,true);
          dispatch(changeBoardModal(false));
        }
      }

      window.addEventListener('click',checkClick,true);

      return () => {
        window.removeEventListener('click',checkClick,true);
      }
    },[])

  return (
    <motion.div 
    
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
        ease:'easeInOut',
        duration:.5
    }}

    ref={newAddBoard}

    className={`
      w-full
      h-full
      ${
        !BoardsModal? 
        ' hidden'
        :
        `flex
        flex-col`
       }
       justify-center
       items-center

       sLaptop:gap-[0.333rem]
       mLaptop:gap-[0.416rem]
       desktop:gap-[0.5rem]
       largeDesktop:gap-[0.625rem]
       4k:gap-[0.833rem]

       transition-all
       duration-300
      `}>
        <div className="
        flex flex-row
        justify-between
        px-[5%]
        w-full
        ">
            <h1 className="
            sLaptop:text-[0.875rem]
            mLaptop:text-[1.094rem]
            desktop:text-[1.313rem]
            largeDesktop:text-[1.641rem]
            4k:text-[2.187rem]

            font-medium
            text-PrimaryWhite
            leading-tight
            ">Enter Name:</h1>
            <img onClick={()=> dispatch(changeBoardModal(false))} className="
            sLaptop:w-[0.958rem]
            mLaptop:w-[1.198rem]
            desktop:w-[1.438rem]
            largeDesktop:w-[1.797rem]
            4k:w-[2.395rem]

            rotate-45
            hover:cursor-pointer
            " src={closeButton} alt="Close Button" />
        </div>
        <form 
        onSubmit={(e:FormEvent)=>{
          e.preventDefault();
          submitBoardName();
        }}
        className="
        w-full
        flex flex-col
        px-[8.6%]

        sLaptop:gap-[0.499rem]
        mLaptop:gap-[0.624rem]
        desktop:gap-[0.75rem]
        largeDesktop:gap-[0.937rem]
        4k:gap-[1.249rem]

        ">
            <input 
            value={boardsName}

            ref={inputRef}

            onChange={(e)=> setBoardName(e.target.value)}
            
            className="
             w-full

             sLaptop:rounded-[0.216rem]
             mLaptop:rounded-[0.270rem]
             desktop:rounded-[0.324rem]
             largeDesktop:rounded-[0.406rem]
             4k:rounded-[0.541rem]

             sLaptop:text-[0.799rem]
             mLaptop:text-[0.999rem]
             desktop:text-[1.2rem]
             largeDesktop:text-[1.5rem]
             4k:text-[1.999rem]

             sLaptop:px-[0.799rem]
             mLaptop:px-[0.333rem]
             desktop:px-[0.4rem]
             largeDesktop:px-[.5rem]
             4k:px-[0.666rem]

             font-medium

             focus:outline-none

            " type="text" />
            <div className="
            w-full
            text-center
            ">
                <button 
                
                type="submit"
                className="
                text-white
                site-borders

                sLaptop:px-[1.208rem]
                mLaptop:px-[1.510rem]
                desktop:px-[1.813rem]
                largeDesktop:px-[2.266rem]
                4k:px-[3.021rem]

                sLaptop:text-[0.773rem]
                mLaptop:text-[0.966rem]
                desktop:text-[1.16rem]
                largeDesktop:text-[1.45rem]
                4k:text-[1.933rem]

                font-medium

                sLaptop:rounded-[0.216rem]
                mLaptop:rounded-[0.270rem]
                desktop:rounded-[0.324rem]
                largeDesktop:rounded-[0.406rem]
                4k:rounded-[0.541rem]

                focus:outline-none
                ">Create</button>
            </div>
        </form>
    </motion.div>
  )
}

export default addName
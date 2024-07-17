import { motion } from "framer-motion"
import { memo, useContext, useLayoutEffect, useRef } from "react";
import checkMark from '/assets/Check_MarkIcon.svg';
import cancelIcon from '/assets/x_Icon.svg';
import { AppContext } from "../../../../../appRefContext/appRefContext";

const InputTaskName = memo((
  {
    // @ts-ignore
    openTaskName, 
    setOpenTaskName
  }
  :
  {
    openTaskName:boolean,
    setOpenTaskName:React.Dispatch<React.SetStateAction<boolean>>
  }) => {

    const appContext = useContext(AppContext);
    const {mobileAddNewWorkspace,addListTask,addListTaskSubmit} = appContext!;

    const addNewListNameRef = useRef<HTMLInputElement>(null);

    useLayoutEffect(()=>{
      const checkClick = (e:MouseEvent | TouchEvent) => {
        const element = e.target as Node;

        if(!addNewListNameRef.current) setOpenTaskName(false);

        if(!addNewListNameRef.current?.contains(element) && !mobileAddNewWorkspace.current?.contains(element)) {
          setOpenTaskName(false);
        }

        if(addListTask.current?.contains(element) || addListTaskSubmit.current?.contains(element))  setOpenTaskName(false);

      }
      window.addEventListener('click',checkClick,true);
      return ()=>{
        window.removeEventListener('click',checkClick,true);
      }
    },[])

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
        ease:'easeInOut',
        duration:.5
    }}
    ref={addNewListNameRef}
    className="
    w-full
    h-full

    hidden

    sLaptop:flex
    flex-row
    items-center

    px-[2.5%]

    "
    >
        <form 
        className="
        w-full
        h-full

        flex
        flex-row

        justify-between
        items-center
        grow-0

        sLaptop:gap-[0.533rem]
        mLaptop:gap-[0.666rem]
        desktop:gap-[.8rem]
        largeDesktop:gap-[1rem]
        "
        onSubmit={(e)=>{
            e.preventDefault();
            alert("Currently Working on this feature!");
            setOpenTaskName(false);
        }}>
            <input className="
            bg-PrimaryWhite
        
            box-border

            sLaptop:text-[0.916rem]
            mLaptop:text-[1.145rem]
            desktop:text-[1.375rem]
            largeDesktop:text-[1.719rem]

            font-medium

            px-[2.5%]

            min-w-0

            flex-shrink

            sLaptop:rounded-[0.166rem]
            mLaptop:rounded-[0.208rem]
            desktop:rounded-[.25rem]
            largeDesktop:rounded-[0.312rem]

            sLaptop:py-[0.066rem]
            mLaptop:py-[0.083rem]
            desktop:py-[0.1rem]
            largeDesktop:py-[.125rem]
            " 
            type="text" 
            onChange={()=>{

            }}
            />

            <div className="
            flex
            flex-row

            grow-0
            shrink-0

            sLaptop:gap-[0.533rem]
            mLaptop:gap-[0.666rem]
            desktop:gap-[.8rem]
            largeDesktop:gap-[1rem]
            ">
                <img className="
                sLaptop:h-[1.145rem]
                mLaptop:h-[1.432rem]
                desktop:h-[1.719rem]
                largeDesktop:h-[2.148rem]

                opacity-75
                hover:opacity-100

                cursor-pointer
                " 
                onClick={()=>setOpenTaskName(false)}
                src={cancelIcon} alt="Cancel" />
                <input className="
                sLaptop:h-[1.145rem]
                mLaptop:h-[1.432rem]
                desktop:h-[1.719rem]
                largeDesktop:h-[2.148rem]

                opacity-75
                hover:opacity-100
            
                cursor-pointer
                " src={checkMark}
                type="image" alt="Approve List Name" />
            </div>
            
        </form>
    </motion.div>
  )
})

export default InputTaskName
import { useContext, useLayoutEffect } from "react"
import { AppContext } from "../../../appRefContext"
import { useAppDispatch } from "../../../../reduxStore/hook";
import { setOpenModal } from "../../../../reduxStore/modal/modalSlice";
import { motion } from "framer-motion";



const BoardPageFilterBody = () => {

    const dispatch = useAppDispatch();

    const appContext = useContext(AppContext);
    const {filterBodyRef, filterRefHead2} = appContext!;

    useLayoutEffect(()=> {
        const checkClick = (e: MouseEvent | TouchEvent) => {
            const element = e.target as Node;

            if(filterBodyRef.current && !filterBodyRef.current.contains(element) &&
            filterRefHead2 && !filterRefHead2.current?.contains(element) ||
            !filterBodyRef.current
            ) dispatch(setOpenModal(false));

        }
        window.addEventListener('click',checkClick,true);
        return ()=> {
            window.removeEventListener('click',checkClick,true);
        }
    },[])

  return (
    <motion.div 
    initial={{ 
      y:'-15%',
      opacity: 0 
    }}
    animate={{ 
      y:0,
      opacity: 1 
    }}
    exit={{ 
      y:'-15%',
      opacity: 0 
    }}
    transition={{
      duration:.3
    }}
    ref={filterBodyRef}
    className="
     absolute
     top-[160%]
     left-0

     hidden
     sLaptop:block
     w-[300px]
     h-[300px] 

     bg-PrimaryWhite

     sLaptop:rounded-[0.381rem]
     mLaptop:rounded-[0.476rem]
     desktop:rounded-[0.572rem]
     largeDesktop:rounded-[0.715rem]
    ">

    </motion.div>
  )
}

export default BoardPageFilterBody
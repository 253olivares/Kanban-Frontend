import { memo, useContext, useLayoutEffect } from "react"
import { AppContext } from "../../../appRefContext"
import { useAppDispatch } from "../../../../reduxStore/hook";
import { setOpenModal } from "../../../../reduxStore/modal/modalSlice";
import { motion } from "framer-motion";



const BoardPageFilterBody = () => {

    const dispatch = useAppDispatch();

    const appContext = useContext(AppContext);
    const {filterBodyRef, filterRefHead2, filterModalRef, closeFilterModal} = appContext!;

    useLayoutEffect(()=> {
        const checkClick = (e: MouseEvent | TouchEvent) => {
            const element = e.target as Node;

            if(filterBodyRef.current && !filterBodyRef.current.contains(element) &&
            filterRefHead2 && !filterRefHead2.current?.contains(element) ||
            !filterBodyRef.current
            ) {
              if(!filterModalRef.current?.contains(element) || closeFilterModal.current?.contains(element))dispatch(setOpenModal(false));
            }
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
      ease: "easeInOut",
      duration:.3
    }}
    ref={filterBodyRef}
    className="
     absolute
     top-[160%]
     left-0

     hidden
     sLaptop:block
     
     sLaptop:w-[159.999px]
     sLaptop:h-[133.333px]
     mLaptop:w-[199.999px]
     mLaptop:h-[166.666px]
     desktop:w-[240px]
     desktop:h-[200px]
     largeDesktop:w-[300px]
     largeDesktop:h-[250px]
     
     dropDownShadow

     bg-PrimaryWhite

     sLaptop:rounded-[0.381rem]
     mLaptop:rounded-[0.476rem]
     desktop:rounded-[0.572rem]
     largeDesktop:rounded-[0.715rem]
    ">
      <ArrowHead />
    </motion.div>
  )
}

const ArrowHead = memo(()=> {
  return <div className="
  absolute

  bg-PrimaryWhite

  block

  sLaptop:w-[0.833rem]
  mLaptop:w-[1.041rem]
  desktop:w-[1.250rem]
  largeDesktop:w-[1.563rem]
  sLaptop:h-[0.833rem]
  mLaptop:h-[1.041rem]
  desktop:h-[1.250rem]
  largeDesktop:h-[1.563rem]
  rotate-45
 
  sLaptop:top-[calc(-0.833rem/2)]
  mLaptop:top-[calc(-1.041rem/2)]
  desktop:top-[calc(-1.250rem/2)]
  largeDesktop:top-[calc(-1.563rem/2)]

  left-[19.5%]
  " />
})

export default BoardPageFilterBody
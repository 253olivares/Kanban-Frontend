import { memo, useContext, useLayoutEffect } from "react"
import { AppContext } from "../../../appRefContext"
import { useAppDispatch, useAppSelector } from "../../../../reduxStore/hook";
import { setOpenModal } from "../../../../reduxStore/modal/modalSlice";
import { motion } from "framer-motion";
import { getFilters } from "../../../../reduxStore/tasks/tasksSlice";
import FilterLabel from '../../../2_AccountLanding/components/taskFilter/label/Label'


const BoardPageFilterBody = () => {

    const dispatch = useAppDispatch();

    const appContext = useContext(AppContext);
    const {filterBodyRef, filterRefHead2, filterModalRef, closeFilterModal} = appContext!;


    const filter = useAppSelector(getFilters);

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
    className=" boardPageFilterBody ">

      <ArrowHead />

      {
        Object.entries(filter).map(([k,v],index)=> 
          <FilterLabel key={v+`${index}`} k={k} v={v} />
        )
      }

    </motion.div>
  )
}

const ArrowHead = memo(()=> {
  return <div className=" boardPageFilterBodyArrow " />
})

export default BoardPageFilterBody
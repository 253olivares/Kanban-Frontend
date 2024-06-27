import { useContext, useLayoutEffect } from "react"
import { AppContext } from "../../../appRefContext"
import { useAppDispatch } from "../../../../reduxStore/hook";
import { setOpenMemberModal } from "../../../../reduxStore/modal/modalSlice";
import { motion } from "framer-motion";

const BoardPageMembersBody = ({members}: {members:string[][]}) => {

    const dispatch = useAppDispatch();

    const appContext =  useContext(AppContext);
    const {memberBodyRef, membersRefHead} = appContext!;

    console.log(members);

    useLayoutEffect(()=> {

       const memberBody = memberBodyRef.current?.clientWidth || 0;
       const memberHead = membersRefHead.current?.offsetWidth || 0;

        if (memberBodyRef.current) memberBodyRef.current.style.left = `${(memberHead-memberBody)/2}px`;

        const checkClick = (e:MouseEvent | TouchEvent) => {
            const element = e.target as Node;

            if(memberBodyRef.current && !memberBodyRef.current.contains(element) &&
            membersRefHead.current && !membersRefHead.current.contains(element) ||
            !memberBodyRef.current
            ) dispatch(setOpenMemberModal(false));
        }
        window.addEventListener('click',checkClick,true);
        return () => {
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
    ref={memberBodyRef}
    className="
     absolute
     top-[160%]

     hidden
     sLaptop:block
     w-[300px]
     h-[300px]

     dropDownShadow

     bg-PrimaryWhite

     sLaptop:rounded-[0.381rem]
     mLaptop:rounded-[0.476rem]
     desktop:rounded-[0.572rem]
     largeDesktop:rounded-[0.715rem]
    ">

    </motion.div>
  )
}

export default BoardPageMembersBody
import { memo, useContext, useLayoutEffect } from "react"
import { AppContext } from "../../../appRefContext/appRefContext"
import { useAppDispatch } from "../../../../reduxStore/hook";
import { setOpenMemberModal } from "../../../../reduxStore/modal/modalSlice";
import { motion } from "framer-motion";
import MembersHolder from "./membersComponents/MembersHolder";

const BoardPageMembersBody = ({members}: {members:string[][]}) => {

    const dispatch = useAppDispatch();

    const appContext =  useContext(AppContext);
    const {memberBodyRef, membersRefHead,mobileMembersRef} = appContext!;

    useLayoutEffect(()=> {

       const memberBody = memberBodyRef.current?.clientWidth || 0;
       const memberHead = membersRefHead.current?.offsetWidth || 0;

        if (memberBodyRef.current) memberBodyRef.current.style.left = `${(memberHead-memberBody)/2}px`;

        const checkClick = (e:MouseEvent | TouchEvent) => {
            const element = e.target as Node;

            if(memberBodyRef.current && !memberBodyRef.current.contains(element) &&
            membersRefHead.current && !membersRefHead.current.contains(element) ||
            !memberBodyRef.current 
            ) {
              if(!mobileMembersRef.current?.contains(element))dispatch(setOpenMemberModal(false));
            } 
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
      ease: "easeInOut",
      duration:.3
    }}
    ref={memberBodyRef}
    className="
    boardMemberBody
    ">
      {/* arrow head  */}
      <ArrowHead />
      {
        members.map((x)=> 
          
          <MembersHolder key={x[0]} member={x} />
        )
      }
    </motion.div>
  )
}

const ArrowHead = memo(()=> {

  return <div className=" boardMembersBodyArrow "/>
})

export default BoardPageMembersBody
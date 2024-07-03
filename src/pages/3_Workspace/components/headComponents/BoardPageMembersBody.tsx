import { memo, useContext, useLayoutEffect } from "react"
import { AppContext } from "../../../appRefContext"
import { useAppDispatch } from "../../../../reduxStore/hook";
import { setOpenMemberModal } from "../../../../reduxStore/modal/modalSlice";
import { motion } from "framer-motion";

const BoardPageMembersBody = ({members}: {members:string[][]}) => {

    const dispatch = useAppDispatch();

    const appContext =  useContext(AppContext);
    const {memberBodyRef, membersRefHead,mobileMembersRef} = appContext!;

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
     absolute
     top-[160%]

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
      {/* arrow head  */}
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
  sLaptop:left-[calc(50%-(0.833rem/2))]
  mLaptop:left-[calc(50%-(1.041rem/2))]
  desktop:left-[calc(50%-(1.250rem/2))]
  largeDesktop:left-[calc(50%-(1.563rem/2))]

  "/>
})

export default BoardPageMembersBody
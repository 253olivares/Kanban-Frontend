import { selectBoardById } from "../../../../reduxStore/boards/boardsSlice"
import { useAppSelector } from "../../../../reduxStore/hook"
import { motion } from "framer-motion";
import backgroundMobile from '/assets/Rectangle_207.png';
import background from '/assets/Rectangle_207Desktop.png'
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const BoardItems = ({boardId, durat}:{boardId:string, durat:number}) => {
  const board  = useAppSelector(state => selectBoardById(state,boardId));

  const spanRef = useRef<HTMLParagraphElement>(null);
  const divRef = useRef<HTMLImageElement>(null);

  const navigate = useNavigate();

  if(!board) return;
  // baord css
  // need to come backa nd add more styling
  let boardCss = '';
  switch(board.background){
    case 0:
    boardCss = 'conic-gradient-noshade';
      break;  
    case 1:
    boardCss = 'site-borders';
      break;
    case 2:
    boardCss = '';
      break;
  }
  // console.log(boardCss);
  // console.log("Duration",durat);
  return (
    // boards
    <motion.div
    initial= {{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{
      duration: .5,
      delay:durat
    }}

    onClick={()=> navigate(`workspace/${board.b_id}`)}
    className={`
    
    w-[15.789rem]
    mobile:w-[21.051rem]
    sMobile:w-[33.684rem]
    mMobile:w-[40.421rem]
    sLaptop:w-[12.499rem]
    mLaptop:w-[15.624rem]
    desktop:w-[18.75rem]
    largeDesktop:w-[23.437rem]
    4k:w-[31.249rem]

    h-[6.578rem]
    mobile:h-[8.771rem]
    sMobile:h-[14.034rem]
    mMobile:h-[16.840rem]
    sLaptop:h-[5.208rem]
    mLaptop:h-[6.510rem]
    desktop:h-[7.813rem]
    largeDesktop:h-[9.766rem]
    4k:h-[13.021rem]

    block
    relative
    overflow-hidden
  
    shrink-0

    rounded-[0.366rem]
    mobile:rounded-[0.488rem]
    sMobile:rounded-[0.781rem]
    mMobile:rounded-[0.937rem]
    sLaptop:rounded-[0.333rem]
    mLaptop:rounded-[0.416rem]
    desktop:rounded-[0.5rem]
    largeDesktop:rounded-[0.625rem]
    4k:rounded-[0.833rem]

    ring-[1.875px]
    mobile:ring-[2.5px]
    sMobile:ring-[4px]
    mMobile:ring-[4.8px]
    sLaptop:ring-[1.999px]
    mLaptop:ring-[2.499px]
    desktop:ring-[3px]
    largeDesktop:ring-[3.75px]
    4k:ring-[4.999px]

    ring-[rgba(255,255,255,.25)]
    hover:ring-SelectorBlue
    hover:cursor-pointer

    transition-all
    duration-75

    ${boardCss}
    `}
    >
      {/* Board name */}
      <div
      className={`
      absolute
      top-0
      left-0

      w-full

      z-[2]
      `}>
        <p
        ref={spanRef}
        className="

        text-ellipsis
        overflow-hidden

        w-[63.5%]
        sLaptop:w-[62.5%]

        font-medium

        leading-[2.608rem]
        text-[0.823rem]
        mobile:leading-[3.478rem]
        mobile:text-[1.098rem]
        sMobile:leading-[5.564rem]
        sMobile:text-[1.757rem]
        mMobile:leading-[6.676rem]
        mMobile:text-[2.109rem]
        sLaptop:leading-[2.083rem]
        sLaptop:text-[0.693rem]
        mLaptop:leading-[2.604rem]
        mLaptop:text-[0.866rem]
        desktop:leading-[3.125rem]
        desktop:text-[1.04rem]
        largeDesktop:leading-[3.906rem]
        largeDesktop:text-[1.3rem]
        4k:leading-[5.208rem]
        4k:text-[1.733rem]

        pl-[0.457rem]
        mobile:pl-[0.610rem]
        sMobile:pl-[0.976rem]
        mMobile:pl-[1.172rem]
        sLaptop:pl-[0.416rem]
        mLaptop:pl-[0.520rem]
        desktop:pl-[0.625rem]
        largeDesktop:pl-[0.781rem]

        text-PrimaryWhite
        relative
        z-[3]
        "
        >{board.name}</p>
        <img 
        ref={divRef}
        className="
        w-full
        absolute  
        top-0
        left-0
        hidden
        sLaptop:block
        z-[2]
        " src={background} alt="background" />
        <img 
        ref={divRef}
        className="  
        w-full
        absolute
        top-0
        left-0
        blocks
        sLaptop:hidden
        z-[2]
        " src={backgroundMobile} alt="" />
      </div>
      {/* transparent glass */}
      <div
      className={`
      
      boardGlass  

      absolute

      z-[1]

      w-full
      h-full
      block
      `}
       />
      {
        board.background === 2 ? 
        <>
        </> 
        : ''
      }
    </motion.div>
  )
}

export default BoardItems
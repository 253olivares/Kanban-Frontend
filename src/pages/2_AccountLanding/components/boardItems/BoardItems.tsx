import { selectBoardById } from "../../../../reduxStore/boards/boardsSlice"
import { useAppSelector } from "../../../../reduxStore/hook"
import { motion } from "framer-motion";

const BoardItems = ({boardId, durat}:{boardId:string, durat:number}) => {
  const board  = useAppSelector(state => selectBoardById(state,boardId));

  if(!board) return;

  // baord css
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

  console.log(boardCss);

  console.log("Duration",durat);

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

    onClick={()=> alert('Working on this feature to open board page!')}
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
      <div className="
      absolute
      top-0
      left-0

      text-PrimaryWhite

      font-medium
     

      ">
        {board.name}
      </div>
      {
        board.background === 2 ? 
        <>
        </> 
        : ''
      }
      {/* transparent glass */}
      <div
      className={`
      ${boardCss}

      absolute

      w-full
      h-full
      `}
       />
    </motion.div>
  )
}

export default BoardItems
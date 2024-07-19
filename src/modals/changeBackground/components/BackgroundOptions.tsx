import { memo } from 'react'
import scrollbarImage from '/assets/scrollBarTrack.png'
import { board, updateBoardBackground } from '../../../reduxStore/boards/boardsSlice'
import { useAppDispatch } from '../../../reduxStore/hook'

export const BackgroundOptions = ({
    board,
    selected,
    options,
    setBackground
}: {
    board:board,
    selected:number,
    options:Record<number,string>,
    setBackground:(n:number)=>void
}) => {
  return (
    <div 
    // @ts-ignores
    style={{"--img": `url(${scrollbarImage})`}}
    className="

     boardsScroll

     bg-SpaceBlueSelected

     sLaptop:rounded-[0.471rem] 
     mLaptop:rounded-[0.588rem]
     desktop:rounded-[0.706rem]
     largeDesktop:rounded-[0.883rem]

     sLaptop:px-[1.8rem]
     mLaptop:px-[2.25rem]
     desktop:px-[2.7rem]
     largeDesktop:px-[3.375rem]

     sLaptop:py-[1.066rem]
     mLaptop:py-[1.332rem]
     desktop:py-[1.6rem]
     largeDesktop:py-[2rem]

     sLaptop:max-h-[9.333rem]
     mLaptop:max-h-[11.666rem]
     desktop:max-h-[14rem]
     largeDesktop:max-h-[17.5rem]
     
    ">
      <div className="

      w-full
    
      grid

      grid-cols-3

      justify-items-center
      items-center

      sLaptop:gap-y-[1.066rem]
      mLaptop:gap-y-[1.332rem]
      desktop:gap-y-[1.6rem]
      largeDesktop:gap-y-[2rem]

      ">
        {
          Object.entries(options).map(([k,v],_)=> 
            <Option key={`${k}_${v}`} boardInfo={board} selected={selected === Number(k)} setBackground={setBackground} optionNumber={Number(k)} cssString={v} />
          )
        }
      </div>
    </div>  
  )
}

const Option = memo(({
  boardInfo,
  selected,
  setBackground,
  optionNumber,
  cssString
} : {
  boardInfo:board,
  selected:boolean,
  setBackground:(n:number)=>void,
  optionNumber:number,
  cssString:string
}) => {

  const dispatch = useAppDispatch();
  return <div
  className={`
    block

    sLaptop:w-[6.4rem]
    mLaptop:w-[8rem]
    desktop:w-[9.6rem]
    largeDesktop:w-[12rem]
    sLaptop:h-[4.266rem]
    mLaptop:h-[5.333rem]
    desktop:h-[6.4rem]
    largeDesktop:h-[8rem]

    sLaptop:rounded-[0.471rem] 
    mLaptop:rounded-[0.588rem]
    desktop:rounded-[0.706rem]
    largeDesktop:rounded-[0.883rem]

    sLaptop:ring-[1.999px]
    mLaptop:ring-[2.499px]
    desktop:ring-[3px]
    largeDesktop:ring-[3.75px]
    4k:ring-[4.999px]

    ${
      selected ? 'ring-SelectorBlue' : 'ring-[rgba(255,255,255,.25)]'
    }

    cursor-pointer
    ${cssString}
  `}  
  onClick={()=>{
    if(cssString.trim() === '') return; 
    dispatch(updateBoardBackground({board:boardInfo,newBackground:optionNumber}))
  }}
  onMouseOver={()=>{
    setBackground(optionNumber);
  }}
  >
  </div>
})

export default BackgroundOptions
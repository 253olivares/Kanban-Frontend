import { useLayoutEffect} from "react"
import { board, updateBoardBackground } from "../../../../../reduxStore/boards/boardsSlice"
import CheckBackgroundHolder from "./CheckBackgroundHolder"
import SelectBack from "./SelectBack"
import { useAppDispatch, useAppSelector } from "../../../../../reduxStore/hook"
import { getPreviewSelect, setPreview } from "../../../../../reduxStore/modal/modalSlice"


const CheckBackground = (
  {
    boardData
  } : {
    boardData:board
  }) => {
    const dispatch = useAppDispatch();

    // const [preview,setPreview] = useState<number>(boardData.background);

    const preview = useAppSelector(getPreviewSelect);

    const setPreviewSelect = (n:number) => {
      dispatch(setPreview(n));
    }

    useLayoutEffect(()=>{
      setPreviewSelect(boardData.background);
    },[])

    const backgrounds = {
      0: 'conic-gradient-noshade',
      1: 'site-borders',
      2: ''
    }
    
  return (
    <div className="
    w-[90%]

    bg-SpaceBlue

    flex
    flex-col

    justify-center

    text-PrimaryWhite

    overflow-hidden

    rounded-[0.610rem]
    mobile:rounded-[0.814rem]
    sMobile:rounded-[1.302rem]
    mMobile:rounded-[1.563rem] 

    px-[0.915rem]
    mobile:px-[1.220rem]
    sMobile:px-[1.953rem]
    mMobile:px-[2.344rem] 

    py-[1.196rem]
    mobile:py-[1.595rem]
    sMobile:py-[2.552rem]
    mMobile:py-[3.063rem]

    gap-[.937rem]
    mobile:gap-[1.25rem]
    sMobile:gap-[2rem]
    mMobile:gap-[2.4rem]

    ">
        <CheckBackgroundHolder />
        <Background preview ={preview} background = {boardData.background}  />
        <SelectBack preview={preview} setPreview={setPreviewSelect} backgrounds={backgrounds} />
        <SaveNewBackground board={boardData} previewSelect={preview} />
    </div>
  )
}

const SaveNewBackground = (
  {
    board,
    previewSelect
  } : {
    board:board,
    previewSelect:number
  }
) => {
  const dispatch = useAppDispatch();
  return <div 
  onClick={()=>{
    dispatch(updateBoardBackground({board:board,newBackground:previewSelect}))
  }}
  className="

  w-full

  rounded-[0.610rem]
  mobile:rounded-[0.814rem]
  sMobile:rounded-[1.302rem]
  mMobile:rounded-[1.563rem]

  text-white
  bg-SelectorBlue

  py-[.539rem]
  mobile:py-[.718rem]
  sMobile:py-[1.15rem]
  mMobile:py-[1.38rem]

  text-[1.406rem]
  mobile:text-[1.875rem]
  sMobile:text-[3rem]
  mMobile:text-[3.6rem]

  text-center

  cursor-pointer

  ">
    Save Change
  </div>
}

const Background = (
  {
    background,
    preview
  } : {
    background:number,
    preview:number
  }
) => {
  return <div className="
  w-full

  flex
  flex-row

  items-center
  justify-center

  gap-[10%]

  ">
    <CurrentSelect selectBack={background}/>
    <Preview preview={preview} />
  </div>
}

const CurrentSelect = (
  {
    selectBack
  } : {
    selectBack:number
  }
) => {
  return <div className="
  flex
  flex-col

  gap-[.468rem]
  mobile:gap-[.625rem]
  sMobile:gap-[1rem]
  mMobile:gap-[1.2rem]
  ">
    <h1 className="
    text-[.936rem]
    mobile:text-[1.25rem]
    sMobile:text-[2rem]
    mMobile:text-[2.4rem]
    ">Current:</h1>
    <div className={`

    block 

    rounded-[0.366rem]
    mobile:rounded-[0.488rem]
    sMobile:rounded-[0.781rem]
    mMobile:rounded-[0.937rem]

    ring-[1.875px]
    mobile:ring-[2.5px]
    sMobile:ring-[4px]
    mMobile:ring-[4.8px]

    ring-SelectorBlue

    w-[5.859rem]
    mobile:w-[7.812rem]
    sMobile:w-[12.5rem]
    mMobile:w-[15rem]

    h-[2.343rem]
    mobile:h-[3.125rem]
    sMobile:h-[5rem]
    mMobile:h-[6rem]

    ${
      selectBack === 0 && 'conic-gradient-noshade'
  }
  ${
      selectBack === 1 && 'site-borders'
  }
  ${
      selectBack === 2 && ''
  }
    `}>

    </div>
  </div>
}

const Preview = (
  {
    preview
  }:{
    preview:number
  }) => {
  return <div className="
  flex
  flex-col

  gap-[.468rem]
  mobile:gap-[.625rem]
  sMobile:gap-[1rem]
  mMobile:gap-[1.2rem]
  "> 
    <h1 className="
    text-[.936rem]
    mobile:text-[1.25rem]
    sMobile:text-[2rem]
    mMobile:text-[2.4rem]
    ">Preview:</h1>
    <div className={`

    block 

    rounded-[0.366rem]
    mobile:rounded-[0.488rem]
    sMobile:rounded-[0.781rem]
    mMobile:rounded-[0.937rem]

    ring-[1.875px]
    mobile:ring-[2.5px]
    sMobile:ring-[4px]
    mMobile:ring-[4.8px]

    ring-[rgba(255,255,255,.25)]

    w-[5.859rem]
    mobile:w-[7.812rem]
    sMobile:w-[12.5rem]
    mMobile:w-[15rem]
    
    h-[2.343rem]
    mobile:h-[3.125rem]
    sMobile:h-[5rem]
    mMobile:h-[6rem]

    ${
      preview === 0 && 'conic-gradient-noshade'
    }
    ${
      preview === 1 && 'site-borders'
    }
    ${
      preview === 2 && ''
    }
    `}>

    </div>
  </div>
}

export default CheckBackground
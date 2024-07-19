import { memo, useLayoutEffect } from "react"
import ChangeBackgroundHead from "./components/ChangeBackgroundHead"
import { board } from "../../reduxStore/boards/boardsSlice"
import Backgrounds from "./components/Backgrounds"
import BackgroundOptions from "./components/BackgroundOptions"
import { useAppDispatch, useAppSelector } from "../../reduxStore/hook"
import { getPreviewSelect, setPreview } from "../../reduxStore/modal/modalSlice"


const ChangeBackground = memo((
  {
    board
  } : {
    board:board
  }) => {
    const dispatch = useAppDispatch();

    // const [previewSelect, setPreviewSelect] = useState<number>(board.background);

    const previewSelect = useAppSelector(getPreviewSelect);

    const setPreviewSelect = (n:number) => {dispatch(setPreview(n))};

    useLayoutEffect(()=>{
      setPreviewSelect(board.background);
    },[])

    const backgroundOptions:Record<number,string> = {
      0: 'conic-gradient-noshade',
      1: 'site-borders',
      2: ''
    }

  return (
    <div className="

    hidden
    sLaptop:flex
    flex-col
    
    bg-SpaceBlue

    sLaptop:rounded-[0.471rem] 
    mLaptop:rounded-[0.588rem]
    desktop:rounded-[0.706rem]
    largeDesktop:rounded-[0.883rem]

    px-[5%]

    sLaptop:py-[1.066rem]
    mLaptop:py-[1.333rem]
    desktop:py-[1.6rem]
    largeDesktop:py-[2rem]

    text-PrimaryWhite

    sLaptop:w-[29.33rem]
    mLaptop:w-[36.66rem]
    desktop:w-[44rem]
    largeDesktop:w-[55rem]

    sLaptop:gap-[1.066rem]
    mLaptop:gap-[1.333rem]
    desktop:gap-[1.6rem]
    largeDesktop:gap-[2rem]

    ">
        <ChangeBackgroundHead />
        <Backgrounds previewSelect={previewSelect} boardBack = {board.background} />
        <BackgroundOptions board={board} selected={board.background} setBackground = {setPreviewSelect} options={backgroundOptions} />
    </div>
  )
})

export default ChangeBackground
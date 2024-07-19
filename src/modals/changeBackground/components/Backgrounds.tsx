import { memo } from "react"
import Preview from "./Preview"

const Backgrounds = memo((
    {
        boardBack,
        previewSelect
    }: {
        boardBack:number,
        previewSelect:number
    }) => {
  return (
    <div className="
    w-full

    flex
    flex-row

    items-center
    justify-center

    gap-[15%]

    ">

        <SelectBackground selectBack={boardBack} />
        <Preview previewSelect={previewSelect} />

    </div>
  )
})

const SelectBackground = memo((
    {
        selectBack
    } : {
        selectBack:number
    }
    ) => {
    return <div className="
    flex
    flex-col

    sLaptop:gap-[.533rem]
    mLaptop:gap-[.666rem]
    desktop:gap-[.8rem]
    largeDesktop:gap-[1rem]
    ">
        <h1 className="
            sLaptop:text-[1.066rem]
            mLaptop:text-[1.332rem]
            desktop:text-[1.6rem]
            largeDesktop:text-[2rem]
        ">Current select:</h1>
        <div className={`
        
        block

        sLaptop:w-[9.333rem]
        mLaptop:w-[11.666rem]
        desktop:w-[14rem]
        largeDesktop:w-[17.5rem]

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

        ring-SelectorBlue   

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
})

export default Backgrounds
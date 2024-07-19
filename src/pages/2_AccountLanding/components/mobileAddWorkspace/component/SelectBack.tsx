import { memo } from 'react';
import scrollbarImage from '/assets/scrollBarTrack.png'


const SelectBack = memo(({
    // @ts-ignore
    preview,
    setPreview,
    backgrounds
} : {
    preview:number,
    setPreview:(n:number)=>void,
    backgrounds:Record<number,string>
}) => {

    console.log(preview);
  return (
    <div 
    // @ts-ignore
    style={{"--img": `url(${scrollbarImage})`}}
    className="

      boardsScroll

      bg-SpaceBlueSelected

      w-full
    

      rounded-[.234rem]
      mobile:rounded-[.312rem]
      sMobile:rounded-[.5rem]
      mMobile:rounded-[.6rem]

      px-[1.640rem]
      mobile:px-[2.187rem]
      sMobile:px-[3.5rem]
      mMobile:px-[4.2rem]

      py-[1.171rem]
      mobile:py-[1.562rem]
      sMobile:py-[2.5rem]
      mMobile:py-[3rem]

      grid
      grid-cols-1

      gap-y-[1.171rem]
      mobile:gap-y-[1.562rem]
      sMobile:gap-y-[2.5rem]
      mMobile:gap-y-[3rem]

      justify-items-center
      items-center

      max-h-[10.546rem]
      mobile:max-h-[11.718rem]
      sMobile:max-h-[22.5rem]
      mMobile:max-h-[27rem]

    ">
      {
        Object.entries(backgrounds).map(([k,v],_)=>
        (<Option key={`Mobile_${k}_${v}`} select={preview === Number(k)} setBackground={setPreview} optionNumber={Number(k)} cssString={v} />))
      }
    </div>
  )
})

const Option = memo((
  {
    select,
    setBackground,
    optionNumber,
    cssString
  } : {
    select:boolean,
    setBackground:(n:number)=>void,
    optionNumber:number,
    cssString:string
  }
) => {
  console.log(`${optionNumber}`,select);
  return <div
  onClick={()=>{
    if(cssString.trim()==='') return;
    setBackground(optionNumber)
  }}
  className={`
  w-full
  
  h-[4.687rem]
  mobile:h-[6.25rem]
  sMobile:h-[10rem]
  mMobile:h-[12rem]

  rounded-[0.610rem]
  mobile:rounded-[0.814rem]
  sMobile:rounded-[1.302rem]
  mMobile:rounded-[1.563rem]

  ring-[1.875px]
  mobile:ring-[2.5px]
  sMobile:ring-[4px]
  mMobile:ring-[4.8px]

  cursor-pointer

  ${
    select ? 'ring-SelectorBlue' : 'ring-[rgba(255,255,255,.25)]'
  }

  ${cssString}
  `}
  >

  </div>
})

export default SelectBack
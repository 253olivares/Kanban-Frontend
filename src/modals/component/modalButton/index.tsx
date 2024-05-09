
const index = ({message,fn}:{message:string,fn: ()=>void}) => {
  return (
    <button
    tabIndex={-1}
    onClick={()=>fn()}
    className="
    site-borders
    text-PrimaryWhite

    min-w-[7.661rem]
    mobile:min-w-[10.214rem]
    sMobile:min-w-[16.343rem]
    mMobile:min-w-[19.612rem]

    text-[0.912rem]
    mobile:text-[1.216rem]
    sMobile:text-[1.946rem]
    mMobile:text-[2.335rem]

    font-bold

    p-[0.175rem]
    mobile:p-[0.234rem]
    sMobile:p-[0.374rem]
    mMobile:p-[.45rem]

    rounded-[0.585rem]
    mobile:rounded-[0.781rem]
    sMobile:rounded-[1.249rem]
    mMobile:rounded-[1.5rem]

    transition-[box-shadow] 
    ease-in-out
    duration-300
    hover:customShadow
    "
    >
      <span
      className="
      flex justify-center
      items-center

      w-full

      bg-SpaceBlue 
      active:bg-SpaceBlueSelected 

      h-[1.642rem]
      mobile:h-[2.189rem]
      sMobile:h-[3.502rem]
      mMobile:h-[4.203rem]

      rounded-[0.417rem]
      mobile:rounded-[0.556rem]
      sMobile:rounded-[0.889rem]
      mMobile:rounded-[1.068rem]
      "
      >
        {message}
      </span>
    </button>
  )
}

export default index
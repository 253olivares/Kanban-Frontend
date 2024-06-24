import { motion } from "framer-motion"
import { memo } from "react"

const workspaceModal = memo(({
    label,
    placeholder,
    valueHolder,
    setHolder,
    checkInputHolder,
    closeModal

}:{
    label:string,
    placeholder:string,
    valueHolder:string,
    setHolder:(e:React.ChangeEvent<HTMLInputElement>)=> void,
    checkInputHolder:()=>void,
    closeModal:()=>void

}) => {

  return (
    <motion.div
    initial={{
        y:25
    }}
    animate={{
        y:0
    }}
    exit={{
        y:25
    }}
    transition={{
        duration:.3
      }}

    className="

    bg-SpaceBlue

    flex
    flex-col

    w-[16.699rem]
    mobile:w-[22.265rem]
    sMobile:w-[35.625rem]
    mMobile:w-[42.75rem]
    
    px-[0.854rem]
    mobile:px-[1.139rem]
    sMobile:px-[1.823rem]
    mMobile:px-[2.188rem]

    rounded-[0.390rem]
    mobile:rounded-[0.520rem]
    sMobile:rounded-[0.833rem]
    mMobile:rounded-[0.999rem]

    "
    >
        <h1
         className="
         text-[0.854rem]
         mobile:text-[1.139rem]
         sMobile:text-[1.823rem]
         mMobile:text-[2.187rem]

         text-white
         font-medium
         
         py-[0.732rem]
         mobile:py-[0.976rem]
         sMobile:py-[1.563rem]
         mMobile:py-[1.875rem]

         "
        >{label}</h1>
        <input 
        value={valueHolder}
        onChange={(e)=>setHolder(e)}
        placeholder={placeholder}
        className="
        w-full

        text-[0.854rem]
        mobile:text-[1.139rem]
        sMobile:text-[1.823rem]
        mMobile:text-[2.187rem]
        
        bg-SpaceBlueSelected
        
        px-[0.468rem]
        mobile:px-[0.625rem]
        sMobile:px-[1rem]
        mMobile:px-[1.2rem]

        py-[0.468rem]
        mobile:py-[0.625rem]
        sMobile:py-[1rem]
        mMobile:py-[1.2rem]

        rounded-[0.244rem]
        mobile:rounded-[0.325rem]
        sMobile:rounded-[0.521rem]
        mMobile:rounded-[0.625rem]

        focus:outline-none
        focus:ring
        focus:ring-SelectorBlue

        text-white

        " type="text" />
        <div className="
        py-[0.732rem]
        mobile:py-[0.976rem]
        sMobile:py-[1.563rem]
        mMobile:py-[1.875rem]
        
        w-full

        flex
        flex-row
        justify-between
        ">
            <button className="
            font-bold
            bg-PrimaryWhite

            text-[0.703rem]
            mobile:text-[0.937rem]
            sMobile:text-[1.5rem]
            mMobile:text-[1.8rem]

            px-[1.142rem]
            mobile:px-[1.523rem]
            sMobile:px-[2.438rem]
            mMobile:px-[2.925rem]

            py-[0.292rem]
            mobile:py-[0.390rem]
            sMobile:py-[0.625rem]
            mMobile:py-[0.75rem]

            rounded-[0.175rem]
            mobile:rounded-[0.233rem]
            sMobile:rounded-[0.374rem]
            mMobile:rounded-[0.448rem]

            opacity-75

            " 
            onClick={()=>closeModal()} >Cancel</button>

            <button disabled={valueHolder.trim()===''} className="
            
            font-bold

            text-[0.703rem]
            mobile:text-[0.937rem]
            sMobile:text-[1.5rem]
            mMobile:text-[1.8rem]

            px-[1.142rem]
            mobile:px-[1.523rem]
            sMobile:px-[2.438rem]
            mMobile:px-[2.925rem]

            py-[0.292rem]
            mobile:py-[0.390rem]
            sMobile:py-[0.625rem]
            mMobile:py-[0.75rem]

            rounded-[0.175rem]
            mobile:rounded-[0.233rem]
            sMobile:rounded-[0.374rem]
            mMobile:rounded-[0.448rem]

            disabled:opacity-25
            disabled:bg-PrimaryWhite
            enabled:text-PrimaryWhite
     
            bg-SelectorBlue

            " 
            onClick={()=> checkInputHolder()}
            >Save</button>
        </div>
    </motion.div>
  )
})

export default workspaceModal
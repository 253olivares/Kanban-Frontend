import { memo } from "react"
import { motion } from "framer-motion";

const Delete = memo((
    {
        warning,
        deleteName,
        deleteFn,
        type
    }:
    {
        warning:string,
        deleteName:string,
        deleteFn:()=> void,
        type:string 
    }
) => {

    if(warning === null || deleteName === null || deleteFn === null || type === null) return 
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
    deleteModalHolder
    ">
        <MainWarning warningMessage={warning} />
        <div className="
        flex
        flex-col

        sLaptop:gap-[0.533rem]
        mLaptop:gap-[0.666rem]
        desktop:gap-[.8rem]
        largeDesktop:gap-[1rem]
        ">
            <ConfirmBoard deleteName={deleteName} />
            <DeleteButton deleteFn={deleteFn} type={type}/>
        </div>
    </motion.div>
  )
})

const MainWarning = memo(({warningMessage}:{warningMessage:string}) => {
    return <h1 className="
    deleteModalMainWarning
    ">
        {warningMessage}
    </h1>
})

const ConfirmBoard = memo(({deleteName}:{deleteName:string}) => {
    return <span className="
    deleteModalConfirmation
    ">
        Yes delete "<span className=" opacity-50 ">{deleteName}</span>"
    </span>
})

const DeleteButton = memo(({deleteFn,type}:{deleteFn:()=> void, type:string}) => {
    return <button
    className="deleteModalButton"
    onClick={()=> deleteFn()}
    >  
        Delete {type}
    </button>
})

export default Delete;
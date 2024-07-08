import { memo } from "react"
import { motion } from "framer-motion";

const Delete = memo((
    {
        warning,
        deleteName,
        deleteFn,
        type,
        action,
        action2
    }:
    {
        warning:string,
        deleteName:string,
        deleteFn:()=> void,
        type:string,
        action:string,
        action2:string
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
            <ConfirmBoard deleteName={deleteName} action2={action2} />
            <DeleteButton deleteFn={deleteFn} type={type} action={action}/>
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

const ConfirmBoard = memo(({deleteName,action2}:{deleteName:string,action2:string}) => {
    return <span className="
    deleteModalConfirmation
    ">
        Yes {action2} "<span className=" opacity-50 ">{deleteName}</span>"
    </span>
})

const DeleteButton = memo(({deleteFn,type,action}:{deleteFn:()=> void, type:string,action:string}) => {
    return <button
    className="deleteModalButton"
    onClick={()=> deleteFn()}
    >  
        {action} {type}
    </button>
})

export default Delete;
import { forwardRef } from "react"
import { Fragment } from "react/jsx-runtime"

const index = forwardRef<HTMLInputElement|null,{className:string, id:string, type:string, label:string, value:string, func: (e:React.ChangeEvent<HTMLInputElement>)=> void}>((
    {className,  id, type, label,value, func} , ref
    ) => {

  return (
    <Fragment>
        <label htmlFor={id}>{label}:</label>
        <input ref={ref} onChange={(e)=> func(e)} value={value} className={className} id={id} type={type} required />
    </Fragment>
  )
})

export default index
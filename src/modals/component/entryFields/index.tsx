import { forwardRef,memo } from "react"
import { Fragment } from "react/jsx-runtime"

const index = memo(forwardRef<HTMLInputElement|null,{ id:string, type:string, label:string, value:string, func: (e:React.ChangeEvent<HTMLInputElement>)=> void}>((
    { id, type, label,value, func} , ref
    ) => {

  return (
    <Fragment>
        <label className="labelcssAdjusted" htmlFor={id}>{label}:</label>
        <input ref={ref} onChange={(e)=> func(e)} value={value} className='modalInputs' id={id} type={type} />
    </Fragment>
  )
}))

export default index
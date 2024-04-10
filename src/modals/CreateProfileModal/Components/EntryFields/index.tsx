import React from "react"
const index = React.memo((
    {className,  id, type, label,value, func} :
    {className:string, id:string, type:string, label:string, value:string, func: (e:React.ChangeEvent<HTMLInputElement>)=> void}
    ) => {
  return (
    <React.Fragment>
        <label htmlFor={id}>{label}:</label>
        <input onChange={(e)=> func(e)} value={value} className={className} id={id} type={type} required />
    </React.Fragment>
  )
})

export default index
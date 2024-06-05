import { useEffect } from "react"

const index = () => {

  // import a ref so we can track if the user clicks inside and what is clicked

  // this will create a listener which will watch to see if user clicks outside our modal
  // if they do close our modal

  // otherwise keep it open
  useEffect(()=>{

  },[])

  return (
    // this will be our state for added new workspaces
    <div className={`
     absolute
     z-[5]
     min-h-[100px]
     min-w-[100px]
     left-[100%]
     bg-black
    `}>index</div>
  )
}

export default index
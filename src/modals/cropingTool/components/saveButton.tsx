
const saveButton = ({fn}:{fn:()=>void}) => {
  return (
    <button
    onClick={fn}

   className="
    
    bg-white
    sLaptop:opacity-50
    sLaptop:hover:opacity-100
    sLaptop:hover:bg-SelectorBlue
    sLaptop:hover:text-white
  
    croppingToolButton
   "
    >
        Save
    </button>
  )
}

export default saveButton
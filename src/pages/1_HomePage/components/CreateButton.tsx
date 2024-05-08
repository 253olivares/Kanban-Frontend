
const CreateButton = ({fn}:{fn: ()=>void}) => {
  return (
    <button
    tabIndex={-1}
    onClick={()=>fn()}
    className=""
    >
        <span
        className=""
        >
            Create Account
        </span>
    </button>
  )
}

export default CreateButton
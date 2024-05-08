

const LoginButton = ({fn}:{fn: ()=>void}) => {
  return (
    <button
    tabIndex={-1}
    onClick={()=>fn()}
    className=""
    >
        <span
        className=""
        >
            Login
        </span>
    </button>
  )
}

export default LoginButton
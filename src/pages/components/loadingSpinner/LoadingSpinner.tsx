import logo from '/assets/Logo_Export.svg'

const Spinning = ({clsName}:{clsName:string}) => {
  return <div className={`
  w-[3rem] 
  h-[3rem] 
  bg-black 
  opacity-50 
  block 
  rounded-full 
  ${clsName}
  `} />

}

const LoadingSpinner = () => {
    // animate-[spin_8s_linear_infinite] 

    const animationsDelays = ['animationNone','animationDelay1s','animationDelay2s','animationDelay3s']

  return (
    <main className='w-screen h-screen bg-PrimaryWhite relative flex flex-col gap-14 justify-center items-center scale-75 sLaptop:scale-100'>
        <img className='w-[8rem]' src={logo} alt="Logo" />
        <div className='flex gap-4'>
            {
              animationsDelays.map((x,_)=> 
                <Spinning key={x} clsName={x} />
              )
            }
        </div>
    </main>
  )
}

export default LoadingSpinner;
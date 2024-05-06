import logo from '/assets/Logo_Export.svg'

const index = () => {
    // animate-[spin_8s_linear_infinite] 
  return (
    <main className='w-screen h-screen bg-PrimaryWhite relative flex flex-col gap-14 justify-center items-center scale-75 sLaptop:scale-100'>
        <img className='w-[8rem]' src={logo} alt="Logo" />
        <div className='flex gap-4'>
            <div className='w-[3rem] h-[3rem] bg-black opacity-50 block rounded-full animate-[reversebounce_1s_infinite] animationDelay3s' />
            <div className='w-[3rem] h-[3rem] bg-black opacity-50 block rounded-full animate-[reversebounce_1s_infinite] animationDelay2s' />
            <div className='w-[3rem] h-[3rem] bg-black opacity-50 block rounded-full animate-[reversebounce_1s_infinite] animationDelay1s' />
            <div className='w-[3rem] h-[3rem] bg-black opacity-50 block rounded-full animate-[reversebounce_1s_infinite]' />
        </div>
    </main>
  )
}

export default index
import { Link } from "react-router-dom"

const index = () => {
  return (
    <main className="relative w-screen h-screen bg-PrimaryWhite flex flex-col items-center justify-center overflow-hidden">
      <div className="conic-gradient block w-48 h-48 rounded-full absolute top-10 left-10" />
      <div className="conic-gradient block w-[20rem] h-[20rem] rounded-full absolute bottom-[-4rem] right-32" />
      <p className="text-7xl text-Slate-gray opacity-80 font-bold font-Ubuntu mb-6">404 PAGE</p>
      <p className=" text-gray-600 text-3xl font-medium mb-3">An error has occurred please return to the home page!</p>
      <Link to='/'> <span className=" font-bold text-4xl text-blue-300 hover:text-blue-600 underline">HOME</span></Link>
    </main>
  )
}

export default index
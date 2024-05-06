
import { Outlet } from 'react-router-dom'

const index = () => {

  // check to make sure a user exists and is logged in

  return (
      <main className='relative w-screen h-screen conic-gradient-noshade overflow-hidden'>
        <div>index Account Header stuff</div>
        <Outlet/>
      </main>
  )
}

export default index  
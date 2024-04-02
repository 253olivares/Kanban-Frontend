
import { Outlet } from 'react-router-dom'

const index = () => {
  return (
    <>
        <div>index Account Header stuff</div>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default index
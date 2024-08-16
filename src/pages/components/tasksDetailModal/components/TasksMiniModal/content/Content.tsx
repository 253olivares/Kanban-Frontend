import { useContext } from 'react'
import { AppContext } from '../../../../../appRefContext/appRefContext';

const Content = () => {

    const appContext = useContext(AppContext);
    const{taskMiniModal} = appContext!;

  return (
    <div
    ref={taskMiniModal}
    className='
      bg-SpaceBlue

      w-96

      h-52

      block

      rounded-xl

      relative
      z-[1]
    '
    >

    </div>
  )
}

export default Content
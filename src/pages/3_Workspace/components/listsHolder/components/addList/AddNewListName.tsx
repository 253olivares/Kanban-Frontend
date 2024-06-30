import {motion} from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../../../appRefContext';
import { useAppDispatch } from '../../../../../../reduxStore/hook';
import { changeListModalState } from '../../../../../../reduxStore/modal/modalSlice';
import checkMark from '/assets/Check_MarkIcon.svg';
import cancelIcon from '/assets/x_Icon.svg';

const AddNewListName = () => {

  const dispatch =  useAppDispatch();

  const appContext = useContext(AppContext);
  const {addNewListNameRef} = appContext!;

  const [inputName, setInputName] = useState<string>('');

  useEffect(()=>{
    const checkClick = (e:MouseEvent | TouchEvent) => {
      const element = e.target as Node;

      if(!addNewListNameRef.current) dispatch(changeListModalState(false));

      if(addNewListNameRef.current && !addNewListNameRef.current.contains(element)){
        dispatch(changeListModalState(false));
      }
    }
    window.addEventListener('click',checkClick,true);
    return ()=> {
      window.removeEventListener('click', checkClick,true)
    }
  },[])

  return (
    <motion.div
    ref={addNewListNameRef}
    className='
    w-full
    h-full

    flex
    flex-row
    justify-between
    items-center
    '
    >
        <form className='
        w-full
        flex
        flex-row
        ' onSubmit={(e)=>  {
          e.preventDefault()
          console.log('test')
          dispatch(changeListModalState(false))
        }}>
            <input className='
              flex-grow
            ' value={inputName} onChange={(e)=> setInputName(e.target.value)} type="text" />
            <div className='
            flex
            flex-row
            '>
                <img className='
                  sLaptop:h-[1.145rem]
                  mLaptop:h-[1.432rem]
                  desktop:h-[1.719rem]
                  largeDesktop:h-[2.148rem]

                  opacity-75

                  hover:cursor-pointer
                  hover:opacity-100
                ' onClick={()=> {
                  dispatch(changeListModalState(false))
                }} src={cancelIcon} alt="Cancel Name" />
                <input className='
                  sLaptop:h-[1.145rem]
                  mLaptop:h-[1.432rem]
                  desktop:h-[1.719rem]
                  largeDesktop:h-[2.148rem]

                  opacity-75
                  hover:opacity-100
                ' type="image" src={checkMark} alt="Approve Name" />
            </div>
        </form>
    </motion.div>
  )
}

export default AddNewListName
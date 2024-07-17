import {motion} from 'framer-motion';
import { memo, useContext, useLayoutEffect, useRef, useState } from 'react';
import { AppContext } from '../../../../../appRefContext/appRefContext';
import { useAppDispatch } from '../../../../../../reduxStore/hook';
import { changeListModalState } from '../../../../../../reduxStore/modal/modalSlice';
import checkMark from '/assets/Check_MarkIcon.svg';
import cancelIcon from '/assets/x_Icon.svg';
import { createListState } from '../../../../../../reduxStore/lists/listsSlice';
import { useParams } from 'react-router-dom';

const AddNewListName = memo(({listLength}:{listLength:number}) => {

  const dispatch =  useAppDispatch();

  const appContext = useContext(AppContext);
  const {addNewListNameRef, mobileAddNewWorkspace} = appContext!;

  const addListRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  const boardId = params?.workspaceId || "";

  const [inputName, setInputName] = useState<string>('');

  const createList = () => {
    if(inputName.trim().length === 0) {
      alert("Please make sure create a name for the list.");
      return;
    }
    if(inputName.trim().length >= 18) {
      alert("Please make sure your list name is less than 18 letters.");
      return
    }

    dispatch(createListState({listName:inputName, boardId:boardId, boardNumber:listLength}));

    dispatch(changeListModalState(false))
  }

  useLayoutEffect(()=>{
    if(inputName.trim().length >= 18){
      if (addListRef.current) addListRef.current.style.color = "red";
    } else  {   
      if(addListRef.current) addListRef.current.style.color = "black"
    }
  },[inputName])

  useLayoutEffect(()=>{
    const checkClick = (e:MouseEvent | TouchEvent) => {
      const element = e.target as Node;

      if(!addNewListNameRef.current) dispatch(changeListModalState(false));

      if(!addNewListNameRef.current?.contains(element) &&
      !mobileAddNewWorkspace.current?.contains(element)
      ){
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
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
        ease:'easeInOut',
        duration:.5
    }}
    ref={addNewListNameRef}
    className='
    w-full
    h-full

    flex
    flex-row

    justify-between
    items-center

    sLaptop:px-[0.624rem]
    mLaptop:px-[.780rem]
    desktop:px-[.937rem]
    largeDesktop:px-[1.171rem]

    sLaptop:py-[0.421rem]
    mLaptop:py-[0.527rem]
    desktop:py-[0.633rem]
    largeDesktop:py-[.791rem]
    '
    >
        <form className='
        w-full
        h-full

        flex
        flex-row

        justify-between
        items-center
        grow-0

        sLaptop:gap-[0.533rem]
        mLaptop:gap-[0.666rem]
        desktop:gap-[.8rem]
        largeDesktop:gap-[1rem]

        ' onSubmit={(e)=>  {
          e.preventDefault();
          createList();
        }}>
            <input 
            ref={addListRef}
            className='

              box-border

              sLaptop:text-[0.916rem]
              mLaptop:text-[1.145rem]
              desktop:text-[1.375rem]
              largeDesktop:text-[1.719rem]

              font-medium

              px-[2.5%]

              min-w-0

              flex-shrink

              focus:outline-none

              sLaptop:rounded-[0.166rem]
              mLaptop:rounded-[0.208rem]
              desktop:rounded-[.25rem]
              largeDesktop:rounded-[0.312rem]

              sLaptop:py-[0.066rem]
              mLaptop:py-[0.083rem]
              desktop:py-[0.1rem]
              largeDesktop:py-[.125rem]

            ' value={inputName} onChange={(e)=> setInputName(e.target.value)} type="text" />
            <div className='
            flex
            flex-row
            grow-0
            shrink-0

            sLaptop:gap-[0.533rem]
            mLaptop:gap-[0.666rem]
            desktop:gap-[.8rem]
            largeDesktop:gap-[1rem]
            '>
                <img className='
                  sLaptop:h-[1.145rem]
                  mLaptop:h-[1.432rem]
                  desktop:h-[1.719rem]
                  largeDesktop:h-[2.148rem]

                  w-auto

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

                  w-auto

                  opacity-75
                  hover:opacity-100
                ' type="image" src={checkMark} alt="Approve Name" />
            </div>
        </form>
    </motion.div>
  )
})

export default AddNewListName
import { AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../../../reduxStore/hook';

import { changeModal, getWorkSpaceModal } from '../../../../reduxStore/workspace/workspaceSlice';
import { memo, useContext } from 'react';

import addWorkspace from '/assets/Add_New_Workspace.svg';
import WorkspaceModal from '../addWorksapace';
import { AppContext } from '../../../appRefContext';
import { openAccountLadingModal } from '../../../../reduxStore/modal/modalSlice';
import WorkspaceItem from './components/workspaceItems';
import scrollbarImage from '/assets/scrollBarTrack.png';
import scrollbarImageX from '/assets/scrollBarTrackX.png'


const index = memo((
  {
    setWorkspace,
    workspaces,
    selectedWorkspace
  }
  :
  {
    setWorkspace:(string:string)=>void,
    workspaces:string[],
    selectedWorkspace:string
  }
  ) => {
    const dispatch = useAppDispatch();
    
    const openModal:boolean = useAppSelector(getWorkSpaceModal);

    const appContext = useContext(AppContext);
    const {openSpaceModal} = appContext!;

  return (
    <div className={`
    w-full

    flex
    flex-col

    sLaptop:grow

    py-[1.5%]

    ${
      selectedWorkspace == '' ? 
      'sLaptop:h-[calc(100%-35%)]'
      :
      'sLaptop:h-[calc(100%-61.5%)]'
    }
    z-0
    `}>
      {/* Workspaces */}
      <div className="
      w-full

      hidden
      sLaptop:flex

      flex-row

      justify-between
      items-center

      relative

      sLaptop:px-[7.5%]

      sLaptop:pt-[1.124rem]
      mLaptop:pt-[1.405rem]
      desktop:pt-[1.687rem]
      largeDesktop:pt-[2.109rem]
      4k:pt-[2.811rem]
      ">
        <h1 className="
        sLaptop:text-[1.25rem]
        mLaptop:text-[1.562rem]
        desktop:text-[1.875rem]
        largeDesktop:text-[2.344rem]
        4k:text-[3.125rem]

        leading-snug

        font-medium

        text-white
        "
        >Workspaces</h1>
        <div 
        ref={openSpaceModal}
        onClick={()=>{
          dispatch(openAccountLadingModal());
          dispatch(changeModal(!openModal));
        }}
        className='
        sLaptop:hover:bg-SpaceBlueSelected
        
        sLaptop:p-[0.266rem]
        mLaptop:p-[0.333rem]
        desktop:p-[0.4rem]
        largeDesktop:p-[.5rem]
        4k:p-[0.666rem]

        sLaptop:rounded-[0.133rem]
        mLaptop:rounded-[0.166rem]
        desktop:rounded-[0.2rem]
        largeDesktop:rounded-[.25rem]
        4k:rounded-[0.333rem]
        
        sLaptop:hover:cursor-pointer

        transition-[background-color]
        duration-500
        '>
          <img 
          className='
          sLaptop:w-[0.933rem]
          mLaptop:w-[1.166rem]
          desktop:w-[1.4rem]
          largeDesktop:w-[1.75rem]
          4k:w-[2.333rem]
          ' 
          src={addWorkspace} 
          alt="Add Workspace" />
        </div>
        <AnimatePresence>
          {openModal ? <WorkspaceModal/>  : ''}
        </AnimatePresence>
      </div>


      <div 
      // @ts-ignore
      style={{"--img": `url(${scrollbarImage})`,
              "--img2": `url(${scrollbarImageX})`}}
      className="
      w-full
      
      flex
      flex-row
      sLaptop:flex-col
    
      sLaptop:flex-grow

      boardsScrollx 
      sLaptop:boardsScroll

      pt-[0.854rem]
      pb-[0.659rem]
      mobile:pt-[1.139rem]
      mobile:pb-[0.879rem]
      sMobile:pt-[1.823rem]
      sMobile:pb-[1.406rem]
      mMobile:pt-[2.188rem]
      mMobile:pb-[1.688rem]
      sLaptop:pt-[0.533rem]
      sLaptop:pb-[0.533rem]
      mLaptop:pt-[0.666rem]
      desktop:pt-[0.8rem]
      largeDesktop:pt-[1rem]
      4k:pt-[1.333rem]

      px-[4.55%]
      sLaptop:px-[7.5%]

      gap-[0.415rem]
      mobile:gap-[0.553rem]
      sMobile:gap-[0.885rem]
      mMobile:gap-[1.063rem]
      sLaptop:gap-[0.333rem]
      mLaptop:gap-[0.416rem]
      desktop:gap-[0.5rem]
      largeDesktop:gap-[0.625rem]
      4k:gap-[0.833rem]

      ">
        <div 
        className=' 
        flex
        sLaptop:hidden
        justify-center
        items-center

        min-w-0

        w-auto
      
        shrink-0

        gap-[0.585rem]
        mobile:gap-[0.937rem]
        sMobile:gap-[1.5rem]
        mMobile:gap-[1.8rem]

        px-[1.025rem]
        mobile:px-[1.367rem]
        sMobile:px-[2.187rem]
        mMobile:px-[2.625rem]
        sLaptop:px-0
        
        py-[0.659rem]
        mobile:py-[0.879rem]
        sMobile:py-[1.406rem]
        mMobile:py-[1.688rem]
        sLaptop:py-0

        rounded-[0.244rem]
        mobile:rounded-[0.325rem]
        sMobile:rounded-[0.520rem]
        mMobile:rounded-[0.625rem]

        hover:bg-SpaceBlueSelected
        hover:cursor-pointer'

        onClick={()=>{
          dispatch(changeModal(!openModal));
        }}>
          <p className='
          text-PrimaryWhite
          text-[0.854rem]
          mobile:text-[1.139rem]
          sMobile:text-[1.823rem]
          mMobile:text-[2.188rem]
          leading-none

          text-nowrap

          font-medium
          '>Add Workspace</p>
          <img className='
          w-[0.683rem]
          mobile:w-[1.093rem]
          sMobile:w-[1.75rem]
          mMobile:w-[2.1rem]

          block
          ' src={addWorkspace} alt="Add Workspace" />
        </div>
        {
          workspaces.map((workspace,_)=> 
            <WorkspaceItem selectedWorkspace={selectedWorkspace} setWorkspacefn = {setWorkspace} workspaceId={workspace} key={workspace}/> 
          )
        }
      </div>
    </div>
  )
})

export default index
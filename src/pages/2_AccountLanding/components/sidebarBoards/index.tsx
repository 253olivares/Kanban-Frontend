import { memo } from "react";
import { useAppSelector } from "../../../../reduxStore/hook";
import { selectById } from "../../../../reduxStore/workspace/workspaceSlice";
import AddNewBoards from './components/addNewBoardHolder';

// sidebarBoards
const index = memo(({selectWorkspace}:{selectWorkspace: string}) => {

  const workspace = useAppSelector(state=>selectById(state,selectWorkspace))

  const getBoardsFromSelectWorkspace:string[] = workspace?.boards || [];

  console.log(getBoardsFromSelectWorkspace);

  return (
    <div className={`
    w-full
    flex
    flex-col

    grow
    sLaptop:grow-0

    sLaptop:gap-[0.333rem]
    mLaptop:gap-[0.416rem]
    desktop:gap-[0.5rem]
    largeDesktop:gap-[1.25rem]

    ${
      selectWorkspace === '' ? 
      'sLaptop:h-[35%]'
      :
      'sLaptop:h-[61.5%]'
    }
    transition-[height]
    duration-700

    `}>
      <div className="
      flex 
      flex-row
      justify-between

      px-[7.5%]

      sLaptop:pt-[0.958rem]
      mLaptop:pt-[1.198rem]
      desktop:pt-[1.438rem]
      largeDesktop:pt-[1.797rem]
      4k:pt-[2.395rem]

      ">
        <h1 className="
        hidden

        sLaptop:block
        sLaptop:text-[1.25rem]
        mLaptop:text-[1.562rem]
        desktop:text-[1.875rem]
        largeDesktop:text-[2.344rem]
        4k:text-[3.125rem]

        leading-snug

        font-medium

        text-white
        ">Boards</h1>
        {
          selectWorkspace === '' ? 
          '' :
          <p className="
          text-white
          hidden

          sLaptop:block
          sLaptop:text-[0.833rem]
          mLaptop:text-[1.041rem]
          desktop:text-[1.25rem]
          largeDesktop:text-[1.562rem]

          leading-normal

          self-end
          font-medium
          ">{workspace.name}</p>
        }
      </div>  

      <div className={`
      flex 
      flex-col 
      items-center

      justify-start

    
      p-[4.3%]

      grow
      `}>
        {
          // will display when no workspace is selected
          selectWorkspace === '' ?
          <p className="
    
          text-PrimaryWhite
          font-medium

          text-[0.820rem]
          mobile:text-[1.093rem]
          sMobile:text-[1.75rem]
          mMobile:text-[2.1rem]
          sLaptop:text-[0.799rem]
          mLaptop:text-[0.999rem]
          desktop:text-[1.2rem]
          largeDesktop:text-[1.5rem]
          4k:text-[1.999rem]

          text-center
          ">Please make sure to select a workspace or create a workspace to get started!</p>
          :
          <>
          {/* add workspace div */}
          <AddNewBoards key={`addBoard_${workspace.w_id}`} />
            {/* <AnimatePresence>
              <AddNewBoards key={`addBoard_${workspace.w_id}`} />
            </AnimatePresence> */}
          </>
        }
      </div>
    </div>
  )
})

export default index
import { memo } from "react";
import { useAppSelector } from "../../../../reduxStore/hook";
import { selectWorkspaceById } from "../../../../reduxStore/workspace/workspaceSlice";
import AddNewBoards from './components/addNewBoardHolder';


import BoardItem from '../boardItems/BoardItems'

// sidebarBoards
const index = memo(({selectWorkspace}:{selectWorkspace: string}) => {

  const workspace = useAppSelector(state=>selectWorkspaceById(state,selectWorkspace))

  // create a const to set all boards in our select workspace
  const getBoardsFromSelectWorkspace:string[] = workspace?.boards || [];

  return (
    <div className={`
    w-full
    
    flex
    flex-col

    grow
    sLaptop:grow-0

    overflow-hidden
    sLaptop:overflow-hidden

    sLaptop:gap-[0.333rem]
    mLaptop:gap-[0.416rem]
    desktop:gap-[0.5rem]
    largeDesktop:gap-[1.25rem]
    4k:gap-[1.666rem]

    ${
      selectWorkspace === '' ? 
      `
      sLaptop:h-[calc(35%-0.166rem)]
      mLaptop:h-[calc(35%-0.208rem)]
      desktop:h-[calc(35%-0.250rem)]
      largeDesktop:h-[calc(35%-0.313rem)]
      4k:h-[calc(35%-0.417rem)]
      `
      :
      `
      sLaptop:h-[calc(61.5%-0.166rem)]
      mLaptop:h-[calc(61.5%-0.208rem)]
      desktop:h-[calc(61.5%-0.250rem)]
      largeDesktop:h-[calc(61.5%-0.313rem)]
      4k:h-[calc(61.5%-0.417rem)]
      `
    }

    transition-[height]
    duration-700

    sLaptop:pb-[0.533rem]
    mLaptop:pb-[0.666rem]
    desktop:pb-[0.8rem]
    largeDesktop:pb-[1rem]

    `}>
      <div className="
      hidden
      sLaptop:flex 
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
          4k:text-[2.082rem]

          leading-normal

          text-ellipsis
          overflow-hidden

          self-end
          font-medium
          ">{workspace.name}</p>
        }
      </div>  

      <div className={`
      w-full

      flex 
      flex-col

      grow-0
      sLaptop:flex-grow

      overflow-y-auto

      items-center
      justify-start
    
      p-[4.3%]
      
      gap-[1.220]
      mobile:gap-[1.627rem]
      sMobile:gap-[3.125rem]
      mMobile:gap-[3.125rem]
      sLaptop:gap-[1.041rem]
      mLaptop:gap-[1.302rem]
      desktop:gap-[1.563rem]
      largeDesktop:gap-[1.953rem]

      py-[0.937rem]
      mobile:py-[1.25rem]
      sMobile:py-[2rem]
      mMobile:py-[2.4rem]
      sLaptop:py-[0.625rem]
      mLaptop:py-[0.781rem] 
      desktop:py-[0.938rem]
      largeDesktop:py-[1.172rem]
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
          sLaptop:text-[0.719rem]
          mLaptop:text-[0.899rem]
          desktop:text-[1.08rem]
          largeDesktop:text-[1.35rem]
          4k:text-[1.8rem]

          text-center
          ">Please make sure to select a workspace or create a workspace to get started!</p>
          :
          <>
          {
            [...getBoardsFromSelectWorkspace].reverse().map((x,index)=> 
              <BoardItem boardId={x} durat={(index+1)*.15} key={x} />
            )
          }
          {/* add workspace div */}
            <AddNewBoards workspace={workspace.w_id} durat={getBoardsFromSelectWorkspace.length!==0?(getBoardsFromSelectWorkspace.length+1)*.15: .15} key={`addBoard_${workspace.w_id}`} />
          </>
        }
      </div>
    </div>
  )
})

export default index
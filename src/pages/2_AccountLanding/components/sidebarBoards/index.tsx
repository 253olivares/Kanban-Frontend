import { memo } from "react";

// sidebarBoards
const index = memo(({selectWorkspace}:{selectWorkspace:null | string}) => {

  const getBoardsFromSelectWorkspace:unknown[] = [];

  return (
    <div className={`
    w-full
    flex
    flex-col

    grow
    sLaptop:grow-0
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

      ">
        <h1 className="
        hidden

        sLaptop:block
        sLaptop:text-[1.25rem]
        mLaptop:text-[1.562rem]
        desktop:text-[1.875rem]
        largeDesktop:text-[2.344rem]

        leading-snug

        font-medium

        text-white
        ">Boards</h1>
        { selectWorkspace === '' ?
          ''
          :
          <p>Workspace Name</p>}
      </div>

      <div className={`
      flex 
      flex-col 
      items-center

      ${getBoardsFromSelectWorkspace.length === 0 && 'justify-center'}

      p-[4.3%]

      grow
      `}>
        {
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

          text-center
          ">Please make sure to select a workspace or create a workspace to get started!</p>
          :
          <>
          </>
        }
      </div>
    </div>
  )
})

export default index
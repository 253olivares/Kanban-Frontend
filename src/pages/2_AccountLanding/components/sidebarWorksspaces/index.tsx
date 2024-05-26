import addWorkspace from '/assets/Add_New_Workspace.svg'

const index = (
  {
    setWorkspace,
    workspaces
  }
  :
  {
    setWorkspace:(string:string)=>void
    workspaces:unknown[]
  }
  ) => {
    console.log(setWorkspace);
    console.log(workspaces);
  return (
    <div className="
    w-full
    flex
    flex-col

    grow-0
    sLaptop:grow

    z-0
    ">
      <div className="
      w-full
      hidden
      sLaptop:flex
      flex-row
      justify-between
      items-center

      sLaptop:px-[7.5%]

      sLaptop:pt-[1.124rem]
      mLaptop:pt-[1.405rem]
      desktop:pt-[1.687rem]
      largeDesktop:pt-[2.109rem]
      ">
        <h1 className="
        sLaptop:text-[1.25rem]
        mLaptop:text-[1.562rem]
        desktop:text-[1.875rem]
        largeDesktop:text-[2.344rem]

        leading-snug

        font-medium

        text-white
        "
        >Workspaces</h1>
        <div className='
        sLaptop:hover:bg-SpaceBlueSelected
        
        sLaptop:p-[0.266rem]
        mLaptop:p-[0.333rem]
        desktop:p-[0.4rem]
        largeDesktop:p-[.5rem]

        sLaptop:rounded-[0.133rem]
        mLaptop:rounded-[0.166rem]
        desktop:rounded-[0.2rem]
        largeDesktop:rounded-[.25rem]
        
        sLaptop:hover:cursor-pointer

        transition-[background-color]
        duration-500
        '>
          <img className='
          sLaptop:w-[0.933rem]
          mLaptop:w-[1.166rem]
          desktop:w-[1.4rem]
          largeDesktop:w-[1.75rem]
          ' 
          src={addWorkspace} 
          alt="Add Workspace" />
        </div>
      </div>
      <div className="
      w-full
      flex
      flex-col
      pt-[0.712rem]
      pb-[0.549rem]
      mobile:pt-[0.949rem]
      mobile:pb-[0.732rem]
      sMobile:pt-[1.519rem]
      sMobile:pb-[1.171rem]
      mMobile:pt-[1.823rem]
      mMobile:pb-[1.406rem]
      sLaptop:pt-0
      sLaptop:pb-0
      ">
        <p className=' sLaptop:hidden text-PrimaryWhite'>test</p>
      </div>
    </div>
  )
}

export default index
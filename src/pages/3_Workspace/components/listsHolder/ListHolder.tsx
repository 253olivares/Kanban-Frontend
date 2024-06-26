import AddList from "./components/addList/AddList"


// Our holder for our div this is where we will be holding all our tasks
const ListHolder = () => {
  return (
    <div className="
    w-full
    h-full

    overflow-auto

    py-[0.976rem]
    mobile:py-[1.302rem]
    sMobile:py-[2.082rem]
    mMobile:py-[2.5rem]
    px-[5.5%]
    sLaptop:p-[1.249rem]
    mLaptop:p-[1.562rem]
    desktop:p-[1.875rem]
    largeDesktop:p-[2.343rem]

    flex
    flex-col
    sLaptop:flex-row

    sLaptop:gap-[1.041rem]
    mLaptop:gap-[1.302rem]
    desktop:gap-[1.563rem]
    largeDesktop:gap-[1.953rem]
    ">
        <AddList />
    </div>
  )
}

export default ListHolder
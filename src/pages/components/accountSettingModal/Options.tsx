import { useAppDispatch } from "../../../reduxStore/hook"
import { openProfile } from "../../../reduxStore/modal/modalSlice";

const Item = ({item}:{item:string}) => {

  const dispatch = useAppDispatch();

  return (
    <p 
    className="
    text-center
    sLaptop:text-left
    sLaptop:hover:opacity-50
    hover:cursor-pointer
    "
    onClick={()=> {
      if(item === "Edit Profile") dispatch(openProfile())
    }}>
      {item}
    </p> 
  )
}

const Options = () => {

    
    const optionChoices = ["Edit Profile", "Billing & Payment", "Archive", "Help"]
  return (
    <div className="
        mx-auto
        w-[calc(86.97%)]
        sLaptop:w-[calc(88.23%)]
        flex flex-col

        text-PrimaryWhite
        font-medium

        text-[0.928rem]
        mobile:text-[1.237rem]
        sMobile:text-[1.979rem]
        mMobile:text-[2.375rem]
        sLaptop:text-[0.919rem]
        mLaptop:text-[1.149rem]
        desktop:text-[1.379rem]
        largeDesktop:text-[1.723rem]
        4k:text-[2.298rem]

        leading-tight
        sLaptop:leading-none

        gap-[0.708rem]
        mobile:gap-[0.944rem]
        sMobile:gap-[1.510rem]
        mMobile:gap-[1.813rem]
        sLaptop:gap-[0.441rem]
        mLaptop:gap-[0.551rem]
        desktop:gap-[0.662rem]
        largeDesktop:gap-[0.828rem]
        4k:gap-[1.103rem]

        py-[0.537rem]
        mobile:py-[0.716rem]
        sMobile:py-[1.145rem]
        mMobile:py-[1.375rem]
        sLaptop:py-[0.871rem]
        mLaptop:py-[1.121rem]
        desktop:py-[1.375rem]
        largeDesktop:py-[1.619rem]
        4k:py-[2.241rem]

        sLaptop:pl-[0.441rem]
        mLaptop:pl-[0.551rem]
        desktop:pl-[0.662rem]
        largeDesktop:pl-[0.828rem]
        4k:pl-[1.103rem]
        " >
          {
            optionChoices.map((x,_) => 
              <Item item ={x} key={x} />
            )
          }
        </div>
  )
}

export default Options
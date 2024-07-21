import { memo } from "react"
import ListOptions from "./ListOptions"
import { list } from "../../../../../../reduxStore/lists/listsSlice"

const ListHolder = memo((
    {
        listData,
        listName,
        listSetting,
        setListSetting
    }:{
        listData:list,
        listName:string,
        listSetting:boolean,
        setListSetting:React.Dispatch<React.SetStateAction<boolean>>
    }) => {
  return (
    <div className="
    
    w-full

    flex
    flex-row

    justify-between

    sLaptop:py-[0.281rem]
    mLaptop:py-[0.351rem]
    desktop:py-[0.422rem]
    largeDesktop:py-[0.527rem]
    
    px-[2.5%]

    ">
        <h1 className="

        flex-grow

        overflow-hidden
        text-ellipsis

        text-PrimaryWhite

        text-[0.915rem]
        mobile:text-[1.220rem]
        sMobile:text-[1.953rem]
        mMobile:text-[2.344rem]

        sLaptop:text-[1.249rem]
        mLaptop:text-[1.562rem]
        desktop:text-[1.875rem]
        largeDesktop:text-[2.343rem]

        font-medium

        leading-none
        ">{listName}</h1>
        <ListOptions 
        listData = {listData}
        listSetting={listSetting} 
        setListSetting = {setListSetting}  
        />
    </div>
  )
})

export default ListHolder
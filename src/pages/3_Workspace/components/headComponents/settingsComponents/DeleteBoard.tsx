import { memo } from "react";

const DeleteBoard = memo(() => {

  return (
    <div className="
        relative
        z-[5]
        bg-transparent
        hover:bg-[red]

        text-[red]

        hover:text-PrimaryWhite

        hover:cursor-pointer

        font-medium

        sLaptop:text-[0.773rem]
        mLaptop:text-[0.966rem]
        desktop:text-[1.16rem]
        largeDesktop:text-[1.45rem]

        sLaptop:py-[0.399rem]
        mLaptop:py-[0.499rem]
        desktop:py-[0.6rem]
        largeDesktop:py-[.75rem]

        sLaptop:rounded-[0.25rem]
        mLaptop:rounded-[0.312rem]
        desktop:rounded-[0.376rem]
        largeDesktop:rounded-[0.47rem]

        text-center
        leading-none

        transition-all
        duration-300
    ">
        DeleteBoard
    </div>
  )
})

export default DeleteBoard
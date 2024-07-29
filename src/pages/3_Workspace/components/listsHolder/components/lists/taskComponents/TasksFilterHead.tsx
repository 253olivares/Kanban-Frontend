import FilterLabel from "./FilterLabel"

const TasksFilterHead = ({
  filter
} : {
  filter:string[]
}) => {

  const filters:Record<string,string> = {
    'low' : "bg-[#57DF35]",
    'medium' : "bg-[#F4A154]",
    'urgent' : "bg-[#F44730]"
  }

  return (
    <div  className="
   
    w-full

    flex
    flex-row

    justify-between

    mb-[0.234rem]
    mobile:mb-[0.312rem]
    sMobile:mb-[0.5rem]
    mMobile:mb-[0.6rem]

    sLaptop:mb-[0.266rem]
    mLaptop:mb-[0.333rem]
    desktop:mb-[0.4rem]
    largeDesktop:mb-[.5rem]

    h-[0.507rem]
    mobile:h-[0.677rem]
    sMobile:h-[1.083rem]
    mMobile:h-[1.3rem]

    sLaptop:h-[0.613rem]
    mLaptop:h-[0.766rem]
    desktop:h-[0.92rem]
    largeDesktop:h-[1.15rem]
    ">
      {
        Object.entries(filters).map(([k,v])=>
            filter.includes(k) &&  <FilterLabel key={`TaskFilter_${k}`} filter={k} color={v} />
        )
      }
    </div>
  )
}

export default TasksFilterHead
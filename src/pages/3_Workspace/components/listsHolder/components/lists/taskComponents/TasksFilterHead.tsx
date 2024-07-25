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

    pb-[0.468rem]
    mobile:pb-[0.625rem]
    sMobile:pb-[1rem]
    mMobile:pb-[1.2rem]

    sLaptop:pb-[.666rem]
    mLaptop:pb-[.833rem]
    desktop:pb-[1rem]
    largeDesktop:pb-[1rem]
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
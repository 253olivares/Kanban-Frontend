import FilterLabel from "./FilterLabel"

const TasksFilterHead = () => {

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

    sLaptop:pb-[.666rem]
    mLaptop:pb-[.833rem]
    desktop:pb-[1rem]
    largeDesktop:pb-[1rem]
    ">
      {
        Object.entries(filters).map(([k,v])=>
          <FilterLabel key={`TaskFilter_${k}`} filter={k} color={v} />
        )
      }
    </div>
  )
}

export default TasksFilterHead
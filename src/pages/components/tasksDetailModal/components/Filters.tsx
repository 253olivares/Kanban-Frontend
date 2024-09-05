import { memo } from "react"


const Filters = memo((
    {
        filter
    } : {
        filter:string[]
    }
) => {

    const filters:Record<string,string> = {
        'low' : "bg-[#57DF35]",
        'medium' : "bg-[#F4A154]",
        'urgent' : "bg-[#F44730]"
      }

  return (
    <div className="
    w-full

    flex
    flex-row
    items-center

    gap-[2.5%]

    h-[0.683rem]
    mobile:h-[0.911rem]
    sMobile:h-[1.459rem]
    mMobile:h-[1.750rem]
    sLaptop:h-[0.955rem]
    mLaptop:h-[1.194rem]
    desktop:h-[1.433rem]
    largeDesktop:h-[1.791rem]

    ">
        {
            Object.entries(filters).map(([k,v])=>
                filter.includes(k) && 
                <FilterLabel key={`TaskFilter_${k}`} color={v} />
            )
        }
    </div>
  )
})

const FilterLabel = memo(({
    color
} : {
    color:string
}) => {
    return <div className={`
        block

        w-[20%]

        ${color}

        h-full
        
        rounded-[0.093rem]
        mobile:rounded-[0.125rem]
        sMobile:rounded-[.2rem]
        mMobile:rounded-[0.24rem]
        sLaptop:rounded-[0.066rem]
        mLaptop:rounded-[0.083rem]
        desktop:rounded-[0.1rem]
        largeDesktop:rounded-[0.125rem]
    `}>

    </div>
})

export default Filters
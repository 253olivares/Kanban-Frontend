import { useAppDispatch } from "../../../../../reduxStore/hook"
import { changeFilter } from "../../../../../reduxStore/tasks/tasksSlice";

const index = ({k,v}: {k:string, v:boolean}) => {

    const dispatch = useAppDispatch();

    const capitalized =
    k.charAt(0).toUpperCase()
    + k.slice(1);

    let css

    switch (k) {
        case 'low':
            css = 'bg-[#57DF35]'
            break;
        case 'medium':
            css = 'bg-[#F4A154]'
            break;
        case 'urgent':
            css = 'bg-[#F44730]'
            break;
    }

  return (
    <div className="
    flex
    flex-row
    justify-between

    px-[8.25%]
    ">
        <input

        className="
        sLaptop:w-[0.927rem]
        sLaptop:h-[0.927rem]
        mLaptop:w-[1.16rem]
        mLaptop:h-[1.16rem]
        desktop:w-[1.392rem]
        desktop:h-[1.392rem]
        largeDesktop:w-[1.74rem]
        largeDesktop:h-[1.74rem]
        "

        onChange={()=> {
            switch (k) {
                case 'low':
                    dispatch(changeFilter({low:!v}))
                    break;
                case 'medium':
                    dispatch(changeFilter({medium:!v}))
                    break;
                case 'urgent':
                    dispatch(changeFilter({urgent:!v}))
                    break;
            }}
        }
        checked={v} 
        type="checkbox" 
        name={`taskFilter${k}`} 
        id={`taskFilter${k}`} />
        <label 
        className={`
        text-white
         font-medium

         sLaptop:text-[0.668rem]
         mLaptoP:text-[0.835rem]
         desktop:text-[1.003rem]
         largeDesktop:text-[1.253rem]

         leading-none

         sLaptop:py-[0.125rem]
         mLaptop:py-[0.156rem]
         desktop:py-[0.188rem]
         largeDesktop:py-[0.235rem]

         sLaptop:rounded-[0.125rem]
         mLaptop:rounded-[0.156rem]
         desktop:rounded-[0.188rem]
         largeDesktop:rounded-[0.235rem]

         sLaptop:w-[3.800rem]
         mLaptop:w-[4.750rem]
         desktop:w-[5.701rem]
         largeDesktop:w-[7.126rem]

         text-center

         ${css}
        `}
        htmlFor={`taskFilter${k}`} 
        >{capitalized}</label>
    </div>
  )
}

export default index
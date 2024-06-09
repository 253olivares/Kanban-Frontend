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

        hidden
        sLaptop:block

        sLaptop:w-[0.927rem]
        sLaptop:h-[0.927rem]
        mLaptop:w-[1.16rem]
        mLaptop:h-[1.16rem]
        desktop:w-[1.392rem]
        desktop:h-[1.392rem]
        largeDesktop:w-[1.74rem]
        largeDesktop:h-[1.74rem]
        4k:w-[2.319rem]
        4k:h-[2.319rem]
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
        
         text-[1.098rem]
         mobile:text-[1.465rem]
         sMobile:text-[2.344rem]
         mMobile:text-[2.813rem]
         sLaptop:text-[0.668rem]
         mLaptoP:text-[0.835rem]
         desktop:text-[1.003rem]
         largeDesktop:text-[1.253rem]
         4k:text-[1.670rem]

         leading-none

         py-[0.195rem]
         mobile:py-[0.260rem]
         sMobile:py-[0.416rem]
         mMobile:py-[0.5rem]
         sLaptop:py-[0.125rem]
         mLaptop:py-[0.156rem]
         desktop:py-[0.188rem]
         largeDesktop:py-[0.235rem]
         4k:py-[0.313rem]

         rounded-[0.159rem]
         mobile:rounded-[0.213rem]
         sMobile:rounded-[0.340rem]
         mMobile:rounded-[0.409rem]
         sLaptop:rounded-[0.125rem]
         mLaptop:rounded-[0.156rem]
         desktop:rounded-[0.188rem]
         largeDesktop:rounded-[0.235rem]
         4k:rounded-[0.313rem]

         w-[8.178rem]
         mobile:w-[10.905rem]
         sMobile:w-[17.448rem]
         mMobile:w-[20.938rem]
         sLaptop:w-[3.800rem]
         mLaptop:w-[4.750rem]
         desktop:w-[5.701rem]
         largeDesktop:w-[7.126rem]
         4k:w-[9.501rem]

         text-center

         ${css}

         ${
            v ? 
            'opacity-100'
            : 
            'opacity-50'
         }

         sLaptop:opacity-100
        `}
        htmlFor={`taskFilter${k}`} 
        >{capitalized}</label>
    </div>
  )
}

export default index
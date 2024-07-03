import { memo } from "react";
import { useAppDispatch } from "../../../../../reduxStore/hook"
import { changeFilter } from "../../../../../reduxStore/tasks/tasksSlice";

const Label = memo(({k,v}: {k:string, v:boolean}) => {

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

        className="filterInput"

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
        
         filterLabels

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
})

export default Label;
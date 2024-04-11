import React from 'react';
import svg1 from '/assets/passStrength/svg1.svg';
import svg2 from '/assets/passStrength/svg2.svg';
import svg3 from '/assets/passStrength/svg3.svg';
import svg4 from '/assets/passStrength/svg4.svg';
import svg5 from '/assets/passStrength/svg5.svg';
import svg6 from '/assets/passStrength/svg6.svg';

const index = React.memo(React.forwardRef(() => {

  const svgArray:Record<string,string> = {
      svg1,
      svg2,
      svg3,
      svg4,
      svg5,
      svg6
  }

  return (
    <div className='flex gap-5 items-center'>
      <div className='flex gap-[-1rem] my-2'>
        {
          Object.entries(svgArray).map(([k,v], index)=> 
            <img className='first:ml-0 ml-[-.6rem] opacity-25' key={k} src={v} alt={k} />
          )
        }
      </div>
      <p className='font-bold text-lg'></p>
    </div>
  )
}))

export default index
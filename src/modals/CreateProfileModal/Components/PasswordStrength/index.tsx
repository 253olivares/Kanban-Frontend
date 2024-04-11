import React, {MutableRefObject } from 'react';
import svg1 from '/assets/passStrength/svg1.svg';
import svg2 from '/assets/passStrength/svg2.svg';
import svg3 from '/assets/passStrength/svg3.svg';
import svg4 from '/assets/passStrength/svg4.svg';
import svg5 from '/assets/passStrength/svg5.svg';
import svg6 from '/assets/passStrength/svg6.svg';

const index = React.memo(({status}:{status:0|1|2|3}) => {

  const svgArray:Record<string,string> = {
      svg1,
      svg2,
      svg3,
      svg4,
      svg5,
      svg6
  }

  let message = '';
  
  switch (status) {
    case 1:
      message = 'Weak Password'
      break;
    case 2:
      message = 'Medium Password';
      break;
    case 3:
      message = 'Strong Password';
      break;
  }

  return (
    <div className='flex gap-5 items-center'>
      <div className='flex gap-[-1rem] my-2'>
        {
          Object.entries(svgArray).map(([k,v], index)=> 
            <img className={`
            first:ml-0 ml-[-.6rem] 
            ${
              status === 1 ? index < 2 ? 'opacity-100' : 'opacity-25' : ''
            }
            ${
              status === 2 ? index < 4 ? 'opacity-100' : 'opacity-25' : ''
            }
            ${
              status === 3 ? index < 6 ? 'opacity-100' : 'opacity-25' : ''
            }
            `} key={k} src={v} alt={k} />
          )
        }
      </div>
      <p className={`
       font-bold 
       text-lg
       ${status == 1 && 'text-ThemeRed' }
       ${status == 2 && 'text-ThemeOrange' }
       ${status == 3 && 'text-[#30DD11]' }
      `}
      >{message}</p>
    </div>
  )
})

export default index
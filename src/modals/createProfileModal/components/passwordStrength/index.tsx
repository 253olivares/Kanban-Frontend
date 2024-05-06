import { memo } from 'react';
import svg1 from '/assets/passStrength/svg1.svg';
import svg2 from '/assets/passStrength/svg2.svg';
import svg3 from '/assets/passStrength/svg3.svg';
import svg4 from '/assets/passStrength/svg4.svg';
import svg5 from '/assets/passStrength/svg5.svg';
import svg6 from '/assets/passStrength/svg6.svg';

const index = memo(({status}:{status:number}) => {

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
    <div className='flex gap-5 h-[1.5rem] sMobile:h-[1.875rem] mMobile:h-[2.25rem] sMobile:gap-10 sLaptop:gap-5 items-center'>
      <div className='flex sLaptop:my-[.25rem] mLaptop:my-[.3rem] desktop:my-2 largeDesktop:my-[.6rem] '>
        {
          Object.entries(svgArray).map(([k,v], index)=> 
            <img className={`
            first:ml-0 
            ml-[-.6rem]
            sLaptop:ml-[-.3rem]
            desktop:ml-[-.6rem]
            h-[1rem]
            sMobile:h-[1.35rem]
            mMobile:h-7
            sLaptop:h-[.8rem]
            mLaptop:h-[1.1rem]
            desktop:h-[1.35rem]
            largeDesktop:h-[1.45rem]
            ${
              status === 1 ? index < 2 ? 'opacity-100' : 'opacity-25' : ''
            }
            ${
              status === 2 ? index < 4 ? 'opacity-100' : 'opacity-25' : ''
            }
            ${
              status === 3 ? index < 6 ? 'opacity-100' : 'opacity-25' : ''
            }
            ${
              status === 0 && 'opacity-25'
            }
            `} key={k} src={v} alt={k} />
          )
        }
      </div>
      <span className={`
       font-bold
       sMobile:text-[1.25rem]
       mMobile:text-[1.5rem]
       sLaptop:text-[.85rem]
       mLaptop:text-[1.1rem]
       desktop:text-[1.25rem]
       ${status == 1 && 'text-ThemeRed' }
       ${status == 2 && 'text-ThemeOrange' }
       ${status == 3 && 'text-[#30DD11]' }
      `}
      >{message}</span>
    </div>
  )
})

export default index
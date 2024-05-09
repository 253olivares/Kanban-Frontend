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
    <div className='
    flex 
    
    h-[0.702rem] 
    mobile:h-[0.889rem]
    sMobile:h-[1.423rem] 
    mMobile:h-[1.7075rem]

    gap-[0.725rem]
    mobile:gap-[0.966rem]
    sMobile:gap-[1.546rem] 
    mMobile:gap-[1.856rem]
    sLaptop:gap-5 

    mb-[0.359rem]
    mobile:mb-[0.456rem]
    sMobile:mb-[0.729rem]
    mMobile:mb-[0.875rem]
    sLaptop:mb-0

    items-center'>
      <div className='
      flex 
      sLaptop:my-[.25rem] 
      mLaptop:my-[.3rem]
      desktop:my-2 
      largeDesktop:my-[.6rem] '>
        {
          Object.entries(svgArray).map(([k,v], index)=> 
            <img className={`
            first:ml-0 
            
            ml-[-0.234rem]
            mobile:ml-[-0.312rem]
            sMobile:ml-[-0.499rem]
            mMobile:ml-[-.6rem]

            sLaptop:ml-[-.3rem]
            desktop:ml-[-.6rem]

            h-[0.702rem] 
            mobile:h-[0.889rem]
            sMobile:h-[1.423rem] 
            mMobile:h-[1.7075rem]
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
       text-[0.58rem]
       mobile:text-[0.773rem]
       sMobile:text-[1.237rem]
       mMobile:text-[1.484rem]
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
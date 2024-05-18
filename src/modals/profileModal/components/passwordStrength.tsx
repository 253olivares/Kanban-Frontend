import { memo } from 'react';
import svg1 from '/assets/passStrength/svg1.svg';
import svg2 from '/assets/passStrength/svg2.svg';
import svg3 from '/assets/passStrength/svg3.svg';
import svg4 from '/assets/passStrength/svg4.svg';
import svg5 from '/assets/passStrength/svg5.svg';
import svg6 from '/assets/passStrength/svg6.svg';

const passwordStrength = memo(({status}:{status:number}) => {

    const svgArray:Record<string,string> = {
        svg1,
        svg2,
        svg3,
        svg4,
        svg5,
        svg6
    }

  return (
    <div className='
    flex

    sLaptop:gap-[0.784rem]
    mLaptop:gap-[0.98rem]
    desktop:gap-[1.176rem]
    largeDesktop:gap-[1.471rem]

    items-center
    '>
        <div className='
        flex
        '>
            {
                Object.entries(svgArray).map(([k,v],index)=> 
                <img 
                key={index}
                className={`
                first:ml-0 

                ml-[]
                mobile:ml-[]
                sMobile:ml-[]
                mMobile:ml-[-.5rem]
                sLaptop:ml-[-0.319rem]
                mLaptop:ml-[-0.399rem]
                desktop:ml-[-0.48rem]
                largeDesktop:ml-[-.6rem]

                h-[0.648rem]
                mobile:h-[0.864rem]
                sMobile:h-[1.382rem]
                mMobile:h-[1.659rem]
                sLaptop:h-[0.874rem]
                mLaptop:h-[1.092rem]
                desktop:h-[1.311rem]
                largeDesktop:h-[1.639rem]
                
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
                `}
                src={v} 
                alt={k}/>
                )
            }
        </div>
    </div>
  )
})

export default passwordStrength
import { memo } from "react";
import x from '/assets/x_Icon.svg'
import check from '/assets/Check_MarkIcon.svg'

const passwordRequirments = memo(({reqs}:{reqs:Record<string,Boolean>}) => {
  return (
    <div className="
    
    flex flex-col
    w-full
    sLaptop:w-[50%]

    gap-[0.390rem]
    mobile:gap-[0.520rem]
    sMobile:gap-[0.833rem]
    mMobile:gap-[1rem]
    sLaptop:gap-[0.376rem] 
    mLaptop:gap-[0.471rem]
    desktop:gap-[0.565rem] 
    largeDesktop:gap-[0.706rem]
    ">
        <div className="profilePassHolder">
            <img className="profilePassReqImg" src={reqs.charLimit ? check : x} alt="req_Fulfillment" />
            <p className="profilePassReqText">8 Characters</p>
        </div>
        <div className="profilePassHolder">
            <img className="profilePassReqImg" src={reqs.numReq ? check : x} alt="req_Fulfillment" />
            <p className="profilePassReqText">Least 1 number</p>
        </div>
        <div className="profilePassHolder">
            <img className="profilePassReqImg" src={reqs.specialChar ? check : x} alt="req_Fulfillment" />
            <p className="profilePassReqText">Least 1 special character</p>
        </div>
    </div>
  )
})

export default passwordRequirments
import { user } from "../../../../reduxStore/users/userSlice";
import { useNavigate } from "react-router-dom";
import icon from '/assets/Logo_Export.svg';
import { memo } from "react";

const AppIcon = memo(({user}:{user:user}) => {
  
    const navigate = useNavigate();
  
    return (
    <img 
        onClick={()=> {
                navigate(`/u/${user.u_id}`);
            }}
            className={`
            w-[1.221rem]
            mobile:w-[1.628rem]
            sMobile:w-[2.604rem]
            mMobile:w-[3.125rem]
            sLaptop:w-[2.083rem]
            mLaptop:w-[2.604rem]
            desktop:w-[3.125rem]
            largeDesktop:w-[3.906rem]
            4k:w-[5.208rem]
            sLaptop:hover:cursor-pointer
            `}
            src={icon} alt="" />
        
  )
})

export default AppIcon
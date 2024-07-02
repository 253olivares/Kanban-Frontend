import { useAppDispatch } from "../../../reduxStore/hook";
import { setCroppingImageData } from "../../../reduxStore/modal/modalSlice";
import { closeAccountModal } from "../../../reduxStore/modal/modalSlice";
import { logOut } from "../../../reduxStore/users/userSlice";
import { setNewSelect } from "../../../reduxStore/workspace/workspaceSlice";
import { useNavigate } from "react-router-dom";

const Logout = ({dataURL}:{dataURL:string|null}) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

  return (
    <div className="
        w-full
        ">
          <button 
          onClick={()=> {
            try {
              // incase user changed their profile image we set the value back to null
             if(dataURL) dispatch(setCroppingImageData(null));

              // change modal state that hides the menu options
              dispatch(closeAccountModal());
 
              // log out user
              dispatch(logOut());

              dispatch(setNewSelect(''));
             
              navigate('/');
            } catch(e:any){
              alert("Ran into issue logging out!");
            }
          }}
          className="
          w-full
          text-center

          text-[0.928rem]
          leading-[2.686rem]
          mobile:text-[1.237rem]
          mobile:leading-[3.581rem]
          sMobile:text-[1.979rem]
          sMobile:leading-[5.729rem]
          mMobile:text-[2.375rem]
          mMobile:leading-[6.875rem]
          sLaptop:text-[0.919rem]
          sLaptop:leading-[2.206rem]
          mLaptop:text-[1.149rem]
          mLaptop:leading-[2.758rem]
          desktop:text-[1.379rem]
          desktop:leading-[3.309rem]
          largeDesktop:text-[1.723rem]
          largeDesktop:leading-[4.136rem]
          4k:text-[2.298rem]
          4k:leading-[5.515rem]

          h-[2.686rem]
          mobile:h-[3.581rem]
          sMobile:h-[5.729rem]
          mMobile:h-[6.875rem]
          sLaptop:h-[2.206rem]
          mLaptop:h-[2.758rem]
          desktop:h-[3.309rem]
          largeDesktop:h-[4.136rem]
          4k:h-[5.515rem]

          font-medium
          text-PrimaryWhite
          sLaptop:hover:opacity-50
          ">
            Logout
          </button>
        </div>
  )
}

export default Logout
import { useAppDispatch } from "../../../../../reduxStore/hook"
import { openAddNewUser } from "../../../../../reduxStore/modal/modalSlice";


const AddNewUser = () => {
  const dispatch = useAppDispatch();
  return (
    <div 
    onClick={()=>dispatch(openAddNewUser())}
    className="
    settingsItems
    ">Add New User</div>
  )
}

export default AddNewUser
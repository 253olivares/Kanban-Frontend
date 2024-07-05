import { useParams } from "react-router-dom"
import AddList from "./components/addList/AddList"
import { useAppSelector } from "../../../../reduxStore/hook";
import { getUser } from "../../../../reduxStore/users/userSlice";
import { selectBoardById } from "../../../../reduxStore/boards/boardsSlice";


// Our holder for our div this is where we will be holding all our tasks
const ListHolder = () => {

  const params = useParams();
  const user = useAppSelector(getUser);
  const board = useAppSelector(state => selectBoardById(state,params?.workspaceId || ""))

  if(!board) return
  if(!params.workspaceId) return;
  if(!user) return;

  return (
    <div className="
    boardListHolder
    ">
      {
        user.u_id === board.u_id ?
        <AddList /> : '' 
      }
    </div>
  )
}

export default ListHolder
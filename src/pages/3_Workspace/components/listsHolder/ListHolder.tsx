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
    <div className={`
    boardListHolder
    ${user.u_id !== board.u_id && board.lists.length ===0 ?
    `
    flex
    justify-center
    items-center

    text-white

    sLaptop:text-[1.333rem]
    mLaptop:text-[1.666rem]
    desktop:text-[2rem]
    largeDesktop:text-[2.5rem]
    ` : ''
    }
    `}>
      {
        user.u_id === board.u_id ?
        <AddList /> : '' 
      }
      {
        user.u_id !== board.u_id && board.lists.length ===0 ? 
        "No lists found please wait for administrator to add lists & tasks!" : ''
      }
    </div>
  )
}

export default ListHolder
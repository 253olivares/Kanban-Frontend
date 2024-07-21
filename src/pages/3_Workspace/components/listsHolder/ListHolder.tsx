import { useParams } from "react-router-dom"
import AddList from "./components/addList/AddList"
import { useAppSelector } from "../../../../reduxStore/hook";
import { getUser } from "../../../../reduxStore/users/userSlice";
import { selectBoardById } from "../../../../reduxStore/boards/boardsSlice";
import { list, selectAllLists } from "../../../../reduxStore/lists/listsSlice";
import List from "./components/lists/List";
import scrollbarImageX from '/assets/scrollBarTrackX.png'
import scrollbarImage from '/assets/scrollBarTrack.png';



// Our holder for our div this is where we will be holding all our tasks
const ListHolder = () => {

  const params = useParams();
  const user = useAppSelector(getUser);
  const board = useAppSelector(state => selectBoardById(state,params?.workspaceId || ""))
  const list = useAppSelector(selectAllLists);

  if(!board) return
  if(!params.workspaceId) return;
  if(!user) return;

  return (
    <div 
    
    style={{
      // @ts-ignore
      "--img": `url(${scrollbarImage})`,
      "--img2": `url(${scrollbarImageX})`
    }}

    className={`
    boardListHolder
    
    boardsScroll
    sLaptop:overflow-y-none
    sLaptop:boardsScrollx 

    ${user.u_id !== board.u_id && board.lists.length ===0 ?
    `
    flex
    justify-center
    items-center

    text-white

    text-[1.172rem]
    mobile:text-[1.562rem]
    sMobile:text-[2.083rem]
    mMobile:text-[3rem]
    font-medium
    text-center

    sLaptop:text-[1.172rem]
    mLaptop:text-[1.562rem]
    desktop:text-[2rem]
    largeDesktop:text-[2.5rem]
    ` : ""
    }
    `}>
      {
        list.map((x:list)=>
          <List user={user} key={x.l_id} list={x} />
        )
      }
      {
        user.u_id === board.u_id ?
        <AddList listLength={list.length} /> : '' 
      }
      {
        user.u_id !== board.u_id && board.lists.length ===0 ? 
        "No lists found please wait for administrator to add lists & tasks!" : ''
      }
    </div>
  )
}

export default ListHolder
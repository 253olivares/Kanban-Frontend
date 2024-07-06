import { memo } from "react";
import { useAppDispatch } from "../../../../../reduxStore/hook";
import { openConfirmDeleteBoard } from "../../../../../reduxStore/modal/modalSlice";

const DeleteBoard = memo(() => {

  const dispatch = useAppDispatch();

  return (
    <div 
    onClick={()=> {
      // delete board button
      // if(params.workspaceId) dispatch(deleteBoard(params.workspaceId))
      // .unwrap()
      // .then((x) => {
      //   // in here we are going to remove the board from other places
      //   // places to remove
      //   dispatch(removeUserBoards([x.board.b_id]))
      //   dispatch(updateWorkspacBoardRemove(x.board))
      //   // -- workspace its from
      //   // -- user board array of all involved users
      //   // -- 

      //   alert("Board successfully removed!");
      //   dispatch(setSettingModal(false))
      //   navigate(`/u/${params.userId}`)
      // })
      // .catch(()=> {
      //   alert("Command unsuccessful!");
      // })
      dispatch(openConfirmDeleteBoard())
    }}
    className=" deleteBoardButton ">
        DeleteBoard
    </div>
  )
})

export default DeleteBoard
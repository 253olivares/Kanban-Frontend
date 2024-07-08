import { memo } from "react";
import { useAppDispatch } from "../../../../../reduxStore/hook";
import { openConfirmDeleteBoard } from "../../../../../reduxStore/modal/modalSlice";

const DeleteBoard = memo(() => {

  const dispatch = useAppDispatch();

  return (
    <div 
    onClick={()=> {
      
      dispatch(openConfirmDeleteBoard())
    }}
    className=" deleteBoardButton ">
        DeleteBoard
    </div>
  )
})

export default DeleteBoard
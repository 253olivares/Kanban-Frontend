import { board } from "../../../../reduxStore/boards/boardsSlice"

const BoardNameInput = ({board}:{board:board}) => {
  console.log(board);
  return (
    <div>BoardNameInput</div>
  )
}

export default BoardNameInput
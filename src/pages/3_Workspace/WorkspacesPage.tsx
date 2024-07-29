import { memo } from "react"
import { useAppSelector } from "../../reduxStore/hook"
import { getAccountSettings, getFilterModal } from "../../reduxStore/modal/modalSlice"
import { AnimatePresence } from "framer-motion";

import AccountSettingModal from '../components/accountSettingModal/AccountSettingsModal';
import FilterModal from '../2_AccountLanding/components/taskFilter/filterModal/FilterModal';
import BoardAndWorkspaces from './components/boardPageWorkspace&BoardSelector/Container';
import ListHolder from "./components/listsHolder/ListHolder";
import { useParams } from "react-router-dom";
import { selectBoardById } from "../../reduxStore/boards/boardsSlice";

const WorkspacesPage = memo(() => {
  
  const accountSettings = useAppSelector(getAccountSettings);
  const openFilterModal = useAppSelector(getFilterModal);

  const params = useParams();
  const {workspaceId} = params;

  const board = useAppSelector(state => selectBoardById(state,workspaceId||""));

  if(!board) return;
  return (
    <div className={`
    workspacesIndex
    `}>
      <BoardAndWorkspaces />
      <AnimatePresence>
        {
          accountSettings ? <AccountSettingModal /> : ''
        }
      </AnimatePresence>
      <AnimatePresence>
        {
          openFilterModal ? <FilterModal /> : ''
        }
      </AnimatePresence>
      <ListHolder />
    </div>
  )
})

export default WorkspacesPage;
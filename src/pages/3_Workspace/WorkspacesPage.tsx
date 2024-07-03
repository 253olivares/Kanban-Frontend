import { memo } from "react"
import { useAppSelector } from "../../reduxStore/hook"
import { getAccountSettings, getFilterModal } from "../../reduxStore/modal/modalSlice"
import { AnimatePresence } from "framer-motion";

import AccountSettingModal from '../components/accountSettingModal/AccountSettingsModal';
import FilterModal from '../2_AccountLanding/components/taskFilter/filterModal/FilterModal';
import BoardAndWorkspaces from './components/boardPageWorkspace&BoardSelector/Container';
import ListHolder from "./components/listsHolder/ListHolder";

const WorkspacesPage = memo(() => {
  
  const accountSettings = useAppSelector(getAccountSettings);
  const openFilterModal = useAppSelector(getFilterModal);

  return (
    <div className="workspacesIndex">
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
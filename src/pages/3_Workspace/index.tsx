import { memo } from "react"
import { useAppSelector } from "../../reduxStore/hook"
import { getAccountSettings, getFilterModal } from "../../reduxStore/modal/modalSlice"
import { AnimatePresence } from "framer-motion";

import AccountSettingModal from '../components/accountSettingModal/index';
import FilterModal from '../2_AccountLanding/components/taskFilter/filterModal';
import BoardAndWorkspaces from '../3_Workspace/components/boardPageWorkspace&BoardSelector/Container';
import ListHolder from "./components/listsHolder/ListHolder";

const index = memo(() => {
  
  const accountSettings = useAppSelector(getAccountSettings);
  const openFilterModal = useAppSelector(getFilterModal);

  return (
    <div className="
    z-[0]
    relative
    flex-grow
    overflow-hidden
    ">
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

export default index
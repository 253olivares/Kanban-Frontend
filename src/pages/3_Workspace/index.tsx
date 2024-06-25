import { memo } from "react"
import { useAppSelector } from "../../reduxStore/hook"
import { getAccountSettings, getFilterModal } from "../../reduxStore/modal/modalSlice"
import { AnimatePresence } from "framer-motion";

import AccountSettingModal from '../components/accountSettingModal/index';
import FilterModal from '../2_AccountLanding/components/taskFilter/filterModal'

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
    </div>
  )
})

export default index
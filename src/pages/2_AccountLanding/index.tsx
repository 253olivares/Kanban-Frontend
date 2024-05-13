import { memo } from 'react';
import AccountSettingModal from '../components/accountSettingModal';

const index = memo(() => {
  return (
    <div className="
    relative
    bg-SpaceBlue 
    flex-grow
    overflow-hidden
    ">
      <AccountSettingModal />
    </div>
  )
})

export default index
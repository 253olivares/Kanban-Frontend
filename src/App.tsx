import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/1_HomePage';
import LayoutAccount from './pages/components/AccountHeader';
import AccountLanding from './pages/2_AccountLanding';
import Workspace from './pages/3_Workspace';
import Errorpage from './pages/0_404Page';


// out app component to gather all our components
function App(): JSX.Element {

// return our page
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        {/* our heading layout */}
        
        <Route path="u/:id" element={<LayoutAccount />} >
          {/* account landing page where users will arrive when they login */}
          <Route index element={<AccountLanding/>} />
          {/* Workspace Page that is where the user can view all ongoing tasks */}
          <Route path="workspace/:id" element={<Workspace />}/>
        </Route>

        {/* 404 page */}
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </React.Fragment>
  )
}

export default App

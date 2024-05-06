import { Fragment,Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import LoadingPage from './pages/components/loadingSpinner';
import Errorpage from './pages/0_404Page';

const HomePage = lazy(()=> import('./pages/1_HomePage'));
const AccountLanding = lazy(()=> import('./pages/2_AccountLanding'));
const LayoutAccount = lazy(()=> import('./pages/components/accountHeader'));
const Workspace = lazy(()=> import('./pages/3_Workspace'));


// out app component to gather all our components
function App(): JSX.Element {
// return our page
  return (
    <Fragment>

      <Suspense fallback={<LoadingPage />}>

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

      </Suspense>

    </Fragment>
  )
}

export default App

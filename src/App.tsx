import { checkStorage } from "./reduxStore/localStorage/localStorageSlice";
import { lazy,Fragment,Suspense, useEffect  } from "react";
import { useAppDispatch } from "./reduxStore/hook";
import { Route, Routes } from "react-router-dom";

import { AppProvider } from "./pages/appRefContext";
import LoadingPage from './pages/components/loadingSpinner';
import Errorpage from './pages/0_404Page';


const HomePage = lazy(()=> import('./pages/1_HomePage'));
const AccountLanding = lazy(()=> import('./pages/2_AccountLanding'));
const LayoutAccount = lazy(()=> import('./pages/components/accountHeader'));
const Workspace = lazy(()=> import('./pages/3_Workspace'));

import 'react-image-crop/dist/ReactCrop.css';
import "aos/dist/aos.css";
import AOS from "aos";

// out app component to gather all our components
function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(()=> {
    // initiate our animate on scroll
   AOS.init({
    once:true,
    easing:"ease-in-out-cubic"
   });

  //  initiate our function to check if our server instance exists if not create it
  dispatch(checkStorage());
  },[])

// return our page
  return (
    <Fragment>
      <Suspense fallback={<LoadingPage />}>
      <AppProvider>
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
      </AppProvider>
      </Suspense>
    </Fragment>
  )
}

export default App

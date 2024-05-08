import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './reduxStore/store.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'

// @ts-ignore ignore this component I keep loading it in for when I want to test a component and develope it
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode> 
 <Provider store={store}>
    {/* starting our route for the application */}
    <Router>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </Router>
  </Provider>
  </StrictMode>,
)

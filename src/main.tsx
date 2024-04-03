
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// @ts-ignore ignore this component I keep loading it in for when I want to test a component and develope it
import TestingApp from './testingComponents/TestingApp.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // starting our route for the application
    <Router>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </Router>,
)

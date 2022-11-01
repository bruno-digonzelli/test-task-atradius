import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Users from './pages/Users';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='users' element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

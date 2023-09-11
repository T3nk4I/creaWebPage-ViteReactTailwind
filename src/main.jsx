import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Xmas from './pages/Xmas/Xmas'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route
        index
        element={
          <div className=' max-w-full min-w-[936px] font-sans font-light '>
            <Home />
          </div>
          }
      />
      <Route
        path='/home'
        element={
          <div className=' max-w-full min-w-[936px] font-sans font-light '>
            <Home />
          </div>
          }
      />
      <Route
        path='/xmas'
        element={
          <div className=' max-w-full min-w-[936px] font-sans font-light '>
            <Xmas />
          </div>
          }
      />
    </Routes>
  </BrowserRouter>
)

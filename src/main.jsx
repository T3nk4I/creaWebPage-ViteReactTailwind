import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import Header from './components/Header'
// pages
import Home from './pages/Home/Home'
import Xmas from './pages/Xmas/Xmas'
import Register from './pages/Register/Register'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <section className=' bg-white h-16 2xl:h-20  w-screen pt-1 lg:pt-2 px-2 sticky top-0 z-20'>
      <Header />
    </section>
    <Routes>
      <Route
        path='/'
        element={
          <div className=' max-w-full font-sans font-light '>
            <Home />
          </div>
          }
      />
      <Route
        path='/xmas'
        element={
          <div className=' max-w-full font-sans font-light '>
            <Xmas />
          </div>
          }
      />
      <Route
        path='/register'
        element={
          <div className=' max-w-full font-sans font-light '>
            <Register />
          </div>
          }
      />
    </Routes>
  </BrowserRouter>
)

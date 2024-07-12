import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Placeholder from './pages/placeholder/Placeholder'
import Cart from './pages/Cart/Cart'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeholder' element={<Placeholder />} />
      </Routes>
    </div>
  )
}

export default App
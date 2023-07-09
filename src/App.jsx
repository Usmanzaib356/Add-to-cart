import React from 'react'
import Header from './Components/Header'
import { Routes,Route } from 'react-router-dom'
import Amazaon from './Components/Amazaon'
import Cart from './Components/Cart'
function App() {
  return (  
    <>
     <Header></Header>
     <Routes>
       <Route path="/" element={<Amazaon/>} />
       <Route path="/cart" element={<Cart/>} />
     </Routes>
    </>
  )
}

export default App
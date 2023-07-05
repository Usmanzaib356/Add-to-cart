import React from 'react'
import Header from './Components/Header'
import { Routes,Route } from 'react-router-dom'
import Main from './Components/Main'
import Carts from './Components/Carts'
function App() {
  return (  
    <>
     <Header></Header>
     <Routes>
       <Route path="/" element={<Main/>} />
       <Route path="/cart" element={<Carts/>} />
     </Routes>
    </>
  )
}

export default App
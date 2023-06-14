import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Navmenu from './components/Navmenu';
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navmenu />
     <Routes>
      <Route
            path="/"
            element={
             <Home />
            }
          />

     <Route path="/home" element={
                <Home />
          } />
     </Routes>
     <Footer />
    </>
  )
}

export default App

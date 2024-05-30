
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Pay from "./pages/Pay";
import SignUp from "./pages/SignUp";

function App() {

  return (
    <>
     <Routes>
     <Route path="/home" element={
                <Home />
          } />
             <Route path="/sign-up" element={
                <SignUp />
          } />
           <Route path="/" element={
                <Pay />
          } />
     </Routes>
    </>
  )
}

export default App

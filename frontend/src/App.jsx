


import './index.css'
import Register from "./pages/auth/Register"
import Navbar from "./components/navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Login from './pages/auth/Login.jsx'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadUser } from './redux/authReducer/authSlice.js'
import Home from './pages/home/Home.jsx'
function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </>
  )
}

export default App

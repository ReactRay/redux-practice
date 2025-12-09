


import './index.css'
import Register from "./pages/auth/Register"
import Navbar from "./components/navbar/Navbar"
import { Route, Routes } from "react-router-dom"
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<h1>Home Page</h1>} />
      </Routes>

    </>
  )
}

export default App

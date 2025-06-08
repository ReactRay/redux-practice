
import Nav from "./components/nav/Nav"
import Hero from "./components/hero/Hero"
import NavList from "./components/nav-list/NavList"
import { useState } from "react"
import './index.css'
function App() {


  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Nav setOpenModal={setOpenModal} />
      <Hero />
      <NavList setOpenModal={setOpenModal} openModal={openModal} />

    </>
  )
}

export default App

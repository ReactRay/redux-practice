

import { useState } from "react"
import './index.css'
import Register from "./pages/auth/Register"
function App() {


  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Register />

    </>
  )
}

export default App

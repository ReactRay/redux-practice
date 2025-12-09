

import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
function Navbar() {
    return (
        <nav>
            <h2>Navbar</h2>
            <ul>

                <NavLink to="/">Register</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar



import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
function Navbar() {
    return (
        <nav>
            <h2>Navbar</h2>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/register">Register</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar

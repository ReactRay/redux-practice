

import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { useSelector } from 'react-redux'
function Navbar() {

    const { user } = useSelector(state => state.auth);



    return (
        <nav>
            <h2>Navbar</h2>
            <h3>{user}</h3>
            <ul>

                <NavLink to="/">Register</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar

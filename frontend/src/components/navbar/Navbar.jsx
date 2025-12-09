

import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/authReducer/authSlice'
function Navbar() {

    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logout());
    }


    console.log(user)
    return (
        <nav>
            <h3>{user?.email}</h3>
            <h2>Navbar</h2>
            <ul>

                <NavLink to="/">Register</NavLink>
            </ul>

            <button onClick={handleLogout}>Logout</button>
        </nav>
    )
}

export default Navbar

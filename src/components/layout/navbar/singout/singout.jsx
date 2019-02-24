import React from 'react'
import { NavLink } from "react-router-dom"

const Singout = () => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/">SingIn</NavLink></li>
            <li><NavLink to="/">SingUp</NavLink></li>
        </ul>
        
    )
}

export default Singout

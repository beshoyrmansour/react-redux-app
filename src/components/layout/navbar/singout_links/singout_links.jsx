import React from 'react'
import { NavLink } from "react-router-dom"

const SingoutLinks = () => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/signin">SingIn</NavLink></li>
            <li><NavLink to="/signup">SingUp</NavLink></li>
        </ul>
        
    )
}

export default SingoutLinks

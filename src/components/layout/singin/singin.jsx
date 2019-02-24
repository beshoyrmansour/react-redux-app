import React from 'react'
import { NavLink } from "react-router-dom"

const Singin = () => {
    return (
        <ul id="nav-mobile" className="right">
            <li><NavLink to="/">New Project +</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating black">BR</NavLink></li>
        </ul>
    )
}

export default Singin

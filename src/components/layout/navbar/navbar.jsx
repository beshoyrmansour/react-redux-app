import React from 'react'
import { Link } from "react-router-dom"
import Singin from '../singin/singin';
import Singout from './singout/singout';

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="#!" className="brand-logo">BRM Project</a>
                <Singin></Singin>
                <Singout></Singout>
            </div>
        </nav>
    )
}

export default Navbar

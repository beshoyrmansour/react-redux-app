import React from 'react'
import { Link } from "react-router-dom"
import SinginLinks from '../singin_links/singin_links';
import SingoutLinks from './singout_links/singout_links';

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">BRM Project</Link>
                <SinginLinks></SinginLinks>
                <SingoutLinks></SingoutLinks>
            </div>
        </nav>
    )
}

export default Navbar

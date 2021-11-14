import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo.png";

const Logo = () => {
    return (
        <div className="header-logo">
            <Link to="/">
                <img src={logo} className="header-logo_img" alt="logo.png" />
            </Link>
        </div>
    )
}

export default Logo

import React from 'react'
import Logo from '../images/logo.png'
import {FaUser} from 'react-icons/fa'

export const Navbar = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <a href="#"><img src={Logo} alt="logo" width="125px"/></a>
                </div>
                <nav>
                    <ul id="menuitems">
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="account.html">Account</a></li>
                    </ul>
                </nav>
                <div className="icon">
                    <FaUser/>
                </div>
            </div>
        </div>
    </div>
  )
}

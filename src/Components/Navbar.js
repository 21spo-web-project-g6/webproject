import React from 'react'
import NavbarCSS from '../Styles/Navbar.module.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className={NavbarCSS.navbar}>
    <h1>Webproject</h1>
    <div id="links">
        <Link to="/" >Home</Link>
        <Link to="/login" >Log in</Link>
        <Link to="/register" >Register</Link>
    </div>
</nav>
  )
}

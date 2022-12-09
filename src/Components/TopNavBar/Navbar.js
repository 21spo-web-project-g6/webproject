import { useState } from 'react'
import {Link} from 'react-router-dom'
import NavbarCSS from './Navbar.module.css'


export default function Navbar() {
  const [isNavExp, setIsNavExp] = useState(false)

  return (
    <nav className={NavbarCSS.navigation}>
      <Link to="/" className={NavbarCSS.pName}>Webproject</Link>
        <button 
          className={NavbarCSS.hamburger}
          onClick={() =>{
            setIsNavExp(!isNavExp)
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
        className={
          isNavExp ? `${NavbarCSS.menu} ${NavbarCSS.expanded}` : NavbarCSS.menu
          }>
        <ul>
          <li>
            <Link to="/" >HOMEPAGE</Link>
          </li>
          <li>
            <Link to="/login" >LOGIN</Link>
          </li>
          <li>
            <Link to="/register" >REGISTER</Link>
          </li>
        </ul>
      </div>
  </nav>
  )
}

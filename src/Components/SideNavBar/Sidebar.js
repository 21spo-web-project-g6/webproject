import {Link} from 'react-router-dom'
import { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { SidebarData } from './SidebarData'
import SideCSS from '../Styles/Sidebar.module.css'

export default function Sidebar() {
  const [isNavExp, setIsNavExp] = useState(false)

  return (
    <nav className={SideCSS.navigation}>
      <Link to="/" className={SideCSS.pName}>Webproject</Link>
        {/* <button 
          className={SideCSS.hamburger}
          onClick={() =>{
            setIsNavExp(!isNavExp)
          }}
        >
          <MdMenu />
        </button> */}
        <div
        className={
          isNavExp ? `${SideCSS.menu} ${SideCSS.expanded}` : SideCSS.menu
          }>
            <ul>
              { SidebarData.map((item, i) => {
                return (
                  <li key={i} className={SideCSS.row}>
                    <Link to={ item.path }>
                      { item.icon }
                      { item.title }
                    </Link>
                  </li>
                )
              })}
            </ul>
      </div>
  </nav>
  )
}

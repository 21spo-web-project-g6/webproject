import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import SideCSS from '../Styles/Sidebar.module.css'

export default function Sidebar() {
  return (
    <>
      <div className={SideCSS.pNameWrap}>
        <Link to="/" className={SideCSS.pName}>CLIMATEAPP</Link>
      </div>
      <nav className={SideCSS.navigation}>
        <div className={SideCSS.menu}>
          <ul>
            {SidebarData.map((item, i) => {
              return (
                <li key={i} className={SideCSS.row} >
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

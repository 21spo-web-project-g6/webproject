import Sidebar from '../Components/Sidebar'
import SideNavBar from '../Components/SideNavBar/SideNavBar'
import V5 from '../Components/V5'

import GraphCSS from '../Styles/Graph.module.css'

export default function V5Route() {
  return (
    <>
      <div className={GraphCSS.wrapper}>
        <Sidebar />
        {/* <SideNavBar /> */}
        <V5 />
      </div>
    </>
  )
}
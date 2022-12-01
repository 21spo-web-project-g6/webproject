import Sidebar from '../Components/Sidebar'
import V9 from '../Components/V9'

import GraphCSS from '../Styles/Graph.module.css'

export default function V9Route() {
  return (
    <div className={GraphCSS.wrapper}>
      <Sidebar />
      <V9 />
    </div>
  )
}
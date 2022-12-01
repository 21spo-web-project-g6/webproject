import Sidebar from '../Components/Sidebar'
import V5 from '../Components/V5'

import GraphCSS from '../Styles/Graph.module.css'

export default function V5Route() {
  return (
    <div className={GraphCSS.wrapper}>
      <Sidebar />
      <V5 />
    </div>
  )
}
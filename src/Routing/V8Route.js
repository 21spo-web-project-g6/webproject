import Sidebar from '../Components/Sidebar'
import V8 from '../Components/V8'

import GraphCSS from '../Styles/Graph.module.css'

export default function V8Route() {
  return (
    <div className={GraphCSS.wrapper}>
      <Sidebar />
      <V8 />
    </div>
  )
}
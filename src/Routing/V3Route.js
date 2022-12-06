import Sidebar from '../Components/Sidebar'
import V3 from '../Components/V3'

import GraphCSS from '../Styles/Graph.module.css'

export default function V3Route() {
  return (
    <>
      <div className={GraphCSS.wrapper}>
        <Sidebar />
        <V3 />
      </div>
    </>
  )
}
import Sidebar from '../Components/Sidebar'
import V1 from '../Components/V1'

import GraphCSS from '../Styles/Graph.module.css'

export default function V1Route() {
  return (
    <>
      <div className={GraphCSS.wrapper}>
        <Sidebar />
        <V1 />
      </div>
    </>
  )
}
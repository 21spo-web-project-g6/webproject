import Sidebar from '../Components/Sidebar'
import V6 from '../Components/V6'

import GraphCSS from '../Styles/Graph.module.css'

export default function V6Route() {
  return (
    <>
      <div className={GraphCSS.wrapper}>
        <Sidebar />
        <V6 />
      </div>
    </>
  )
}
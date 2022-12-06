import Sidebar from '../Components/Sidebar'
import V7 from '../Components/V7'

import GraphCSS from '../Styles/Graph.module.css'

export default function V7Route() {
  return (
    <>
      <div className={GraphCSS.wrapper}>
        <Sidebar />
        <V7 />
      </div>
    </>
  )
}
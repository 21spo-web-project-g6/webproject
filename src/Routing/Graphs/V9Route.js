import SideNavBar from '../../Components/SideNavBar/SideNavBar'
import GraphHeader from '../../Components/Graphs/GraphHeader/GraphHeader'
import V8 from '../../Components/Graphs/V9'

import GraphCSS from '../../Components/Graphs/Graph.module.css'

export default function V9Route() {
  return (
    <>
      <div className={GraphCSS.wrapper}>
        <SideNavBar />
        <GraphHeader />
        <V8 />
      </div>
    </>
  )
}
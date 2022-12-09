import SideNavBar from '../../Components/SideNavBar/SideNavBar'
import GraphHeader from '../../Components/Graphs/GraphHeader/GraphHeader'
import V3 from '../../Components/Graphs/V3'

import GraphCSS from '../../Components/Graphs/Graph.module.css'

export default function V3Route() {
  return (
    <>
      <div className={GraphCSS.wrapper}>
        <SideNavBar />
        <GraphHeader />
        <V3 />
      </div>
    </>
  )
}
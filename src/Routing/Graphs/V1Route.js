import SideNavBar from '../../Components/SideNavBar/SideNavBar'
import GraphHeader from '../../Components/Graphs/GraphHeader/GraphHeader'
import V1 from '../../Components/Graphs/V1'

import GraphCSS from '../../Components/Graphs/Graph.module.css'

export default function V1Route() {
  return (
    <>
      <div className={GraphCSS.wrapper}>
        <SideNavBar />
        <GraphHeader />
        <V1 />
      </div>
    </>
  )
}
import SideNavBar from '../../Components/SideNavBar/SideNavBar'
import GraphHeader from '../../Components/Graphs/GraphHeader/GraphHeader'
import V7 from '../../Components/Graphs/V7'

import GraphCSS from '../../Components/Graphs/Graph.module.css'

export default function V7Route() {
  return (
    <>
      <div className={GraphCSS.wrapper}>
        <SideNavBar />
        <GraphHeader />
        <V7 />
      </div>
    </>
  )
}
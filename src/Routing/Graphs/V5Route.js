import SideNavBar from '../../Components/SideNavBar/SideNavBar'
import GraphHeader from '../../Components/Graphs/GraphHeader/GraphHeader'
import V5 from '../../Components/Graphs/V5'

import GraphCSS from '../../Components/Graphs/Graph.module.css'

export default function V5Route() {
  return (
    <>
      <div className={GraphCSS.wrapper}>
        <SideNavBar />
        <GraphHeader />
        <V5 />
      </div>
    </>
  )
}
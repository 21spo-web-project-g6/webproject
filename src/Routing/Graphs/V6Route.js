import SideNavBar from '../../Components/SideNavBar/SideNavBar'
import GraphHeader from '../../Components/Graphs/GraphHeader/GraphHeader'
import V6 from '../../Components/Graphs/V6'

import GraphCSS from '../../Components/Graphs/Graph.module.css'

export default function V6Route() {
  return (
    <>
      <div className={GraphCSS.wrapper}>
        <SideNavBar />
        <GraphHeader />
        <V6 />
      </div>
    </>
  )
}
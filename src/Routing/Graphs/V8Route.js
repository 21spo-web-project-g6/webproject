import SideNavBar from '../../Components/SideNavBar/SideNavBar'
import GraphHeader from '../../Components/Graphs/GraphHeader/GraphHeader'
import V8 from '../../Components/Graphs/V8'

import GraphCSS from '../../Components/Graphs/Graph.module.css'

export default function V8Route() {
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
import SideNavBar from '../../Components/SideNavBar/SideNavBar'
import GraphHeader from '../../Components/Graphs/GraphHeader/GraphHeader'
import V from '../../Components/Graphs/V'

import GraphCSS from '../../Components/Graphs/Graph.module.css'

export default function VRoute() {
  return (
    <>
      <div className={GraphCSS.wrapper}>
        <SideNavBar />
        <GraphHeader />
        <V />
      </div>
    </>
  )
}
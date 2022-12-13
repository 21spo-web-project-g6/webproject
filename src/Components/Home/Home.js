import { Link } from 'react-router-dom'
import HomeCSS from './Home.module.css'

export default function Home() {
  return (
    <div className={HomeCSS.container}>
      <div className={HomeCSS.containerItem}>
        <h1>Welcome to ClimateApp</h1>
        <Link to="/v" >visualizations here</Link>
      </div>
    </div>
  )
}

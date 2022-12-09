import React from 'react'
import { Link } from 'react-router-dom'
import GraphCSS from '../Graph.module.css'

export default function GraphHeader() {
  return (
    <div className={GraphCSS.pNameWrapper}>
        <Link to='/' className={GraphCSS.pName}>CLIMATEAPP</Link>
    </div>
  )
}

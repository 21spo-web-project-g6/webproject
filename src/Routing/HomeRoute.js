import React from 'react'

import HomeCSS from '../Styles/Home.module.css'

export default function HomeRoute() {
  return (
      <div className={HomeCSS.container}>
        <div className={HomeCSS.content}>
          <img src="../Images/bg.png" width="200px"/>
        </div>
      </div>
  )
}

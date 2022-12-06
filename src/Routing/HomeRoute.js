import Navbar from '../Components/Navbar'

import HomeCSS from '../Styles/Home.module.css'

export default function HomeRoute() {
  return (
    <>
      <Navbar />
      <div className={HomeCSS.container}>
        <article className={HomeCSS.containerItem}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dicta qui a laudantium exercitationem repudiandae dolore
            voluptate nobis recusandae? Unde repudiandae dolores nemo
            saepe fugit aliquam nihil voluptatem quaerat voluptate sint.
          </p>
        </article>
        <article className={HomeCSS.containerItem}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dicta qui a laudantium exercitationem repudiandae dolore
            voluptate nobis recusandae? Unde repudiandae dolores nemo
            saepe fugit aliquam nihil voluptatem quaerat voluptate sint.
          </p>
        </article>
        <article className={HomeCSS.containerItem}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dicta qui a laudantium exercitationem repudiandae dolore
            voluptate nobis recusandae? Unde repudiandae dolores nemo
            saepe fugit aliquam nihil voluptatem quaerat voluptate sint.
          </p>
        </article>
        <article className={HomeCSS.containerItem}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dicta qui a laudantium exercitationem repudiandae dolore
            voluptate nobis recusandae? Unde repudiandae dolores nemo
            saepe fugit aliquam nihil voluptatem quaerat voluptate sint.
          </p>
        </article>
      </div>
    </>

  )
}

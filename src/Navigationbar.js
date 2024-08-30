import React,{useEffect} from 'react'

const Navigationbar = () => {

  useEffect(() => {
    let scripts = [ {src:"assets/js/main.js"},
      {src:"assets/vendor/bootstrap/js/bootstrap.bundle.min.js"},   
      {src:"assets/vendor/aos/aos.js"},
      {src:"assets/vendor/glightbox/js/glightbox.min.js"},
      {src:"assets/vendor/purecounter/purecounter_vanilla.js"},
      {src:"assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"},
      {src:"assets/vendor/isotope-layout/isotope.pkgd.min.js"},
      {src:"assets/vendor/swiper/swiper-bundle.min.js"},
    ]

  scripts.map(item => {
    const script = document.createElement("script")
    script.src = item.src
    script.async = false
    script.defer = false
    document.body.appendChild(script)
  })
  },[])
  
  return (
    <div>
     <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
       
     
        <h1 className="sitename">Hidayah</h1>
      </a>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

    </div>
  </header>

    </div>
  )
}

export default Navigationbar

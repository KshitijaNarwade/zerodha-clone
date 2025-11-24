import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container-fluid m-0'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom" style={{ paddingLeft: "10%", paddingRight: "10%" }}>

        <div className="d-flex justify-content-between align-items-center w-100">

          <a className="navbar-brand mx-3" href="#">
            <img src="/media/images/logo.svg" style={ { width: "20%" } } alt='logo' />
          </a>

          <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>


        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav me-5 mb-2 mb-lg-0 d-flex flex-row align-items-center gap-4">
            <li className="nav-item"><Link className="nav-link active" to="/signup">SignUp</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/product">Product</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/pricing">Pricing</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/support">Support</Link></li>
          </ul>

        </div>


      </nav>
    </div>



  )
}

export default Navbar

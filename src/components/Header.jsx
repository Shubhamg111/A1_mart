import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  return (
    <>
       {/* <!-- start of Header --> */}
 <header id="header" className="header px-5 mb-5">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="/images/logo.jpg" alt="logo" width="30px" height="" className='rounded-top-circle me-2' /><span className='fs-3 color'>A1 Market</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className={`${location.pathname == '/' ? 'active': ''} nav-link`} aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className={`${location.pathname == '/products' ? 'active': ''} nav-link`} href="/products">Products</a>
            </li>

            <li className="nav-item">
              <a className={`${location.pathname == '/cart' ? 'active': ''} nav-link`} href="/cart">Cart</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>

          <div className="d-flex">
            <a href="./login.html" className="btn px-3 btn-sm me-2 login">Login</a>
            <a href="/register" className="btn btn-light btn-sm">Register</a>
          </div>

        </div>
      </div>
    </nav>
  </header>
  {/* <!-- end of Header --> */}

    </>
  )
}

export default Header

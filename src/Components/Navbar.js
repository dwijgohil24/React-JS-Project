import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faCircleExclamation,faMagnifyingGlass,faPhone} from '@fortawesome/free-solid-svg-icons'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                TextUtils
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <a className="nav-link active" aria-current="page" href="/">
                <FontAwesomeIcon icon={faHome}/>Home
                </a>
                <a className="nav-link" href="/">
                <FontAwesomeIcon icon={faCircleExclamation}/> About Us
                </a>
                <a className="nav-link" href="/">
                    <FontAwesomeIcon icon={faPhone}/> Contact Us
                </a>
              </ul>
              
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
  )
}
export default Navbar;

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} data-bs-theme="${props.mode}">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/About">{props.aboutText}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/Contact">Contact</a>
              </li>

            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
              {/* <div className="btn-group" role="group" aria-label="Basic mixed styles example">
              <button type="button" className="btn btn-danger">Enable Red Mode</button>
              <button type="button" onClick={props.toggleMode} className="btn btn-primary">Enable Blue Mode */}
                <div className={`form-check form-switch text-${props.mode ==='light'?'blue':'light'}`}>
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
               {/* </button>
              <button type="button" className="btn btn-success">Enable Green Mode</button>
              <button type="button" className="btn btn-dark">Enable Dark Mode</button>
              <button type="button" className="btn btn-light">Enable Light Mode</button>
            </div> */}
          </div>
        </div>
      </nav>
    )
  }

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string
}
Navbar.defaultProps = { title: 'Set title here',
                        aboutText: 'About'
}
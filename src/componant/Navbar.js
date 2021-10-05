import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      {/* used template literal */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://www.imaxx.live/">Todo</a>
            </li>
          </ul>

        </div>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark mode</label>
        </div>
      </div>

    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Featur: PropTypes.string,

}

Navbar.defaultProps = {
  title: 'Set title here',
};
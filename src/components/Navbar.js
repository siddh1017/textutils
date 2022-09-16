import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


/*props -> takes the  protperties as the input */
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-dark bg-${props.mode} navbar-expand-lg`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          {/* <a className="navbar-brand" href="#">{props.title}</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-dark" type="submit">Search</button>
            </form> */}
            <div className="form-check form-switch text-light">
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

/*constraining the types of input varaibles */
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}
// .isRequired will compulsory ask to set the title...if there is no default props then it will give error 

// assigns the default values to the props
Navbar.defaultProps = {
  title: "Set your titles here",
  about: "About page"
}
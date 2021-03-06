import React from 'react'
import { Link } from 'react-router'

// Components
import NavBarRight from './header/NavBarRight'
import NavBarRightLoggedIn from './header/NavBarRightLoggedIn'

const Header = (props) => {
  const { loggedIn, signOut } = props
  const headerLinks = (loggedIn) ? (<NavBarRightLoggedIn signOut={signOut} />) : (<NavBarRight />)

  return (
    <nav className="Header navbar navbar-default navbar-static-top">
      <div className="HeaderContainer container">
        <div className="NavBarHeader navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand em-text" to="/">
            <img alt="3D Ears" className="Logo" src="assets/images/logo.png" />
          </Link>
        </div>
        <div id="navbar" className="NavBarCollapse collapse navbar-collapse">
          {headerLinks}
        </div>
      </div>
    </nav>
  )
}

export default Header
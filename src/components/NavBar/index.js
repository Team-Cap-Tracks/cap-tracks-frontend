import React from 'react'
import { Nav, NavLink, NavMenu } from './NavBarElements'

const NavBar = () => {
  return (
    <>
      <Nav>
      <NavLink to='/back' activeStyle>
            <i className="bi bi-arrow-left-square-fill"></i>
          </NavLink>
        <NavLink to='/'>
          <h1>Cap Tracks</h1>
        </NavLink>
        <NavMenu>

          <NavLink to='/map' activeStyle>
          <i className="bi bi-map"></i>
          </NavLink>
          <NavLink to='/profiles' activeStyle>
          <i className="bi bi-person-circle"></i>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default NavBar


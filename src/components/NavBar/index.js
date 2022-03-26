import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavLink, NavMenu } from './NavBarElements'

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Logo</h1>
        </NavLink>
        <NavMenu>
          <NavLink to='/' activeStyle>
            <i className="bi bi-arrow-left-square-fill"></i>
          </NavLink>
          <NavLink to='/' activeStyle>
            Cap Tracks
          </NavLink>
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
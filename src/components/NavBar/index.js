import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Logo</h1>
        </NavLink>
        <Bars />
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
        </NavMenu>
      </Nav>
    </>
  )
}

export default NavBar
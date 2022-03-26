import React from 'react'
import { Nav, NavLink, NavLinkLeft, NavMenu } from './NavBarElements'

const NavBar = ({user}) => {
  return (
    <>
      {user ?
        <Nav>
          <NavLinkLeft to='/back' activeStyle>
            <i className="bi bi-arrow-left-square-fill"></i>
          </NavLinkLeft>
          <NavLink to='/'>
            <h1>Cap Tracks</h1>
          </NavLink>
          <NavMenu>
            <NavLink to='/map' activeStyle>
              <i class="bi bi-calendar"></i>
            </NavLink>
            <NavLink to='/map' activeStyle>
              <i className="bi bi-map"></i>
            </NavLink>
            <NavLink to='/profiles' activeStyle>
              <i className="bi bi-person-circle"></i>
            </NavLink>
          </NavMenu>
        </Nav>
      :
        <Nav>
        <NavLinkLeft to='/back' activeStyle>
            <i className="bi bi-arrow-left-square-fill"></i>
          </NavLinkLeft>
          <NavLink to='/'>
            <h1>Cap Tracks</h1>
          </NavLink>
          <NavMenu>
            <NavLink to='/map' activeStyle>
              <i className="bi bi-map"></i>
            </NavLink>
            <NavLink to='/login' activeStyle>
              Login
            </NavLink>
          </NavMenu>
        </Nav>
      }
    </>
  )
}

export default NavBar


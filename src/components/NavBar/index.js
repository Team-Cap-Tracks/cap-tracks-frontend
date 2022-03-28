import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Nav, NavLink, NavLinkLeft, NavMenu } from './NavBarElements'


const NavBar = ({user}) => {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <>
      {user ?
        <Nav>
          <NavLinkLeft to='' onClick={handleGoBack}>
            <i className="bi bi-arrow-left-square-fill"></i>
            
          </NavLinkLeft>
          <NavLink to='/'>
            <p className="cap">Cap - Tracks</p>
          </NavLink>
          <NavMenu>
            <NavLink to='/lines'>
              <i className="bi bi-calendar"></i>
            </NavLink>
            <NavLink to='/map'>
              <i className="bi bi-map"></i>
            </NavLink>
            <NavLink to='/profiles'>
              <i className="bi bi-person-circle"></i>
            </NavLink>
          </NavMenu>
        </Nav>
      :
        <Nav>
        <NavLinkLeft to='/back'>
            <i className="bi bi-arrow-left-square-fill"></i>
          </NavLinkLeft>
          <NavLink to='/'>
            <h1>Cap Tracks</h1>
          </NavLink>
          <NavMenu>
            <NavLink to='/lines'>
              <i className="bi bi-calendar"></i>
            </NavLink>
            <NavLink to='/map'>
              <i className="bi bi-map"></i>
            </NavLink>
            <NavLink to='/login'>
              <i className="bi bi-person-circle"></i>
            </NavLink>
          </NavMenu>
        </Nav>
      }
    </>
  )
}

export default NavBar


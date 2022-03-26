import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <header className="Nav-Bar">
      {user ?
        <nav>
          <ul className='ulclass'>
            <li><i className="bi bi-arrow-left-square-fill"></i></li>
            <li>Cap Tracks</li>
            <li><i className="bi bi-map"></i></li>
            <li><Link to="/profiles"><i className="bi bi-person-circle"></i></Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul className='ulclass-no-user'>
            <li><i className="bi bi-arrow-left-square-fill"></i></li>
            <li>Cap Tracks</li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
      </header>
    </>
  )
}

export default NavBar

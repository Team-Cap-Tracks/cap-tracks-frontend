import { Link } from 'react-router-dom'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <header className="Nav-Bar">
      {user ?
        <nav>
          <ul className='ulclass'>
            {/* <li>Welcome, {user.name}</li> */}
            <li><i className="bi bi-arrow-left-square-fill"></i></li>
            <li>Cap-Tracks</li>
            <li><i className="bi bi-map"></i></li>
            <li><Link to="/profiles"><i className="bi bi-person-circle"></i></Link></li>
            {/* <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li> */}
          </ul>
        </nav>
      :
        <nav>
          <ul>
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

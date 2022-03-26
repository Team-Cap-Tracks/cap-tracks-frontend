import { Link } from 'react-router-dom'

const Profiles = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      <ul>
      <li>Welcome, {user.name}</li>
      <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
      <li><Link to="/changePassword">Change Password</Link></li>
      </ul>
      :
      <h1>No User</h1>
      }
    </>
  )
}

export default Profiles
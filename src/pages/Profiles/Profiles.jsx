import { Link } from 'react-router-dom'
import styles from './Profiles.module.css'

const Profiles = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      <>
      <ul>
      <li className={styles.welcome}>Welcome, {user.name}</li>
      <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
      <li><Link to="/changePassword">Change Password</Link></li>
      </ul>
      <button>Create Ticket</button>
      </>
      :
      <h1>No User</h1>
      }
    </>
  )
}

export default Profiles
import { Link } from 'react-router-dom'
import styles from './Profiles.module.css'
import TicketForm from '../../components/TicketForm/TicketForm'

const Profiles = ({ user, handleLogout, lines }) => {
  return (
    <>
      {user ?
      <>
      <ul>
      <li className={styles.welcome}>Welcome, {user.name}</li>
      <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
      <li><Link to="/changePassword">Change Password</Link></li>
      </ul>
      <TicketForm lines={lines}/>
      </>
      :
      <h1>No User</h1>
      }
    </>
  )
}

export default Profiles
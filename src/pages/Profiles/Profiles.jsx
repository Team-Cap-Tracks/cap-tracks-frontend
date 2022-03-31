import { Link } from 'react-router-dom'
import styles from './Profiles.module.css'
import TicketForm from '../../components/TicketForm/TicketForm'
import TicketList from '../../components/TicketList/TicketList'

const Profiles = ({ user, handleLogout, lines, handleAddTicket, tickets }) => {
  return (
    <>
      {user ?
      <>
      <ul>
      <li className={styles.welcome}>Welcome, {user.name}</li>
      <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
      <li><Link to="/changePassword">Change Password</Link></li>
      </ul>
      <TicketList tickets={tickets}/>
      <TicketForm lines={lines} handleAddTicket={handleAddTicket}/>
      </>
      :
      <h1>No User</h1>
      }
    </>
  )
}

export default Profiles
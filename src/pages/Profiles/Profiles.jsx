import { Link } from 'react-router-dom'
import styles from './Profiles.module.css'
import TicketForm from '../../components/TicketForm/TicketForm'
import TicketList from '../../components/TicketList/TicketList'

const Profiles = ({ user, handleLogout, lines, handleAddTicket, tickets, handleDelete, handleUpdateTicket }) => {
  return (
    <>
      {user ?
      <>
      <div className="container">
        <div className='welcome'>
          <ul>
            <li className={styles.welcome}>Welcome, {user.name}</li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
          </ul>
        </div>
        <div className='ticket-form'>
          <TicketForm lines={lines} handleAddTicket={handleAddTicket}/>
        </div>
        <div className='ticket-list'>
          <TicketList tickets={tickets} handleDelete={handleDelete} lines={lines} handleUpdateTicket={handleUpdateTicket}/>
        </div>
      </div>
      </>
      :
      <h1>Please login</h1>
      }
    </>
  )
}

export default Profiles
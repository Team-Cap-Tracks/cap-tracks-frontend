import React from 'react'
import { Link } from 'react-router-dom'
import styles from './TicketCard.module.css'

const TicketCard = ({ticket, handleDelete, lines, handleUpdateTicket}) => {
  return (
    <>
    <div className={styles.ticketcard}>
      <p>Origin: {ticket.startStation} Destination: {ticket.endStation}</p>
      <button className={styles.button} onClick={() => handleDelete(ticket._id)}>Delete Ticket</button>
      <Link 
        to='/editTicket'
        state={{ticket}}
        
      >
        <button>Update Ticket</button>
      </Link>
    </div>
    </>
  )
}

export default TicketCard
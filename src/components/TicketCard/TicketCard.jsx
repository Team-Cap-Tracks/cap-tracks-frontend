import React from 'react'
import { Link } from 'react-router-dom'

const TicketCard = ({ticket, handleDelete, lines}) => {
  return (
    <>
    <p>Origin: {ticket.startStation} Destination: {ticket.endStation}</p>
    <button onClick={() => handleDelete(ticket._id)}>Delete Ticket</button>
    <Link 
      to='/editTicket'
      state={{ticket}}
      lines={lines}
    >
      Edit
    </Link>
    </>
  )
}

export default TicketCard
import React from 'react'
import { Link } from 'react-router-dom'

const TicketCard = ({ticket, handleDelete}) => {
  return (
    <>
    <p>Origin: {ticket.startStation} Destination: {ticket.endStation}</p>
    <button onClick={() => handleDelete(ticket._id)}>Delete Ticket</button>
    <Link 
      to='/editTicket'
      state={{ticket}}
    />
    </>
  )
}

export default TicketCard
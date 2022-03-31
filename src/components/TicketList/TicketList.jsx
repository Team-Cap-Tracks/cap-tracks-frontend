import React from 'react'
import TicketCard from '../TicketCard/TicketCard'

const TicketList = (props) => {
  return (
    <>
    {props.tickets.map(ticket => (
      <TicketCard 
      key={ticket._id}
      ticket={ticket}
      handleDelete={props.handleDelete}
      // lines={props.lines}
      handleUpdateTicket={props.handleUpdateTicket}
      />
    ))}
    </>
  )
}

export default TicketList
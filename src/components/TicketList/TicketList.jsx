import React from 'react'
import TicketCard from '../TicketCard/TicketCard'

const TicketList = (props) => {
  return (
    <>
    <TicketCard />
    {props.tickets.map(ticket => (
     <p>{ticket.startStation}</p>
    ))}
    </>
  )
}

export default TicketList
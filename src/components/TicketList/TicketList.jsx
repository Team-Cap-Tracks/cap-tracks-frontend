import React from 'react'
import * as ticketService from '../../services/ticketService'

const TicketList = (props) => {
  console.log(props.tickets)
  return (
    <>
    {props.tickets.map(ticket => (
     <p>{ticket.startStation}</p>
    ))}
    </>
  )
}

export default TicketList
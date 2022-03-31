import React from 'react'

const TicketList = (props) => {
  return (
    <>
    {props.tickets.map(ticket => (
     <p>{ticket.startStation}</p>
    ))}
    </>
  )
}

export default TicketList
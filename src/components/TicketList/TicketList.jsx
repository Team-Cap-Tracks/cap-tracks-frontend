import React from 'react'
import TicketCard from '../TicketCard/TicketCard'

const TicketList = (props) => {
  return (
    <>
    {props.tickets.map(ticket => (
      <TicketCard ticket={ticket}/>
    ))}
    </>
  )
}

export default TicketList
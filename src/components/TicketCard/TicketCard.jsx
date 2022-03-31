import React from 'react'

const TicketCard = (props) => {
  console.log(props.startStation)
  return (
    <>
    <p>Origin: {props.ticket.startStation} Destination: {props.ticket.endStation}</p>
    <button onClick={() => props.handleDelete(props.ticket._id)}>Delete Ticket</button>
    </>
  )
}

export default TicketCard
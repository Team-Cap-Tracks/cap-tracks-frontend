import React from 'react'

const TicketCard = (props) => {
  console.log(props.startStation)
  return (
    <>
    <p>{props.ticket.startStation}</p>
    <button onClick={() => props.handleDelete(props.ticket._id)}>Delete Ticket</button>
    </>
  )
}

export default TicketCard
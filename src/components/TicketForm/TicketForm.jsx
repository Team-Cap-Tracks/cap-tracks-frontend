import React from 'react'

const TicketForm = () => {
  return (
    <>
        <div>Ticket Form</div>
        <form>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">Origin</select>
            <select>Destination</select>
        </form>
    </>
  )
}

export default TicketForm


import React from 'react'

const TicketForm = ({lines}) => {
    console.log(lines)
  return (
    <>
        <div>Ticket Form</div>
        <form>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                Origin: 
                {lines.map(lines => { 
                    return (
                        <option>{lines.line}</option>
                    )
                })}
            </select>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                Destination:
                {lines.map(lines => { 
                    return (
                        <option>{lines.line}</option>
                    )
                })}
            </select>
            <button>Create Ticket</button>
        </form>
    </>
  )
}

export default TicketForm


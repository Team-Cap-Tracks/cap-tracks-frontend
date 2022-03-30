import React, { useState } from 'react'
import { useState } from 'react/cjs/react.production.min'

const TicketForm = ({lines}) => {
    const [formLine, setFormLine] = useState([''])
    const [selectedLine, setSelectedLine] = useState('')

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
                
            </select>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                Destination:
                {lines.map(lines => { 
                    return (
                        <option>{lines.line}</option>
                    )
                })}
            </select>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                
            </select>
            <button>Create Ticket</button>
        </form>
    </>
  )
}

export default TicketForm


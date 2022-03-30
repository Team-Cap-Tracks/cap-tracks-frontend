import React, { useState, useEffect } from 'react'


const TicketForm = ({lines}) => {
    const [currentLine, setCurrentLine ] = useState('red')
    const [selectedLine, setSelectedLine] = useState('')

    const checkInsertInArray = newLine => {
        let findStatus = currentLine.find(x => {
            return x === newLine
        })
    }

    const lineChange = (event) => {
        if (event.target.value) {
            setSelectedLine(event.target.value)
        }
    }

    useEffect(() => {
        Object.keys(lines).forEach(line => {
            lineChange(line)
        })
    }, [lines])

  return (
    <>
        <div>Ticket Form</div>
        <form>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                Origin: 
                {lines.map(lines => { 
                    return (
                        <option >{lines.line}</option>
                    )
                })}
            </select>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option></option>
            </select>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                Destination:
                {lines.map(lines => { 
                    return (
                        <option >{lines.line}</option>
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


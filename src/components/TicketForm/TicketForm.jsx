import React, { useState, useEffect } from 'react'


const TicketForm = ({lines}) => {
    const [stations, setStations] = useState([])
    const [selectedLine, setSelectedLine] = useState('')
    const [selectedStation, setSelectedStation] = useState('')

    const checkInsertInArray = newLine => {
        let findStatus = currentLine.find(x => {
            return x === newLine
        })
        if (!findStatus)
            setCurrentLine([currentLine, setCurrentLine])
    }

    const lineChange = (event) => {
        if (event.target.value) {
            setSelectedLine(event.target.value)
            console.log(event.target.value);
        }
    }

    useEffect(() => {
        Object.keys(lines).forEach(line => {
            checkInsertInArray(line)
        })
    }, [])

    

  return (
    <>
        <div>Ticket Form</div>
        <form>
            <select onChange={lineChange} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                Origin: 
                {lines.map(lines => { 
                    return (
                        <option value=''>{lines.line}</option>
                    )
                })}
            </select>
            {selectedLine ? 
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                {lines[selectedLine].map(allStations => {
                    return <option>{allStations}</option>
                })}
                
            </select>
            :
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">

            </select>
}
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


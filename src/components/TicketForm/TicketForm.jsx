import React, { useState } from 'react'


const TicketForm = ({lines}) => {
    const [stations, setStations] = useState([])
    const [selectedLine, setSelectedLine] = useState('')
    const [selectedStation, setSelectedStation] = useState('')

    const lineList = lines.map(line => ({
       name: line.line,
       station: line.Stations

    }))
    console.log(lineList);

    function handleLineSelect(event) {
        console.log('Selected Line', event.target.value)
        const lineSel = event.target.value
        const stationsSel = lineSel !== '' ? {lines}[lineSel] : []
        setSelectedLine(lineSel)
        setStations(stationsSel)
        setSelectedStation('')
    }

    function handleStationSelect(event) {
        console.log('Selected station', event.target.value);
        const stationSel = event.target.value
        setSelectedStation(stationSel)
    }

  return (
    <>
        <div>Ticket Form</div>
        <form>
            <select 
            name='Lines' 
            onChange={event => handleLineSelect(event)} 
            value={selectedLine} 
            className="form-select form-select-lg mb-3" 
            aria-label=".form-select-lg example">
                Origin: 
                <option value=''>Select the Line</option>
                {lineList.map((lines, key) => (
                    <option key={lines.line} value={lines.name}>{lines.name}</option>
                    
                ))}
            </select>
            <select 
            name='Stations' 
            onChange={event => handleStationSelect(event)}
            value={selectedStation}
            className="form-select form-select-lg mb-3" 
            aria-label=".form-select-lg example"
            >
                <option value=''>Select the Station</option>
                

            </select>

            <button>Create Ticket</button>
        </form>
    </>
  )
}

export default TicketForm


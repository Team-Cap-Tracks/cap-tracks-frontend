import React, { useState } from 'react'


const TicketForm = ({lines}) => {
    const [stations, setStations] = useState([])
    const [selectedLine, setSelectedLine] = useState('')
    const [selectedStation, setSelectedStation] = useState('')

    const lineList = lines.map(line => ({
       name: line.line,
       stations: line.Stations
    }))

    function handleLineSelect(event) {
        const lineSel = event.target.value
        const stationsSel = lineSel !== '' ? lines[lineSel] : []
        setSelectedLine(lineSel)
        setStations(stationsSel)
        setSelectedStation('')
    }

    function handleStationSelect(event) {
        const stationSel = event.target.value
        setSelectedStation(stationSel)
    }

  return (
    <>
        <div>Ticket Form</div>
            <label>Origin:</label>
        <form>
            <label>Line</label>
                <select 
                name='Lines' 
                onChange={event => handleLineSelect(event)} 
                value={selectedLine} 
                className="form-select form-select-lg mb-3" 
                aria-label=".form-select-lg example">
                    Origin: 
                    <option value=''>Select the Line</option>
                    {lineList.map((lines, idx) => (
                        <option key={idx} value={lines.name}>{lines.name}</option>
                    ))}
                </select>
            <label>Station</label>
                <select 
                name='Stations' 
                onChange={event => handleStationSelect(event)}
                value={selectedStation}
                className="form-select form-select-lg mb-3" 
                aria-label=".form-select-lg example"
                >
                    <option value=''>Select the Station</option>
                    {lineList.filter(( line ) => line.name === selectedLine)
                        .map((station) => {
                            return <>
                                {station.stations.map(({ Name }) => (
                                    <option>{Name}</option>
                                ))}
                                </>
                        })}
                </select>
                <label>Enter the Date you will be riding here!</label>
                <input type='datetime-local'></input>
            <button>Create Ticket</button>
        </form>
    </>
  )
}

export default TicketForm


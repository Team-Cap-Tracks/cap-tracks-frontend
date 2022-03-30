import React, { useState } from 'react'


const TicketForm = ({lines}) => {
    const [stations, setStations] = useState([])
    const [selectedLine, setSelectedLine] = useState('')
    const [selectedStation, setSelectedStation] = useState('')

    const lineList = lines.map(line => ({
       name: line.line,
       stations: line.Stations
    }))
    console.log(lineList);

    // const stationList = lines.map(station => ({
    //     stations: station.Stations
    // }))
    // console.log(stationList);
    // console.log(lines);

    function handleLineSelect(event) {
        console.log('Selected Line', event.target.value)
        const lineSel = event.target.value
        const stationsSel = lineSel !== '' ? lines[lineSel] : []
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
                {lineList.map((lines, idx) => (
                    <option key={idx} value={lines.name}>{lines.name}</option>
                    
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
                {lineList.map((lines, idx) => (
                    <option key={idx}>{lines.stations[idx].Name}</option>
                ))}
            </select>
            <button>Create Ticket</button>
        </form>
    </>
  )
}

export default TicketForm


import { useState, useEffect, useRef } from 'react'


const TicketForm = ({lines, handleAddTicket }) => {
    const formElement = useRef()
    const [validForm, setValidForm] = useState(false)
    const [stations, setStations] = useState([])
    const [selectedLine, setSelectedLine] = useState('')
    const [selectedStation, setSelectedStation] = useState('')
    const [formData, setFormData ] = useState({
        startStation: ''
    })

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
        setFormData({...formData, startStation: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        handleAddTicket(formData)
    }

  return (
    <>
        <div>Ticket Form</div>
            <label>Origin:</label>
        <form onSubmit={handleSubmit}>
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
                className="form-select form-select-lg mb-3" 
                aria-label=".form-select-lg example"
                >
                    <option value={formData.startStation}>Select the Station</option>
                    {lineList.filter(( line ) => line.name === selectedLine)
                        .map((station) => {
                            return <>
                                {station.stations.map(({ Name }) => (
                                    <option>{Name}</option>
                                ))}
                                </>
                        })}
                </select>       
            <button type='submit'>Create Ticket</button>
        </form>
    </>
  )
}

export default TicketForm


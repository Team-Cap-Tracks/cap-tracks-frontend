import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'


const EditForm = ({lines, handleAddTicket }) => {
    const location = useLocation()
    const formElement = useRef()
    const [validForm, setValidForm] = useState(false)
    const [stations, setStations] = useState([])
    const [stations2, setStations2] = useState([])
    const [selectedLine, setSelectedLine] = useState('')
    const [selectedStation, setSelectedStation] = useState('')
    const [selectedLine2, setSelectedLine2] = useState('')
    const [selectedStation2, setSelectedStation2] = useState('')
    const [formData, setFormData ] = useState(location.state.ticket)

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

    const lineList2 = lines.map(line => ({
        name: line.line,
        stations: line.Stations
     }))
 
     function handleLineSelect2(event) {
         const lineSel2 = event.target.value
         const stationsSel2 = lineSel2 !== '' ? lines[lineSel2] : []
         setSelectedLine2(lineSel2)
         setStations2(stationsSel2)
         setSelectedStation2('')
     }
 
     function handleStationSelect2(event) {
         const stationSel2 = event.target.value
         setSelectedStation2(stationSel2)
         setFormData({...formData, endStation: event.target.value})
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
                <select 
                name='Lines' 
                onChange={event => handleLineSelect(event)} 
                value={selectedLine} 
                className="form-select form-select-lg mb-3" 
                aria-label=".form-select-lg example">
                    Origin: 
                    <option value=''>Select Origin Line</option>
                    {lineList.map((lines, idx) => (
                        <option key={idx} value={lines.name}>{lines.name}</option>
                    ))}
                </select>
                <select 
                name='Stations' 
                onChange={event => handleStationSelect(event)}
                className="form-select form-select-lg mb-3" 
                aria-label=".form-select-lg example"
                >
                    <option value={formData.startStation}>Select Origin Station</option>
                    {lineList.filter(( line ) => line.name === selectedLine)
                        .map((station) => {
                            return <>
                                {station.stations.map(({ Name }) => (
                                    <option>{Name}</option>
                                ))}
                                </>
                        })}
                </select>  
                <label>Destination</label>
                <select 
                name='Lines2' 
                onChange={event => handleLineSelect2(event)} 
                value={selectedLine2} 
                className="form-select form-select-lg mb-3" 
                aria-label=".form-select-lg example">
                    <option value=''>Select Destination Line</option>
                    {lineList2.map((lines, idx) => (
                        <option key={idx} value={lines.name}>{lines.name}</option>
                    ))}
                </select>
                <label></label>
                <select 
                name='Stations2' 
                onChange={event => handleStationSelect2(event)}
                className="form-select form-select-lg mb-3" 
                aria-label=".form-select-lg example"
                >
                    <option value={formData.endStation}>Select Destination Station</option>
                    {lineList2.filter(( line ) => line.name === selectedLine2)
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

export default EditForm
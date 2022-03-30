import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as stationTimings from '../../services/TimeTables'

const TimeTable = (props) => {
  const [schedule, setSchedule] = useState([])
  let { code } = useParams()

  useEffect(() => {
    stationTimings.getAllTimes(code)
    .then(res => setSchedule(res.StationTimes[0]))
  }, [code])

  return (
    <>
      <h1>Station Schedule</h1>
      {/* Monday */}
      <h2>Monday - Friday: Opens at {schedule?.Monday?.OpeningTime} am</h2>
      {/* First Trains */}
      <p>First Trains: {schedule?.Monday?.FirstTrains[0]?.Time} am from {schedule?.Monday?.FirstTrains[0]?.DestinationStation} {schedule?.Monday?.FirstTrains[1]?.DestinationStation} {schedule?.Monday?.FirstTrains[2]?.DestinationStation} {schedule?.Monday?.FirstTrains[3]?.DestinationStation} {schedule?.Monday?.FirstTrains[4]?.DestinationStation}</p>
      {/* Last Trains */}
      <p>Last Trains: {schedule?.Monday?.LastTrains[0]?.Time} am from {schedule?.Monday?.LastTrains[0]?.DestinationStation} {schedule?.Monday?.LastTrains[1]?.DestinationStation} {schedule?.Monday?.LastTrains[2]?.DestinationStation} {schedule?.Monday?.LastTrains[3]?.DestinationStation} {schedule?.Monday?.LastTrains[4]?.DestinationStation}</p>

      {/* Saturday */}
      <h2>Saturday: Opens at {schedule?.Saturday?.OpeningTime} am</h2>
      {/* First Trains */}
      <p>First Trains: {schedule?.Saturday?.FirstTrains[0]?.Time} am from {schedule?.Saturday?.FirstTrains[0]?.DestinationStation} {schedule?.Saturday?.FirstTrains[1]?.DestinationStation} {schedule?.Saturday?.FirstTrains[2]?.DestinationStation} {schedule?.Saturday?.FirstTrains[3]?.DestinationStation} {schedule?.Saturday?.FirstTrains[4]?.DestinationStation}</p>
      {/* Last Trains */}
      <p>Last Trains: {schedule?.Saturday?.LastTrains[0]?.Time} am from {schedule?.Saturday?.LastTrains[0]?.DestinationStation} {schedule?.Saturday?.LastTrains[1]?.DestinationStation} {schedule?.Saturday?.LastTrains[2]?.DestinationStation} {schedule?.Saturday?.LastTrains[3]?.DestinationStation} {schedule?.Saturday?.LastTrains[4]?.DestinationStation}</p>

      {/* Sunday */}
      <h2>Sunday: Opens at {schedule?.Sunday?.OpeningTime} am</h2>
      {/* First Trains */}
      <p>First Trains: {schedule?.Sunday?.FirstTrains[0]?.Time} am from {schedule?.Sunday?.FirstTrains[0]?.DestinationStation} {schedule?.Sunday?.FirstTrains[1]?.DestinationStation} {schedule?.Sunday?.FirstTrains[2]?.DestinationStation} {schedule?.Sunday?.FirstTrains[3]?.DestinationStation} {schedule?.Monday?.FirstTrains[4]?.DestinationStation}</p>
      {/* Last Trains */}
      <p>Last Trains: {schedule?.Sunday?.LastTrains[0]?.Time} am from {schedule?.Sunday?.LastTrains[0]?.DestinationStation} {schedule?.Sunday?.LastTrains[1]?.DestinationStation} {schedule?.Sunday?.LastTrains[2]?.DestinationStation} {schedule?.Sunday?.LastTrains[3]?.DestinationStation} {schedule?.Sunday?.LastTrains[4]?.DestinationStation}</p>
    </>
  )
}

export default TimeTable
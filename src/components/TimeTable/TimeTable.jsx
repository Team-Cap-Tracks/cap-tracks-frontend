import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as stationTimings from '../../services/TimeTables'

const TimeTable = (props) => {
  const [schedule, setSchedule] = useState([])
  let { code } = useParams()

  useEffect(() => {
    stationTimings.getAllTimes(code)
    .then(res => setSchedule(res.StationTimes[0]))
  }, [])

  console.log("Scheduling", schedule)
  return (
    <>
      <h1>Station Schedule</h1>
      <h2>Monday - Friday: Opens at {schedule?.Monday?.OpeningTime} am</h2>
      <p>First Trains: {schedule?.Monday?.FirstTrains[0]?.Time} am from {schedule?.Monday?.FirstTrains[0]?.DestinationStation} {schedule?.Monday?.FirstTrains[1]?.DestinationStation} {schedule?.Monday?.FirstTrains[2]?.DestinationStation} {schedule?.Monday?.FirstTrains[3]?.DestinationStation} {schedule?.Monday?.FirstTrains[4]?.DestinationStation}</p>
      {/* <p>First Trains: {schedule?.Monday?.FirstTrains[0]?.Time} am from {schedule?.Monday?.FirstTrains[1]?.DestinationStation}</p>
      <p>First Trains: {schedule?.Monday?.FirstTrains[0]?.Time} am from {schedule?.Monday?.FirstTrains[2]?.DestinationStation}</p>
      <p>First Trains: {schedule?.Monday?.FirstTrains[0]?.Time} am from {schedule?.Monday?.FirstTrains[3]?.DestinationStation}</p>
      <p>First Trains: {schedule?.Monday?.FirstTrains[0]?.Time} am from {schedule?.Monday?.FirstTrains[4]?.DestinationStation}</p> */}
      <h2>Saturday: Opens at {schedule?.Saturday?.OpeningTime} am</h2>
      <p>{schedule?.Saturday?.FirstTrains[0]?.Time} am from {schedule?.Saturday?.FirstTrains[0]?.DestinationStation} {schedule?.Saturday?.FirstTrains[1]?.DestinationStation} {schedule?.Saturday?.FirstTrains[2]?.DestinationStation} {schedule?.Saturday?.FirstTrains[3]?.DestinationStation} {schedule?.Saturday?.FirstTrains[4]?.DestinationStation}</p>
      <h2>Sunday: Opens at {schedule?.Sunday?.OpeningTime} am</h2>
    </>
  )
}

export default TimeTable
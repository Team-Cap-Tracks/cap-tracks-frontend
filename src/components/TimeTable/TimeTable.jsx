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
      <p>Monday - Friday: Opens at {schedule?.Monday?.OpeningTime} am</p>
      <p>First Trains: {schedule?.Monday?.FirstTrains[0].Time} am from {schedule?.Monday?.FirstTrains[0].DestinationStation}</p>
      <p>First Trains: {schedule?.Monday?.FirstTrains[0].Time} am from {schedule?.Monday?.FirstTrains[1].DestinationStation}</p>
      <p>Saturday: Opens at {schedule?.Saturday?.OpeningTime} am</p>
      <p>Sunday: Opens at {schedule?.Sunday?.OpeningTime} am</p>
    </>
  )
}

export default TimeTable
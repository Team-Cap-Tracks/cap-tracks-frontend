import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as stationTimings from '../../services/TimeTables'

const TimeTable = (props) => {
  const [schedule, setSchedule] = useState([])
  let { code } = useParams()

  useEffect(() => {
    stationTimings.getAllTimes(code)
    .then(monday => setSchedule(monday.StationTimes))
    // .then(tuesday => setSchedule(tuesday.StationTimes[0].Tuesday))
  }, [])

  console.log("Scheduling", schedule)
  return (
    <>
      <h1>Station Schedule</h1>
      <p>{schedule[0].Monday.OpeningTime}</p>
    </>

  )
}

export default TimeTable
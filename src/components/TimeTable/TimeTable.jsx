import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as stationTimings from '../../services/TimeTables'

const TimeTable = (props) => {
  const [schedule, setSchedule] = useState([])
  let { code } = useParams()

  useEffect(() => {
    stationTimings.getAllTimes(code)
    .then(res => setSchedule(res.StationTimes[0].Monday))
  }, [])

  console.log("Scheduling", schedule)
  return (
    <>
      <h1>Station Schedule</h1>
      <p>Monday - Friday: {schedule.OpeningTime}</p>
      <p>Monday - Friday: {schedule.OpeningTime}</p>
    </>

  )
}

export default TimeTable
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
      <p>Monday - Friday: Opens at {schedule?.Monday?.OpeningTime}</p>
      <p>Saturday: Opens at {schedule?.Saturday?.OpeningTime}</p>
      <p>Sunday: Opens at {schedule?.Sunday?.OpeningTime}</p>
    </>

  )
}

export default TimeTable
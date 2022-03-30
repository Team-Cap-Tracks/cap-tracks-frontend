// import { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import * as stationTimings from '../../services/TimeTables'

const TimeTable = (props) => {
  // let { code } = useParams()

  // useEffect(() => {
  //   stationTimings.getAllTimes(code)
  //   .then(res => console.log(res))
  // })

  console.log(props)
  return (
    <>
      <h1>Station Schedule</h1>
      {/* <p>{props.state}</p> */}
    </>

  )
}

export default TimeTable
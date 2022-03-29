import { useLocation } from 'react-router-dom'

const TimeTable = (props) => {
  let location = useLocation()
  // console.log(location.state.stationList.Code);
  console.log(props.state.timeTables.Code);
  return (
    <>
      <h1>Station Schedule</h1>
      {props.state.timeTables.map(timetable => {
        <>
          {timetable.Code}
        </>
      })}
    </>

  )
}

export default TimeTable
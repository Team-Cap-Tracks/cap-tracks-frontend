import { useLocation } from 'react-router-dom'

const TimeTable = (props) => {
  let location = useLocation()
  console.log(location.state);
  return (
    <>
      <h1>Station Schedule</h1>
    </>

  )
}

export default TimeTable
import { useLocation } from 'react-router-dom'

const StationsList = (props) => {
  let location = useLocation()
  console.log(location)
  return (
    <>
      <h1>Stations</h1>
      {location.state.line.Stations.map(stationList => {
        return (
          <>
            {stationList.Name}
            {stationList.Name}
          </>
        )
      }
      )}
      
      
    </>
)
}

export default StationsList
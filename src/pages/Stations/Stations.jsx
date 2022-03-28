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
            <h3>{stationList.Name}, {stationList.Code}</h3>
            {stationList.Address.City}
            {stationList.Address.State}
            {stationList.Address.Street}
            {stationList.Address.Zip}
          </>
        )
      }
      )}
      
      
    </>
)
}

export default StationsList
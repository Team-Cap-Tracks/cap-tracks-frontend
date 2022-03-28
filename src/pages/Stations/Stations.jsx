import { Link } from 'react-router-dom'
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
            <Link 
              to='/stationDetails'
              key={stationList.Code}
              state={{`${stationList.Station}`}}
            >
              <h3><strong>{stationList.Name}</strong></h3>
            </Link>
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
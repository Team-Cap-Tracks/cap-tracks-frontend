import { Link, useLocation } from 'react-router-dom'
import StationDetailsCard from '../../components/StationDetailsCard/StationDetailsCard'
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
              state={{stationList}}
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
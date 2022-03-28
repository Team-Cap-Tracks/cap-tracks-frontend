import { Link, useLocation } from 'react-router-dom'

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
              to='/station-details'
              key={stationList.Code}
              state={{stationList}}
            >
              <h3><strong>{stationList.Name}</strong></h3>
            </Link>
          </>
        )
      }
      )}
      
      
    </>
)
}

export default StationsList
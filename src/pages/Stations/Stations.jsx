import { Link, useLocation } from 'react-router-dom'
import styles from '../StationDetails/StationDetails'

const StationsList = (props) => {
  let location = useLocation()

  const lineName = location.state.line.line

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <h1 className={styles.station}>{capitalizeFirstLetter(lineName)} Line Stations</h1>
      {location.state.line.Stations.map(stationList => {
        return (
          <>
            <Link 
              to={`/station-details/${stationList.Code}`}
              key={stationList.Code}
              state={{stationList}}
            >
              <h3 key={stationList.Name}><strong>{stationList.Name}</strong></h3>
            </Link>
          </>
        )
      }
      )}
    </>
  )
}

export default StationsList
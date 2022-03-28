import { useLocation } from "react-router-dom";
import StationDetailsCard from '../../components/StationDetailsCard/StationDetailsCard'
import styles from './StationDetails.module.css'

const StationDetails = (props) => {
  let location = useLocation()
  console.log('stationdeets', location);
  return (
    <>
      <h1 className={styles.station}>Station Details</h1>
      <StationDetailsCard
        stationInfo={location}/>
    </>
  )
}

export default StationDetails
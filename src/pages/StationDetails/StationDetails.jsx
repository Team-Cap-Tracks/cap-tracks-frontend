import { useLocation } from "react-router-dom";
import StationDetailsCard from '../../components/StationDetailsCard/StationDetailsCard'
import styles from './StationDetails.module.css'

const StationDetails = (props) => {
  console.log(props)
  let location = useLocation()
  return (
    <>
      <h1 className={styles.station}>Station Details</h1>
      <StationDetailsCard className={styles.stationdetails}
        stationInfo={location}/>
    </>
  )
}

export default StationDetails
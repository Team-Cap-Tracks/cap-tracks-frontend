import { useLocation } from "react-router-dom";
import StationDetailsCard from '../../components/StationDetailsCard/StationDetailsCard'
import styles from './StationDetails.module.css'

const StationDetails = ({timeTables}) => {
  let location = useLocation()
  console.log(timeTables);
  return (
    <>
      <h1 className={styles.station}>Station Details</h1>
      <StationDetailsCard className={styles.stationdetails}
        stationInfo={location}/>
      <TimeTableCard />
    </>

  )
}

export default StationDetails
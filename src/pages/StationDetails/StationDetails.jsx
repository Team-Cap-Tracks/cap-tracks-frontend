import { useLocation } from "react-router-dom";
import StationDetailsCard from '../../components/StationDetailsCard/StationDetailsCard'
import TimeTable from "../../components/TimeTable/TimeTable";
import styles from './StationDetails.module.css'

const StationDetails = ({timeTables}) => {
  let location = useLocation()
  // console.log(timeTables);
  return (
    <>
      <h1 className={styles.station}>Station Details</h1>
      <StationDetailsCard className={styles.stationdetails}
        stationInfo={location}/>
      <TimeTable state={{timeTables}} />
    </>

  )
}

export default StationDetails
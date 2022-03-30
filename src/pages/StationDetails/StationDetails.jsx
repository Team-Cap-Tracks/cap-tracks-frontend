import { useEffect } from 'react'
import { useLocation, useParams } from "react-router-dom";
import StationDetailsCard from '../../components/StationDetailsCard/StationDetailsCard'
import TimeTable from "../../components/TimeTable/TimeTable";
import styles from './StationDetails.module.css'
import * as stationTimings from '../../services/TimeTables'

const StationDetails = ({timeTables}) => {
  let location = useLocation()
  let { code } = useParams()

  useEffect(() => {
    stationTimings.getAllTimes(code)
    .then(res => console.log(res)) 
  })

  return (
    <>
      <h1 className={styles.station}>Station Details</h1>
      <StationDetailsCard className={styles.stationdetails}
        stationInfo={location}/>
      <TimeTable state={{timeTables}} timeTables={timeTables} />
    </>

  )
}

export default StationDetails
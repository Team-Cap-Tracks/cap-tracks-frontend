import { useLocation } from "react-router-dom";
import StationDetailsCard from '../../components/StationDetailsCard/StationDetailsCard'

const StationDetails = (props) => {
  let location = useLocation()
  console.log('stationdeets', location);
  return (
    <>
      <h1>StationDetails</h1>
      <StationDetailsCard
        stationInfo={location}
      />
    </>
  )
}

export default StationDetails
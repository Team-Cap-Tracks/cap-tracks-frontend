const StationDetailsCard = (props) => {

  return (
    <>
      <div className="stationDetailsCard">
        <p className="stationDetails">
          {props.stationList.Address.City}
          {props.stationList.Address.State}
          {props.stationList.Address.Street}
          {props.stationList.Address.Zip}
        </p>
      </div>
    </>
  )
}

export default StationDetailsCard
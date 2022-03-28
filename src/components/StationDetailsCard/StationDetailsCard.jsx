const StationDetailsCard = (props) => {
  console.log('Card', props);

  return (
    <>
      <div className="stationDetailsCard">
        <p className="stationDetails">
          {/* {props.stationList.Address.City}
          {props.stationList.Address.State}
          {props.stationList.Address.Street}
          {props.stationList.Address.Zip} */}
          {props}
        </p>
      </div>
    </>
  )
}

export default StationDetailsCard
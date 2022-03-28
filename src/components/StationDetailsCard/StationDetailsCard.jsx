const StationDetailsCard = (props) => {
  console.log('Card', props.stationInfo.state.stationList.Name);

  return (
    <>
      <div className="stationDetailsCard">
        <p className="stationDetails">
          {props.stationInfo.state.stationList.Name}
          {props.stationInfo.state.stationList.Name}
          {props.stationInfo.state.stationList.Name}
          {props.stationInfo.state.stationList.Name}
        </p>
      </div>
    </>
  )
}

export default StationDetailsCard
const StationDetailsCard = (props) => {
  console.log('Card', props.stationInfo.state.stationList);

  return (
    <>
      <div className="stationDetailsCard">
        <p className="stationDetails">
          {props.stationInfo.state.stationList.Name}<br />
          {props.stationInfo.state.stationList.Address.City}
          {props.stationInfo.state.stationList.Address.State}
          {props.stationInfo.state.stationList.Address.Street}
          {props.stationInfo.state.stationList.Address.Zip}

        </p>
      </div>
    </>
  )
}

export default StationDetailsCard
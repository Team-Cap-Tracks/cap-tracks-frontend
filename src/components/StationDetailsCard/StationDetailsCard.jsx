const StationDetailsCard = (props) => {
  console.log('Card', props.stationInfo.state.stationList);

  return (
    <>
      <div className="stationDetailsCard">
        <p className="stationDetails">
          {props.stationInfo.state.stationList.Name}<br />
          {props.stationInfo.state.stationList.Address.City}<br />
          {props.stationInfo.state.stationList.Address.State}<br />
          {props.stationInfo.state.stationList.Address.Street}<br />
          {props.stationInfo.state.stationList.Address.Zip}<br />

        </p>
      </div>
    </>
  )
}

export default StationDetailsCard
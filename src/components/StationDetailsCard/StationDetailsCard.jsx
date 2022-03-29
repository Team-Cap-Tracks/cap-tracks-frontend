import styles from './StationDetailsCard.module.css'

const StationDetailsCard = (props) => {

  return (
    <>
    <div className={styles.stationcard}>
      <div className="stationDetailsCard">
        <p className="stationDetails">
          {props.stationInfo.state.stationList.Name}<br />
          {props.stationInfo.state.stationList.Address.City}<br />
          {props.stationInfo.state.stationList.Address.State}<br />
          {props.stationInfo.state.stationList.Address.Street}<br />
          {props.stationInfo.state.stationList.Address.Zip}<br />

        </p>
      </div>
      </div>
    </>
  )
}

export default StationDetailsCard
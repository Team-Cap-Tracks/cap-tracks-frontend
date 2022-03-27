const StationsList = (props) => {
  const { stations } = props.lines
  // console.log(lines[0].Stations[0].Name)
 return (
  <>
    <h1>Stations</h1>
    {stations.map(station => {
      return console.log(station)
    })}

  </>
)
}

export default StationsList
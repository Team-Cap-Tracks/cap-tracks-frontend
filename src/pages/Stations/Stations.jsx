const StationsList = (props) => {
  console.log(props);
  // console.log(lines[0].Stations[0].Name)
 return (
  <>
    <h1>Stations</h1>
    {/* <p>{lines[0].Stations[0].Name}</p> */}
    {props.lines.map(line => {
      return {line}
    })}
  </>
)
}

export default StationsList
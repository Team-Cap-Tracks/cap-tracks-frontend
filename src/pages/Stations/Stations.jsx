const StationsList = (props) => {
  
  // console.log(lines[0].Stations[0].Name)
 return (
  <>
    <h1>Stations</h1>
    {props.lines.map(line => {
      return {line}
    })}

  </>
)
}

export default StationsList
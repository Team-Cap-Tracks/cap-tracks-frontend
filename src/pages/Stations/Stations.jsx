const StationsList = (props) => {
 return (
  <>
    <h1>Stations</h1>
    {props.lines.map(line => {
      return (
        console.log(line.Stations)
      )
    })}

  </>
)
}

export default StationsList
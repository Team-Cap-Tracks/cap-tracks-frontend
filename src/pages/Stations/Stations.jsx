const StationsList = ({ lines }) => {
  // console.log(lines[0].Stations[0].Name)
 return (
  <>
    <h1>Stations</h1>
    <p>{lines[0].Stations[0].Name}</p>
  </>
)
}

export default StationsList
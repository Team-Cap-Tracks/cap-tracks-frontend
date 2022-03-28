const StationDetails = ({ lines }) => {
  return (
    <>
      <div className="linecard">
        <p className="line">{lines.line}</p>
      </div>
    </>
  )
}

export default StationDetails
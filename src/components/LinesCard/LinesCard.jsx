const LinesCard = (props) => {
  return (
    <>
      <div className="linecard" style={props.lines.line === 'red' ? {backgroundColor: '#f74848'} : {backgroundColor: props.lines.line}}>
        <p className="line">{props.lines.line}</p>
      </div>
    </>
  )
}

export default LinesCard
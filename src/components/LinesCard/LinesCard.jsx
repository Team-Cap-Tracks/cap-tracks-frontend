const LinesCard = (props) => {
  console.log(props);
  return (
    <>
      <div className="linecard">
        <p className="line">{props.lines.line}</p>
      </div>
    </>
  )
}

export default LinesCard
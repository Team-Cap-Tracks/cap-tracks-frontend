
const LinesCard = ({ lines }) => {
  console.log(lines);
  return (
    <>
      <div className="card">
        <p>{lines.line}</p>
      </div>
    </>
  )
}


export default LinesCard
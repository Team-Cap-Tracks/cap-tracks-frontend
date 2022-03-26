
const LinesCard = (props) => {
  console.log(props.lines);
  return (
    <>
      <div className="card">
        <p>{props.lines}</p>
      </div>
    </>
  )
}


export default LinesCard
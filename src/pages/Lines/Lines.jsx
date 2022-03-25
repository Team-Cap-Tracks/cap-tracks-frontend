const Lines = (props) => {
  console.log(props.lines);
  return (
    <>
    <h1>Lines</h1>
    {props.lines.map(line => (
      <p>{props.lines}</p>
    ))}
    </>
  )
}

export default Lines
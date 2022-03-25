const Lines = (props) => {
  console.log(props.lines[0].line);
  console.log(props);
  return (
    <>
    <h1>Lines</h1>
    {props.lines.map(line => {
      <p>{props.lines.line}</p>
    })}
    </>
  )
}

export default Lines
const Lines = (props) => {
  console.log(props.lines);

  return (
    <>
    <h1>Lines</h1>
    {props.lines.map(line => {
      return <p>{line.line}</p>
    })}
    </>
  )
}

export default Lines
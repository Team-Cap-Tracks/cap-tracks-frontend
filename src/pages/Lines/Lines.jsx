import LinesCard from "../../components/LinesCard/LinesCard";

const Lines = (props) => {
  return (
    <>
    <h1>Lines</h1>
    {props.lines.map(line => {
      return <p><LinesCard
      lines={props.lines}
       /></p>
    })}
    </>
  )
}

export default Lines
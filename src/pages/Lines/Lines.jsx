import LinesCard from "../../components/LinesCard/LinesCard";

const Lines = (props) => {
  return (
    <>
    <h1>Lines</h1>
    {props.lines.map(line => {
      return <p><LinesCard
      key={line._id}
      lines={line}
       /></p>
    })}
    </>
  )
}

export default Lines
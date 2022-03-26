import LinesCard from "../../components/LinesCard/LinesCard";

const Lines = (props) => {
  return (
    <>
    <h1>Lines</h1>
    {props.lines.map(line => {
      return <LinesCard
      key={line._id}
      lines={line}
      />
    })}
    </>
  )
}

export default Lines
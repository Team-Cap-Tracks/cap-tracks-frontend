import { Link } from 'react-router-dom'
import LinesCard from "../../components/LinesCard/LinesCard";


const Lines = (props) => {


  return (
    <>
    <h1>Lines</h1>
    {props.lines.map(line => {
      return <Link to='/stations'
      key={line._id}
      >
        <LinesCard
        lines={line}
        />
      </Link>
    })}
    </>
  )
}

export default Lines
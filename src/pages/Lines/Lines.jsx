import { Link } from 'react-router-dom'
import LinesCard from "../../components/LinesCard/LinesCard";


const Lines = ({lines}) => {
  return (
    <>
    <h1>Lines</h1>
    {lines.map(line => {
      return <Link to='/stations'
      key={line._id}
      lines={lines}
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
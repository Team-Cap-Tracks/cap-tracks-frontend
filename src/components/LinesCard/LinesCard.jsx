import styles from './LinesCard.module.css'

const LinesCard = ({ lines }) => {
  return (
    <>
      <div className="card line">
        <p>{lines.line}</p>
      </div>
    </>
  )
}

export default LinesCard
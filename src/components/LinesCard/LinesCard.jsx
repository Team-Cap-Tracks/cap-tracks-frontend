const LinesCard = ({ lines }) => {
  console.log(lines);
  return (
    <>
      <div class="linecard">
        <p class="line">{lines.line}</p>
      </div>
    </>
  )
}

export default LinesCard
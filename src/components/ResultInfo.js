
export default function ResultInfo(props) {
  const { size, total_elements, total_pages, number } = props

  return (
    <div id='result-info'>

      <ul>
        <li>Total Pages: { total_pages }</li>
        <li>Total Elements: { total_elements }</li>
        <li>Results: { size }</li>
        <li>Page Number: { number }</li>
      </ul>
    </div>
  )
}

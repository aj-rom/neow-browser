import BootstrapTable from '../Table/Table'

export default function CloseApproachTable(props) {
  function renderTableBody() {
    return props.data.map((e, idx) => {
      return (
        <tr key={idx}>
          <td>{e.close_approach_date}</td>
          <td>{e.orbiting_body}</td>
          <td>{e.relative_velocity.kilometers_per_second}</td>
          <td>{e.miss_distance.lunar}</td>
        </tr>
      )
    })
  }

  return (
    <BootstrapTable>
      <thead>
        <tr>
          <th>Date</th>
          <th>Orbiting</th>
          <th>Relative Velocity (km/s)</th>
          <th>Miss Distance (lunar)</th>
        </tr>
      </thead>
      <tbody>
        { renderTableBody() }
      </tbody>
    </BootstrapTable>
  )
}

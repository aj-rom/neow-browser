import BootstrapTable from './Table'

export default function DiameterTable(props) {
  const { feet, meters, kilometers, miles } = props.diameter

  function getMin(unit) {
    return unit.estimated_diameter_min
  }

  function getMax(unit) {
    return unit.estimated_diameter_max
  }

  return (
    <BootstrapTable>
      <thead>
        <tr>
          <th>Unit</th>
          <th>Min</th>
          <th>Max</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ft</td>
          <td>{getMin(feet)}</td>
          <td>{getMax(feet)}</td>
        </tr>
        <tr>
          <td>meters</td>
          <td>{getMin(meters)}</td>
          <td>{getMax(meters)}</td>
        </tr>
        <tr>
          <td>km</td>
          <td>{getMin(kilometers)}</td>
          <td>{getMax(kilometers)}</td>
        </tr>
        <tr>
          <td>miles</td>
          <td>{getMin(miles)}</td>
          <td>{getMax(miles)}</td>
        </tr>
      </tbody>
    </BootstrapTable>
  )
}

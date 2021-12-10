import { Table } from 'react-bootstrap'
import Scrollable from './Scrollable'

export default function BootstrapTable(props) {
  return (
    <Scrollable>
      <Table striped hover>{ props.children }</Table>
    </Scrollable>
  )
}

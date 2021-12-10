import { Table } from 'react-bootstrap'

export default function BootstrapTable(props) {
  return <Table striped hover>{ props.children }</Table>
}
